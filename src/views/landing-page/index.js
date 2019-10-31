import React, {Component} from 'react';
import PathImage from '../../assets/Path.svg'
import InnerCircle from '../../assets/OuterUnion.svg';
import OuterCircle from '../../assets/InnerUnion.svg';
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

    render (){
        return(
            <div className="landing-page">
                <div className="logo">Logo here</div>
                <div style={styles.pathSvg}  className="path-div">  
                    <div style={styles.outerCircle} className="outer-circle">
                        <div style={styles.innerCircle} className="inner-circle">
                        <div className="phrase">
                            <div className="large-phrase">“If you can measure it,<br/>You can Improve it"</div>
                                <div className="small-phrase"> Metric helps you keep track of your gym progress<br/>
                                And gives you aggregated data about your workouts.
                                </div>
                        </div>
                        <div className="action-btns">
                            <div className="register-btn">Register</div>
                            <div className="login-btn">Login</div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}