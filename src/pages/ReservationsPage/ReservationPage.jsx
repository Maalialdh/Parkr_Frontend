import React, { useEffect, useState } from 'react';
import * as reservationAPI from '../../utilities/Reservations_api';
import * as carAPI from '../../utilities/car_api'; //  تأكد من المسار الصحيح
import "./styles.css";
import ParkrDetailPage from '../ParkrDetailPage/ParkrDetailPage';
import ParkingLotPage from '../ParkrFromPage/ParkrFromPage';  
export default function ReservationPage() {
  const [reservations, setReservations] = useState([]);
  const [cars, setCars] = useState([]);
  const [newRes, setNewRes] = useState({ location: "", car: "", spot_number: "", date: "" });
  const [editRes, setEditRes] = useState(null);
  const [error, setError] = useState("");
  const [parkingLots, setParkingLots] = useState([]); // يمكن ملؤها من API أو ثابتة



  const allData = async () => {
    try {
      const [resData, carData] = await Promise.all([       //تشغل لي طلبين سيارات والحجوزات
        reservationAPI.getAll(),
        carAPI.getAll(),
      ]);
      setReservations(resData);
      setCars(carData);

      setParkingLots([
        { id: 1, name: "University Parking" },
        { id: 2, name: "Mall Parking" },
        { id: 3, name: "Airport Parking" },
        { id: 4, name: "Hospital Parking" },
        { id: 5, name: "The Zone Parking" },
        { id: 6, name: "Stadium Lot" },
        { id: 7, name: "Al Nakheel Mall Parking" },
        { id: 8, name: "King Abdullah Financial District (KAFD) Parking" },
      ]);

      if (id) setNewRes(prev => ({ ...prev, location: id }));

    } catch {
      setError("Failed to load data.Please try again")
    }

  };
  useEffect(() => {
    allData();
  }, []);

  const handleAdd = async (c) => {
    c.preventDefault();
    try {
      await reservationAPI.createRes(newRes);
      setNewRes({ location: "", car: "", spot_number: "", date: "" });
      allData();
    } catch {
      setError("Someone parked there a second befor you, Pick a differnt spot ");
    }
  };

  const handleUpdate = async (c) => {
    c.preventDefault();
    try {
      await reservationAPI.updateRes(editRes.id, editRes);
      setEditRes(null);
      allData();
    } catch {
      setError("Faild to update your reservation. Please try again later. ")
    }
  };

  const handleDelete = async (id) => {
    try {
      await reservationAPI.deleteRes(id);
      allData()
    } catch {
      setError("Faild to delete your reservation. Please try again later. ");
    }
  };



  return (


        <div className="reservation-page">
      {/* <h1>Reservation Page</h1> */}
      {/* {error && <p className="error">{error}</p>} */}
      
            <ParkingLotPage></ParkingLotPage>
            
      {/*  إضافة حجز جديد */}
      <form onSubmit={handleAdd} className="res-form">
        <h2> Add Reservation</h2>
        <select
          value={newRes.location}
          onChange={(e) => setNewRes({ ...newRes, location: e.target.value })}
          required
        >
          <option value="">Select a Parking Lot</option>
          {parkingLots.map((lot) => (
            <option key={lot.id} value={lot.id}>
              {lot.name}
            </option>
          ))}
        </select>

        {/* اختيار السيارة */}
        <select
          value={newRes.car}
          onChange={(e) => setNewRes({ ...newRes, car: e.target.value })}
          required
        >
          <option value="">Select a Car</option>
          {cars.map((c) => (
            <option key={c.id} value={c.id}>
              {c.model}
            </option>
          ))}
        </select>

        {/* رقم الموقف */}
        <input
          type="text"
          placeholder="Spot number"
          value={newRes.spot_number}
          onChange={(e) =>
            setNewRes({ ...newRes, spot_number: e.target.value })
          }
          required
        />

        {/* التاريخ */}
        <input
          type="date"
          value={newRes.date}
          onChange={(e) => setNewRes({ ...newRes, date: e.target.value })}
          required
        />

        <button type="submit">Reserve</button>
      </form>
      {/* {error && <p className="error">{error}</p>} */}

      {/*  تعديل حجز */}
      {editRes && (
        <form onSubmit={handleUpdate} className="res-form edit">
          <h2>Edit Reservation</h2>

          <select
            value={editRes.car}
            onChange={(e) => setEditRes({ ...editRes, car: e.target.value })}
          >
            {cars.map((c) => (
              <option key={c.id} value={c.id}>
                {c.model}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={editRes.spot_number}
            onChange={(e) =>
              setEditRes({ ...editRes, spot_number: e.target.value })
            }
          />

          <input
            type="date"
            value={editRes.date}
            onChange={(e) => setEditRes({ ...editRes, date: e.target.value })}
          />

          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditRes(null)}>
            Cancel
          </button>
        </form>
      )}

      {/*  عرض الحجوزات */}
      <div className="reservation-list">
        {reservations.length === 0 ? (
          <p>No reservations yet.</p>
        ) : (
          reservations.map((res) => (
            <div key={res.id} className="reservation-card">
              <p>
                <strong>Car:</strong>{" "}
                {cars.find((c) => c.id === res.car)?.model || res.car}
              </p>
              <p>
                <strong>Spot:</strong> {res.Parkspot}
              </p>
              <p>
                <strong>Date:</strong> {res.date}
              </p>

              <div className="actions">
                <button onClick={() => setEditRes(res)}>Edit</button>
                <button onClick={() => handleDelete(res.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}