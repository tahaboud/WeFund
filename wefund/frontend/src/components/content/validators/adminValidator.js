import validator from "validator";

export const editEventValidator = (
  name,
  description,
  spots,
  price,
  category,
  location
) => {
  let isValid = true;
  let validationErrors = {};

  if (validator.isEmpty(name)) {
    isValid = false;
    validationErrors = { ...validationErrors, name: "This field is required" };
  }
  if (validator.isEmpty(description)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      description: "This field is required",
    };
  }
  if (validator.isEmpty(spots)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      spots: "This field is required",
    };
  } else if (!validator.isNumeric(spots)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      spots: "This field must be a number",
    };
  }
  if (validator.isEmpty(price)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      price: "This field is required",
    };
  } else if (!validator.isNumeric(price)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      price: "This field must be a number",
    };
  }
  if (validator.isEmpty(category)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      category: "This field is required",
    };
  }
  if (validator.isEmpty(location)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      location: "This field is required",
    };
  }
  return { isValid, validationErrors };
};
export const addEventValidator = (
  name,
  description,
  image,
  spots,
  price,
  category,
  location
) => {
  let isValid = true;
  let validationErrors = {};

  if (validator.isEmpty(name)) {
    isValid = false;
    validationErrors = { ...validationErrors, name: "This field is required" };
  }
  if (image && validator.isEmpty(image.name)) {
    isValid = false;
    validationErrors = { ...validationErrors, image: "This field is required" };
  }
  if (validator.isEmpty(description)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      description: "This field is required",
    };
  }
  if (validator.isEmpty(spots)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      spots: "This field is required",
    };
  } else if (!validator.isNumeric(spots)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      spots: "This field must be a number",
    };
  }
  if (validator.isEmpty(price)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      price: "This field is required",
    };
  } else if (!validator.isNumeric(price)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      price: "This field must be a number",
    };
  }
  if (validator.isEmpty(category)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      category: "This field is required",
    };
  }
  if (validator.isEmpty(location)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      location: "This field is required",
    };
  }
  return { isValid, validationErrors };
};
