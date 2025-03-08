import { cookieInstance } from "../../utils/config";
import { BASEURL } from "../BaseUrl";

// Create Publication
export const CreatePublicationApi = async (payload: FormData) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/Publication/create`, {
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

// Update Publication
export const UpdatePublicationApi = async (payload: any, id: any) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/Publication/update/${id}`, {
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

// Get Publication

export const GetPublicationApi = async () => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/Publication`, {
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

// delete Publication
export const DeleteApi = async (id: any) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/Publication/${id}`, {
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
