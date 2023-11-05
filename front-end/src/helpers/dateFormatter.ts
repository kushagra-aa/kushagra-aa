/* eslint-disable import/prefer-default-export */
const formatDateStringToString = (
  dateString: string,
  options?: Intl.DateTimeFormatOptions,
) => {
  const dateArray = dateString.split("-");
  const date = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`);
  return date.toLocaleDateString(undefined, options);
};
export { formatDateStringToString };
