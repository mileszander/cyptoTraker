import React from 'react';
import axios from 'axios'
import {Line} from 'react-chartjs-2';
import Graph from './graph.jsx';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      prices: []
    }
  }

  render () {
    return (
    <div>
    <h1>My Cypto Tracker!</h1>
      <div style={styles}>
        <Graph prices={this.state.prices}/>
      </div>
    </div>
    )}
}

export default App;