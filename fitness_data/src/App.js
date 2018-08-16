import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHighcharts from'react-highcharts'; // Expects that Highcharts was loaded in the code.


const highchartOptions = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Calorie Data'
    },
    xAxis: {
        categories: ['Breakfast', 'Lunch', 'Dinner']
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 0, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
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
        <p className="App-intro">
            <ReactHighcharts config={highchartOptions} />

        </p>
      </div>
    );
  }
}

export default App;
