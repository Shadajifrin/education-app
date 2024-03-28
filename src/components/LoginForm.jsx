// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const history = useHistory();

    const handleUsernameChange = (e) => {
        setUsernameError('');
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPasswordError('');
        setPassword(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (username !== '') { /* empty */ }
        else {
            setUsernameError('Please enter username');
        }
        if (password !== '') { /* empty */ }
        else {
            setPasswordError("Please enter password");
        }

    }
    const handleLogin = async () => {
        try {
            const response = await fetch('', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                localStorage.setItem("Token", JSON.stringify(data.token))
                console.log('Login successful!');
                toast.success('Successfully Login!');
                history.push('/product-list');
            } else {
                console.error('Login failed');
                toast.error(data.error);
            }
        } catch (error) {
            console.error('Error during login:', error);

        }
    };
    return (
        <div className='login'>
            <form onSubmit={handleFormSubmit}>
                <div className='login-container'>
                    <h1 className='login-h1'>Login as Admin</h1>

                    <input type='email' className='input-username' onChange={handleUsernameChange} placeholder='Email' />
                    {usernameError && <div className='error-msg'>{usernameError}</div>}

                    <input type='password' className='input-password' onChange={handlePasswordChange} placeholder='Password' />
                    {passwordError && <div className='error-msg'>{passwordError}</div>}
                    <Link to='/forgot' className='link-forgot'>Forgot password?</Link>
                    <button onClick={handleLogin} type='submit' className='btn-login'>Login</button>
                </div>
            </form>


        </div>

    )
}

export default LoginForm
