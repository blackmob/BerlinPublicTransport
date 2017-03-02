import * as actions from '../actions/mapActions';

import Map, { GoogleApiWrapper } from 'google-maps-react'
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MapContainer extends Component {

    componentDidMount() {
    }

    zoomChange = (map) => {
        this.props.actions.zoomChange(map.zoom, map.getBounds());
        this.props.onFetchData();        
    }

    onReady = (mapProps, map) => {
        map.addListener('bounds_changed', () =>{this.zoomChange(map)});
    }

    render() {
        const { zoomScale, center } = this.props;
        return <Map google={this.props.google} zoom={zoomScale}
            onReady={this.onReady}
            style={{ width: '100%', height: '100%', position: 'relative' }}
            className={'map'}
            containerStyle={{}}
            center={{ lat: 52.531677, lng: 13.381777 }}>
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
    libraries: ['places', 'visualization']
})(container)