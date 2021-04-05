import validator from "validator";

export const loginValidator = (email, password) => {
  let isValid = true;
  let validationErrors = {};

  if (validator.isEmpty(email)) {
    isValid = false;
    validationErrors = { ...validationErrors, email: "This field is required" };
  } else if (!validator.isEmail(email)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      email: "Please enter a valid email",
    };
  }
  if (validator.isEmpty(password)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      password: "This field is required",
    };
  }
  return { isValid, validationErrors };
};

export const registerValidator = (
  first_name,
  last_name,
  email,
  password,
  password2
) => {
  let isValid = true;
  let validationErrors = {};
  if (validator.isEmpty(first_name)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      first_name: "This field is required",
    };
  }
  if (validator.isEmpty(last_name)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      last_name: "This field is required",
    };
  }
  if (validator.isEmpty(email)) {
    isValid = false;
    validationErrors = { ...validationErrors, email: "This field is required" };
  } else if (!validator.isEmail(email)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      email: "Please enter a valid email",
    };
  }
  if (validator.isEmpty(password)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      password: "This field is required",
    };
  }
  if (validator.isEmpty(password2)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      password2: "This field is required",
    };
  }
  if (!validator.isEmpty(password) && !validator.isEmpty(password2)) {
    if (password !== password2) {
      isValid = false;
      validationErrors = {
        ...validationErrors,
        password: "Passwords do not match",
        password2: "Passwords do not match",
      };
    }
  }
  return { isValid, validationErrors };
};

export const requestResetValidator = (email) => {
  let isValid = true;
  let validationErrors = {};
  if (validator.isEmpty(email)) {
    isValid = false;
    validationErrors = { ...validationErrors, user: "This field is required" };
  } else if (!validator.isEmail(email)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      user: "Please enter a valid email",
    };
  }
  return { isValid, validationErrors };
};

export const resetValidator = (password1, password2) => {
  let isValid = true;
  let validationErrors = {};
  if (validator.isEmpty(password1)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      password1: "This field is required",
    };
  }
  if (validator.isEmpty(password2)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      password2: "This field is required",
    };
  }
  if (!validator.isEmpty(password1) && !validator.isEmpty(password2)) {
    if (password1 !== password2) {
      isValid = false;
      validationErrors = {
        ...validationErrors,
        password1: "Passwords are not equal",
        password2: "Passwords are not equal",
      };
    }
  }
  return { isValid, validationErrors };
};
