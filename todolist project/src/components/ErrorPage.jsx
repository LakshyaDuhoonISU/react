import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    const navigate = useNavigate();

    function handleHome() {
        navigate('/');
    }

    return (
        <div className="error-page">
            <img alt='error-img' src='https://i.pinimg.com/originals/5b/fa/d1/5bfad19e9cd4d1ea0457819e41bdf7e1.png' className='error-img'/>
            <div className="error-page-buttons">
                <button onClick={handleHome}>Go to Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;