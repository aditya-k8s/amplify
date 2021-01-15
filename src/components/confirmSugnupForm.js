import React from 'react';

const ConfirmSignUpForm = ({ onChange, submitForm }) => {
    return (
        <div>
            <input name="authCode" onChange={onChange} placeholder="Confirmation Code" />
            <button onClick={submitForm}>Confirm Sign Up</button>
        </div>
    )
};

export default ConfirmSignUpForm;
