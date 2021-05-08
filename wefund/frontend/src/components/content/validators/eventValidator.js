import validator from "validator";

export const subscribeToEventValidator = (
  firstName,
  lastName,
  email,
  phoneNumber,
  idNumber
) => {
  let isValid = true;
  let validationErrors = {};
  if (validator.isEmpty(firstName)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      first_name: "This field is required",
    };
  }
  if (validator.isEmpty(lastName)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      last_name: "This field is required",
    };
  }
  if (validator.isEmpty(email)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      email: "This field is required",
    };
  }
  if (!validator.isEmpty(email) && !validator.isEmail(email)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      email: "Please enter a valid email",
    };
  }
  if (validator.isEmpty(phoneNumber)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      phone_number: "This field is required",
    };
  }
  if (!validator.isEmpty(phoneNumber) && !validator.isNumeric(phoneNumber)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      phone_number: "Please enter a valid phone number",
    };
  }
  if (validator.isEmpty(idNumber)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      id_number: "This field is required",
    };
  }
  if (!validator.isEmpty(idNumber) && !validator.isNumeric(idNumber)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      id_number: "Please enter a valid ID number",
    };
  }
  return { isValid, validationErrors };
};
