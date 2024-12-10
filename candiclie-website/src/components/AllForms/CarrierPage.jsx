import React, { useState, useEffect } from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
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
        'industry': null,
        'position': null,
        'experience': null,
        'relevantExperience': null,
        'currentCompany': null,
        'noticePeriod': null,
        'resume': null,
        'visit': null,
        'purpose': null,
        'about': null,
        'agreement': null
    }
)
function CarrierPage() {

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
            const res = await axios.post('http://localhost:5000/api/users', { ...formData, id: uniqueId });

            if (res.status === 200) {
                const formDataForFile = new FormData();
                formDataForFile.append('resume', formData.resume);

                const uploadResponse = await axios.post(`http://localhost:5000/api/upload-file/${uniqueId}`, formDataForFile, {
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
                <div className='col-md-6 col-sm-12 left-parent' >
                    <LeftPanel step={step} formData={formData} setFormData={setFormData} />
                </div>

                <div className='col-md-6 col-sm-12 right-parent' style={{ width: '49%' }}>
                    <RightPanel nextStep={nextStep} prevStep={prevStep} step={step} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
                </div>
            </div>

            <div className='row mobile-view'>
                {
                    !mobileViewShowForm ?
                        <div className='col-md-6 col-sm-12 left-parent'>
                            <LeftPanel step={step} setStep={setStep} nextStep={nextStep} formData={formData} setFormData={setFormData} mobileViewHandleNext={showFormOnClick} />
                        </div>
                        : <div className='col-md-6 col-sm-12 right-parent'>
                            <RightPanel nextStep={nextStep} prevStep={prevStep} step={step} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
                        </div>
                }
            </div>
        </div>
    )
}

export default CarrierPage