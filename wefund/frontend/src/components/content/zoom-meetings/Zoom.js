import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ZoomMtg } from "@zoomus/websdk";
import {
  getUserSignature,
  getAdminSignature,
} from "../../../actions/zoomAction";

const Zoom = ({ username, submitted }) => {
  const { signature, meetingPass } = useSelector((state) => state.zoom);
  const dispatch = useDispatch();
  const role = 1;
  useEffect(() => {
<<<<<<< HEAD
    dispatch(getAdminSignature({role: true}));
=======
   // dispatch(getAdminSignature({role:true}));
    dispatch(getUserSignature());
    console.log(0)
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
    ZoomMtg.setZoomJSLib("https://source.zoom.us/1.8.6/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
  }, []);
  useEffect(() => {
    if (submitted) {
      if (signature) {
<<<<<<< HEAD
=======
        console.log(1);
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
        ZoomMtg.init({
          leaveUrl: "http://127.0.0.1:8000/done",
          isSupportAV: true,
          success: function () {
<<<<<<< HEAD
=======
            console.log(2)
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
            ZoomMtg.join({
              signature: signature,
              meetingNumber: "2715966816",
              userName: `${username}`,
              apiKey: "Pvr06z3zRNueKolA69kBCA",
              passWord: `${meetingPass}`,
<<<<<<< HEAD
              disableCallOut: false,
=======
             disableCallOut: false,
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
              error: (error) => {
                error.errorMessage
                  ? alert(error.errorMessage)
                  : alert(error.result);
              },
            });
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
<<<<<<< HEAD
=======
      
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
    }
  }, [submitted, signature]);

  return <></>;
};

export default Zoom;
