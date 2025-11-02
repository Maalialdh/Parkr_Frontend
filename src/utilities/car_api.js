import sendRequest from "./sendRequest";

const url = "http://127.0.0.1:8000/cars/"; // أو أضف api/ لو موجود: "http://127.0.0.1:8000/api/cars/"

//Get all cars
export async function getAll() {
  return sendRequest(url, "GET");
}

// Get one car (detail)
export async function detail(id) {
  return sendRequest(`${url}${id}/`, "GET");
}

// Create a car
export async function create(carData) {
  return sendRequest(url, "POST", carData);
}

// Update a car (الترتيب الصحيح)
export async function update(id, carData) {
  return sendRequest(`${url}${id}/`, "PUT", carData);
}

// Delete a car
export async function deleteCar(id) {
  return sendRequest(`${url}${id}/`, "DELETE");
}
