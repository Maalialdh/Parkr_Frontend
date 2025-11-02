//  spotتفاصيل الصفحه
import React,{useState} from "react";
import './styles.css'
import Map from'/src/assets/images/google-maps.png';
// APIS

export default function ParkrDetailPage() {
  const [spots, setSpots] = useState([

    { id: 1, status: "available" },
    { id: 2, status: "reserved" },
    { id: 3, status: "occupied" },
    { id: 4, status: "available" },
    { id: 5, status: "reserved" },
    { id: 6, status: "available" },
    { id: 7, status: "occupied" },
    { id: 8, status: "reserved" },
  ]);
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
  const handleReserve =(id) => {
    setSpots((prevSpots) =>
      prevSpots.map((spot) =>
        spot.id === id && spot.status === "available"
          ? { ...spot, status: "reserved" }
          :spot
));

  };

  return (<>
    <section className="parking-section">
      <h1 className='parkinglot'>Parkinglot</h1>
      <img src={Map} alt="google-maps.png" />
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
      {/* <button className="btn">Reservtion a Spot</button> */}
    </section>
    
  </>)
}


