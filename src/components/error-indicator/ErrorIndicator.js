import React from 'react';
import icon from'./error-icon.png';
import './ErrorIndicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator text-center">
            <img src={icon} alt="error icon" />
            <h2 className="text-danger img-fluid">BOOM!</h2>
            <h3 className="text-warning">something has gone terribly wrong</h3>
            <h4 className="text-primary">(but we already sent droids to fix it)</h4>
        </div>
    );
}

export default ErrorIndicator;