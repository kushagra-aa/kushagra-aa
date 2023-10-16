/* eslint-disable import/prefer-default-export */
const formatDateStringToString = (
  dateString: string,
  options?: Intl.DateTimeFormatOptions,
) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};
export { formatDateStringToString };
