import React from 'react';
import Dashboard from './dashboard';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <div id="loader" className="loader-wrapper">
          <div className="loader">Loading...</div>
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
