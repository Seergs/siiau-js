export type GetValueFromPageTextProps = {
  pageText: string;
  selector: string;
  valueLength: number;
};

export type LoginResult = {
  data: {
    pidm?: string;
    cookies?: string;
  };
  error?: string;
};

export type StudentInfo = {
  gpa: string;
  name: string;
  campus: string;
  career: string;
  status: string;
  degree: string;
  firstSeason: string;
  lastSeason: string;
};
