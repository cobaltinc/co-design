export const getFieldValue = (field: any, obj: any) => {
  return field in obj ? obj[field] : field;
};
