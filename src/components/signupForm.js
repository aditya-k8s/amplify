import React from 'react';

const SignUpForm = ({ onChange, submitForm, goToSignIn }) => {
    return (
        <div>
            <input name="username" onChange={onChange} placeholder="username" />
            <input name="password" type="password" onChange={onChange} placeholder="password" />
            <input name="email" onChange={onChange} placeholder="email" />
            <button onClick={submitForm}>Sign up</button>
            <button onClick={goToSignIn}>Sign in</button>
        </div>
    )
};

export default SignUpForm;
