import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";
import logo from "./images/logo_nemosi.svg";
import backImage from "./images/back_button.png";
import "./App.css";
import Schedule from "./Schedule.js";
import PatientSearch from "./PatientSearch.js";
import PatientSummary from "./patientSummary.js";
import PatientTrends from "./patientTrends.js";
import Incidents from './Incidents.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Home"
    };
    this.backToHome = this.backToHome.bind(this);
    this.switchToPatientInfoPage = this.switchToPatientInfoPage.bind(this);
  }

  backToHome() {
    this.setState({
      page: "Home"
    });
  }

  switchToPatientInfoPage() {
    this.setState({
      page: "PatientInfo"
    });
  }

  render() {
    const page = this.state.page;

    return (
      <div className="App">
        {page === "PatientInfo" ? (
          <button className="BackButton" onClick={this.backToHome}>
            <img src={backImage} />
          </button>
        ) : null}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Nemosi</span>
        </header>
        <div className="Welcome-text">
          <p>Hello Dr. Smith</p>
        </div>
        <div className="Date-time">
          <div>
            <Moment format="dddd, MMMM D" />
          </div>
          <div>
            <Moment format="LT" />
          </div>
        </div>
        {page === "Home" ? (
          <div>
            <Schedule />
            <PatientSearch
              switchToPatientInfoPage={this.switchToPatientInfoPage}
            />
          </div>
        ): (
          <div>
            <PatientSummary />
            <PatientTrends />
          </div>)}
      </div>
    );
  }
}

export default App;
