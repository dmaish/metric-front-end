import React, { Component } from 'react';
import './index.scss'
import authModalBackground from './../../assets/modal-BG-xd.svg';

const styles = {
    modalBackground: {
        backgroundImage: `url(${authModalBackground})`
    }
}

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
                <div id="auth" style={styles.modalBackground} className="auth-modal">
                    <div className="auth-div">
                        <div className="register-div">
                            <div className="title">
                                REGISTER
                            </div>
                            <div className="tagline">
                                Already have an account? Login here.
                            </div>
                            <div className="username input-container">
                                <input placeholder="username"/>
                                </div>
                            <div className="email input-container">
                                <input placeholder="email"/>
                            </div>
                            <div className="password input-container">
                                <input placeholder="password"/>
                            </div>
                            <div className="confirm-pass input-container">
                                <input placeholder="confirm password"/>
                            </div>
                            <div className="input-container">
                                <button className="auth-button">
                                    create account
                                </button>
                            </div>
                            <div className="input-container">
                                <div className="horizontal-line"><hr/></div>
                                <div style={{display: 'inline-block', fontSize: '17px', width: '10%', color: '#ffffff'}}>or</div>
                                <div className="horizontal-line"><hr/></div>
                            </div>
                            <div className="input-container">
                                <button className="google-button">
                                    GOOGLE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Auth;