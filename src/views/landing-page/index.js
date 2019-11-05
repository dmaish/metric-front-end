import React, {Component} from 'react';
import PathImage from '../../assets/Path.svg'
import InnerCircle from '../../assets/OuterUnion.svg';
import OuterCircle from '../../assets/InnerUnion.svg';
import Auth from './../auth';
import './index.scss'

const styles = {
    pathSvg: {
        backgroundImage: `url(${PathImage})`
    },
    outerCircle: {
        backgroundImage: `url(${OuterCircle})`
    },
    innerCircle: {
        backgroundImage: `url(${InnerCircle})`
    }
}

export default class LandingPage extends Component {
    state = {
        authPageVisibility : false,
        userRegistration: true,
    }

    authActionFunc = (registration=true) => {

        if (registration === false){
            this.setState(() => ({userRegistration: false}));
        }
        this.setState(() => ({authPageVisibility: true}));
    }

    render (){
        return(
            <>
            <div className="landing-page">
                <div className="logo">metric</div>
                <div style={styles.pathSvg}  className="path-div">  
                    <div style={styles.outerCircle} className="outer-circle">
                        <div style={styles.innerCircle} className="inner-circle">
                        <div className="phrase">
                            <div className="large-phrase">“If you can measure it,<br/>&nbsp;&nbsp;...You can improve it"</div>
                                <div className="small-phrase"> Metric helps you keep track of your gym progress<br/>
                                And gives you aggregated data about your workouts.
                                </div>
                        </div>
                        <div className="action-btns">
                                <button className="register-btn" onClick={() => (this.authActionFunc())}>Register</button>
                                <div className="login-btn" onClick={() => (this.authActionFunc(false))}>Login</div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className={`auth-container-${this.state.authPageVisibility}`}>
                <Auth userRegistration={this.state.userRegistration}/>
            </div>
            </>
        );
    }
}