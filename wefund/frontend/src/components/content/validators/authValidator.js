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

export const researcherValidator = (
  idNum,
  idCopy,
  dateOfBirth,
  degree,
  organization,
  cv
) => {
  let isValid = true;
  let validationErrors = {};
  if (validator.isEmpty(idNum)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      id_card_number: "This field is required",
    };
  }
  if (!idCopy.name) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      id_card_copy: "This field is required",
    };
  }
  if (!cv.name) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      cv: "This field is required",
    };
  }
  if (!validator.isEmpty(idNum) && !validator.isNumeric(idNum)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      id_card_number: "This field must be only numbers",
    };
  }
  if (!validator.isDate(dateOfBirth)) {
    isValid = false;
    console.log("khkh");
    validationErrors = {
      ...validationErrors,
      date_of_birth: "This field is required",
    };
  }
  if (validator.isEmpty(degree)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      degree: "This field is required",
    };
  }
  if (validator.isEmpty(organization)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      organisation: "This field is required",
    };
  }
  return { isValid, validationErrors };
};

export const researcherEditValidator = (
  idNum,
  dateOfBirth,
  degree,
  organization
) => {
  let researcherIsValid = true;
  let researcherValidationErrors = {};
  if (validator.isEmpty(idNum)) {
    researcherIsValid = false;
    researcherValidationErrors = {
      ...researcherValidationErrors,
      id_card_number: "This field is required",
    };
  }
  if (!validator.isEmpty(idNum) && !validator.isNumeric(idNum)) {
    researcherIsValid = false;
    researcherValidationErrors = {
      ...researcherValidationErrors,
      id_card_number: "This field must be only numbers",
    };
  }
  if (!validator.isDate(dateOfBirth)) {
    researcherIsValid = false;
    researcherValidationErrors = {
      ...researcherValidationErrors,
      date_of_birth: "This field is required",
    };
  }
  if (validator.isEmpty(degree)) {
    researcherIsValid = false;
    researcherValidationErrors = {
      ...researcherValidationErrors,
      degree: "This field is required",
    };
  }
  if (validator.isEmpty(organization)) {
    researcherIsValid = false;
    researcherValidationErrors = {
      ...researcherValidationErrors,
      organisation: "This field is required",
    };
  }
  return { researcherIsValid, researcherValidationErrors };
};

export const registerEditValidator = (first_name, last_name, email) => {
  let userIsValid = true;
  let userValidationErrors = {};
  if (validator.isEmpty(first_name)) {
    userIsValid = false;
    userValidationErrors = {
      ...userValidationErrors,
      first_name: "This field is required",
    };
  }
  if (validator.isEmpty(last_name)) {
    userIsValid = false;
    userValidationErrors = {
      ...userValidationErrors,
      last_name: "This field is required",
    };
  }
  if (validator.isEmpty(email)) {
    userIsValid = false;
    userValidationErrors = {
      ...userValidationErrors,
      email: "This field is required",
    };
  } else if (!validator.isEmail(email)) {
    userIsValid = false;
    userValidationErrors = {
      ...userValidationErrors,
      email: "Please enter a valid email",
    };
  }

  return { userIsValid, userValidationErrors };
};
