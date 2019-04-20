import React, { Component } from 'react';
import './PatientSearch.css';

class PatientSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient_list: [
        "Carla Anderson (female, 69)",
        "Robert Barris (male, 82)",
        "Mary Brown (female, 55)",
        "William Colbert (male, 81)",
        "Thomas Lane (male, 75)",
        "Maria Lopez (female, 83)",
        "Gloria Montez (female, 75)"
      ],
      filtered: [],
      patients_need_attention: [
        "Carla Anderson (female, 69)",
        "Maria Lopez (female, 83)",
        "Jose Chavez (male, 72)"
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.state.patient_list
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.patient_list
    });
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];
      // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.state.patient_list;
      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.state.patient_list;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  render() {
    return (
      <div className="PatientSearch">
        <div className="Headline">Your Patients</div>
        <div className="Note">
          <span className="Exclamation">!  </span>
          <span>Patients Requiring Attention</span>
        </div>
        <div className="SearchContainer">
          <input type="text" className="SearchField" placeholder="Patient Search" onChange={this.handleChange} />
          <div className="SearchResults">
            <div className="Title">Patients Needing Attention</div>
            <div className="Attention">
              {this.state.patients_need_attention.map((patient) => (
                <button className="PatientButton" onClick={this.props.switchToPatientInfoPage}>{patient} <span className="Exclamation">!  </span></button>
              ))}
            </div>
            <div className="ListTitle">Patient List</div>
            <div className="PatientList">
            <div>
              {this.state.filtered.map((patient, i) => (
                <button key={i} className="PatientButton" onClick={this.props.switchToPatientInfoPage}>{patient}</button>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientSearch;
