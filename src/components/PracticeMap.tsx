"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

interface PracticeMapProps {
  className?: string;
}

export default function PracticeMap({ className = "h-[400px] w-full rounded-2xl overflow-hidden shadow-xl" }: PracticeMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Dynamically import Leaflet to avoid SSR window errors
    import("leaflet").then((L) => {
      // Fix default marker icon assets in Leaflet with bundlers
      const DefaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      L.Marker.prototype.options.icon = DefaultIcon;

      // Coordinates for Reyno Ridge Centre, 08 Darius Street, Reyno Ridge, eMalahleni
      const lat = -25.8972;
      const lng = 29.2452;

      const map = L.map(mapContainerRef.current!).setView([lat, lng], 16);
      mapInstanceRef.current = map;

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add custom marker popup with practice details
      const popupContent = `
        <div style="padding: 6px; font-family: sans-serif; color: #0b1730;">
          <h4 style="margin: 0 0 6px 0; font-size: 15px; font-weight: 700; color: #112d63;">Alora Dental Care</h4>
          <p style="margin: 0 0 4px 0; font-size: 12px; color: #4a5568;">
            Shop 18, Reyno Ridge Centre<br/>
            08 Darius Street, Reyno Ridge<br/>
            eMalahleni, 1039
          </p>
          <div style="margin-top: 8px; font-size: 12px; border-top: 1px solid #e2e8f0; padding-top: 6px;">
            <strong>Tel:</strong> <a href="tel:+27136973447" style="color: #ce8a38;">+27 13 697 3447</a><br/>
            <strong>WhatsApp:</strong> <a href="https://wa.me/27618913052" style="color: #ce8a38;" target="_blank">061 891 3052</a>
          </div>
        </div>
      `;

      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(popupContent)
        .openPopup();
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className={className} style={{ position: "relative", minHeight: "380px", width: "100%", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(206, 166, 86, 0.3)" }}>
      <div ref={mapContainerRef} style={{ height: "100%", width: "100%", minHeight: "380px" }} />
    </div>
  );
}
