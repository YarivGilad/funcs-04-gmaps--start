import { useState, MouseEvent } from "react";
import { TopBar } from "./top-bar";
import { GoogleMap } from "./google-map";
import { LatLng } from "./types";
import { createLogger } from "../utils/logger.utils";

const log = createLogger("App -->");

export function App() {

  const [latlng, setLatlng] = useState<LatLng>({
    lat: -34.397,
    lng: 150.644
  });


  function reposition(event: MouseEvent) {
    const city = (event.target as HTMLElement).dataset.city;
    switch (city) {
      case "tel aviv":
        setLatlng({ lat: 32.0042938, lng: 34.7615399 });
        break;
      default:
        alert("Location not supported");
    }
  }


  log(latlng);
  return (
    <div className="app">
      <TopBar>Google Maps Example in React</TopBar>
      <div className="hbox mb20">
        <button data-city="tel aviv" onClick={reposition}>Tel Aviv</button>
        <input type="number" min="8" max="16" placeholder="8" />
      </div>
      <GoogleMap latlng={latlng} />
    </div>
  );

}