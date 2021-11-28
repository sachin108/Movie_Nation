import React, {useState} from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen.js';

function LoginScreen() {

    const [signIn, setSignIn] = useState (false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <button className='logo'>
                    MovieNation
                </button>                
                <button onClick = {() => setSignIn(true)}
                className='loginScreen_button'>
                Sign In
                </button>
                <div className='loginScreen_gradient' />
            </div>

            <div className="loginScreen_body">
                {signIn ? (
                    <SignupScreen />
                ) : (
                    <>
                    <h1 className="xyz">Unlimited films, TV programmes and
                    more...</h1>
                    <h2 className="xyz">Watch anywhere.</h2>
                    <h3 className="xyz">
                        Enter your mail to
                        create or restart your
                        membership.
                    </h3>
                    <div className='loginScreen_input'>
                        <form className='xyz'>
                            <input  className='Email' type="email" placeholder="Email Address" />
                            <button onClick={() => setSignIn(true)}
                            className='loginScreen_getStarted'>
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
