import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginForm from '../components/LoginForm.jsx'
import RegistrationForm from '../components/RegistrationForm.jsx'

class LandingPage extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    registrationOpen: false,
    loginEmail: '',
    loginPassword: '',
    loginOpen: false,
  }

  //This clears out the guest storage
  componentWillMount() {
    localStorage.clear()
  }

  render() {
    return (
      <MuiThemeProvider>

        <div className="landing-page">
          <RaisedButton label="Register" onTouchTap={this.handleRegistrationOpen} />
          {
            this.state.registrationOpen ?
              <RegistrationForm
                registrationOpen={this.state.registrationOpen}
                registrationClose={this.handleRegistrationClose}
              />
            : false
          }
            　
          <RaisedButton label="Login" onTouchTap={this.handleLoginOpen} />
          {
            this.state.loginOpen ?
              <LoginForm
                loginOpen={this.state.loginOpen}
                loginClose={this.handleLoginClose}
              />
            : false
          }

          <br/>
          <br/>
          <img src='../herodotus-black-on-transparent.png' role='presentation' className="landing-page-fancy-text"/>
          <br/>
          <br/>

          <img src='../battle-of-marathon.png' role='presentation' className="temp-landing"/>
          <img src='../herodotus-tagline-transparent-BG.png' role='presentation' className="landing-page-fancy-text"/>
          <br/>
          <br/>


        </div>
      </MuiThemeProvider>
    );
  }
}

export default LandingPage;
