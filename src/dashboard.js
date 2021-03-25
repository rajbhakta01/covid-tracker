import React from 'react';
import api from './utils/Api/api';
import Cases from './components/cases/cases';
import StateWise from './components/stateWise/statewise';
import Tested from './components/tested/tested';

class Dashboard extends React.Component {
  state = { cases: [], statewise: [], tested: [] };
  componentDidMount() {
    document.getElementById('loader').style.display = 'block';
    api.get('/data.json').then((data) => {
      if (data.data.cases_time_series !== undefined) {
        this.setState({ cases: data.data.cases_time_series, statewise: data.data.statewise, tested: data.data.tested });
        document.getElementById('loader').style.display = 'none';
      }
    });
  }
  render() {
    if (!this.state.tested.length) return null;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="title-wrapper">
            <img alt="logo" height="50" src="https://www.coronatracker.com/_nuxt/img/262cfac.png" />
            <div className="title">COVID-19 Tracker India</div>
          </div>
          <Cases chartData={this.state.cases} />
          <div className="row">
            <div className="col-md-8">
              <StateWise chartData={this.state.statewise} />
            </div>
            <div className="col-md-4">
              <Tested chartData={this.state.tested[this.state.tested.length - 1]} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Dashboard;
