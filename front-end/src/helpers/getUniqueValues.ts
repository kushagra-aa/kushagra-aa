const checkRegex = /.*[A-Za-z].*/;
const getUniqueValues = <Obj>(data: Obj[], key: keyof Obj): string[] => {
  const tagsSet = new Set<string>();

  data.forEach((item) => {
    const value = item[key];
    if (Array.isArray(value)) {
      value.forEach((tag) => {
        if (typeof tag === "string" && !checkRegex.test(tag.trim())) {
          tagsSet.add(tag.trim());
        }
      });
    } else if (typeof value === "string") {
      const individualTags = value.split(",");
      individualTags.forEach((tag) => {
        if (checkRegex.test(tag.trim())) {
          tagsSet.add(tag.trim());
        }
      });
    }
  });

  return Array.from(tagsSet);
};

export default getUniqueValues;
