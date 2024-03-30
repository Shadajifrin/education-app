// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Back from './Back';


const Reset = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (newPassword === '' || confirmPassword === '') {
            alert('Please fill in both password fields');
            return;
        }

        // const apiEndpoint = `https://academy-batch-1-project-683989f58497.herokuapp.com/api/auth/reset-password?token=${token}`;


        // try {
        //   console.log('Token from URL:', token);
        //   if (!token) {
        //       alert('Token missing. Please use a valid reset link.');
        //       return;
        //   }
        //   const response = await fetch(apiEndpoint, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       newPassword,

        //     }),
        //   });

        //   if (response.ok) {

        //     alert('Password reset successful!');
        //   } else {

        //     alert('Password reset failed. Please try again.');
        //   }
        // } catch (error) {

        //   console.error('Error:', error);
        // }
    };

    return (
        <div className='reset-form'>
            <Back />
            <h2>Reset Password</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input className='input-newpass' type='password' placeholder='New Password' onChange={(e) => setNewPassword(e.target.value)} />
                    <input type='password' className='input-cnfrm' placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)} />

                </div>


                <button type="submit">Reset</button>
            </form>
          
        </div>

    )
}

export default Reset
