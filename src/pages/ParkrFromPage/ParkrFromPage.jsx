// lot
import React from "react";
import { useNavigate } from "react-router";
import "./styles.css";
import map from "../../assets/images/google-maps.png";

export default function ParkingLotPage() {
  const navigate = useNavigate();

  // بيانات المواقف
  const parkingLots = [
    { id: 1, name: "University Parking", location: "King Saud University, Riyadh" },
    { id: 2, name: "Mall Parking", location: "Riyadh Gallery Mall, Riyadh" },
    { id: 3, name: "Airport Parking", location: "King Khalid International Airport" },
    { id: 4, name: "Hospital Parking", location: "King Faisal Specialist Hospital" },
    { id: 5, name: "The Zone Parking", location: "Takhassusi Street, Riyadh" },
    { id: 6, name: "Stadium Lot", location: "Mrsool Park, Riyadh" },
    { id: 7, name: "Al Nakheel Mall Parking", location: "Exit 9, Imam Saud Road, Riyadh" },
    { id: 8, name: "King Abdullah Financial District (KAFD) Parking", location: "King Fahd Rd, Riyadh" },

  ];

  return (
    <section className="parking-section">
      <h1 className="parkinglot">All Parking Locations</h1>
      <img src={map} alt="map.png"/>
      <h2 className="parking-title">Select a Parking Lot</h2>

      <div className="parking-grid">
        {parkingLots.map((lot) => (
          <div
            key={lot.id}
            className="parking-card"
            onClick={() => navigate(`/parkinglot/${lot.id}`)}
          >
            <p className="spot-id">{lot.name}</p>
            <p className="spot-status">{lot.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
