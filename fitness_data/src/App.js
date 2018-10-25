import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHighcharts from'react-highcharts'; // Expects that Highcharts was loaded in the code.
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner);

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        this.round = this.round.bind(this)
    }

    componentWillMount(){
        let url = 'https://us-central1-weighty-arch-213515.cloudfunctions.net/function-7';
        fetch(url)
            .then(response => response)
            .then((res) => res.json())
            .then(d => this.setState({data: d}))
    }

    round(value, precision) {
        let multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    render(){
        let data = this.state.data;
        // console.log(data);
        let calories_retained = [];
        let calories_burned = [];
        let categories = [];
        let step_count = [];
        let hours_sleep = [];
        let avgSleep = 0;
        let avgConsumed = 0;
        let avgBurned = 0;
        let avgStep = 0;

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
            avgSleep += data[i]["Hours_Sleep"];
            avgConsumed += data[i]["Calories_Consumed"];
            avgBurned += data[i]["Exercise_Calories_Burned"];
            avgStep += data[i]["Step_Count"];
        });

        avgSleep /= data.length;
        avgConsumed /= data.length;
        avgBurned /= data.length;
        avgStep /= data.length;

        const highchartOptions = {
            chart: {
                height: '45%',
                width: 1200,
                type: 'column',
                zoomType: 'x',
                scrollablePlotArea: {
                    minWidth: 600,
                    scrollPositionX: 1
                }
            },
            credits: {
                text: " ",
                href: " "
            },
            title: {
                text: 'Calorie Intake Over Time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                categories: categories,
                title: {
                    text: 'Month'
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
                    return '<b/' + this.x + '><br/>' +
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

        let ideal_consumed = 0;
        let ideal_sleep = '';
        let height = 0;
        let weight = 0;
        let gender = '';
        let full_name = '';
        let feet = 0;
        let inches = 0;
        let age = 0;
        let bmi = 0;
        if(data.length > 0) {
            height = data[data.length - 1]["Height"];
            inches = height%10;
            feet = String(height - height%10)[0];
            full_name = data[data.length - 1]["First_Name"]+ " " + data[data.length - 1]["Last_Name"];
            weight = data[data.length - 1]["Weight"];
            gender = data[data.length - 1]["Gender"];
            age = data[data.length - 1]["Age"]/1;
            console.log(age);
            ideal_consumed = 10 * weight * .453592 + 6.25 * (feet*12 + inches) * 2.54 - 5 * age + 5;
            bmi = 703 * weight/((feet*12 + inches)*(feet*12 + inches));
            bmi = this.round(bmi, 2);
            ideal_sleep = (age > 64 ? "7 to 8 hours"
                : age > 25 ? "7 to 9"
                    : age > 17 ? "7 to 9"
                        : age > 13 ? "8 to 10"
                            : age > 5 ? "9 to 11"
                                : age > 2 ? "10 to 13"
                                    : "11 to 14 hours");
        }



        return (this.state.data.length > 0 ? (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Good Morning, {full_name.split(" ")[0]}!</h1>
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
                            <a className="nav-item nav-link" id="nav-prof-tab" data-toggle="tab" href="#nav-prof"
                               role="tab" aria-controls="nav-prof" aria-selected="false">Profile</a>
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
                        <div className="tab-pane fade" id="nav-prof" role="tabpanel" aria-labelledby="nav-prof-tab">
                            <div className="row justify-content-center">
                                <div className="col-sm-3">
                                    <div className="card border-primary">
                                        <div className="card-body">
                                            <h5 className="card-title">Calories Consumed</h5>
                                            <p className="card-text">Your average consumed calories is {Math.round(avgConsumed)}. The recommended amount is {Math.round(ideal_consumed)}.</p>
                                            <a href="#nav-home" data-toggle="tab" className="btn btn-primary" role="tab" aria-controls="nav-home">Check your data <i className="fa fa-arrow-up"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card border-dark">
                                        <div className="card-body">
                                            <h5 className="card-title">Sleep</h5>
                                            <p className="card-text">Your average sleep time is {Math.round(avgSleep)} hours. Your ideal sleep average should be around {ideal_sleep} hours.</p>
                                            <a href="#nav-sleep" data-toggle="tab" className="btn btn-dark" role="tab" aria-controls="nav-sleep">Check your data <i className="fa fa-arrow-up"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row justify-content-center' id='bmi-row'  style={{marginBottom: 0, paddingBottom: 0, marginTop: 0, paddingTop: 0 }}>
                                <div className="col-sm-3 align-self-center"  style={{marginBottom: 0, paddingBottom: 0, marginTop: 0, paddingTop: 0 }}>
                                    <div className="card border-0"  style={{marginBottom: 0, paddingBottom: 0, marginTop: 0, paddingTop: 0 }}>
                                        <div className="card-body" style={{marginBottom: 0, paddingBottom: 0 }}>
                                            <p  style={{marginBottom: 0, paddingBottom: 0}}>Your <b>BMI</b> is {bmi}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='tableaaaaa' className='justify-content-center row' style={{marginTop: 0, paddingTop: 0}}>
                                <div className="col-xs-6">
                                    <table className="text-left table table-borderless">
                                        <tbody>
                                        <tr>
                                            <th scope="col">Full Name</th>
                                            <td>{full_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="col">Age</th>
                                            <td>{age}</td>
                                        </tr>
                                        <tr>
                                            <th scope="col">Gender</th>
                                            <td>{gender === 'M' ? "Male" : "Female"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Height (in)</th>
                                            <td>{feet + "'" + inches+"\""}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Weight (lb)</th>
                                            <td>{weight}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Average Step Count</th>
                                            <td>{Math.round(avgStep)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Average Calories Consumed</th>
                                            <td>{Math.round(avgConsumed)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Average Calories Burned</th>
                                            <td>{Math.round(avgBurned)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Average Hours of Sleep</th>
                                            <td>{Math.round(avgSleep)}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    :
        (
            <div className='container'>
            <div className='row vertical-center-row'>
            <div className="text-center col-sm-12 col-xs-offset-4 align-items-center justify-content-center">
                <div className="loader"/>
            </div>
            </div>
            </div>
        )
    );
    }
}

export default App;