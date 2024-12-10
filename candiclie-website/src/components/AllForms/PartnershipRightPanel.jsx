import React, { useRef, useState } from 'react';
import FeedbackForm from './FeedbackForm';
import ThankuPage from './ThankuPage';
import * as Yup from 'yup';
import './All.css';



const Step1Schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    gender: Yup.string().required('Gender is required'),
    location: Yup.string().required('Location is required'),
    phoneNumber: Yup.string()
        .matches(/^\d{10}$/, 'Phone Number must be exactly 10 digits')
        .required('Phone Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    visit: Yup.string().required('About is required'),
});

const Step2Schema = Yup.object().shape({
    company: Yup.string().required('Company is required'),
    industry: Yup.string().required('Industry is required'),
    partnershipType: Yup.string().required('Partnership type is required'),
    currentWork: Yup.string().required('Current work is required'),

    organization: Yup.lazy((value, context) => {
        if (context.parent.currentWork === 'yes') {
            return Yup.string().required('Organization is required');
        }
        return Yup.mixed().notRequired();
    }),

    position: Yup.lazy((value, context) => {
        if (context.parent.currentWork === 'yes') {
            return Yup.string().required('Position is required');
        }
        return Yup.mixed().notRequired();
    }),

    POCemail: Yup.string().email('Invalid email').required('Email is required'),
    reason: Yup.string().required('Reason is required'),
    description: Yup.string().required('Description is required'),
    purpose: Yup.string().required('Purpose is required'),
});


const Step3Schema = Yup.object().shape({
    aggreement: Yup.string().required('Selected the aggreement checkbox'),
    about: Yup.string().required('About is required'),
});

const Step1 = ({ nextStep, formData, setFormData }) => {
    const [currentError, setCurrentError] = useState({});
    const formRef = useRef(null);
    const validateForm = (data) => {
        return Step1Schema
            .validate(data, { abortEarly: false })
            .then((responseData) => {
                console.log('no validation errors');
                console.log(responseData);
                setCurrentError({})
                return true;
            })

            .catch((err) => {
                let errorObj = {};
                err.inner.forEach((error) => {
                    console.log(error.path, error.errors);
                    errorObj[error.path] = error.errors;
                });
                setCurrentError(errorObj);
                return false;
            });

    }

    const handleNext = async (event) => {
        event.preventDefault();
        try {
            const newFormData = new FormData(formRef.current);

            const formObject = Object.fromEntries(newFormData.entries());
            const isValid = await validateForm({ ...formData, ...formObject });
            console.log(isValid);
            if (!isValid) {
                return false;
            }
            setFormData({ ...formData, ...formObject })
            nextStep();
        }
        catch (err) {
            console.error(err);
            return false;
        }
    }



    return <> <div>

        <div className=" right-panel">
            <h3>Partnership Personal Information</h3>
            <form ref={formRef} id="step1-form">
                <div className='row'>
                    <div className='col-sm-6 form-padding-y'>
                        <label>First Name</label>
                        <input className='form-control' type="text" placeholder="First Name" defaultValue={formData?.firstName} name="firstName" />
                        {currentError?.firstName && <span className='warning'>{currentError?.firstName}</span>}
                    </div>
                    <div className='col-sm-6 form-padding-y'>
                        <label>Last Name</label>
                        <input className='form-control' type="text" placeholder="Last Name" defaultValue={formData?.lastName} name="lastName" />
                        {currentError?.lastName && <span className='warning'>{currentError?.lastName}</span>}
                    </div>
                </div>
                <div className='row' >
                    <div className='col-sm-6 form-padding-y'>
                        <label>Gender</label>
                        <select className='form-control' defaultValue={formData?.gender} name="gender">
                            <option value='' > Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        {currentError?.gender && <span className='warning'>{currentError?.gender}</span>}
                    </div>
                    <div className='col-sm-6 form-padding-y'>
                        <label>Location</label>
                        <input className='form-control' type="text" placeholder="Location" defaultValue={formData?.location} name="location" />
                        {currentError?.location && <span className='warning'>{currentError?.location}</span>}
                    </div>
                </div>
                <div className='row' >
                    <div className='col-sm-6 form-padding-y'>
                        <label>Phone Number</label>
                        <input className='form-control' type="text" placeholder="Phone Number" defaultValue={formData?.phoneNumber} name="phoneNumber" />
                        {currentError?.phoneNumber && <span className='warning'>{currentError?.phoneNumber}</span>}
                    </div>
                    <div className='col-sm-6 form-padding-y'>
                        <label>Email Address</label>
                        <input className='form-control' type="email" placeholder="Email Address" defaultValue={formData?.email} name="email" />
                        {currentError?.email && <span className='warning'>{currentError?.email}</span>}
                    </div>
                </div>
                <div>{Object.keys(currentError).length > 0 && <span className='span-text'>Please Enter all details from left and right sections of the page.</span>}</div>
                <div className='d-flex justify-content-center'>
                    <button className="next-btn col-sm-2 m-auto" onClick={(event) => {
                        handleNext(event)
                    }}>Next</button>
                </div>
            </form>
        </div>

    </div>
    </>
};

const Step2 = ({ prevStep, nextStep, formData, setFormData }) => {

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [currentError, setCurrentError] = useState({});
    const formRef = useRef(null);
    const validateForm = async (data) => {
        try {
            const responseData = await Step2Schema
                .validate(data, { abortEarly: false });
            console.log('no validation errors');
            console.log(responseData);
            setCurrentError({});
            return true;
        } catch (err) {
            let errorObj = {};
            err.inner.forEach((error) => {
                console.log(error.path, error.errors);
                errorObj[error.path] = error.errors;
            });
            setCurrentError(errorObj);
            return false;
        }

    }

    const handleNext = async (event) => {
        event.preventDefault();
        try {
            const newFormData = new FormData(formRef.current);

            const formObject = Object.fromEntries(newFormData.entries());
            const isValid = await validateForm({ ...formData, ...formObject });
            console.log(isValid);
            if (!isValid) {
                return false;
            }
            setFormData({ ...formData, ...formObject })
            nextStep();
        }
        catch (err) {
            console.error(err);
            return false;
        }
    }

    const [showFields, setShowFields] = useState(false);

    const handleRadioChange = (e) => {
        if (e.target.value === "yes") {
            setShowFields(true);
        } else {
            setShowFields(false);
        }
    };

    return <>
        <div>


            <div className=" right-panel">
                <h3>Partnership Related Information</h3>
                <form ref={formRef} id="step2-form">
                    <div className='row'>

                        <div className='col-6 form-padding-y'>
                            <label className='company-label'>Company Name / Individual</label>
                            <text className='company-content'>(please write the name of company in case if you are choosing that)</text>
                            <input className='form-control' type="text" placeholder="Company" defaultValue={formData?.company} name="company" />
                            {currentError?.company && <span className='warning'>{currentError?.company}</span>}

                        </div>

                        <div className='col-6 form-padding-y'>
                            <label>Industry (You're Looking For)</label>
                            <input className='form-control' type="text" placeholder="Industry" defaultValue={formData?.industry} name="industry" />
                            {currentError?.industry && <span className='warning'>{currentError?.industry}</span>}

                        </div>
                    </div>
                    <div className='row' >

                        <div className='col-6 form-padding-y'>
                            <label>Choose Partnership</label>
                            <select defaultValue={formData?.partnershipType} name="partnershipType">
                                <option value='' > Select option</option>
                                <option>Equity</option>
                                <option>Solution</option>
                                <option>referral</option>
                                <option>Affiliate</option>
                            </select>
                            {currentError?.partnershipType && <span className='warning'>{currentError?.partnershipType}</span>}
                        </div>

                        <div className='col-6 form-padding-y'>
                            <label>POC Mail ID</label>
                            <input className='form-control' type="email" placeholder="POC email" defaultValue={formData?.POCemail} name="POCemail" />
                            {currentError?.POCemail && <span className='warning'>{currentError?.POCemail}</span>}
                        </div>


                    </div>
                    <div className='col-12' style={{ marginBottom: '5px', marginLeft: '25px' }}>

                        <label>Currently You are working?</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value={"yes"} name="currentWork" id="currentWork" onChange={handleRadioChange} />
                            <label class="form-check-label" for="currentWork"
                            >
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value={'no'} name="currentWork" id="currentWork" onChange={handleRadioChange} />
                            <label class="form-check-label" for="currentWork"
                            >
                                No
                            </label>
                        </div>

                        {showFields && (
                            <div className="extra-fields row ">
                                <div className='col-6 form-padding-y extra-option'>
                                    <label htmlFor="organization">Organisation</label>
                                    <input type="text" id="organization" defaultValue={formData?.organization} name="organization" placeholder="Enter your organization" style={{ width: '92%' }} />

                                </div>
                                <div className='col-6 form-padding-y extra-option'>
                                    <label htmlFor="position">Your Current Position</label>
                                    <input type="text" id="position" defaultValue={formData?.position} name="position" placeholder="Enter your current position" style={{ width: '92%' }} />


                                </div>
                            </div>
                        )}
                        {currentError?.currentWork && <span className='warning'>{currentError?.currentWork}</span>}
                    </div>


                    <div className='col-11 description'>
                        <label>Reason to choose CandiClie</label>
                        <textarea
                            className='textarea'
                            rows={3}
                            placeholder="Short description about requirment"
                            value={formData.reason}
                            onChange={(e) => handleInputChange('reason', e.target.value)}
                        ></textarea>
                    </div>

                    <div className='col-11 description'>
                        <label>Description</label>
                        <textarea
                            className='textarea'
                            rows={3}
                            placeholder="Short description about requirment"
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                        ></textarea>
                    </div>


                    <div>{Object.keys(currentError).length > 0 && <span className='span-text'>Please Enter all details from left and right sections of the page.</span>}</div>

                    <div className='d-flex justify-content-center'>
                        <button className="next-btn col-2 m-4" onClick={prevStep}>Back</button>
                        <button type='button' className="next-btn col-2 m-4" onClick={(event) => {
                            handleNext(event)
                        }}>Next</button>
                    </div>
                </form>
            </div>

        </div>

    </>
}

const Step3 = ({ prevStep, nextStep, formData, setFormData, handleSubmit }) => {
    const [currentError, setCurrentError] = useState({});
    const formRef = useRef(null);
    const validateForm = async (data) => {
        try {
            const responseData = await Step3Schema
                .validate(data, { abortEarly: false });
            return true;
        } catch (err) {
            let errorObj = {};
            err.inner.forEach((error) => {
                console.log(error.path, error.errors);
                errorObj[error.path] = error.errors;
            });
            setCurrentError(errorObj);
            return false;
        }

    }

    const handleNext = async (event) => {
        event.preventDefault();
        try {
            const newFormData = new FormData(formRef.current);

            const formObject = Object.fromEntries(newFormData.entries());
            const isValid = await validateForm({ ...formData, ...formObject });

            console.log("current", currentError)
            if (!isValid) {
                return false;
            }
            setFormData({ ...formData, ...formObject })
            await handleSubmit(event)
            nextStep();
        }
        catch (err) {
            console.error(err);
            return false;
        }
    }

    return <>
        <div>
            <div className='container '>
                <div className=' col-lg-12   review'>
                    <h4 className="mb-4 heading">Take A Look</h4>
                    <div className='row'>
                        <div className='col-12'>
                            <h5>Step 1: Personal Information</h5>
                            <table className="table borderless">
                                <tbody>
                                    <tr>
                                        <td>First Name:</td>
                                        <td>{formData?.firstName}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name:</td>
                                        <td>{formData?.lastName}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender:</td>
                                        <td>{formData?.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Location:</td>
                                        <td>{formData?.location}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number:</td>
                                        <td>{formData?.phoneNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Email Address:</td>
                                        <td>{formData?.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className='col-12'>
                            <h5>Step 2: Partnership Related Information</h5>
                            <table className="table borderless">
                                <tbody>
                                    <tr>
                                        <td>Company Name:</td>
                                        <td>{formData?.company}</td>
                                    </tr>
                                    <tr>
                                        <td>Industry (You're Looking For):</td>
                                        <td>{formData?.industry}</td>
                                    </tr>
                                    <tr>
                                        <td>Partnership:</td>
                                        <td>{formData?.partnershipType}</td>
                                    </tr>
                                    <tr>
                                        <td>Currently Working:</td>
                                        <td>{formData?.currentWork}</td>
                                    </tr>
                                    <tr>
                                        <td>organization:</td>
                                        <td>{formData?.organization}</td>
                                    </tr>
                                    <tr>
                                        <td>Position:</td>
                                        <td>{formData?.position}</td>
                                    </tr>
                                    <tr>
                                        <td>POC mail ID:</td>
                                        <td>{formData?.POCemail}</td>
                                    </tr>
                                    <tr>
                                        <td>Reason:</td>
                                        <td>{formData?.reason}</td>
                                    </tr>
                                    <tr>
                                        <td>Description:</td>
                                        <td>{formData?.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <div className='agreement'>
                    <div className="row mt-4">
                        <div>
                            <form ref={formRef}>
                                <input
                                    type="checkbox"
                                    className='checkbox'
                                    id='aggreement'
                                    name="aggreement"
                                />
                                <label for="agreement" style={{ display: "contents" }}>
                                    I have read and agree to the{' '}
                                    <a href="/privacy-policy">privacy policy</a> of the company.
                                </label>
                            </form>
                        </div>
                        {currentError?.aggreement && <span className='text-danger'>{currentError?.aggreement}</span>}
                    </div>

                    <div>{Object.keys(currentError).length > 0 && <span className='span-text text-danger'>Please Enter all details from left and right sections of the page.</span>}</div>

                    <div className="d-flex justify-content-center">
                        <button className='next-btn col-2 m-4' onClick={prevStep}>Back</button>
                        <button className='next-btn col-2 m-4' onClick={async (event) => {
                            handleNext(event);
                        }}>Submit</button>
                    </div>
                </div>
            </div>

        </div>

    </>
}


const ProgressBar = ({ step }) => {


    return (
        <div className='container'>
            <div className="stepper-container">

                <div className={`progress-line curve ${step >= 1 ? 'active' : ''}`}></div>
                <div className={`step ${step >= 1 ? 'active' : ''}`}><span className="stepper">1</span>
                </div>
                <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}><span className="stepper">2</span></div>
                <div className={`progress-line ${step >= 3 ? 'active' : ''}`}></div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}><span className="stepper">3</span></div>
            </div>

        </div>

    );
};


const PartnershipRightPanel = ({ nextStep, prevStep, step, formData, setFormData, handleSubmit }) => {
    const renderStep = () => {
        console.log(step)
        switch (step) {
            case 1:
                return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />;
            case 2:
                return <Step2 prevStep={prevStep} nextStep={nextStep} formData={formData} setFormData={setFormData} />;
            case 3:
                return <Step3 prevStep={prevStep} nextStep={nextStep} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;
            case 4:
                return <FeedbackForm nextPage={nextStep} />
            case 5:
                return <ThankuPage />
            default:
                return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div className="container ">
            {step < 4 && <ProgressBar step={step} />}
            {renderStep()}
        </div>
    );

};

export default PartnershipRightPanel;

