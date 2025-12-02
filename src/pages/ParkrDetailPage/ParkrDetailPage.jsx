import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./styles.css";
// import spot from "../../assets/images/spote.webp";

export default function ParkrDetailPage() {
  const [spots, setSpots] = useState([
    { id: 1, status: "available" },
    // { id: 2, status: "reserved" },
    { id: 2, status: "available" },
    { id: 3, status: "occupied" },
    { id: 4, status: "available" },
    // { id: 5, status: "reserved" },
    { id: 5,status: "available" },
    { id: 6, status: "occupied" },
    { id: 7, status: "occupied" },
    // { id: 8, status: "reserved" },
    { id: 8, status: "occupied" },
  ]);

  const navigate = useNavigate();

  const handleReserve = (id) => {
    const spot = spots.find((s) => s.id === id);

    if (spot.status === "available") {
      // 1) عدّل الحالة إلى reserved
      setSpots((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status: "reserved" } : s))
      );

      // 2) انتظر ثانيتين ثم انتقل للصفحة
      setTimeout(() => {
        navigate("/reservations", { state: { spot_number: id } });
      }, 1000);
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "available":
        return "available";
      case "reserved":
        return "reserved";
      case "occupied":
        return "occupied";
      default:
        return "unknown";
    }
  };

  return (
    <>
      <section className="parking-section">
        <h2 className="parking-title"> Available Parking Spots</h2>
        <div className="parking-grid">
          {spots.map((spot) => (
            <div
              key={spot.id}
              className={`parking-card ${spot.status}`}
              onClick={() => handleReserve(spot.id)}
            >
              <p className="spot-id">Spot {spot.id}</p>
              <p className="spot-status">{getStatusText(spot.status)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
