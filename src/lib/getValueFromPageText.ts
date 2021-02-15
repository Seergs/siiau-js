import { GetValueFromPageTextProps } from "../types";

export const getValueFromPageText = ({
  pageText,
  selector,
  valueLength,
}: GetValueFromPageTextProps) => {
  const valueStartIndex = pageText.indexOf(selector);

  const selectorLength = selector.length;

  const valueIndex = valueStartIndex + selectorLength;

  const value = pageText.substring(valueIndex, valueIndex + valueLength);

  return value;
};
