import React from 'react';
import {connect} from 'react-redux';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import './LanguageChart.css';

class LanguageChart extends React.Component {

  constructor(props){
    super(props);
    this.chartRef = React.createRef(); // Creates direct access to the DOM node chart.js will use
    this.buildChart = this.buildChart.bind(this);
    this.countRepoLanguage = this.countRepoLanguage.bind(this);
    this.filterLanguages = this.filterLanguages.bind(this);
  }  

  componentDidMount() {  
    console.log('mounted')
    setTimeout(() => {this.buildChart();}, 1500);
  }
  buildChart(){
  const myChartRef = this.chartRef.current.getContext('2d'); 
    let languages = this.filterLanguages(this.props.repositoryList);
    let data = Object.values(languages);
    let labels = Object.keys(languages);
  this.myChart = new Chart(myChartRef, {
    type: 'doughnut', 
    data: {      
      labels: labels,
      datasets: [
        {
          data: data,
          hoverBorderWidth: 15,
          label: ''
        }
      ],
    },
    options: {
      animation:{
        circumference: 15 * Math.PI,
        animateRotate: true
      },
      legend: false,
      responsive: true
    }
  });
}
  filterLanguages(repoList) {  
    return repoList.reduce(this.countRepoLanguage, {});
  }

   countRepoLanguage(counter, repository) {
   counter[repository.language] = (counter[repository.language] || 0) + 1;
   return counter;
  }

  render(){
    return (
      <div className='languageChart-wrapper'>
        <h5>Project Languages</h5>
        <canvas
          id='pieChart'
          ref={this.chartRef}
          width='403'
          height='302'
          />
      </div>
    );
  }
}

LanguageChart.spropTypes = {
  repositoryList: PropTypes.array
}

export default LanguageChart;
