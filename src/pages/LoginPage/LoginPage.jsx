import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router"; 
import * as usersAPI from "../../utilities/users-api";
import parkingved from"../../assets/video/parkinved.mp4"

export default function LoginPage({ user, setUser }) {
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
        navigate("/home"); 
      } else {
        alert("Invalid username or password");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during login");
    }
  }


 return (
  <div className="login-page">
    <video
      autoPlay
      loop
      muted
      className="background-video"
    >
      <source src={parkingved} type="video/mp4" />
    </video>

    {!user && (
      <form onSubmit={handleLogin} className="form-container login">
        <h2>Welcome to Parkr</h2>

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

        <button type="submit" className="btn-submit">Login</button>
      </form>
  )}
</div>
);
}




