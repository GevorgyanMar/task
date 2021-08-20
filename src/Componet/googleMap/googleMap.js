import React from "react";
import GoogleMapReact from "google-map-react";
import data from './data.json'
const GoogleMaps = ({ latitude, longitude }) => {
    const ModelsMap = (map, maps) => {

        let dataArray = [];

        {
            data.map((markerJson) => dataArray.push(markerJson));
        }

        for (let i = 0; i < dataArray.length; i++) {
            let marker = new maps.Marker({
                position: { lat: dataArray[i].lat, lng: dataArray[i].lng },
                map,
                label: dataArray[i].id,
            });
        }
    };

    return (
        <div style={{ height: "400px", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCqSZic3zwO874Ld4pHJLqTaA8pRfFrNnQ' }}
                defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
                defaultZoom={10}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps)}
            ></GoogleMapReact>
        </div>
    );
};

export default GoogleMaps;
