import React, { useState } from 'react';
import './All.css';
import candiclie from "./assets/candiclie_logo.png";

const Step1 = ({ nextStep, formData, setFormData, selectedOption, setSelectedOption }) => (
    <div className='visit'>
        <div className='leftPanel-head'>
            <h4 className="larg-heading">Have you visited CandiClie before?</h4>
            <text className='sub-text'>Let's connect & unlock your growth potential!</text><br />
            <text className='sub-text'>#allsolutionatoneplace #businessSolutions</text>
        </div>

        <div className="row justify-content-center left-panel-button-input">
            <button
                className={`option-btn ${selectedOption === "fewTime" ? 'selected' : ''}`}
                onClick={() => {
                    setFormData({ ...formData, visit: "fewTime" });
                    setSelectedOption("fewTime");
                    if (nextStep) {
                        nextStep();
                    }
                }} style={{ padding: '10px 30px' }}
            >
                Yes
            </button>

            <button
                className={`option-btn ${selectedOption === "firstTime" ? 'selected' : ''}`}
                onClick={() => {
                    setFormData({ ...formData, visit: "firstTime" });
                    setSelectedOption("firstTime");
                    if (nextStep) {
                        nextStep();
                    }
                }} style={{ padding: '10px 30px' }}
            >
                No
            </button>
        </div>
    </div>
);

const Step2 = ({ nextStep, formData, setFormData, selectedOption, setSelectedOption }) => (
    <div className='purpose'>
        <div className='leftPanel-head'>
            <h4 className="larg-heading">Purpose of choosing CandiClie</h4>
            <text className='sub-text'>Let's connect & unlock your growth potential!</text><br />
            <text className='sub-text'>#allsolutionatoneplace #businessSolutions</text>
        </div>

        <div className=" row justify-content-center left-panel-button-input button-group purpose-button">
            <button
                className={`option-btn ${selectedOption === "Internship" ? 'selected' : ''}`}
                onClick={() => {
                    setFormData({ ...formData, purpose: "Internship" });
                    setSelectedOption("Internship");
                    nextStep && nextStep()
                }}
            >
                Business Colaboration
            </button>
            <button
                className={`option-btn ${selectedOption === "Job" ? 'selected' : ''}`}
                onClick={() => {
                    setFormData({ ...formData, purpose: "Job" });
                    setSelectedOption("Job");
                    if (nextStep) {
                        nextStep();
                    }
                }}
            >
                Market Analysis
            </button>
            <button
                className={`option-btn ${selectedOption === "Skill Upgradation" ? 'selected' : ''}`}
                onClick={() => {
                    setFormData({ ...formData, purpose: "Skill Upgradation" });
                    setSelectedOption("Skill Upgradation");
                    if (nextStep) {
                        nextStep();
                    }
                }}
            >
                Skill Upgradation
            </button>
        </div>
    </div>
);

const Step3 = ({ resetStep, formData, setFormData, selectedOption, setSelectedOption, mobileViewHandleNext }) => (
    <div className='visit'>
        <div className='leftPanel-head'>
            <h1 className="larg-heading">How You Get To Know About CandiClie?</h1>
            <text className='sub-text'>Let's connect & unlock your growth potential!</text><br />
            <text className='sub-text'>#allsolutionatoneplace #businessSolutions</text>
        </div>

        <div className="justify-content-center left-panel-button-input" >
            <button
                className={`option-btn ${selectedOption === "web" ? 'selected' : ''}`}
                onClick={() => {
                    setFormData({ ...formData, about: "web" });
                    setSelectedOption("web");
                    if (resetStep) {
                        resetStep();
                    }
                }}
            >
                Web
            </button>
            <button
                className={`option-btn ${selectedOption === "webBrowsing" ? 'selected' : ''}`}
                onClick={() => {
                    setFormData({ ...formData, about: "webBrowsing" });
                    setSelectedOption("webBrowsing");
                    if (resetStep) {
                        resetStep();
                    }
                }}
            >
                Web Browsing
            </button>
            <button
                className={`option-btn ${selectedOption === "Suggest" ? 'selected' : ''}`}
                onClick={() => {
                    setFormData({ ...formData, about: "Suggest" });
                    setSelectedOption("Suggest");
                    if (resetStep) {
                        resetStep();
                    }
                }}
            >
                Someone Suggest
            </button>
        </div>

    </div>
);

const Step4 = () => (
    <div>
        <h4 className="larg-heading">Thanks For Showing Interest</h4>
        <text className='sub-text'>Let's connect & unlock your growth potential!</text><br />
        <text className='sub-text'>#allsolutionatoneplace #businessSolutions</text>
    </div>
);

const PartnershipLeftPanel = ({ step, setStep, nextStep, formData, setFormData, mobileViewHandleNext }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />;
            case 2:
                return <Step2 nextStep={nextStep} formData={formData} setFormData={setFormData} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />;
            case 3:
                return <Step3 resetStep={setStep ? () => {
                    setStep(1);
                    if (mobileViewHandleNext) {
                        mobileViewHandleNext();
                    }
                } : undefined} formData={formData} setFormData={setFormData} selectedOption={selectedOption} setSelectedOption={setSelectedOption} mobileViewHandleNext={mobileViewHandleNext} />;
            case 4:
            case 5:
                return <Step4 />;
            default:
                return <Step1 formData={formData} setFormData={setFormData} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />;
        }
    };

    return (
        <div className="left-panel">
            <div className="col-sm-12 hero-image-div">
                <img src={candiclie} alt="CandiClie" className="hero-image" />
            </div>
            {renderStep()}
        </div>
    );
};

export default PartnershipLeftPanel;
