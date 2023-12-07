import { FeatureCollection } from "geojson";
import { FillLayer, CircleLayer, Popup } from "react-map-gl";

// Import the raw JSON file
import rl_data from "./geodata/fullDownload.json";
// you may need to rename the downloaded .geojson to .json

export function isFeatureCollection(json: any): json is FeatureCollection {
  return json.type === "FeatureCollection";
}

export function overlayData(): Promise<GeoJSON.FeatureCollection | undefined> {
  const url = "http://localhost:3233/redlining";

  const response = fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("JSON Data:", data); // Log the JSON data
      return data["data"];
    })
    .catch((error) => {
      console.error(error);
      throw error; // Propagate the error
    });

  return response;
}

export async function overlaySearchData(
  args: String
): Promise<GeoJSON.FeatureCollection | undefined> {
  const url = "http://localhost:3233/searchAreas?searchTerm=" + args;

  const response = fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("JSON Search Data:", data); // Log the JSON data
      return data["data"];
    })
    .catch((error) => {
      console.error(error);
      throw error; // Propagate the error
    });

  return response;
}

/**
 * Fields that a valid load response is expected to have.
 * Used to narrow a load json into a response.
 */
interface jsonLoadResponse {
  result: string;
  filepath: string;
}

/**
 * Function to check if the json is a valid load response.
 * @param rjson is the json that the backend server returns.
 */
function isLoadSuccessful(rjson: any): rjson is jsonLoadResponse {
  if (!("result" in rjson)) return false;
  if (!("filepath" in rjson)) return false;
  if (!(rjson["result"] === "success")) {
    return false;
  }
  return true;
}

/**
 * Fields that a view response is expected to have.
 * Used to narrow a view json into a response.
 */
interface jsonViewResponse {
  result: string;
  data: string[][];
}

/**
 * Function to check if the json is a valid view response.
 * @param rjson is the json that the backend server returns.
 */
function isViewSuccessful(rjson: any): rjson is jsonViewResponse {
  if (!("result" in rjson)) return false;
  if (!("data" in rjson)) return false;
  if (!(rjson["result"] === "success")) {
    return false;
  }
  return true;
}

/**
 * For turning income data into GeoJSON that can be overlaid on map
 */
export const incomeInfo: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

/**
 * Function that gets city name, income, longitude, and latitude from backend and turns each into
 * GeoJSON Feature to be added to a GeoJSON that can be returned by the promise and overlaid
 * on the map
 *
 * @returns a promise
 */
export async function overlayIncomeData(): Promise<
  GeoJSON.FeatureCollection | undefined
> {
  const url =
    "http://localhost:3233/loadcsv?filepath=src/main/java/edu/brown/cs/student/data/RI_city_and_town_income.csv";

  try {
    const response = await fetch(url);
    const responseObject = await response.json();
    console.log(responseObject);

    if (!isLoadSuccessful(responseObject)) {
      return undefined;
    }

    const loadedData = responseObject;

    const viewResponse = await fetch("http://localhost:3233/viewcsv");
    const viewData = await viewResponse.json();
    console.log(viewData);

    if (!isViewSuccessful(viewData)) {
      return undefined;
    }

    if (incomeInfo.features.length < 1) {
      for (let i = 0; i < viewData.data.length; i++) {
        let cityName = viewData.data[i][0];
        let medianHouseholdIncome = viewData.data[i][1];
        let medianFamilyIncome = viewData.data[i][2];
        let medianPerCapitaIncome = viewData.data[i][3];
        let lat: number = parseFloat(viewData.data[i][4]);
        let long: number = parseFloat(viewData.data[i][5]);

        const newFeature: GeoJSON.Feature = {
          type: "Feature",
          properties: {
            name: cityName,
            income1: medianHouseholdIncome,
            income2: medianFamilyIncome,
            income3: medianPerCapitaIncome,
          },
          geometry: {
            type: "Point",
            coordinates: [long, lat],
          },
        };
        console.log(newFeature);

        incomeInfo.features.push(newFeature);
        console.log(incomeInfo.features);
      }
    }

    return incomeInfo;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const propertyName = "holc_grade";
export const geoLayer: FillLayer = {
  id: "geo_data",
  type: "fill",
  paint: {
    "fill-color": [
      "match",
      ["get", propertyName],
      "A",
      "#5bcc04",
      "B",
      "#04b8cc",
      "C",
      "#e9ed0e",
      "D",
      "#d11d1d",
      "#ccc",
    ],
    "fill-opacity": 0.2,
  },
};

export const searchLayer: FillLayer = {
  id: "search_data",
  type: "fill",
  paint: {
    "fill-color": "#800080",
    "fill-opacity": 0.5,
  },
};

export const incomeLayer: CircleLayer = {
  id: "income_data",
  type: "circle",
  paint: {
    "circle-radius": 7,
    "circle-color": "#007cbf",
  },
};
