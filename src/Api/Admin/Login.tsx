import { BASEURL } from "../BaseUrl";

// Admin Login
export const LoginApi = async (payload: any) => {
  try {
    let response = await fetch(`${BASEURL}/admin/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    });
    response = await response.json();
    return response;
  } catch (error: any) {
    return error.message;
  }
};
