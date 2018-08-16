import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHighcharts from'react-highcharts'; // Expects that Highcharts was loaded in the code.


const highchartOptions = {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Total fruit consumtion, grouped by gender'
    },

    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of fruits'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2],
        stack: 'male'
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5],
        stack: 'male'
    }, {
        name: 'Jane',
        data: [2, 5, 6, 2, 1],
        stack: 'female'
    }, {
        name: 'Janet',
        data: [3, 0, 4, 4, 3],
        stack: 'female'
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
            <div className='row'>
            <div className='col-sm-6'>
            <ReactHighcharts config={highchartOptions} />
            </div>

            <div className='col-sm-6'>
                <ReactHighcharts config={highchartOptions} />
            </div>
            </div>
        </p>
      </div>
    );
  }
}

export default App;
