import React, { useEffect, useState } from 'react';
import * as reservationAPI from '../../utilities/Reservations_api';
import * as carAPI from '../../utilities/car_api'; //  تأكد من المسار الصحيح
import "./styles.css";

export default function ReservationPage() {
  const [reservations, setReservations] = useState([]);
  const [cars, setCars] = useState([]);
const [newRes, setNewRes] = useState({ car: "", spot_number: "", date: "" });
  const [editRes, setEditRes] = useState(null);
  const [error, setError] = useState("");



  const allData = async () => {
    try {
      const [resData, carData] = await Promise.all([       //تشغل لي طلبين سيارات والحجوزات
        reservationAPI.getAll(),
        carAPI.getAll(),
      ]);
      setReservations(resData);
      setCars(carData);
    } catch {
      setError("Error")
    }

  };
  useEffect(() => {
    allData();
  }, []);

  const handleAdd = async (c) => {
    c.preventDefault();
    try {
      await reservationAPI.create(newRes);
      setNewRes({ car: "", date: "" });
      allData();
    } catch {
      setError("فشل في اضافة حجز");
    }
  };

  const handleUpdate = async (c) => {
    c.preventDefault();
    try {
      await reservationAPI.update(editRes.id, editRes);
      setEditRes(null);
      allData();
    } catch {
      setError("فشل في تعديل الحجز")
    }
  };

  const handleDelete = async (id) => {
    try {
      await reservationAPI.deleteRes(id);
      allData()
    } catch {
      setError("فشل في حذف الحجز");
    }
  };



  return (
    <div className="reservation-page">
      <h1>Reservation Page</h1>
      {error && <p className="error">{error}</p>}

      {/* 🔹 إضافة حجز جديد */}
      <form onSubmit={handleAdd} className="res-form">
        <h2> Add Reservation</h2>

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

      {/* 🔹 تعديل حجز */}
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
            onChange={(e)=>setEditRes({...editRes,date:e.target.value})}
          />

          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditRes(null)}>
            Cancel
          </button>
        </form>
      )}

      {/* 🔹 عرض الحجوزات */}
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
                 <strong>Spot:</strong> {res.spot_number}
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