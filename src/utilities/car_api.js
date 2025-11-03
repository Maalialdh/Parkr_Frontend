import sendRequest from "./sendRequest";

const url = "/cars/";
//Get all cars
export async function getAll() {
  return sendRequest(url, "GET");
}

// Get one car (detail)
export async function detail(id) {
  return sendRequest(`${url}${id}/`, "GET");
}

// Create a car
export async function createCar(carData) {
  return sendRequest(url, "POST", carData);
}

// Update a car (الترتيب الصحيح)
export async function updateCar(id, carData) {
  return sendRequest(`${url}${id}/`, "PUT", carData);
}

// Delete a car
export async function deleteCar(id) {
  return sendRequest(`${url}${id}/`, "DELETE");
}

export async function addPoints(carId) {
  return sendRequest(`${url}${carId}/add_points/`, "POST");
}
