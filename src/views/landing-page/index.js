import React, {Component} from 'react';

import landingPageBG from '../../assets/landingPageBG.svg';
import LogoBG from '../../assets/metricAppLogo.svg';
import Auth from './../auth';
import './index.scss'

const styles = {
    pathSvg: {
        backgroundImage: `url(${landingPageBG})`
    },
    LogoSvg: {
        backgroundImage: `url(${LogoBG})`
    }
}

export default class LandingPage extends Component {
    state = {
        authPageVisibility : false,
        userRegistration: true,
    }

    authActionFunc = (registration) => {
        if (!registration) {
            this.setState(() => ({userRegistration: false}));
        } else if (registration) {
            this.setState(() => ({userRegistration: true}));
        }
        this.setState(() => ({authPageVisibility: true}));
    }

    closeAuthModalFunc = () => {
        this.setState(() => ({authPageVisibility: false}));
    }

    render (){
        return(
            <>
                <div className="landing-page">
                        <div  className="logo">
                            <div style={styles.LogoSvg} className="logo-div"></div>
                        </div>
                    
                    <div style={styles.pathSvg}  className="path-div">
                    </div>
                    <div className="content">
                        <div className="catch-phrase">
                            <div className="large-phrase">If you can't measure it,<br/>&nbsp;&nbsp;...You can't improve it</div>
                                <div className="small-phrase"> Metric helps you keep track of your gym progress<br/>
                                    by giving you aggregated data about your workouts.
                                </div>

                            <div className="action-btns">
                                <div className="register-btn" onClick={() => (this.authActionFunc(true))}>Register</div>
                                <div className="login-btn" onClick={() => (this.authActionFunc(false))}>Login</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`auth-container-${this.state.authPageVisibility}`}> 
                    <Auth userRegistration={this.state.userRegistration} closeAuthModalFunc={this.closeAuthModalFunc}/>
                </div>
            </>
        );
    }
}