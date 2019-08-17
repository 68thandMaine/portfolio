import React from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import './LanguageChart.css';

class LanguageChart extends React.Component {

  constructor(props){
    super(props);
    this.chartRef = React.createRef(); // Creates direct access to the DOM node chart.js will use
    this.filterLanguages = this.filterLanguages.bind(this);
    this.countRepoLanguage = this.countRepoLanguage.bind(this);
  }  
  componentDidUpdate() {
    const myChartRef = this.chartRef.current.getContext('2d'); 
    let languages = this.filterLanguages(this.props.sortedLanguages)
    let label = Object.getOwnPropertyNames(languages); 
    let data = Object.values(languages);
    new Chart(myChartRef, {
      type: 'pie', 
      data: {      
        datasets: [
          {
            data: data,
            hoverBorderWidth: 15,
            label: 'Repository Languages'
          }
        ],
        labels: label
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
  sortedLanguages: PropTypes
}

export default LanguageChart;
