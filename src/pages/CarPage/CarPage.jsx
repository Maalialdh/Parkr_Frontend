// src/pages/CarPage.jsx
import './styles.css';
import React, { useEffect, useState } from 'react';
import * as carAPI from '../../utilities/car_api';
import AboutPage from '../AboutPage/AboutPage';

export default function CarPage() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ model: "" });
  const [editCar, setEditCar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all cars
  const fetchCars = async () => {
    try {
      setLoading(true);
      const data = await carAPI.getAll();
      setCars(data);
    } catch (err) {
      setError("Error loading cars");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  // Add a new car
  const handleAddCar = async (e) => {
    e.preventDefault();
    try {
      await carAPI.addCar(newCar);
      setNewCar({ model: "" });
      fetchCars();
    } catch (err) {
      setError("Failed to add car");
    }
  };

  // Update an existing car
  const handleUpdateCar = async (e) => {
    e.preventDefault();
    try {
      await carAPI.updateCar(editCar.id, editCar);
      setEditCar(null);
      fetchCars();
    } catch (err) {
      setError("Failed to update car");
    }
  };

  // Delete a car
  const handleDeleteCar = async (id) => {
    try {
      await carAPI.deleteCar(id);
      fetchCars();
    } catch (err) {
      setError("Failed to delete car");
    }
  };

  return (
    <div className="car-page-container">
      <h1 className="car-page-title">Cars</h1>

      {error && <p className="car-error">{error}</p>}

      {/* Add new car */}
      <form onSubmit={handleAddCar} className="car-form car-form-add">
        <h2 className="car-form-title">Add a New Car</h2>
        <input
          type="text"
          placeholder="Model"
          value={newCar.model}
          onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
          className="car-input"
          required
        />
        <button className="car-button car-button-add">Add</button>
      </form>

      {/* Edit car */}
      {editCar && (
        <form onSubmit={handleUpdateCar} className="car-form car-form-edit">
          <h2 className="car-form-title">Edit Car</h2>
          <input
            type="text"
            value={editCar.model}
            onChange={(e) => setEditCar({ ...editCar, model: e.target.value })}
            className="car-input"
            required
          />
          <div className="car-form-actions">
            <button className="car-button car-button-save">Save</button>
            <button
              type="button"
              onClick={() => setEditCar(null)}
              className="car-button car-button-cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* List of cars */}
      {loading ? (
        <p className="car-loading">Loading...</p>
      ) : (
        <ul className="car-list">
          {cars.map((car) => (
            <li key={car.id} className="car-list-item">
              <div>
                <p className="car-list-item-model">{car.model}</p>
              </div>
              <div className="car-list-item-actions">
                <button
                  onClick={() => setEditCar(car)}
                  className="car-button car-button-edit"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCar(car.id)}
                  className="car-button car-button-delete"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
