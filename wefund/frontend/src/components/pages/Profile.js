import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Nav from "../content/Nav";
import MultiStepFormProfile from "./MultiStepFormProfile";
import Footer from "../content/Footer";
import { getResearch } from "../../actions/researchAction";
import Edit from "../content/profile/Profile";
import CssBaseline from "@material-ui/core/CssBaseline";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getResearch());
  }, []);
  const { research, isLoading } = useSelector((state) => state.research);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return isAuthenticated && user && user.is_researcher && research  ? (
    <div>
    
      <Edit/>
    </div>
  ) : 
  <div>
        <MultiStepFormProfile />
 
        </div>
      
  
};

export default Profile;
