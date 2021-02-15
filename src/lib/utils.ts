export const parseCookies = (unparsedCookies: string) => {
  const cookies = unparsedCookies.replace(/;([P,p]ath|HttpOnly)(=\/)*/g, "");

  return cookies.split(", ").join("; ");
};
