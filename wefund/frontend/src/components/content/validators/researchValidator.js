import validator from "validator";

export const addResearchValidator = (
  userType,
  lookingFor,
  interestedIn,
  title,
  organization,
  description,
  papers
) => {
  let isValid = true;
  let validationErrors = {};
  if (validator.isEmpty(userType)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      userType: "This field is required",
    };
  }
  if (validator.isEmpty(lookingFor)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      lookingFor: "This field is required",
    };
  }
  if (validator.isEmpty(interestedIn)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      interestedIn: "This field is required",
    };
  }
  if (validator.isEmpty(title)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      title: "This field is required",
    };
  }
  if (validator.isEmpty(organization)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      organization: "This field is required",
    };
  }
  if (validator.isEmpty(description)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      description: "This field is required",
    };
  }
  if (!papers.name) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      papers: "This field is required",
    };
  }
  return { isValid, validationErrors };
};

export const editResearchValidator = (
  userType,
  lookingFor,
  interestedIn,
  title,
  organization,
  description
) => {
  let isValid = true;
  let validationErrors = {};
  if (validator.isEmpty(userType)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      userType: "This field is required",
    };
  }
  if (validator.isEmpty(lookingFor)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      lookingFor: "This field is required",
    };
  }
  if (validator.isEmpty(interestedIn)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      interestedIn: "This field is required",
    };
  }
  if (validator.isEmpty(title)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      title: "This field is required",
    };
  }
  if (validator.isEmpty(organization)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      organization: "This field is required",
    };
  }
  if (validator.isEmpty(description)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      description: "This field is required",
    };
  }
  return { isValid, validationErrors };
};
