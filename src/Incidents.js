import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './Incidents.css';

import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

class Incidents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Incidents">
        <div className="IncidentsTitle">Incidents Log</div>
        <div className="IncidentTypeFilter"></div>
        <div className="IncidentDateRange">
          <span>Date range: </span>
        </div>
        <hr />

      </div>
    );
  }
}

export default Incidents;
