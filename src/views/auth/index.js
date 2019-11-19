import React from 'react';
import './index.scss';
import googleIcon from '../../assets/google.png';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_USER = gql `
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password){
            username,
            email
        }
    }
`

const Auth = (props) => {

    const submitNewUser = (addUser) => {
        const mut = addUser ( { variables:  {
            "username": "usernameTest",
            "email": "emailTest",
            "password": "passwordTest"
        }
        });
        console.log(addUser)
    }


        const userRegistration = props.userRegistration;
        const [addUser, {data}] = useMutation(ADD_USER);
        console.log(useMutation(ADD_USER))
        return (
                <div id="auth" className="auth-modal">
                    <div className="auth-div">
                        {userRegistration ? ( <div className="register-div">
                                <div className="title">
                                    REGISTER
                                </div>
                                <div className="tagline">
                                    Already have an account? Login here.
                                </div>
                                <div className="username input-container">
                                <i class="far fa-user-circle"></i><input placeholder="username"/>
                                </div>
                                <div className="email input-container">
                                <i class="far fa-envelope"></i><input placeholder="email"/>
                                </div>
                                <div className="password input-container">
                                <i class="fas fa-key"></i><input placeholder="password"/>
                                </div>
                                <div className="confirm-pass input-container">
                                <i class="far fa-check-square"></i><input placeholder="confirm password"/>
                                </div>
                                <div className="input-container">
                                    <button onClick={() => submitNewUser(addUser)} className="auth-button">
                                        create account
                                    </button>
                                </div>
                                <div className="input-container">
                                    <div className="horizontal-line-left"></div>
                                    <div style={{display: 'inline-block', fontSize: '17px', width: '10%', color: '#ffffff'}}>or</div>
                                    <div className="horizontal-line-right"></div>
                                </div>
                                <div className="input-container">
                                    <button className="google-button">
                                        <img src={googleIcon} alt='icon'/>
                                        GOOGLE
                                    </button>
                                </div>
                            </div>
                            )  : 
                    (
                        <div className="login-div">
                            <div className="title">
                                    LOGIN
                            </div>
                            <div className="tagline">
                                    Don't have an account? Register here.
                            </div>
                            <div className="email input-container login-input">
                                <i class="far fa-envelope"></i><input placeholder="email"/>
                            </div>
                            <div className="password input-container login-input">
                                <i class="fas fa-key"></i><input placeholder="password"/>
                            </div>
                            <div className="input-container">
                                    <button className="auth-button">
                                        sign in
                                    </button>
                            </div><div className="tagline input-container">
                                    Forgot password ?
                            </div>

                            <div className="input-container">
                                    <div className="horizontal-line-left"></div>
                                    <div style={{display: 'inline-block', fontSize: '17px', width: '10%', color: '#ffffff'}}>or</div>
                                    <div className="horizontal-line-right"></div>
                            </div>
                            <div className="input-container">
                                    <button className="google-button">
                                        <img src={googleIcon} alt='icon'/> GOOGLE
                                    </button>
                            </div>
                        </div>
                    )
                }
                    </div>
                    <div className="cancel-button" onClick={props.closeAuthModalFunc}><i class="fas fa-times"></i></div>
                </div>
        );
}

export default Auth;