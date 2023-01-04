import React, { Component } from 'react';
import Personal from './components/Personal';
import './App.css';
import ExperienceNEducation from './components/ExperienceNEducation';
import Expertise from './components/Expertise';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalPreviousEdit: '',
      personalInfo: {
        firstName: ['First Name', false],
        lastName: ['Last Name', false],
        currentRole: ['Current Role', false],
        address1: ['Address 1', false],
        address2: ['Address 2', false],
        phone: ['Phone', false],
        email: ['Email', false],
        linkedin: ['Linkedin', false],
      },
      previewModeStatus: false,
      expStorComp: [],
      expStorCity: [],
      expStorYrFrm: [],
      expStorYrTo: [],
      expStorRole: [],
      expStorRoleDesc: [],
      expInpComp: '',
      expInpCity: '',
      expInpYrFrm: '',
      expInpYrTo: '',
      expInpRole: '',
      expInpRoleDesc: '',
      experienceAdd: false,
      eduStorComp: [],
      eduStorCity: [],
      eduStorYrFrm: [],
      eduStorYrTo: [],
      eduStorRole: [],
      eduStorRoleDesc: [],
      eduInpComp: '',
      eduInpCity: '',
      eduInpYrFrm: '',
      eduInpYrTo: '',
      eduInpRole: '',
      eduInpRoleDesc: '',
      educationAdd: false,
      expertStor: [],
      expertInp: [],
      skillsAdd: false,
    };

    // binding stuff
  }

  workingMode = (e) => {
    this.setState({ previewModeStatus: false });
    // document.querySelector(`button#preview`).classList.remove("positive");
    // document.querySelector(`button#work`).classList.add("positive");
  };
}

export default App;
