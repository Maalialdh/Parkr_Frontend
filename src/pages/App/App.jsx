import HomePage from '../HomePage/HomePage';
import ParkrDetailPage from '../ParkrDetailPage/ParkrDetailPage';
import './App.css'
import { Route, Routes, Link } from 'react-router';
import AboutPage from '../AboutPage/AboutPage';
import car from '../../assets/images/logo.png'
import ParkrFromPage from '../ParkrFromPage/ParkrFromPage';
export default function App() {
  return (
    <>
      <header>
        <div className="header-logo-container">
          
          <div className='logo'>
            
            <img src={car}alt="logo.png"/>
            <h1>Parkr App</h1>
          </div>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/parking">Find Parking</Link></li>
          </ul>
        </nav>
      </header>

      {/* ====== Main Content ====== */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="parking"element={<ParkrFromPage />}/>
          <Route path="/parkinglot/:id" element={<ParkrDetailPage/>} />
          <Route path="/about" element={<AboutPage />} />

        </Routes>
      </main>


 </>
  );
}