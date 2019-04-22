import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Bar, Line, Pie} from "react-chartjs-2";
import $ from "jquery";

class OvernightBathroom extends Component{
  constructor(props){
    super(props);
    this.state={
      chartData:{
        labels: ["01/01/2019","01/02/2019", "01/03/2019", "01/04/2019", "01/05/2019"],
        datasets: [
        {
          label: "Overnight Bathroom Usage",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          fill: false,
          lineTension:0,

          data: [2,1,0,0,3]
        }
                  ]

      }
    }
  }
  render(){
    return (
      <div className="Graphics">
      <Line
      data={this.state.chartData}
      options={{

        scales: {
          xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Time'
                }
          }],
          yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Count'

                },
          ticks: {
              beginAtZero:true,
              stepSize: 1
          },
          stacked: false
        }]
      },
        legend:{
          display:false
        }
      }}
      />
      </div>
    )
  }

}
export default OvernightBathroom;
