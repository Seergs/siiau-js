import { StudentInfo } from "../types";
import fetch from "node-fetch";
import { parse } from "node-html-parser";
import { urls, studentInfoIndices } from "../constants";

export const getStudentInfo = async (
  pidm: string,
  cookies: string
): Promise<StudentInfo> => {
  const response = await fetch(`${urls.studentInfoUrl}${pidm}`, {
    headers: { cookie: cookies },
  });
  const pageText = await response.text();
  const root = parse(pageText);

  const individualValues = root.querySelectorAll("td");

  return {
    gpa: individualValues[studentInfoIndices.gpa].innerText,
    name: individualValues[studentInfoIndices.name].innerText,
    status: individualValues[studentInfoIndices.status].innerText,
    degree: individualValues[studentInfoIndices.degree].innerText,
    firstSeason: individualValues[studentInfoIndices.firstSeason].innerText,
    lastSeason: individualValues[studentInfoIndices.lastSeason].innerText,
    career: individualValues[studentInfoIndices.career].innerText,
    campus: individualValues[studentInfoIndices.campus].innerText,
  };
};
