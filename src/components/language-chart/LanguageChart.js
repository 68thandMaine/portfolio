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
    setTimeout(() => {this.buildChart();}, 1000);
  }
  buildChart(){
  const myChartRef = this.chartRef.current.getContext('2d'); 
    let languages = this.filterLanguages(this.props.sortedLanguages);
    let data = Object.values(languages);
    let labels = Object.keys(languages);
    console.table(data, labels)
  this.myChart = new Chart(myChartRef, {
    type: 'pie', 
    data: {      
      datasets: [
        {
          data: data,
          hoverBorderWidth: 15,
          label: ''
        }
      ],
    labels: labels
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
        Chart Component here. I will be used to hold a graph detailing the different languages that are used in the projects.
        <canvas
          id='pieChart'
          ref={this.chartRef}
          />
      </div>
    );
  }
}

LanguageChart.propTypes = {
  sortedLanguages: PropTypes.array
}

export default LanguageChart;
