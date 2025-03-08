import { cookieInstance } from "../../utils/config";
import { BASEURL } from "../BaseUrl";

// Create staff
export const CreatestaffApi = async (payload: FormData) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/staff/create`, {
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

// Update staff
export const UpdatestaffApi = async (payload: any, id: any) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/staff/update/${id}`, {
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

// Get staff

export const GetstaffApi = async () => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/staff/getstaff`, {
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

// delete staff
export const DeletestaffApi = async (id: any) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/staff/${id}`, {
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
