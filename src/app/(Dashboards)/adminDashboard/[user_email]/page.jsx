import React from 'react';

const userProfile = ({params}) => {
    console.log(params.user_email)
    return (
        <div>
            Hello
        </div>
    );
};

export default userProfile;