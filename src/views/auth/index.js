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
                    <div className="register-div">
                    </div>
                </div>
        );
    }
}

export default Auth;