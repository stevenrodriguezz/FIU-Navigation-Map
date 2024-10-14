import { getVenue, showVenue, TGetVenueOptions } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";

// See Trial API key Terms and Conditions
// https://developer.mappedin.com/guides/api-keys
const options: TGetVenueOptions = {
  venue: "mappedin-demo-mall",
  clientId: "5eab30aa91b055001a68e996", // Enterprise account allows for own custom map clientID
  clientSecret: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1" // and clientSecret
};

async function init() {
  const venue = await getVenue(options);
  const mapView = await showVenue(document.getElementById("app")!, venue);
}

init();
