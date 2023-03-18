import { useCallback, useMemo, useRef } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { supabase } from "@/lib/supabase";

//display multiple markers by using forEach method or mapping through the array
// coords.forEach((cord) => console.log(Object.values(cord)[0]));

const Map = ({ locations }) => {
  const mapRef = useRef();
  const center = useMemo(
    () => ({
      lat: locations[0].city_latitude,
      lng: locations[0].city_longitude,
    }),
    []
  );
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      mapId: "8b0f260157caa759",
    }),
    []
  );

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
    <div className="container">
      <div className="ui">
        <h1 className="ui-header" style={{ textAlign: "center" }}>
          Directions
        </h1>
      </div>
      <div className="map">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        >
          {locations.slice(0, 10).map((location) => {
            return (
              <MarkerF
                position={{
                  lat: location.city_latitude,
                  lng: location.city_longitude,
                }}
              ></MarkerF>
            );
          })}
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;
