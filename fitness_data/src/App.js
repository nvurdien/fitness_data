import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHighcharts from'react-highcharts'; // Expects that Highcharts was loaded in the code.

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount(){
        let url = 'https://us-central1-weighty-arch-213515.cloudfunctions.net/function-7';
        fetch(url)
            .then(response => response)
            .then((res) => res.json())
            .then(d => this.setState({data: d}))
    }

    render(){
        let data = this.state.data;
        // console.log(data);
        let calories_retained = [];
        let calories_burned = [];
        let categories = [];
        let step_count = [];
        let hours_sleep = [];

        data.forEach((day, i) => {
            // console.log(data[i]);
            calories_retained.push(data[i]["Calories_Consumed"] - data[i]["Exercise_Calories_Burned"]);
            // console.log(calories_retained);
            calories_burned.push(data[i]["Exercise_Calories_Burned"] / 1);
            // console.log(calories_burned);
            categories.push(i + 1);
            // console.log(categories);
            step_count.push(data[i]["Step_Count"]);
            // console.log(step_count);
            hours_sleep.push(data[i]["Hours_Sleep"] / 1);
            // console.log(hours_sleep);
        });

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
                    text: 'Day'
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
        };

        const highchartOptions2 = {
            colors: ['#434348'],
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
                text: 'Sleep Patterns'
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
                    text: 'Hours of Sleep'
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
                name: 'Hours',
                data: hours_sleep
            }]
        };

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">H E A L T H C A R E</h1>
                </header>
                <div className="App-intro text-center">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                               role="tab" aria-controls="nav-home" aria-selected="true">Calories</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                               role="tab" aria-controls="nav-profile" aria-selected="false">Step Count</a>
                            <a className="nav-item nav-link" id="nav-sleep-tab" data-toggle="tab" href="#nav-sleep"
                               role="tab" aria-controls="nav-sleep" aria-selected="false">Sleep</a>
                        </div>
                    </nav>
                    <div className="tab-content row d-flex justify-content-center" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                             aria-labelledby="nav-home-tab">
                            <ReactHighcharts config={highchartOptions}/>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                             aria-labelledby="nav-profile-tab">
                            <ReactHighcharts config={highchartOptions1}/>
                        </div>
                        <div className="tab-pane fade" id="nav-sleep" role="tabpanel" aria-labelledby="nav-sleep-tab">
                            <ReactHighcharts config={highchartOptions2}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;