import { LoginResult } from "../types";
import fetch from "node-fetch";
import FormData from "form-data";
import { parseCookies } from "./utils";
import { getValueFromPageText } from "./getValueFromPageText";
import { selectors, urls } from "../constants";

export const loginToSiiau = async (
  studentCode: string,
  studentNip: string
): Promise<LoginResult> => {
  const loginResult: LoginResult = { data: {}, error: undefined };

  const credentials = new FormData();
  credentials.append("p_codigo_c", studentCode);
  credentials.append("p_clave_c", studentNip);

  try {
    const response = await fetch(urls.loginUrl, {
      body: credentials,
      method: "POST",
    });

    const pageText = await response.text();

    if (pageText.includes('class="error"')) {
      loginResult.error = "Invalid credentials";
      return loginResult;
    }

    const unparsedCookies = response.headers.get("set-cookie");
    loginResult.data.cookies = parseCookies(unparsedCookies!);
    loginResult.data.pidm = getValueFromPageText({
      pageText,
      selector: selectors.pidm,
      valueLength: 7,
    });
  } catch (e) {
    loginResult.error = "Something went wrong";
    return loginResult;
  }

  return loginResult;
};
