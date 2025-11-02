import sendRequest from "./sendRequest";
const url = "/reservations/";

export async function getAll() {
  return sendRequest(url, "GET");
}

export async function create(data) {
  return sendRequest(url, "POST", data);
}

export async function update(id, data) {
  return sendRequest(`${url}${id}/`, "PUT", data);
}

export async function deleteRes(id) {
  return sendRequest(`${url}${id}/`, "DELETE");
}
