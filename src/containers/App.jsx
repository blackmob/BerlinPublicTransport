import './App.css';
import 'office-ui-fabric-core/dist/css/fabric.css'

import React, { Component } from 'react';

import CurrentStatus from './CurrentStatus';
import DevTools from './DevTools';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Provider } from 'react-redux';
import { setBaseUrl } from 'office-ui-fabric-react/lib/Utilities';

setBaseUrl('./build/');

class App extends Component {
  render() {
    const { store } = this.props;
    return (<Provider store={store} >
      <Fabric>
        <div className="App">
          <div className="App-header">           
            <h2>Welcome to the Berlin public transport system</h2>
          </div>
          <p className="App-intro">
          </p>         
          <CurrentStatus/>
        </div>
      </Fabric>
    </Provider >
    );
  }
}

export default App;


