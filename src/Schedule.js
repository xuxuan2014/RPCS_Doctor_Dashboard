import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "./Schedule.css";
import appointments from "./data/appointments.json";
import { formatDate, parseDate } from "react-day-picker/moment";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: new Date()
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  render() {
    const { selectedDay } = this.state;
    const appointment_list = Object.values(appointments.appointments).map(e => {
      return (
        <div className="ScheduleList">
          <hr />
          <span className="ApptTime">{e.time}</span>
          <div className="PatientInfo">
            <span className="PatientName">{e.patient_name}</span>
            <span className="LastAppt">Last: {e.last_appointment}</span>
            <span className="PatientNote">{e.note}</span>
          </div>
        </div>
      );
    });
    return (
      <div className="Schedule">
        <div className="Headline">Your Appointments for today</div>
        <div className="DatePicker">
          <span>Select date: </span>
          <DayPickerInput
            formatDate={formatDate}
            parseDate={parseDate}
            onDayChange={this.handleDayChange}
            placeholder={`${formatDate(new Date())}`}
          />
        </div>
        <div className="Date">
          <span>{formatDate(selectedDay, "D MMMM,")}</span>
          <span className="Day">{formatDate(selectedDay, " dddd")}</span>
        </div>
        <div className="ScheduleContainer">{appointment_list}</div>
      </div>
    );
  }
}

export default Schedule;
