import React, { Component } from "react";
import Input from '../Input/input-component';

import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <React.Fragment>
        <div className="center">
          <h3 className="header">Get started today!</h3>
          <form style={{padding:'10px'}} onSubmit={this.handleSubmit}>
            <div style={{padding:'10px'}}>
              <Input text ={'First Name'} style={{ float: "left", marginRight: "20px",width:'45%' }}/>
              <Input text ={'Last Name'} style={{ float: "left"}}/>
              <br style={{ clear: "both" }} />
            </div>
            <div style={{padding:'10px'}}>
              <Input text ={'Email address'} style={{ float: "left", marginRight: "20px",width:'45%' }}/>
              <Input text ={'Password'} style={{ float: "left"}}/>
              <br style={{ clear: "both" }} />
            </div>
            <div className ='divStyle'><button className="button" type="submit" value="" >Claim Your Free Trial<div className="triangle-right"></div></button></div>
            <p className='terms'>You are agreeing to our <a className = 'anchorTag' href="https://sivagoutham.github.io/react-login/">Terms and Services</a></p>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
