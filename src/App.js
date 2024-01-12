
import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/login';

function App() {
  
  const [userlogged , setuserlogged] = useState(false)
  const handleSuccessfulLogin = () => {
    setuserlogged(true);
    
  };
  
  return (
    <div className="App">
      {userlogged ? 
      <div>
        <Dashboard/>
      </div> :
      <div>
        <Login onSuccessfulLogin={handleSuccessfulLogin}/>
      </div>
    }
      
      
    </div>
  );
}

export default App;
