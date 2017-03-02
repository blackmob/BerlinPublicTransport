import React, { Component } from 'react';

import MapContainer from './MapContainer';
import {Marker} from 'google-maps-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CurrentStatus extends Component {

    render() {
        const { actions, radar } = this.props;
        return <MapContainer onFetchData={this.props.onFetchData}>
            {radar.map((item) => {
                return <Marker name={item.direction} position={{lat: item.latitude, lng: item.longitude}} />               
            })}
        </MapContainer>        
    }
}

function mapStateToProps(state) {
    return {
        radar: state.radar.radar
    };
}

export default connect(mapStateToProps, null)(CurrentStatus);