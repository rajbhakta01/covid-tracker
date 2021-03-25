import React from 'react';

class stateWise extends React.Component {
  constructor(props) {
    super(props);
    let newChartData = props.chartData.map((elem) => {
      let dateData = elem.lastupdatedtime.split('/');
      let year = dateData[2].split(' ')[0];
      let time = dateData[2].split(' ')[1].split(':');
      let date = new Date(year, dateData[1] - 1, dateData[0], time[0], time[1], time[2]);
      elem.date = date;
      return elem;
    });
    newChartData = newChartData.filter((elem) => {
      if (elem.state !== 'State Unassigned' && elem.state !== 'Total') return elem;
      return null;
    });
    newChartData = newChartData.sort((a, b) => {
      return b.date - a.date;
    });
    this.state = { statewise: newChartData };
  }
  render() {
    return (
      <React.Fragment>
        <div className="statewise-wrapper">
          <p className="statewise-title">State Wise Latest Data</p>
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Sate</th>
                <th scope="col">Confirmed</th>
                <th scope="col">Active</th>
                <th scope="col">Deaths</th>
                <th scope="col">Recovered</th>
                <th scope="col">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {this.state.statewise.map((elem, index) => {
                return (
                  <tr key={elem.state}>
                    <th scope="row">{index + 1}</th>
                    <td>{elem.state}</td>
                    <td>{elem.confirmed}</td>
                    <td>{elem.active}</td>
                    <td>{elem.deaths}</td>
                    <td>{elem.recovered}</td>
                    <td>{elem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default stateWise;
