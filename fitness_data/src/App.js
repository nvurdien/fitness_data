import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHighcharts from'react-highcharts'; // Expects that Highcharts was loaded in the code.

var json = [
    {"Member_ID":"901870","First_Name":"Lois","Last_Name":"Griffin","Gender":"F","Age":"47","Height":"52","Weight":"127","Hours_Sleep":"6","Calories_Consumed":"2195","Exercise_Calories_Burned":"600","Date":"2017-10-11", "Step_Count":1000},
    {"Member_ID":"901870","First_Name":"Lois","Last_Name":"Griffin","Gender":"F","Age":"47","Height":"52","Weight":"128","Hours_Sleep":"8","Calories_Consumed":"1676","Exercise_Calories_Burned":"876","Date":"2017-09-05", "Step_Count":10},
    {"Member_ID":"901870","First_Name":"Lois","Last_Name":"Griffin","Gender":"F","Age":"47","Height":"52","Weight":"128","Hours_Sleep":"7","Calories_Consumed":"1728","Exercise_Calories_Burned":"971","Date":"2017-10-19", "Step_Count":900},
    {"Member_ID":"901870","First_Name":"Lois","Last_Name":"Griffin","Gender":"F","Age":"47","Height":"52","Weight":"128","Hours_Sleep":"8","Calories_Consumed":"2324","Exercise_Calories_Burned":"320","Date":"2017-10-13", "Step_Count":640},
    {"Member_ID":"901870","First_Name":"Lois","Last_Name":"Griffin","Gender":"F","Age":"47","Height":"52","Weight":"128","Hours_Sleep":"9","Calories_Consumed":"2182","Exercise_Calories_Burned":"317","Date":"2017-09-23", "Step_Count":1500},
    {"Member_ID":"901870","First_Name":"Lois","Last_Name":"Griffin","Gender":"F","Age":"47","Height":"52","Weight":"128","Hours_Sleep":"6","Calories_Consumed":"1952","Exercise_Calories_Burned":"629","Date":"2017-10-18", "Step_Count":1000},
    {"Member_ID":"901870","First_Name":"Lois","Last_Name":"Griffin","Gender":"F","Age":"47","Height":"52","Weight":"127","Hours_Sleep":"5","Calories_Consumed":"1894","Exercise_Calories_Burned":"787","Date":"2017-10-07", "Step_Count":190},
    {"Member_ID":"901870","First_Name":"Lois","Last_Name":"Griffin","Gender":"F","Age":"47","Height":"52","Weight":"127","Hours_Sleep":"9","Calories_Consumed":"2322","Exercise_Calories_Burned":"787","Date":"2017-10-23", "Step_Count":290},
    {"Member_ID":"901870","First_Name":"Lois","Last_Name":"Griffin","Gender":"F","Age":"47","Height":"52","Weight":"127","Hours_Sleep":"6","Calories_Consumed":"2108","Exercise_Calories_Burned":"989","Date":"2017-09-15", "Step_Count":600},
    {"Member_ID":"901870","First_Name":"Lois","Last_Name":"Griffin","Gender":"F","Age":"47","Height":"52","Weight":"127","Hours_Sleep":"6","Calories_Consumed":"2373","Exercise_Calories_Burned":"442","Date":"2017-09-19", "Step_Count":1009},
    {"Member_ID":"926494","First_Name":"Corissa","Last_Name":"Aguiler","Gender":"F","Age":"39","Height":"53","Weight":"130","Hours_Sleep":"8","Calories_Consumed":"2501","Exercise_Calories_Burned":"990","Date":"2017-09-11", "Step_Count":590},
    {"Member_ID":"926494","First_Name":"Corissa","Last_Name":"Aguiler","Gender":"F","Age":"39","Height":"53","Weight":"130","Hours_Sleep":"7","Calories_Consumed":"2014","Exercise_Calories_Burned":"842","Date":"2017-09-03", "Step_Count":490},
    {"Member_ID":"926494","First_Name":"Corissa","Last_Name":"Aguiler","Gender":"F","Age":"39","Height":"53","Weight":"128","Hours_Sleep":"9","Calories_Consumed":"1995","Exercise_Calories_Burned":"959","Date":"2017-09-07", "Step_Count":780},
    {"Member_ID":"926494","First_Name":"Corissa","Last_Name":"Aguiler","Gender":"F","Age":"39","Height":"53","Weight":"130","Hours_Sleep":"8","Calories_Consumed":"1872","Exercise_Calories_Burned":"718","Date":"2017-10-07", "Step_Count":1000},
    {"Member_ID":"926494","First_Name":"Corissa","Last_Name":"Aguiler","Gender":"F","Age":"39","Height":"53","Weight":"130","Hours_Sleep":"8","Calories_Consumed":"2197","Exercise_Calories_Burned":"772","Date":"2017-09-28", "Step_Count":1200},
    {"Member_ID":"926494","First_Name":"Corissa","Last_Name":"Aguiler","Gender":"F","Age":"39","Height":"53","Weight":"130","Hours_Sleep":"8","Calories_Consumed":"1949","Exercise_Calories_Burned":"802","Date":"2017-09-09", "Step_Count":1100},
    {"Member_ID":"926494","First_Name":"Corissa","Last_Name":"Aguiler","Gender":"F","Age":"39","Height":"53","Weight":"128","Hours_Sleep":"9","Calories_Consumed":"1756","Exercise_Calories_Burned":"436","Date":"2017-10-06", "Step_Count":900},
    {"Member_ID":"926494","First_Name":"Corissa","Last_Name":"Aguiler","Gender":"F","Age":"39","Height":"53","Weight":"129","Hours_Sleep":"7","Calories_Consumed":"2060","Exercise_Calories_Burned":"711","Date":"2017-09-01", "Step_Count":2000},
    {"Member_ID":"926494","First_Name":"Corissa","Last_Name":"Aguiler","Gender":"F","Age":"39","Height":"53","Weight":"130","Hours_Sleep":"5","Calories_Consumed":"2229","Exercise_Calories_Burned":"727","Date":"2017-10-04", "Step_Count":800},
    {"Member_ID":"926494","First_Name":"Corissa","Last_Name":"Aguiler","Gender":"F","Age":"39","Height":"53","Weight":"130","Hours_Sleep":"7","Calories_Consumed":"1674","Exercise_Calories_Burned":"541","Date":"2017-09-15", "Step_Count":600},
    {"Member_ID":"441804","First_Name":"Olga","Last_Name":"Keig","Gender":"F","Age":"52","Height":"53","Weight":"128","Hours_Sleep":"9","Calories_Consumed":"1810","Exercise_Calories_Burned":"425","Date":"2017-10-18", "Step_Count":1000},
    {"Member_ID":"441804","First_Name":"Olga","Last_Name":"Keig","Gender":"F","Age":"52","Height":"53","Weight":"128","Hours_Sleep":"7","Calories_Consumed":"2373","Exercise_Calories_Burned":"516","Date":"2017-09-02", "Step_Count":1000},
    {"Member_ID":"441804","First_Name":"Olga","Last_Name":"Keig","Gender":"F","Age":"52","Height":"53","Weight":"128","Hours_Sleep":"8","Calories_Consumed":"1842","Exercise_Calories_Burned":"818","Date":"2017-10-07", "Step_Count":1500},
    {"Member_ID":"441804","First_Name":"Olga","Last_Name":"Keig","Gender":"F","Age":"52","Height":"53","Weight":"130","Hours_Sleep":"7","Calories_Consumed":"2106","Exercise_Calories_Burned":"415","Date":"2017-09-16", "Step_Count":700},
    {"Member_ID":"441804","First_Name":"Olga","Last_Name":"Keig","Gender":"F","Age":"52","Height":"53","Weight":"129","Hours_Sleep":"7","Calories_Consumed":"1971","Exercise_Calories_Burned":"433","Date":"2017-10-19", "Step_Count":1000}
]

var calories_retained = []
var calories_burned = []
var categories = []
var step_count = []

for (let i = 0; i < json.length; i++) {
    console.log(json[i]);
    calories_retained.push(json[i].Calories_Consumed - json[i].Exercise_Calories_Burned);
    console.log(calories_retained);
    calories_burned.push(json[i].Exercise_Calories_Burned/1);
    console.log(calories_burned);
    categories.push(i+1);
    console.log(categories);
    step_count.push(json[i].Step_Count);
    console.log(step_count);
}

const highchartOptions = {
    chart: {
        height: '45%',
        width: 1200,
        type: 'column'
    },
    credits: {
        text: " ",
        href: " "
    },
    title: {
        text: 'Calorie Intake Over Time'
    },

    xAxis: {
        categories: categories,
        title: {
            text: 'Day of the Month'
        }
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
        data: calories_burned
    }, {
        name: 'Calories Retained',
        data: calories_retained
    }]
};

const highchartOptions1 = {
    chart: {
        height: '45%',
        width: 1200,
        zoomType: 'x'
    },
    credits: {
        text: " ",
        href: " "
    },
    title: {
        text: 'Step Count Over Time'
    },
    subtitle: {
        text: document.ontouchstart === undefined ?
                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
    },
    xAxis: {
        categories: categories,
        title: {
            text: 'Day of the Month'
        }
    },
    yAxis: {
        title: {
            text: 'Step Count'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
        }
    },

    series: [{
        type: 'area',
        name: 'Step Count',
        data: step_count
    }]
}


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
            <div className='row d-flex justify-content-center'>
              <ReactHighcharts config={highchartOptions1} />
            </div>
        </p>
      </div>
    );
  }
}

export default App;
