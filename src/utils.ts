/**
 * Combines a number of styles
 */
export const composeClass = (...styles: string[]) => {
  let classes = "";

  styles.forEach((arg) => {
    if (arg) {
      classes += `${arg} `;
    }
  });

  return classes.trim();
};

/**
 * Delete an array of keys from a given object
 */
export const omit = (targetObj: Record<string, string>, props: string[]) => {
  // Clone the targetObj to avoid mutating the original data
  const obj = Object.assign({}, targetObj);

  if (!Array.isArray(props)) {
    console.error("[utils.omit] Keys to be omitted should be an array");
    return;
  }

  props.forEach((prop) => {
    Object.hasOwn(obj, prop) && delete obj[prop];
  });

  return obj;
};

export const stripHtmlTags = (data: string) => {
  return data.replace(/(<([^>]+)>)/gi, "");
};
