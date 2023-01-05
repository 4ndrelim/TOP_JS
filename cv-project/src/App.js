import React, { Component } from 'react';
// import Personal from './components/Personal';
import './App.css';
// import ExperienceNEducation from './components/ExperienceNEducation';
// import Expertise from './components/Expertise';

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

  previewMode = (e) => {
    this.setState({ previewModeStatus: true });
    // document.querySelector(`button#preview`).classList.add("positive");
    // document.querySelector(`button#work`).classList.remove("positive");
  };

  personalEditChange = (e) => {
    const personalInfo = { ...this.state.personalInfo };
    personalInfo[e.target.id][0] = e.target.value;
    this.setState({ personalInfo });
  };

  personalEditMode = (e, previousEdit) => {
    this.cleanPersonalEditMode(e, previousEdit);
    if (!this.state.personalInfo[e.target.id][1]) {
      const personalInfo = { ...this.state.personalInfo };
      personalInfo[e.target.id][1] = true;
      this.setState({
        personalPreviousEdit: e.target.id,
        personalInfo,
      });
    }
  };

  cleanPersonalEditMode = (e, previousEdit) => {
    if (previousEdit == null || previousEdit === '') {
    } else if (previousEdit === e.target.id) {
    } else if (this.state.personalInfo[previousEdit][1]) {
      const personalInfo = { ...this.state.personalInfo };
      personalInfo[previousEdit][1] = false;
      if (
        personalInfo[previousEdit][0] == null
        || personalInfo[previousEdit][0] === ''
      ) {
        personalInfo[previousEdit][0] = previousEdit;
      }
      this.setState({
        personalPreviousEdit: '',
        personalInfo,
      });
    }
  };

  render() {
    const {
      personalPreviousEdit,
      personalInfo,
      previewModeStatus,
      expStorComp,
      expStorCity,
      expStorYrFrm,
      expStorYrTo,
      expStorRole,
      expStorRoleDesc,
      experienceAdd,
      eduStorComp,
      eduStorCity,
      eduStorYrFrm,
      eduStorYrTo,
      eduStorRole,
      eduStorRoleDesc,
      educationAdd,
      expertStor,
      skillsAdd,
    } = this.state;

    return (
      <div className="ui grid">
        <div className="row">
          <h2 className="title ui icon header">
            <i className="paper plane icon" />
            <div className="content">Resume Builder App</div>
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
