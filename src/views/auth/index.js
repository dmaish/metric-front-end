
import React, {useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './index.scss';
import googleIcon from '../../assets/google.png';


const ADD_USER = gql `
    mutation AddUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password){
            username,
            email
        }
    }
`;


const Auth = (props) => {

    const [state, setState] = useState({
        username: "username",
        email: "email",
        password: "password",
    });

    const userRegistration = props.userRegistration;

    const [addUser] = useMutation(ADD_USER);


    const submitNewUser = (addUser) => {

        addUser ( { variables:  {
            "username": state.username,
            "email": state.email,
            "password": state.password,
        }
        });
        console.log(addUser)
    }

    const userDetailsToState = (e) => {
        e.preventDefault();
        e.persist();
        console.log('event', e);

        setState((state) => {
            let inputId = e.target.id;
            state[inputId] = e.target.value;
            return state;
        });
    }

    const formik = useFormik ({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, '* Must be 15 characters or less')
                .required('* Required'),
            email: Yup.string()
                .email('* Invalid email address')
                .required('* Required'),
            password: Yup.string()
                .max(20, '* Must be 20 characters or less')
                .required('* Required'),
            confirmPassword: Yup.string()
                .max(20, '* Must be 20 characters or less')
                .required('* Required'),
            }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });


        return (
                <div id="auth" className="auth-modal">
                    <div className="auth-div">
                        {userRegistration ? ( 
                        <form className="register-div" onSubmit={formik.handleSubmit} autoComplete="off">
                                <div className="title">
                                    REGISTER
                                </div>
                                <div className="tagline">
                                    Already have an account? Login here.
                                </div>

                                <div className="username input-container">
                                {formik.touched.username && formik.errors.username ? <div className="input-error-div">{formik.errors.username}</div> : null}
                                    <i class="far fa-user-circle"></i>
                                    <input 
                                        id="username" 
                                        name="username"
                                        placeholder="username"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username} 
                                        // onChange={(e) => userDetailsToState(e)}
                                        />
                                </div>
                                <div className="email input-container">
                                {formik.touched.email && formik.errors.email ? <div className="input-error-div">{formik.errors.email}</div> : null}
                                    <i class="far fa-envelope"></i>
                                    <input 
                                        id="email" 
                                        name="email"
                                        placeholder="email" 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        // onChange={(e) => userDetailsToState(e)}
                                    />
                                </div>
                                <div className="password input-container">
                                {formik.touched.password && formik.errors.password ? <div className="input-error-div">{formik.errors.password}</div> : null}
                                    <i class="fas fa-key"></i>
                                    <input 
                                        id="password" 
                                        name="password"
                                        placeholder="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password} 
                                        // onChange={(e) => userDetailsToState(e)}
                                    />
                                </div>
                                <div className="confirm-pass input-container">
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="input-error-div">{formik.errors.confirmPassword}</div> : null}
                                    <i class="far fa-check-square"></i>
                                    <input 
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="confirm password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                    />
                                </div>

                                <div className="input-container">
                                    <button 
                                        type="submit"
                                        // onClick={() => submitNewUser(addUser)} 
                                        className="auth-button">
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
                                        <img src={googleIcon} alt='icon'/> Sign up with Google
                                    </button>
                                </div>

                        </form>

                            )  : 
                    (
                        <form className="login-div">
                            <div className="title">
                                    LOGIN
                            </div>
                            <div className="tagline">
                                    Don't have an account? Register here.
                            </div>
                            <div className="email input-container login-input">
                                <i class="far fa-envelope"></i>
                                <input placeholder="email"/>
                            </div>
                            <div className="password input-container login-input">
                                <i class="fas fa-key"></i>
                                <input placeholder="password"/>
                            </div>
                            <div className="input-container">
                                    <button className="auth-button">
                                        Sign In
                                    </button>
                            </div>
                                <div className="tagline input-container">
                                        Forgot password ?
                                </div>

                                <div className="input-container">
                                    <div className="horizontal-line-left"></div>
                                    <div style={{display: 'inline-block', fontSize: '17px', width: '10%', color: '#ffffff'}}>or</div>
                                    <div className="horizontal-line-right"></div>
                                </div>
                            <div className="input-container">
                                <button className="google-button">
                                    <img src={googleIcon} alt='icon'/> Sign in with Google
                                </button>
                            </div>
                        </form>
                    )
                }


                </div>
            <div className="cancel-button" onClick={props.closeAuthModalFunc}><i class="fas fa-times"></i></div>
        </div>
        );
}

export default Auth;