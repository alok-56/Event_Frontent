import { cookieInstance } from "../../utils/config";
import { BASEURL } from "../BaseUrl";

// Create collaboration
export const CreateCollabarationApi = async (payload: FormData) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/collaboration/create`, {
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

// Update collaboration
export const UpdateCollabarationApi = async (payload: any, id: any) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/collaboration/update/${id}`, {
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

// Get collaboration
export const GetCollabarationApi = async () => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/collaboration/fetchAll`, {
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

// delete collaboration
export const CollabarationDeleteApi = async (id: any) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/collaboration/delete/${id}`, {
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
