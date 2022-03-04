import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes  from 'prop-types';
import {Navigate} from 'react-router-dom';
import "../css/Register.css"
 const Register = ({setAlert, register, isAuthenticated}) => {
     const [formData, setFormData] = useState({
         name    : '',
         email   : '',
         password: '',
         password2: ''
     });

     const {name, email, password,password2} = formData;
     const onChange                = e => setFormData({...formData, [e.target.name]: e.target.value});
     const onSubmit = async e =>{
         e.preventDefault();
         if(password!==password2){
             setAlert('Passwords do not match', `danger`);   
         }else{
             register({name, email, password });
            
         }    
     }
       //Redirect if register success
    if(isAuthenticated){
        return <Navigate to="/Login"/>
    }
    return (
        <>
        <div  className = "limiter">
        <div  className = "container-login100">
        <div  className = "wrap-login100">
        <form className = "login100-form validate-form" onSubmit={e=>onSubmit(e)}>
        <span className = "login100-form-title p-b-26"> Sign Up </span>
        <span className = "login100-form-title p-b-48">
        <i    className = "zmdi zmdi-font"></i>
                    </span>
                    <div   className = "wrap-input100 validate-input" data-validate = "">
                    <input className = "input100" type                              = "text" value = {name} name = 'name' onChange = {e => onChange(e)} placeholder = "Name"  />
                    </div>
                    <div   className = "wrap-input100 validate-input" data-validate = "Valid email is: something@gmail.com">
                    <input className = "input100" type                              = "text"  name = 'email' placeholder = "Email" value = {email} name = 'email' onChange = {e => onChange(e)}  />
                    </div>
                    <div  className = "wrap-input100 validate-input" data-validate = "Enter password">
                    <span className = "btn-show-pass">
                    <i    className = "zmdi zmdi-eye"></i>
                        </span>
                        <input className = "input100" type = "password"     name = 'password' placeholder = "Password" value = {password} name = 'password' onChange = {e => onChange(e)} />
                    </div>  
                    <div   className = "wrap-input100 validate-input" data-validate = "">
                    <input className = "input100" type        = "password" value = {password2} name = 'password2' onChange = {e => onChange(e)} placeholder = "Repeat  your password"  />
                    </div>                 
                    <div    className = "container-login100-form-btn">
                    <div    className = "wrap-login100-form-btn">
                    <div    className = "login100-form-bgbtn"></div>
                    <button className = "login100-form-btn"> Sign up </button>
                        </div>
                    </div>
                    <div  className = "text-center p-t-115">
                    <span className = "txt1"> Already have an account? </span>
                    <a    className = "txt2" href = "login"> Sign In </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
};
const mapStateToProps = state =>({
    auth: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {setAlert, register})(Register);