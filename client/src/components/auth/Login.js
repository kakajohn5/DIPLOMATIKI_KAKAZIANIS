import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';
import { login } from '../../actions/auth';
import {Navigate} from 'react-router-dom';
import "../css/main.css"
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
   
    return (
        <Fragment>
        <div  className = "limiter">
        <div  className = "container-login100">
        <div  className = "wrap-login100">
        <form className = "login100-form validate-form" onSubmit={e=>onSubmit(e)}>
        <span className = "login100-form-title p-b-26"> Sign In </span>
        <span className = "login100-form-title p-b-48">
        <i    className = "zmdi zmdi-font"></i>
                    </span>
                    <div   className = "wrap-input100 validate-input" data-validate = "">
                    <input className = "input100" type  = "text" value = {name} name = 'name' onChange = {e => onChange(e)} placeholder = "Name" required />
                    </div>
                    <div   className = "wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                    <input className = "input100" type  = "text"  name = 'email' placeholder = "Email" value = {email} name = 'email' onChange = {e => onChange(e)} required />
                    </div>
                    <div  className = "wrap-input100 validate-input" data-validate = "Enter password">
                    <span className = "btn-show-pass">
                    <i    className = "zmdi zmdi-eye"></i>
                        </span>
                        <input className = "input100" type = "password"     name = 'password' placeholder = "Password" value = {password} name = 'password' onChange = {e => onChange(e)} required/>
                    </div>                 
                    <div    className = "container-login100-form-btn">
                    <div    className = "wrap-login100-form-btn">
                    <div    className = "login100-form-bgbtn"></div>
                    <button className = "login100-form-btn"> Sign in </button>
                        </div>
                    </div>
                    <div  className = "text-center p-t-115">
                    <span className = "txt1"> Do not have an account? </span>
                    <a    className = "txt2" href = "register"> Sign up </a>
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
export default connect(mapStateToProps, {login})(Login);