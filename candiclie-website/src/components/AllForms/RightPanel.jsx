import React, { useRef, useState } from 'react';
import FeedbackForm from './FeedbackForm';
import FileUpload from './FileUpload';
import ThankuPage from './ThankuPage';
import * as Yup from 'yup';
import './All.css';
import ConnectNow from './ConnectNow';



const Step1Schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    gender: Yup.string().required('Gender is required'),
    location: Yup.string().required('Location is required'),
    phoneNumber: Yup.string()
        .matches(/^\d{10}$/, 'Phone Number must be exactly 10 digits')
        .required('Phone Number is required'),
    emailAddress: Yup.string().email('Invalid email').required('Email is required'),
    visit: Yup.string().required('visit is required'),
});

const Step2Schema = Yup.object().shape({
    industry: Yup.string().required('Industry is required'),
    position: Yup.string().required('Position is required'),
    experience: Yup.string().required('Experience is required'),
    relevantExperience: Yup.string().required('Relevant Experience is required'),
    currentCompany: Yup.string().required('Current Company is required'),
    noticePeriod: Yup.string().required('Notice Period is required'),
    resume: Yup.mixed().required('Resume is required'),
    purpose: Yup.string().required('purpose is required'),
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



    return <div className="right-panel">
        <h3>Career Personal Information</h3>
        <form ref={formRef} id="step1-form">
            <div className='row'>
                <div className='col-sm-6 form-padding-y'>
                    <label>First Name</label>
                    <input
                        className='form-control'
                        type="text"
                        placeholder="First Name"
                        defaultValue={formData?.firstName}
                        name="firstName" />
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
                    <select className='form-control select-gender' defaultValue={formData?.gender} name="gender" >
                        <option value='' className='select-gender' > Select Gender</option>
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
                    <input className='form-control' type="email" placeholder="Email Address" defaultValue={formData?.emailAddress} name="emailAddress" />
                    {currentError?.emailAddress && <span className='warning'>{currentError?.emailAddress}</span>}
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

    return <div className="right-panel">
        <h3>Job Related Information</h3>
        <form ref={formRef} id="step2-form">
            <div className='row '>
                <div className='col-6 form-padding-y'>
                    <label>Industry (You're Looking For)</label>
                    <input className='form-control' type="text" placeholder="Industry" defaultValue={formData?.industry} name="industry" />
                    {currentError?.industry && <span className='warning'>{currentError?.industry}</span>}

                </div>
                <div className='col-6 form-padding-y'>
                    <label>Position</label>
                    <input className='form-control' type="text" placeholder="Position" defaultValue={formData?.position} name="position" />
                    {currentError?.position && <span className='warning'>{currentError?.position}</span>}

                </div>
            </div>
            <div className='row ' >
                <div className='col-6 form-padding-y'>
                    <label>Experience</label>
                    <input className='form-control' type="number" placeholder="Experience" defaultValue={formData?.experience} name="experience" />
                    {currentError?.phoneNumber && <span className='warning'>{currentError?.phoneNumber}</span>}

                </div>
                <div className='col-sm-6 form-padding-y'>
                    <label>Relevant Experience</label>
                    <input className='form-control' type="number" placeholder="Relevant Experience" defaultValue={formData?.relevantExperience} name="relevantExperience" />
                    {currentError?.relevantExperience && <span className='warning'>{currentError?.relevantExperience}</span>}

                </div>
            </div>
            <div className='row ' >
                <div className='col-sm-6 form-padding-y'>
                    <label>Current Company</label>
                    <input className='form-control' type="text" placeholder="Current Company" defaultValue={formData?.currentCompany} name="currentCompany" />
                    {currentError?.currentCompany && <span className='warning'>{currentError?.currentCompany}</span>}

                </div>
                <div className='col-sm-6 form-padding-y'>
                    <label>Notice Period</label>
                    <input className='form-control' type="text" placeholder="Notice Period" defaultValue={formData?.noticePeriod} name="noticePeriod" />
                    {currentError?.noticePeriod && <span className='warning'>{currentError?.noticePeriod}</span>}

                </div>
            </div>
            <div className='col-sm-12 upload-file' style={{ paddingLeft: '4px' }} >
                <FileUpload onChange={(file) => {
                    setFormData({ ...formData, resume: file })
                }} />
                {currentError?.resume && <span className='warning'>{currentError?.resume}</span>}

            </div>
            <div>{Object.keys(currentError).length > 0 && <span className='span-text'>Please Enter all details from left and right sections of the page.</span>}</div>

            <div className='d-flex justify-content-center'>
                <button className="next-btn col-2 m-2" onClick={prevStep}>Back</button>
                <button type='button' className="next-btn col-2 m-4" onClick={(event) => {
                    handleNext(event)
                }}>Next</button>
            </div>
        </form>
    </div>
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

    return <div className='container '>
        <div className=' review'>
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
                                <td>{formData?.emailAddress}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row mt-4">
                <div className='col-12'>
                    <h5>Step 2: Job Related Information</h5>
                    <table className="table borderless" >
                        <tbody>
                            <tr>
                                <td>Industry (You're Looking For):</td>
                                <td>{formData?.industry}</td>
                            </tr>
                            <tr>
                                <td>Position:</td>
                                <td>{formData?.position}</td>
                            </tr>
                            <tr>
                                <td>Experience:</td>
                                <td>{formData?.experience}</td>
                            </tr>
                            <tr>
                                <td>Relevant Experience:</td>
                                <td>{formData?.relevantExperience}</td>
                            </tr>
                            <tr>
                                <td>Current Company:</td>
                                <td>{formData?.currentCompany}</td>
                            </tr>
                            <tr>
                                <td>Notice Period (In Case):</td>
                                <td>{formData?.noticePeriod}</td>
                            </tr>
                            <tr>
                                <td>Resume:</td>
                                <td>{formData?.resume?.name}</td>
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
}


const ProgressBar = ({ step }) => {


    return (
        <div className='container'>
            <div className="stepper-container">
                <div className={`progress-line curve ${step >= 1 ? 'active' : ''}`}></div>
                <div className={`step ${step >= 1 ? 'active' : ''}`}><span className="stepper">1</span></div>
                <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}><span className="stepper">2</span></div>
                <div className={`progress-line ${step >= 3 ? 'active' : ''}`} ></div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}><span className="stepper">3</span></div>
            </div>
        </div>

    );
};


const RightPanel = ({ nextStep, prevStep, step, formData, setFormData, handleSubmit }) => {
    const renderStep = () => {
        console.log(step)
        switch (step) {
            case 1:
                return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />;
            // return <ThankuPage />
            case 2:
                return <Step2 prevStep={prevStep} nextStep={nextStep} formData={formData} setFormData={setFormData} />;
            case 3:
                return <Step3 prevStep={prevStep} nextStep={nextStep} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;
            case 4:
                return <FeedbackForm nextPage={nextStep} />
            case 5:
                return <ThankuPage />
            // case 6:
            //     return <ConnectNow />
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

export default RightPanel;

