import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
          <br/>
          <br/>
          <br/>
          <br/>
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
