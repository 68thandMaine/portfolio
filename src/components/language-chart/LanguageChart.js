import React from 'react';
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
    this.createColors = this.createColors.bind(this);
  }  

  componentDidMount() {  
    setTimeout(() => {
      this.buildChart();
    }, 1500);
  }
  
  buildChart(){
  const myChartRef = this.chartRef.current.getContext('2d'); 
    let languages = this.filterLanguages(this.props.repositoryList);
    let data = Object.values(languages);
    let tableLabels = Object.keys(languages);
    let colors = this.createColors(data);
  this.myChart = new Chart(myChartRef, {
    type: 'doughnut', 
    data: {      
      labels: tableLabels,
      datasets: [{
          data: data,
          backgroundColor: colors,
          hoverBorderWidth: 5,
          hoverBackgroundColor: 'transparent',
          label: ''
        }],
    },
    options: {
      animation:{
        animationEasing: 'easeInOutQuart',
        duration: 3000,
        circumference: 15 * Math.PI,
        animateRotate: true,
        animateScale: true
      },
      responsive: true,
      rotation: 90,
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
  createColors(array) {
    let colors = [];
    for (let i = 0; i < array.length; i++) {
      const number1 = Math.floor(Math.random()*255 +1);
      const number2 = Math.floor(Math.random()*255 +1);
      const number3 = Math.floor(Math.random()*255 +1);
      const color = `rgba(${number1}, ${number2}, ${number3}, 0.9)`;
      colors.push(color);
    }
    return colors;
  }

  render(){
    return (
      <div className='languageChart-wrapper'>
        <h2>PROJECT LANGUAGES</h2>
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
