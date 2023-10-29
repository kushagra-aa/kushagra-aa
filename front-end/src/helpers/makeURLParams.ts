const makeURLParams = (params: object): string => {
  let paramsString = "";
  Object.entries(params).forEach(([key, value]) => {
    if (value || value === 0) paramsString = `${paramsString}&${key}=${value}`;
  });
  if (paramsString[0] === "&") paramsString = paramsString.slice(1);
  return paramsString;
};

export default makeURLParams;
