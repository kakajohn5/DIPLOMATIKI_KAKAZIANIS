import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';
import { login } from '../../actions/auth';
import {Navigate} from 'react-router-dom';
 const Login = ({login, isAuthenticated}) => {
     const [formData, setFormData] = useState({
         name    : '',
         email   : ''
     });

     const {name,email, password} = formData;
     const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
     const onSubmit = async e =>{
        e.preventDefault();
        login(name,email,password);  
    }
    //Redirect if login success
    if(isAuthenticated){
        return <Navigate to="/Register"/>
    }
    return (
        <Fragment>
        <div  classnameName = "limiter">
        <div  classnameName = "container-login100">
        <div  classnameName = "wrap-login100">
        <form classnameName = "login100-form validate-form" onSubmit={e=>onSubmit(e)}>
        <span classnameName = "login100-form-title p-b-26"> Sign In </span>
        <span classnameName = "login100-form-title p-b-48">
        <i    classnameName = "zmdi zmdi-font"></i>
                    </span>
                    <div   classnameName = "wrap-input100 validate-input" data-validate = "">
                    <input classnameName = "input100" type  = "text" value = {name} name = 'name' onChange = {e => onChange(e)} placeholder = "Name" required />
                    </div>
                    <div   classnameName = "wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                    <input classnameName = "input100" type  = "text"  name = 'email' placeholder = "Email" value = {email} name = 'email' onChange = {e => onChange(e)} required />
                    </div>
                    <div  classnameName = "wrap-input100 validate-input" data-validate = "Enter password">
                    <span classnameName = "btn-show-pass">
                    <i    classnameName = "zmdi zmdi-eye"></i>
                        </span>
                        <input classnameName = "input100" type = "password"     name = 'password' placeholder = "Password" value = {password} name = 'password' onChange = {e => onChange(e)} required/>
                    </div>                 
                    <div    classnameName = "container-login100-form-btn">
                    <div    classnameName = "wrap-login100-form-btn">
                    <div    classnameName = "login100-form-bgbtn"></div>
                    <button classnameName = "login100-form-btn"> Sign in </button>
                        </div>
                    </div>
                    <div  classnameName = "text-center p-t-115">
                    <span classnameName = "txt1"> Do not have an account? </span>
                    <a    classnameName = "txt2" href = "register"> Sign up </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </Fragment>
    )
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
};
const mapStateToProps = state =>({
    auth: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login})(Login);