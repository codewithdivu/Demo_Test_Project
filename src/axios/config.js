import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://api.tvmaze.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// get

export const axiosGet = async (url) => {
  let response = {};

  try {
    const result = await axiosApi.get(url);
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response.status == 400) {
      response.status = false;
      response.message = e.response.data.message;
    } else if (e.response.status == 500) {
      response.status = false;
      response.message = "Internal server error";
    } else {
      response.status = false;
      response.message = "something went wrong";
    }
  }
  return response;
};
