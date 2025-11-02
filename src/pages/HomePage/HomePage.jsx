import "./styles.css";
// import Parkr from "../../assets/images/park.png";
import { useState } from "react";
import { useNavigate } from "react-router"; 
import * as usersAPI from "../../utilities/users-api";

export default function HomePage({ user, setUser }) {
  const initialState = { username: "", password: "" };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }


  async function handleLogin(evt) {
    evt.preventDefault();
    try {
      const loggedInUser = await usersAPI.login(formData);
      if (loggedInUser) {
        setUser(loggedInUser);
        navigate("/cars"); // Redirect to the cars page after login
      } else {
        alert("Invalid username or password");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during login");
    }
  }


  async function handleSubmit(evt) {
    evt.preventDefault();
    const userData = await usersAPI.login(formData);
    setUser(userData);
    setFormData(initialState)
    if (userData) navigate("/cars")
  }

  return (
    <div className="home-page">
      {!user && (
        <form onSubmit={handleLogin} className="form-container login">
          <h2>Login</h2>

          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn submit">Login</button>
        </form>
      )}

      <div className="image-container">
        {/* <img src={Parkr} alt="Parkr App" className="home-image" /> */}
      </div>
    </div>
  );
}