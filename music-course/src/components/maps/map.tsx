import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "250px",
};

const center = {
  lat: 16.07095162790312,
  lng: 108.20133258016408,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDX4RBYMnLTrmYyRC14HSbW5M-OzoHr8iQ",
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  console.log(map);
  const onLoad = React.useCallback(function callback(mapp: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    mapp.fitBounds(bounds);

    setMap(mapp);
  }, []);

  const onUnmount = React.useCallback(function callback(mapp: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} title="SUN MUSIC" />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
