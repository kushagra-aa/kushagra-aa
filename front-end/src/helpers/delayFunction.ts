const delayFunction = (s: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = "This is the delayed result!";
      resolve(result);
    }, s * 1000); // s000 milliseconds (s seconds) delay
  });
};

export default delayFunction;
