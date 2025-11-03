import sendRequest from "./sendRequest";
const url = "/reservations/";

export async function getAll() {
  return sendRequest(url, "GET");
}

export async function createRes(data) {
  return sendRequest(url, "POST", data);
}

export async function updateRes(id, data) {
  return sendRequest(`${url}${id}/`, "PUT", data);
}

export async function deleteRes(id) {
  return sendRequest(`${url}${id}/`, "DELETE");
}


// export async function handleFinishReservation(id) {
  // return sendRequest(`${url}${id}/`,"leave");
// // }

// export async function addPoints(id) {
//   return sendRequest(`${url}${id}/add_points/`, "POST");
// }
// export async function completeReservation(id) {
//   return sendRequest(`/reservations/${id}/complete/`, "POST");
// }
export async function addPoints(id) {
  return sendRequest(`${url}${id}/complete/`, "POST");
}
