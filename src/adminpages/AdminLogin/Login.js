import React from 'react';
import './MainPage.css';

const Login = (props) => {

const {email,  
    setEmail, 
    password,
    setPassword, 
    handleLogin, 
    emailError, 
    passwordError,
    } = props;

    return(
        
        <section className="login">
            
            <div className='loginContainer'>
            
                <h1 className='title'>Login Admin</h1>
                <label>Username</label>
                <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input 
                    type="password" 
                    required 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
               <p className='errorMsg'>{passwordError}</p> 
               <div className='btnContainer'>
                  <button className='btn1'onClick={handleLogin}>Login</button>              
               </div>
            </div>
          
        </section>
    
    )
}

export default Login;