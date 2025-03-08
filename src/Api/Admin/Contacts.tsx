import { cookieInstance } from "../../utils/config";
import { BASEURL } from "../BaseUrl";

// Create collaboration
export const CreateContactsApi = async (payload: FormData) => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/contacts/create`, {
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

// Get Contacts
export const GetContactsApi = async () => {
  let token = await cookieInstance.get("token");
  try {
    let response = await fetch(`${BASEURL}/contacts/fetchAll`, {
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
