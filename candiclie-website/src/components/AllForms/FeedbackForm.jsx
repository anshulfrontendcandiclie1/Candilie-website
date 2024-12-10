import React, { useState } from 'react';
import './All.css';
import axios from 'axios';

const FeedbackForm = ({ nextPage }) => {
    const [formData, setFormData] = useState({
        appliedBefore: null,
        gotCall: null,
        selected: null,
        experience: '',
        suggestions: ''
    });

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/feedback', formData);
            nextPage()
        } catch (err) {
            console.error(err);
            alert('Error submitting data');
        }
    };

    return (
        <div className="feedback-form-container container">
            <h4 className="mb-4 feedback-head" >Feedback form</h4>
            <div className="mb-3 row">
                <div className='col-12'>
                    <label className='feedback-heading'>1. Have you applied before for any job in Candiclie?</label>
                    <div className="btn-group " style={{ marginTop: '10px' }} >
                        <button className={formData.appliedBefore === 1 ? 'btn btn-success' : 'btn btn-outline-success '} onClick={() => handleInputChange('appliedBefore', 1)} style={{ background: '#00c04b', color: 'white', border: '0px' }}>Yes</button>
                        <button className={formData.appliedBefore === 0 ? 'btn btn-danger' : 'btn btn-outline-danger'} onClick={() => handleInputChange('appliedBefore', 0)} style={{ background: '#ff9933', color: 'white', border: '0px' }}>No</button>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className='col-12'>
                    <label className='feedback-heading'>2. Did you get a call from us?</label>
                    <div className="btn-group" style={{ marginTop: '10px' }}>
                        <button className={formData.gotCall === 1 ? 'btn btn-success' : 'btn btn-outline-success'} onClick={() => handleInputChange('gotCall', 1)} style={{ background: '#00c04b', color: 'white', border: '0px' }}>Yes</button>
                        <button className={formData.gotCall === 0 ? 'btn btn-danger' : 'btn btn-outline-danger'} onClick={() => handleInputChange('gotCall', 0)} style={{ background: '#ff9933', color: 'white', border: '0px' }}>No</button>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className='col-12'>
                    <label className='feedback-heading'>3. Are you selected?</label>
                    <div className="btn-group" style={{ marginTop: '10px' }}>
                        <button className={formData.selected === 1 ? 'btn btn-success' : 'btn btn-outline-success'} onClick={() => handleInputChange('selected', 1)} style={{ background: '#00c04b', color: 'white', border: '0px' }}>Yes</button>
                        <button className={formData.selected === 0 ? 'btn btn-danger' : 'btn btn-outline-danger'} onClick={() => handleInputChange('selected', 0)} style={{ background: '#ff9933', color: 'white', border: '0px' }}>No</button>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className='col-12'>
                    <label className='feedback-heading'>4. How was the experience with Candiclie?</label>
                    <div className="btn-group" style={{ marginTop: '10px' }}>
                        <button className={formData.experience === 'good' ? 'btn btn-success' : 'btn btn-outline-success'} onClick={() => handleInputChange('experience', 'good')} style={{ background: '#00c04b', color: 'black', border: '0px' }}>Good</button>
                        <button className={formData.experience === 'average' ? 'btn btn-warning' : 'btn btn-outline-warning'} onClick={() => handleInputChange('experience', 'average')}
                            style={{ background: '#83f285', color: 'black', border: '0px' }}>Average</button>
                        <button className={formData.experience === 'below-average' ? 'btn btn-warning' : 'btn btn-outline-warning'} onClick={() => handleInputChange('experience', 'below-average')} style={{ background: '#FFB6C1', color: 'black', border: '0px', width: '7.9rem' }}>Below Average</button>
                        <button className={formData.experience === 'bad' ? 'btn btn-danger' : 'btn btn-outline-danger'} onClick={() => handleInputChange('experience', 'bad')} style={{ background: 'red', color: 'black' }}>Bad</button>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className='col-12'>
                    <label className='feedback-heading'>5. Any suggestion you would like to give us?</label>
                    <textarea
                        className=' feedback-textarea'
                        rows={3}
                        placeholder="Enter your suggestions"
                        value={formData.suggestions}
                        onChange={(e) => handleInputChange('suggestions', e.target.value)}
                        style={{ marginTop: '10px' }}
                    ></textarea>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12 text-end">
                    <button className="btn next-btn feedback-next-btn " type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm;