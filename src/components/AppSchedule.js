import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import * as d3 from 'd3';
import scheduleData from '../App_Data.csv'
import Chart from 'react-apexcharts'; 

export class AppSchedule extends Component {
    state = {
        options: {},
        series: [{
            data: []
        }]
    }

    componentDidMount() {
        d3.csv(scheduleData).then((data) => {

            var waveLabels = data.map(function(d) {return d['Wave']});
            var planData = data.map(function(d) {return parseInt(d['Plan'])});
            var actualData = data.map(function(d) {return parseInt(d['Actual'])});

            const options = {
                title: {
                    text: 'Applications in Waves',
                    align: 'center'
                },
                chart: {
                    id: 'Waves'
                },
                xaxis: {
                    categories: waveLabels,
                    title: {
                        text: 'Waves'
                    }
                },
                yaxis: {
                    title: {
                        text: 'Servers',
                    },
                },
                colors: ['#4576b5', '#000000'],
            }

            const series = [{
                name: 'Planned',
                data: planData
            }, {
                name: 'Actual',
                data: actualData
            }]

            this.setState({
                options: options,
                series: series
            })
        });

        
    }

    render() {
        return (
            <div>
                <Chart 
                    options={this.state.options} 
                    series={this.state.series} 
                    type="bar" 
                    height="500"
                    width="1200"
                />
            </div>
        )
    }
}

export default AppSchedule
