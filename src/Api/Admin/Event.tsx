import { cookieInstance } from "../../utils/config";
import { BASEURL } from "../BaseUrl";

// Create Event
export const CreateEventApi = async (payload: FormData) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/event/create`, {
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

// Update Event
export const UpdateEventApi = async (payload: any, id: any) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/event/update/${id}`, {
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

// Get Event

export const GetEventApi = async () => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/event`, {
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

// delete event
export const DeleteApi = async (id: any) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/event/${id}`, {
      method: "DELETE",
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
