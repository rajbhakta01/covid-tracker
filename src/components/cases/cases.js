import React from 'react';
import { DateRange, getLastDate } from '../../utils/dateRange';
import MyChart from './chart';
import generateGraphData from '../../utils/generateGraphData';

class Cases extends React.Component {
  state = { cases: [], graphData: null };
  constructor(props) {
    super(props);
    this.MyChartRef = React.createRef();
  }
  componentDidMount() {
    let range = DateRange(getLastDate(7), new Date());
    let weeklyData = [];
    this.props.chartData.forEach((i) => {
      if (range.indexOf(i.dateymd) !== -1) weeklyData.push(i);
    });
    let graphData = generateGraphData(weeklyData);
    this.setState({ cases: this.props.chartData, graphData: graphData });
  }
  _handleFilter = (e) => {
    let filter = e.target.value;
    let range = [];
    if (filter === 'daily') {
      range = DateRange(getLastDate(1), new Date());
    }
    if (filter === 'weekly') {
      range = DateRange(getLastDate(7), new Date());
    } else if (filter === 'montly') {
      range = DateRange(getLastDate(30), new Date());
    }
    let weeklyData = [];
    this.state.cases.forEach((i) => {
      if (range.indexOf(i.dateymd) !== -1) weeklyData.push(i);
    });
    let graphData = generateGraphData(weeklyData);
    this.setState({ graphData: graphData });
    this.MyChartRef.current.changeGraphData(graphData);
  };
  render() {
    if (this.state.graphData === null) return null;
    return (
      <React.Fragment>
        <div className="cases-wrapper">
          <div className="cases-flex">
            <p className="cases-title">All India Cases</p>
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <select className="form-control" name="cases-filter" defaultValue="weekly" onChange={this._handleFilter}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="montly">Monthly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <MyChart ref={this.MyChartRef} graphData={this.state.graphData} />
        </div>
      </React.Fragment>
    );
  }
}
export default Cases;
