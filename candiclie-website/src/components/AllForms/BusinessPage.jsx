import React, { useState, useEffect } from 'react'
import BusinessLeftPanel from './BusinessLeftPanel'
import BusinessRightPanel from './BusinessRightPanel'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const DefaultFormData = () => (
    {
        'firstName': null,
        'lastName': null,
        'gender': null,
        'location': null,
        'phoneNumber': null,
        'emailAddress': null,
        'company': null,
        'service': null,
        'industry': null,
        'position': null,
        'email': null,
        'timeline': null,
        'description': null,
        'resume': null,
        'about': null,
        'about2': null,
        'agreement': null
    }
)
function BusinessPage() {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(DefaultFormData());
    const [mobileViewShowForm, setMobileviewShowForm] = useState(false);

    useEffect(() => {
        console.log(window.innerWidth)
    }, [window.innerWidth])

    const showFormOnClick = () => {
        setMobileviewShowForm(true);
    }


    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const uniqueId = uuidv4().toString();
            const res = await axios.post('http://localhost:5000/api/business_users', { ...formData, id: uniqueId });

            if (res.status === 200) {
                const formDataForFile = new FormData();
                formDataForFile.append('resume', formData.resume);

                const uploadResponse = await axios.post(`http://localhost:5000/api/uploadBusinessFile/${uniqueId}`, formDataForFile, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('File uploaded successfully:', uploadResponse.data);
            }

            alert('Data submitted successfully!');
        } catch (err) {
            console.error(err);
            alert('Error submitting data');
        }
    };
    return (
        <div>
            <div className='row laptop-view' style={{ marginLeft: '0px', marginRight: '0px' }}>
                <div className='col-md-6 col-sm-12 left-parent'>
                    <BusinessLeftPanel step={step} formData={formData} setFormData={setFormData} />
                </div>
                <div className='col-md-6 col-sm-12 right-parent'>
                    <BusinessRightPanel nextStep={nextStep} prevStep={prevStep} step={step} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
                </div>
            </div>
            <div className='row mobile-view'>
                {
                    !mobileViewShowForm ?
                        <div className='col-md-6 col-sm-12 left-parent'>
                            <BusinessLeftPanel step={step} setStep={setStep} nextStep={nextStep} formData={formData} setFormData={setFormData} mobileViewHandleNext={showFormOnClick} />
                        </div>
                        : <div className='col-md-6 col-sm-12 right-parent'>
                            <BusinessRightPanel nextStep={nextStep} prevStep={prevStep} step={step} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
                        </div>
                }
            </div>
        </div>
    )
}

export default BusinessPage