import React, {useEffect} from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import './LanguageChart.css';

function LanguageChart(props) {
  let chartRef = React.createRef();

  useEffect(() => {  
    console.log('useEffect')
  function buildChart(){
      const myChartRef = chartRef.current.getContext('2d'); 
      let languages = filterLanguages(props.repositoryList);
      let data = Object.values(languages);
      let tableLabels = Object.keys(languages);
      let colors = createColors(data);
       new Chart(myChartRef, {
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
  function filterLanguages(repoList) {  
    return repoList.reduce(countRepoLanguage, {});
  }
  
   function countRepoLanguage(counter, repository) {
   counter[repository.language] = (counter[repository.language] || 0) + 1;
   return counter;
  }
  function createColors(array) {
    let colors = [];
    for (let i = 0; i < array.length; i++) {
      const hue = Math.floor(Math.random()* 10);
      const number1 = Math.floor(Math.random()*23);
      const number2 = Math.floor(Math.random()*255 +1);
      const number3 = Math.floor(Math.random()*255 +1);
      const color = `rgba(${number2}, ${number1}, ${number3}, 0.${hue}`;
      colors.push(color);
    }
    return colors;
  }
  
  buildChart();
}, [props.repositoryList, chartRef]);


  
    return (
      <div className='languageChart-wrapper' data-cy='chart'> 
        <h2>Quantity of projects / language on Github</h2>
        <canvas
          id='pieChart'
          ref={chartRef}
          width='6'
          height='6'
          />
      </div>
    );
}

LanguageChart.spropTypes = {
  repositoryList: PropTypes.array
}

export default LanguageChart;
