import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PartnershipRightPanel from './PartnershipRightPanel';
import PartnershipLeftPanel from './PartnershipLeftPanel';

const DefaultFormData = () => (
    {
        'firstName': null,
        'lastName': null,
        'gender': null,
        'location': null,
        'phoneNumber': null,
        'email': null,
        'company': null,
        'industry': null,
        'partnershipType': null,
        'currentWork': null,
        'organization': null,
        'position': null,
        'POCemail': null,
        'reason': null,
        'description': null,
        'visit': null,
        'about': null,
        'agreement': null
    }
)
function PartnershipPage() {

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
            const res = await axios.post('http://localhost:5000/api/partnership_users', formData);
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
                    <PartnershipLeftPanel step={step} formData={formData} setFormData={setFormData} />
                </div>
                <div className='col-md-6 col-sm-12 right-parent'>
                    <PartnershipRightPanel nextStep={nextStep} prevStep={prevStep} step={step} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
                </div>
            </div>
            <div className='row mobile-view'>
                {
                    !mobileViewShowForm ?
                        <div className='col-md-6 col-sm-12 left-parent'>
                            <PartnershipLeftPanel step={step} setStep={setStep} nextStep={nextStep} formData={formData} setFormData={setFormData} mobileViewHandleNext={showFormOnClick} />
                        </div>
                        : <div className='col-md-6 col-sm-12 right-parent'>
                            <PartnershipRightPanel nextStep={nextStep} prevStep={prevStep} step={step} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
                        </div>
                }
            </div>
        </div>
    )
}

export default PartnershipPage