import { useRef, useEffect } from "react";
import { LatLng } from "./types";
import { createLogger } from "../utils/logger.utils";

const log = createLogger("GoogleMap -->");

interface Props {
  latlng: LatLng;
}

export function GoogleMap({ latlng }: Props) {
  const mapDiv = useRef<HTMLDivElement | null>(null);
  const map = useRef<google.maps.Map | null>(null);
  
  async function createMap() {
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

    map.current = new Map(mapDiv.current as HTMLDivElement, {
      center: latlng,
      zoom: 8,
    });
  }

  useEffect( () => {
    createMap();
  }, []);

  useEffect(() => {
    log("useEffect, latlng:",latlng);
    if (map.current) {
      map.current.setCenter(latlng);
    }
  }, [latlng]);

  return <div ref={mapDiv} className="map-box" />;
}


// Alternatively, you can simply disable the eslint rule:
// eslint-disable-next-line react-hooks/exhaustive-deps