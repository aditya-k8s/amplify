import React from 'react';

const Welcome = ({ signOut }) => {
    return (
        <div>
           <h2>Welcome to Devtalks</h2>
           <button onClick={signOut}>Sign out</button>
        </div>
    )
};

export default Welcome;
