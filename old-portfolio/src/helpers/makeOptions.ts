const makeOptions = (
  values: string[],
): {
  value: string;
  label: string;
}[] => values.map((value) => ({ value, label: value.toUpperCase() }));
export default makeOptions;
