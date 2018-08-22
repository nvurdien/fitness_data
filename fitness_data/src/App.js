import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHighcharts from'react-highcharts'; // Expects that Highcharts was loaded in the code.


const highchartOptions = {
    chart: {
        type: 'column'
    },

    title: {
        text: ''
    },

    xAxis: {
        categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Calorie Count'
        }
    },

    tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
              this.series.name + ': ' + this.y + '<br/>' +
              'Total Calorie Intake: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Calories Burned',
        data: [3, 4, 4, 2, 1]
    }, {
        name: 'Calories Retained',
        data: [5, 6, 4, 7, 2]
    }]
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">H E A L T H C A R E</h1>
        </header>
        <p className="App-intro text-center">
            <div className='row d-flex justify-content-center'>
              <ReactHighcharts config={highchartOptions} />
            </div>
        </p>
      </div>
    );
  }
}

export default App;
