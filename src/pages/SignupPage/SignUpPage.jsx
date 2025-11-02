// IMPORTS
import { useState } from "react";
import { useNavigate } from "react-router";

// APIs
import * as usersAPI from "../../utilities/users-api.js";

export default function SignupPage({ setUser }) {
    const navigate = useNavigate();

    const initialState = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const disabledSubmit =
        Object.values(errors).every((val) => val === "") &&
            Object.values(formData).every((val) => val !== "")
            ? false
            : true;

    // Handle input changes
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        validateField(e);
    }

    // Validate input fields
    function validateField({ target }) {
        const newErrors = { ...errors };

        if (target.name === "username") {
            newErrors.username =
                target.value.length < 3
                    ? "Username must be at least 3 characters long."
                    : "";
        }

        if (target.name === "password") {
            newErrors.password =
                target.value.length < 6
                    ? "Password must be at least 6 characters long."
                    : "";
        }

        if (target.name === "confirmPassword") {
            newErrors.confirmPassword =
                target.value !== formData.password ? "Passwords do not match." : "";
        }

        if (target.name === "email") {
            newErrors.email = !target.value.includes("@")
                ? "Please enter a valid email address."
                : "";
        }

        setErrors(newErrors);
    }

    // Handle form submission
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const newUser = await usersAPI.signup(formData);
            setUser(newUser);
            setFormData(initialState);
            navigate("/");
        } catch (err) {
            console.error("Signup failed:", err);
            setUser(null);
        }
    }

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit} className="form-container signup">
                <table>
                    <tbody>
                        <tr>
                            <th><label htmlFor="username">Username:</label></th>
                            <td>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.username && <p>{errors.username}</p>}
                            </td>
                        </tr>

                        <tr>
                            <th><label htmlFor="email">Email:</label></th>
                            <td>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p>{errors.email}</p>}
                            </td>
                        </tr>

                        <tr>
                            <th><label htmlFor="password">Password:</label></th>
                            <td>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.password && <p>{errors.password}</p>}
                            </td>
                        </tr>

                        <tr>
                            <th><label htmlFor="confirmPassword">Confirm Password:</label></th>
                            <td>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button type="submit" disabled={disabledSubmit} className="btn submit">
                    Create Account
                </button>
            </form>
        </div>
    );
}