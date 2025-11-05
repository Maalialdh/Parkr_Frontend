import './App.css';
import HomePage from '../HomePage/HomePage';
import ParkrDetailPage from '../ParkrDetailPage/ParkrDetailPage';
import { Route, Routes,Navigate } from 'react-router';
import React, { useState, useEffect } from "react";
import car from '../../assets/images/logo.png'
import CarPage from '../CarPage/CarPage';
import ParkrFromPage from '../ParkrFromPage/ParkrFromPage';
import ReservationPage from '../ReservationsPage/ReservationPage';
import Navbar from '../../components/Navbar/Navbar';
import { getUser } from '../../utilities/users-api';
import SignupPage from '../SignupPage/SignUpPage.jsx'
import LoginPage from '../LoginPage/LoginPage.jsx';

 function App() {
  const [user, setUser ] = useState(null)
  const routes = ["home", "cars", "reservations", "parking"];
 


    useEffect(() => {
    async function checkUser() {
      const foundUser = await getUser();
      setUser(foundUser)
    }
    checkUser()
  }, [])



  return (
    <>
      <header>
        <div className="header-logo-container">

          <div className='logo'>

            <img src={car} alt="logo.png" />
            <h1>Parkr App</h1>
          </div>
        </div>
        <nav>
          <ul>
            <Navbar user={user} setUser={setUser} />
          </ul>
        </nav>
      </header>
     
      <main>
        <Routes>
           {user ? <>
          <Route path="/home" element={<HomePage user={user} setUser={setUser} />}/>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/parking" element={<ParkrFromPage />} />
          <Route path="/parkinglot/:id" element={<ParkrDetailPage />} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/cars/new" element={<CarPage createCar={true} />} />
          <Route path="/cars/:id/edit" element={<CarPage editCar={true} />} />
          <Route path="/cars/:id/delete" element={<CarPage deleteCar={true} />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path="/reservations/new" element={<ReservationPage createRes={true} />} />
          <Route path="/reservations/:id/edit" element={<ReservationPage editRes={true} />} />
          <Route path="/reservations/:id/delete" element={<ReservationPage deleteRes={true} />} />
         </> : <>
           <Route path="/home" element={<HomePage user={user} setUser={setUser} />}/>
           <Route path="/signup"element={<SignupPage setUser={setUser} />}/>
           <Route path="/login" element={<LoginPage setUser={setUser} />} />
           <Route path="/*" element={<Navigate to="/login" />} />
        </>}
      </Routes>
      </main>


    </>
  );
}
export default App