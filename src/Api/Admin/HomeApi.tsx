import { cookieInstance } from "../../utils/config";
import { BASEURL } from "../BaseUrl";

// Create Home
export const CreateHomeApi = async (payload: FormData) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/Home/create/home`, {
      method: "POST",
      body: payload,
      headers: {
        token: token,
      },
    });

    response = await response.json();
    return response;
  } catch (error: any) {
    return error.message;
  }
};

// Update Home
export const UpdateHomeApi = async (payload: any, id: any) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/Home/update/home/${id}`, {
      method: "PATCH",
      body: payload,
      headers: {
        token: token,
      },
    });
    response = await response.json();
    return response;
  } catch (error: any) {
    return error.message;
  }
};

// Get Home

export const GetHomeApi = async () => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/Home`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        token: token,
      },
    });
    response = await response.json();
    return response;
  } catch (error: any) {
    return error.message;
  }
};