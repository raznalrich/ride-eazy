import React, { useState } from 'react';
import side_logo from './assets/app.png';
import './assets/login.css';
import pass_logo from './assets/padlock.png';
import user_logo from './assets/profile-user.png';
function Login({onSuccessfulLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      
      onSuccessfulLogin();
    } else {
      alert('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div className='container'>
      <div className="container1">
      <div className="header">
        <div className="text">Admin Login</div>
        <div className="underline"></div>
        
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_logo} alt="" />
          <input type="text" className="username" placeholder='username' value={username}
          onChange={handleUsernameChange}
          />
        </div>
        <div className="input">
          <img src={pass_logo} alt="" />
          <input type="password" className="password" placeholder='password' value={password}
          onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>Login</div>
      </div>
      </div>
      <div className="container2">
        <img src={side_logo} alt="" />
      </div>
      

        
    </div>
  )
}

export default Login