import * as actions from '../actions/radarActions';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MapContainer from './MapContainer';
import {Marker} from 'google-maps-react';

class CurrentStatus extends Component {

    componentDidMount() {
        this.props.actions.fetchRadarData();
    }

    onClick = (city) => {

    }

    render() {
        const { actions, radar } = this.props;
        return <MapContainer>
            {radar.map((item) => {
                return <Marker name={item.direction} position={{lat: item.latitude, lng: item.longitude}} />               
            })}
        </MapContainer>
        
    }


}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        radar: state.radar.radar
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStatus);