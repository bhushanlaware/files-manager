import { LineStyle } from '@material-ui/icons';
import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, Polyline } from 'react-google-maps';
const MapComponent = withScriptjs(withGoogleMap((props =>
    <GoogleMap
        defaultZoom={8}
        center={props.position}
    >
        {props.polyline && <Polyline path={props.polyline && props.polyline.slice(0, 120)}
            geodesic={true}
            options={{
                strokeColor: "#ffc400",
                strokeOpacity: 1,
                strokeWeight: 4,
            }} />}
        {props.isMarkerShown && <Marker position={props.position} />}
    </GoogleMap>
)));

const GMapComponent = (props) => {
    return (<MapComponent
        position={props.polyline[0] || props.position}
        polyline={props.polyline}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />);
}

export default GMapComponent;
