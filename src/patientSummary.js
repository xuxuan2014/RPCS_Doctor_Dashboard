import React, { Component } from "react";
import "./patientSummary.css";
import blankProfilePic from "./images/blankProfilePic.png";

class PatientSummary extends Component {
  constructor() {
    super();
    this.state = {
      notes: "Type your notes here...",
      text: "Your notes will appear here once you click on save button."
    };
  }

  updateNotes(event) {
    this.setState({ notes: event.target.value });
  }

  clicked() {
    this.setState({ text: this.state.notes });
  }

  render() {
    return (
      <div className="leftPart">
        <div className="patientSummary">
          Patient Summary
          <div className="patientName"> Thomas Miller</div>
          <img className="profilePic" src={blankProfilePic} alt="" />
          <div className="tags">
            <div>Male</div>
            <div>75 years old </div>
            <div> Mild Alzheimer</div>
          </div>
          <hr />
          <div className="medication">
            Medications
            <div className="medSection">
              <span className="medName">Donepezil</span>
              <span className="preDate">Prescribed date: 2019.3.3</span>
              <p className="medInfo">
                Removed from treatment due to adverse effects.
              </p>
            </div>
            <hr />
          </div>
          <div className="notes">
            {" "}
            Notes
            <textarea
              className="notesBox"
              type="text"
              value={this.state.notes}
              onChange={this.updateNotes.bind(this)}
            />
            <button
              className="save"
              onClick={e => {
                e.preventDefault();
                this.clicked();
              }}
            >
              Save
            </button>
            <div className="savedText">{this.state.text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientSummary;
