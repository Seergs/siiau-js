import { StudentInfo } from "../types";
import fetch from "node-fetch";
import { parse } from "node-html-parser";

const GPA_INDEX = 0;
const NAME_INDEX = 1;
const STATUS_INDEX = 2;
const DEGREE_INDEX = 3;
const FIRST_SEASON_INDEX = 4;
const LAST_SEASON_INDEX = 5;
const CAREER_INDEX = 6;
const CAMPUS_INDEX = 7;

export const getStudentInfo = async (
  pidm: string,
  cookies: string
): Promise<StudentInfo> => {
  const response = await fetch(
    `http://siiauescolar.siiau.udg.mx/wal/sgphist.promedio?pidmp=${pidm}`,
    { headers: { cookie: cookies } }
  );
  const pageText = await response.text();
  const root = parse(pageText);

  const individualValues = root.querySelectorAll("td");

  return {
    gpa: individualValues[GPA_INDEX].innerText,
    name: individualValues[NAME_INDEX].innerText,
    status: individualValues[STATUS_INDEX].innerText,
    degree: individualValues[DEGREE_INDEX].innerText,
    firstSeason: individualValues[FIRST_SEASON_INDEX].innerText,
    lastSeason: individualValues[LAST_SEASON_INDEX].innerText,
    career: individualValues[CAREER_INDEX].innerText,
    campus: individualValues[CAMPUS_INDEX].innerText,
  };
};
