const isValidParam = (value: string): boolean => {
  if (value !== "" && value !== undefined && value !== null) return true;
  return false;
};

export default isValidParam;
