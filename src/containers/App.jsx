import './App.css';
import 'office-ui-fabric-core/dist/css/fabric.css'

import * as actions from '../actions/radarActions';

import React, { Component } from 'react';

import CurrentStatus from './CurrentStatus';
import DevTools from './DevTools';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setBaseUrl } from 'office-ui-fabric-react/lib/Utilities';

setBaseUrl('./build/');

class App extends Component {

  onFetchData = () => {
      this.props.actions.fetchRadarData();    
  }

  render() {
    const { store } = this.props;

    return (<Provider store={store} >
      <Fabric>
        <div className="App">
          <div className="App-header">           
            <h2>This is a live view of the Berlin public transport system</h2>
            <PrimaryButton onClick={this.onFetchData}>Refresh</PrimaryButton>
          </div>
          <p className="App-intro">
          </p>         
          <CurrentStatus onFetchData={this.onFetchData}/>
        </div>
      </Fabric>
    </Provider >
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(App);
