import React, {Component} from 'react';
import axios from 'axios'
import { Line } from 'react-chartjs-2';

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'BitCoin',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

export default class Graph extends Component {
    constructor () {
        super();
        this.state = {
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'BitCoin',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          }
        }
      }
      componentWillMount() {
      axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2015-09-01&end=2019-05-01')
        .then(response => {
          let data = response.data.bpi
          let hold = this.state.data
          let allDates = Object.keys(data)
          let allPrices = Object.values(data)
          hold.labels= allDates
          hold.datasets[0].data = allPrices
          this.setState({data: hold})
          console.log(this.state.data.datasets.data)
        })
        .catch(error => {
          console.log(error);
        });
      }
    
    render() {
    return (
      <div>
        <h2>BitCoin Prices</h2>
        <Line ref="chart" data={this.state.data} />
      </div>
    );
  }

  

//   componentDidMount() {
//     const { datasets } = this.refs.chart.chartInstance.data
//     console.log(datasets[0].data);
//   }
}