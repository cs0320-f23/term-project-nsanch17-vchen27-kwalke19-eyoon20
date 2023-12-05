import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect, useRef } from "react";
import {
  overlayData,
  geoLayer,
  isFeatureCollection,
  searchLayer,
  overlaySearchData,
  overlayIncomeData,
  incomeLayer,
  incomeInfo,
} from "./overlay";
import Search from "./Search";
import Redlining from "./Redlining";

import Map, {
  ViewState,
  ViewStateChangeEvent,
  MapLayerMouseEvent,
  Source,
  Layer,
  PointLike,
  MapRef,
  MapboxGeoJSONFeature,
  Popup,
} from "react-map-gl";

import { myKey } from "./private/key";

let requestedState: string = "";
let requestedCity: string = "";
let requestedName: string = "";

/**
 * React component for MapBox that is displayed on web page
 * @returns
 */
export default function MapBox() {
  const [incomeHoverInfo, setIncomeHoverInfo] = useState<{
    coordinates: [number, number] | null;
    content: React.ReactNode | null;
  }>({
    coordinates: null,
    content: null,
  });

  const mapRef = useRef<MapRef>(null);

  const [hoveredFeature, setHoveredFeature] = useState<MapboxGeoJSONFeature>(
    // Initialize with a default feature or an empty object
    // You should replace this with an appropriate default value for your use case
    {} as MapboxGeoJSONFeature
  );

  const onHover = (event: MapLayerMouseEvent) => {
    const features = event.features;

    if (features && features.length > 0) {
      const hoveredIncomeFeature = features[0];

      if (hoveredIncomeFeature && hoveredIncomeFeature.properties) {
        setHoveredFeature(hoveredIncomeFeature);
      }
    } else {
      setHoveredFeature({} as MapboxGeoJSONFeature);
    }
  };

  const onMapLeave = () => {
    setHoveredFeature({} as MapboxGeoJSONFeature);
  };

  // Assuming hoveredFeature is of type MapboxGeoJSONFeature | null
  if (hoveredFeature && hoveredFeature.properties) {
    // Now TypeScript knows that hoveredFeature.properties is not null
    const properties = hoveredFeature.properties;
    // Access the properties...
    console.log(properties); // or perform other actions
  } else {
    // Handle the case when hoveredFeature or hoveredFeature.properties is null
    console.log("No feature selected"); // or perform other actions
  }

  const [popupInfo, setPopupInfo] = useState<{
    coordinates: [number, number] | null;
    content: React.ReactNode | null;
  }>({
    coordinates: null,
    content: null,
  });

  const [viewState, setViewState] = useState({
    longitude: -71.418884,
    latitude: 41.825226,
    zoom: 10,
  });

  const [overlay, setOverlay] = useState<GeoJSON.FeatureCollection | undefined>(
    undefined
  );

  const handleSubmit = (e: MapLayerMouseEvent) => {
    console.log(e);
    console.log(e.lngLat.lat);
    console.log(e.lngLat.lng);
    console.log(e.point.x + " " + e.point.y);
    const bbox: [PointLike, PointLike] = [
      [e.point.x - 5, e.point.y - 5],
      [e.point.x + 5, e.point.y + 5],
    ];

    if (mapRef != null && mapRef.current != null) {
      const selectedFeatures: MapboxGeoJSONFeature[] =
        mapRef.current.queryRenderedFeatures(bbox, {});
      const fips = selectedFeatures.map((feature) => feature.properties);

      if (fips[0] != null) {
        console.log(fips[0].state);
        console.log(fips[0].city);
        console.log(fips[0].name);

        if (fips[0].state != null && fips[0].state != null) {
          requestedState = fips[0].state;
          requestedCity = fips[0].city;
          requestedName = fips[0].name;
        } else {
          requestedState = "Not a redlining area";
          requestedCity = "Not a redlining area";
          requestedName = "Not a redlining area";
        }
      }
    }
  };

  const [searchOverlay, setSearchOverlay] = useState<
    GeoJSON.FeatureCollection | undefined
  >(undefined);

  const [incomeOverlay, setIncomeOverlay] = useState<
    GeoJSON.FeatureCollection | undefined
  >(undefined);

  const [searchKeyword, setSearchKeyword] = useState("");

  // Add these state variables at the top of your component function
  const [boxInfo, setBoxInfo] = useState<{
    name: string;
    income1: string;
    income2: string;
    income3: string;
  }>({
    name: "",
    income1: "",
    income2: "",
    income3: "",
  });

  const [boxVisible, setBoxVisible] = useState(false);

  // useEffect for when overlay (highlighted redlining) is updated
  useEffect(() => {
    overlayData().then((data) => {
      setOverlay(() => {
        if (isFeatureCollection(data)) {
          return data;
        }

        return undefined;
      });
    });
  }, []);

  // useEffect for when searchOverlay (highlighted searched areas) is updated
  useEffect(() => {
    overlaySearchData(searchKeyword).then((data) => {
      setSearchOverlay(() => {
        if (isFeatureCollection(data)) {
          return data;
        }
        return undefined;
      });
    });
  }, [searchKeyword]);

  // useEffect for when incomeOverlay is updated
  useEffect(() => {
    console.log("use effect income");
    overlayIncomeData().then((data) => {
      setIncomeOverlay(() => {
        if (isFeatureCollection(data)) {
          return data;
        }
        return undefined;
      });
    });
  }, []);

  function onMapClick(e: MapLayerMouseEvent) {
    console.log(e);
    console.log(e.lngLat.lat);
    console.log(e.lngLat.lng);
    console.log(e.point.x + " " + e.point.y);
    const bbox: [PointLike, PointLike] = [
      [e.point.x - 5, e.point.y - 5],
      [e.point.x + 5, e.point.y + 5],
    ];

    if (mapRef != null && mapRef.current != null) {
      const selectedFeatures: MapboxGeoJSONFeature[] =
        mapRef.current.queryRenderedFeatures(bbox, {});
      const fips = selectedFeatures.map((feature) => feature.properties);

      if (fips[0] != null) {
        console.log(fips[0].state);
        console.log(fips[0].city);
        console.log(fips[0].name);

        if (fips[0].state != null && fips[0].state != null) {
          requestedState = fips[0].state;
          requestedCity = fips[0].city;
          requestedName = fips[0].name;
        } else {
          requestedState = "Not a redlining area";
          requestedCity = "Not a redlining area";
          requestedName = "Not a redlining area";
        }
      }
    }
  }

  function onMapClick2(e: MapLayerMouseEvent) {
    console.log(e);
    console.log(e.lngLat.lat);
    console.log(e.lngLat.lng);
    console.log(e.point.x + " " + e.point.y);

    // Clicked point coordinates
    const clickedPoint: [number, number] = [e.lngLat.lng, e.lngLat.lat];

    // Find the nearest city in incomeInfo
    let nearestCity: GeoJSON.Feature | undefined;
    let minDistance = Number.MAX_VALUE;

    for (const feature of incomeInfo.features) {
      if (feature.geometry?.type === "Point" && feature.geometry.coordinates) {
        const cityCoordinates: [number, number] = feature.geometry
          .coordinates as [number, number];
        console.log(cityCoordinates);

        // Calculate distance using Haversine formula
        const distance = haversineDistance(clickedPoint, cityCoordinates);

        // Update nearest city if this one is closer
        if (distance < minDistance) {
          minDistance = distance;
          nearestCity = feature;
        }
      }
    }

    if (nearestCity) {
      console.log("Nearest city:", nearestCity.properties?.name);
      console.log("Income:", nearestCity.properties?.income);

      setBoxInfo({
        name: nearestCity.properties?.name || "Not a redlining area",
        income1: nearestCity.properties?.income1 || "Not a redlining area",
        income2: nearestCity.properties?.income2 || "Not a redlining area",
        income3: nearestCity.properties?.income3 || "Not a redlining area",
      });

      // Make the box visible
      setBoxVisible(true);

      // Do whatever you want with the nearest city information
      requestedState = nearestCity.properties?.name || "Not a redlining area";
      requestedCity = nearestCity.properties?.income || "Not a redlining area";
      requestedName = nearestCity.properties?.name || "Not a redlining area";
    } else {
      setBoxInfo({
        name: "Not a redlining area",
        income1: "Not a redlining area",
        income2: "Not a redlining area",
        income3: "Not a redlining area",
      });

      requestedState = "Not a redlining area";
      requestedCity = "Not a redlining area";
      requestedName = "Not a redlining area";
    }
  }

  // Function to calculate Haversine distance between two points
  function haversineDistance(
    coord1: [number, number],
    coord2: [number, number]
  ): number {
    const [lat1, lon1] = coord1;
    const [lat2, lon2] = coord2;

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in kilometers
    return distance;
  }

  // Function to convert degrees to radians
  function deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        height: "100vh",
        position: "relative",
      }}
    >
      {" "}
      {/* Search */}
      <div
        style={{
          position: "absolute",
          top: 15,
          left: 15,
          zIndex: 2,
        }}
      >
        <Search onSearch={setSearchKeyword} />
      </div>
      <Map
        mapboxAccessToken={myKey}
        longitude={viewState.longitude}
        latitude={viewState.latitude}
        zoom={viewState.zoom}
        onMove={(ev: ViewStateChangeEvent) => setViewState(ev.viewState)}
        style={{ width: window.innerWidth, height: window.innerHeight }}
        mapStyle={"mapbox://styles/mapbox/streets-v12"}
        onClick={onMapClick2}
        onMouseEnter={onHover}
        onMouseLeave={() => setHoveredFeature({} as MapboxGeoJSONFeature)}
        aria-label={"Map"}
      >
        <Source id="geo_data" type="geojson" data={overlay}>
          <Layer id={geoLayer.id} type={geoLayer.type} paint={geoLayer.paint} />
        </Source>
        <Source id="search_data" type="geojson" data={searchOverlay}>
          <Layer
            id={searchLayer.id}
            type={searchLayer.type}
            paint={searchLayer.paint}
          />
        </Source>
        <Source id="income_data" type="geojson" data={incomeOverlay}>
          <Layer
            id={incomeLayer.id}
            type={incomeLayer.type}
            paint={incomeLayer.paint}
          />
        </Source>
      </Map>
      <div
        style={{
          position: "absolute",
          top: 15,
          right: 15,
          zIndex: 2,
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid #ccc",
          display: boxVisible ? "block" : "none",
        }}
      >
        <h3>{boxInfo.name}</h3>
        <p>Median Family Income: {boxInfo.income1}</p>
        <p>Median Household Income: {boxInfo.income2} </p>
        <p>Median Per Capita Income: {boxInfo.income3} </p>
      </div>
      <Redlining
        state={requestedState}
        city={requestedCity}
        name={requestedName}
      />
      {hoveredFeature?.geometry?.type === "Point" && (
        <Popup
          latitude={hoveredFeature.geometry.coordinates[1]}
          longitude={hoveredFeature.geometry.coordinates[0]}
          onClose={() => setHoveredFeature({} as MapboxGeoJSONFeature)}
        >
          <div>
            <h3>{hoveredFeature.properties?.name}</h3>
            {hoveredFeature.properties?.income && (
              <p>Income: {hoveredFeature.properties.income}</p>
            )}
          </div>
        </Popup>
      )}
    </div>
  );
}
