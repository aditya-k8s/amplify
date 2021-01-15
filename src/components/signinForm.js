import React from 'react';

const SignInForm = ({ onChange, submitForm }) => {
    return (
        <div>
            <input name="username" onChange={onChange} placeholder="username" />
            <input name="password" type="password" onChange={onChange} placeholder="password" />
            <button onClick={submitForm}>Sign in</button>
        </div>
    )
};

export default SignInForm;
