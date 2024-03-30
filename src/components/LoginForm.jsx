// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
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
    };

    const handlePasswordChange = (e) => {
        setPasswordError('');
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (username !== '') {
            /* empty */
        } else {
            setUsernameError('Please enter username');
        }

        if (password !== '') {
            /* empty */
        } else {
            setPasswordError('Please enter password');
        }

        // Perform login here
        if (username === 'admin@email.com' && password === 'admin123') {
            // Simulating successful login
            localStorage.setItem('Token', 'dummyToken123');
            console.log('Login successful!');
            toast.success('Successfully Login!');
            history.push('/addclass');
        } else {
            console.error('Login failed');
            toast.error('Invalid username or password');
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleFormSubmit}>
                <div className="login-container">
                    <h1 className="login-h1">Login as Admin</h1>

                    <input type="email" className="input-username" onChange={handleUsernameChange} placeholder="Email" />
                    {usernameError && <div className="error-msg">{usernameError}</div>}

                    <input type="password" className="input-password" onChange={handlePasswordChange} placeholder="Password" />
                    {passwordError && <div className="error-msg">{passwordError}</div>}
                    <Link to="/forgot" className="link-forgot">
                        Forgot password?
                    </Link>
                    <button type="submit" className="btn-login">
                        Login
                    </button>
                   
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
