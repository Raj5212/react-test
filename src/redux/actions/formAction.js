export const ADD_FORM_DATA = "ADD_FORM_DATA";

export const addFormData = (formData) => (
  {
  type: ADD_FORM_DATA,
  payload: formData,
});
