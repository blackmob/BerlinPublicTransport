
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/mapActions';
import Map, {GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component {

    boundsChanged = null;

    componentDidMount() {
    }

    onReady = () => {
        //const {google} = this.props;
        //google.maps.Map.addListener('bounds_changed', () => {
        //    this.props.actions.zoomIn(google.maps.Map.zoom, google.maps.Map.getBounds());
        //});
    }

    render() {
        const { zoomScale, center } = this.props;
        return<Map google={this.props.google} zoom={zoomScale}
            onReady={this.onReady}
            style={{width: '100%', height: '100%', position: 'relative'}}
            className={'map'}            
            containerStyle={{}}
            center={{lat:52.531677, lng:13.381777}}>        
            {this.props.children}
        </Map>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        zoomScale: state.map.zoomScale,
        center: state.map.center
    };
}

let container = connect(mapStateToProps, mapDispatchToProps)(MapContainer);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDc4dpJTclW7rgOiWhbCZTvwt6aafphfKI',
  libraries: ['places','visualization']
})(container)