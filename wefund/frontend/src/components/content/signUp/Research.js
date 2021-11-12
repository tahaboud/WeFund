import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useDispatch, useSelector } from "react-redux";
import { addResearch } from "../../../actions/researchAction";
import { useHistory } from "react-router";

const Research = () => {
  const useStyles = makeStyles((theme) => ({
    div: {
      margin: "3em 0",
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { errors, isLoading, data } = useSelector((state) => state.research);
  const [activeStep, setActiveStep] = useState(0);
  const [userType, setUserType] = useState("INV");
  const [lookingFor, setLookingFor] = useState("INV");
  const [interestedIn, setInterestedIn] = useState("CSRR");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [papers, setPapers] = useState("");
  const [description, setDescription] = useState("");
  const [applicationErrors, setApplicationErrors] = useState({});
  const [finished, setFinished] = useState(false);
  const steps = [
    "What kind of applicants are you?",
    "Submit your application!",
  ];
  useEffect(() => {
    setApplicationErrors(errors);
  }, [errors]);
  useEffect(() => {
    if (data === "research created successfully") {
      setFinished(true);
      setTimeout(() => {
        history.push("/application");
      }, 2000);
    }
  }, [data]);
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      dispatch(
        addResearch({
          title,
          user_type: userType,
          looking_for: lookingFor,
          interested_in: interestedIn,
          description,
          organization,
          papers,
        })
      );
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const getContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <Step1
            handleNext={handleNext}
            activeStep={activeStep}
            handleBack={handleBack}
            userType={userType}
            setUserType={setUserType}
            lookingFor={lookingFor}
            setLookingFor={setLookingFor}
            interestedIn={interestedIn}
            setInterestedIn={setInterestedIn}
            isLoading={isLoading}
          />
        );
      case 1:
        return (
          <Step2
            handleNext={handleNext}
            activeStep={activeStep}
            handleBack={handleBack}
            title={title}
            setTitle={setTitle}
            organization={organization}
            setOrganization={setOrganization}
            papers={papers}
            setPapers={setPapers}
            description={description}
            setDescription={setDescription}
            applicationErrors={applicationErrors}
            setApplicationErrors={setApplicationErrors}
            isLoading={isLoading}
            finished={finished}
          />
        );
    }
  };
  return (
    <Container>
      <div className={classes.div}>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => {
            return (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {getContent(activeStep)}
      </div>
    </Container>
  );
};

export default Research;
