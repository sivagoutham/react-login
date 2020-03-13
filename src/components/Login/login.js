import React, { Component } from "react";
import Input from '../Input/input-component';

import "./login.css";

const validName = RegExp(/^[A-Za-z ]+$/)
const validEmailRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const validPassword = RegExp(/^[0-9a-zA-Z]+$/)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: null,
      lastName: null,
      email: null,
      password : null,
      errors:{
        firstName: '',
        lastName: '',
        email: '',
        password : '',
      }
    };
    this.validName = RegExp();
    }
  

  handleChange = (event)=>{
    event.preventDefault();
    const {name, value} = event.target;
    let errors = this.state.errors;
    let firstNameValid = errors.firstName;
    let lastNameValid = errors.lastName;
    let emailValid = errors.email;
    let passwordValid = errors.password
    
    if(value.length>0){
      switch (name) {
        case 'First Name':
        firstNameValid = validName.test(value)
          errors.firstName =  firstNameValid? '':'Name is not valid!'
          break;
          case 'Last Name':
        lastNameValid = validName.test(value)
          errors.lastName =  lastNameValid? '':'Name is not valid!'
          break;
        case 'Email address': 
        emailValid = validEmailRegex.test(value)
          errors.email =  emailValid? '':'Email is not valid!'
          break;
        case 'Password':
          if(value.length>8){
            passwordValid = validPassword.test(value)
          errors.password =  passwordValid? '':'Password is not valid!'
          }else{
            errors.password = 'Password must be 8 characters long!'
          }
        
          break;
        default:
          break;
      }
      
    }else{
      errors.firstName ='';
    errors.lastName='';
    errors.email ='';
    errors.password=''
    }
    this.setState({errors, [name]: value});

    

  }

  render() {
    const {errors} = this.state;
    return (
      <React.Fragment>
        <div className="center">
          <h3 className="header">Get started today!</h3>
          <form style={{padding:'10px'}} onSubmit={this.handleSubmit}>

            <div style={{padding:'10px'}}>
              <Input text ={'First Name'} 
              type = {'text'}
              style={{ float: "left", marginRight: "20px",width:'45%' }}
              handleChange = {this.handleChange}
              data = {errors.firstName}
              />
            

              <Input text ={'Last Name'} type = {'text'} style={{ float: "left"}} handleChange = {this.handleChange} data = {errors.lastName}/>

              <br style={{ clear: "both" }} />
            </div>
            <div style={{padding:'10px'}}>
              <Input text ={'Email address'} type= {'email'} style={{ float: "left", marginRight: "20px",width:'45%' }} handleChange = {this.handleChange} data = {errors.email}/>

              <Input text ={'Password'} type = {'password'} style={{ float: "left"}} handleChange = {this.handleChange} data = {errors.password}/>
              <br style={{ clear: "both" }} />
            </div>
            <div className ='divStyle'>
              <button className="button" type="submit" value="" >Claim Your Free Trial
              <div className="triangle-right"></div>
              </button>
            </div>
            <p className='terms'>You are agreeing to our <a className = 'anchorTag' href="https://sivagoutham.github.io/react-login/">Terms and Services</a></p>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
