import React from 'react';
import { Chart } from 'react-charts';

class Mychart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.graphData.data, axes: props.graphData.axes };
  }
  changeGraphData = (graphData) => {
    this.setState({ data: graphData.data, axes: graphData.axes });
  };
  render() {
    return (
      <div style={{ height: '300px' }}>
        <Chart data={this.state.data} series={{ type: 'bar' }} axes={this.state.axes} tooltip />
      </div>
    );
  }
}
export default Mychart;
