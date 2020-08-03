import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import * as d3 from 'd3';
import burndownData from '../App_Data.csv'
import Chart from 'react-apexcharts'; 

export class ApplicationsBurnUp extends Component {

    state = {
        options: {},
        series: [{
            data: []
        }]
    }

    componentDidMount() {
        d3.csv(burndownData).then((data) => {
            console.log(data)
            var waveLabels = data.map(function(d) {return d['Wave']});
            var planData = data.map(function(d) {return parseInt(d['Cumulative Plan'])});
            var actualData = data.map(function(d) {return parseInt(d['Cumulative Actual'])});
            const maxServers = Math.max(...planData)*1.2

            var options = {
                chart: {
                    height: 350,
                    type: 'line',
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#545454', '#77B6EA'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Applications Migration Burnup',
                    align: 'center'
                },
                xaxis: {
                    categories: waveLabels,
                    title: {
                        text: 'Cutover Dates'
                    }
                },
                yaxis: {
                    title: {
                        text: 'Servers'
                    },
                    min: 0,
                    max: maxServers
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5
                }
            };
            var series = [
                    {
                        name: "Plan",
                        data: planData
                    },
                    {
                        name: "Actual",
                        data: actualData
                    }]
            

            this.setState({
                options: options,
                series: series
            })
        })
    }

    render() {
        return (
            <div>
               <Chart 
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    height="500"
                    width="1200"
                />
                
            </div>
        )
    }
}

export default ApplicationsBurnUp
