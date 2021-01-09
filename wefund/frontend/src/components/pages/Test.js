import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Test = () => {
  const onPress = (value) => {
    console.log("Captcha value: ", value);
  };
  return (
    <div>
      <ReCAPTCHA
        sitekey="6Lf2wyQaAAAAAHcL6BSdwWvjdIbx2Lvq1CH_jOc6"
        onChange={onPress}
      />
    </div>
  );
};

export default Test;
