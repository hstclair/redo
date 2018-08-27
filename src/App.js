
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import { borkAction } from './actions/borkAction';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	  <img src={logo} className="App-logo" alt="logo" />
	  <h1 className="App-title">Welcome to React</h1>
	</header>
	<p className="App-intro">
	  To get started, edit <code>src/App.js</code> and save to reload
	</p>
	<button onClick={this.simpleAction} >Test redux</button>
        <button onClick={this.borkAction} >Bork!</button>
	<pre>
	  { JSON.stringify(this.props) }
	</pre>
      </div>
    );
  }

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  borkAction = (event) => {
    this.props.borkAction();
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  borkAction: () => dispatch(borkAction())
});



export default connect(mapStateToProps, mapDispatchToProps)(App);


