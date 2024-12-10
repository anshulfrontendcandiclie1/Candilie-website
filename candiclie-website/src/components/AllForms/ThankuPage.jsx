import React from 'react'
import { Link } from 'react-router-dom';


function ThankuPage() {
    return (
        <div >
            <div className="d-flex justify-content-center" style={{ fontSize: '170px', color: '#FB6200', fontWeight: 'bold', marginTop: '8rem' }}>
                <i className="bi bi-check-circle" ></i>
            </div>
            <div className="text-center" style={{ fontSize: '35px' }}>
                <div>Thank You for submission,</div>
                <div>We got you feedback!</div>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/" className="next-btn thanks-btn col-sm-2 m-4 ">Go Back</Link>
            </div>
        </div>

    )
}

export default ThankuPage