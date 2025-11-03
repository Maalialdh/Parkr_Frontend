import sendRequest from "./sendRequest";
const url = "/users"

export async function signup(formData) {
    try {
        const response = await sendRequest(`${url}/signup/`, "POST", formData)
        localStorage.setItem('token', response.access);
        return response.user
    } catch(err) {
        localStorage.removeItem('token');
        return null;
    }
}

export async function login(formData) {
  try {
    const response = await sendRequest(`${url}/login/`, "POST", formData, false); // false → لا تستخدم توكن قديم
    localStorage.setItem("accessToken", response.access);
    localStorage.setItem("refreshToken", response.refresh);
    return response.user;
  } catch (err) {
    console.error("Login failed:", err);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return null;
  }
}
export async function getUser() {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            const response = await sendRequest(`${url}/token/refresh/`)
            localStorage.setItem('token', response.access);
            return response.user
        }
        return null;
    } catch (err) {
        console.log(err);
        return null;
    }
}
export async function logout() {
    localStorage.removeItem('token');
}
