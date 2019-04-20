import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "./patientTrends.css";
import CognitiveAssessment from "./DataVis/CognitiveAssessment";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import ReactTable from "react-table";
import "react-table/react-table.css";

import MomentLocaleUtils, {
  formatDate,
  parseDate
} from "react-day-picker/moment";

class PatientTrends extends Component {
  constructor(props) {
    super(props);
    this.handleTrendsChange = this.handleTrendsChange.bind(this);
    this.turnToIncidents = this.turnToIncidents.bind(this);
    this.turnToTrends = this.turnToTrends.bind(this);
    this.state = {
      selectedTrend: "Cognitive Assessment",
      page: "trends"
    };
  }

  handleTrendsChange(e) {
    console.log(e.target.value);
    this.setState({ selectedTrend: e.target.value });
  }

  turnToTrends() {
    this.setState({
      page: "trends",
      selectedTrend: this.state.selectedTrend
    });
  }
  turnToIncidents() {
    this.setState({
      page: "incidents",
      selectedTrend: this.state.selectedTrend
    });
  }

  render() {
    const page = this.state.page;
    const data = [
      {
        number: "1",
        incident: "Hallucination",
        date: "01/25/19",
        avgHeartRate: "100"
      },
      {
        number: "2",
        incident: "Mood Swing",
        date: "01/27/19",
        avgHeartRate: "98"
      },
      {
        number: "3",
        incident: "Mood Swing",
        date: "01/30/19",
        avgHeartRate: "89"
      },
      {
        number: "4",
        incident: "Injury",
        date: "01/31/2019",
        avgHeartRate: "102"
      }
    ];
    const columns = [
      {
        Header: "No.",
        accessor: "number"
      },
      {
        Header: "Incident",
        accessor: "incident"
      },
      {
        Header: "Date",
        accessor: "date"
      },
      {
        Header: "Avg. Heart Rate",
        accessor: "avgHeartRate"
      },
      {
        Header: "Caregiver Notes",
        accessor: "caregiver notes"
      }
    ];

    return (
      <div className="rightPart">
        <div className="nextAppointment">
          Next Appointment
          <div className="textBox">
            <br />
            <div className="date">23 March, Monday - 2:30 pm to 3:15 pm</div>
          </div>
        </div>
        <hr />
        {page === "trends" ? (
          <div className="patientTrendsandIncidents">
            <button className="trends" onClick={this.turnToTrends}>
              Trends
            </button>
            <button className="incidents" onClick={this.turnToIncidents}>
              Incidents
            </button>
            <div className="title">Patient Trends</div>
            <div className="filter">
              Show:
              <select
                className="filterButton"
                onChange={this.handleTrendsChange}
              >
                <option value="Cognitive Assessment" selected>
                  Cognitive Assessment
                </option>
                <option value="Bathroom Usage">Overnight Bathroom Usage</option>
                <option value="Overnight Awakenings/Wanderings">
                  Overnight Awakenings/Wanderings
                </option>
                <option value="Caregiver Reported Patient Injuries">
                  Caregiver Reported Patient Injuries
                </option>
              </select>
            </div>

            <div className="dateRange">
              <span>Date range: </span>
              <DayPickerInput
                className="DatePickerInput"
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(new Date(2019, 0, 1))}`}
              />
              <span> to </span>
              <DayPickerInput
                className="DatePickerInput"
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(new Date(2019, 1, 1))}`}
              />
              <div className="graph">
                <div className="trendsTitle">{this.state.selectedTrend}</div>
                <CognitiveAssessment />
              </div>
            </div>
          </div>
        ) : (
          <div className="patientTrendsandIncidents">
            <button className="trendsInIncidents" onClick={this.turnToTrends}>
              Trends
            </button>
            <button
              className="incidentsInIncidents"
              onClick={this.turnToIncidents}
            >
              Incidents
            </button>

            <div className="title">Patient Incidents</div>
            <div className="dateRange">
              <span>Date range: </span>
              <DayPickerInput
                className="DatePickerInput"
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(new Date(2019, 0, 1))}`}
              />
              <span> to </span>
              <DayPickerInput
                className="DatePickerInput"
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(new Date(2019, 1, 1))}`}
              />
            </div>
            <div className="table">
              <ReactTable
                className="reactTable"
                data={data}
                columns={columns}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default PatientTrends;
