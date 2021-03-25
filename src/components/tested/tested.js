import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

class Tested extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.chartData };
    console.log(props.chartData);
  }
  render() {
    return (
      <React.Fragment>
        <div className="tested-wrapper">
          <p className="tested-title">Tested Latest Data</p>
          <div style={{ height: '360px' }}>
            <PieChart
              data={[
                { title: 'Total Samples Tested', value: Number(this.state.data.totalsamplestested), color: '#4AB5EB' },
                {
                  title: `Total RTPCR Samples`,
                  value: Number(this.state.data.totalrtpcrsamplescollectedicmrapplication),
                  color: '#FC6868',
                },
              ]}
              label={({ dataEntry }) => dataEntry.title}
              labelStyle={(index) => ({
                fill: '#fff',
                fontSize: '4px',
                fontFamily: 'sans-serif',
              })}
              radius={42}
              labelPosition={60}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tested;
