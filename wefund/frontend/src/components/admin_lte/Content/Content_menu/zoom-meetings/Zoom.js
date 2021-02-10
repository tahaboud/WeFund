import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ZoomMtg } from "@zoomus/websdk";
import {
  getUserSignature,
  getAdminSignature,
} from "../../../../../actions/zoomAction";

const Zoom = ({ username, submitted }) => {
  const { signature, meetingPass } = useSelector((state) => state.zoom);
  const dispatch = useDispatch();
  const role = 1;
  useEffect(() => {
    dispatch(getAdminSignature({role:true}));
    //dispatch(getUserSignature());
    ZoomMtg.setZoomJSLib("https://source.zoom.us/1.8.6/lib", "/av");
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
  }, []);
  useEffect(() => {
    if (submitted) {
      if (signature) {
        ZoomMtg.init({
          leaveUrl: "http://127.0.0.1:8000/done",
          isSupportAV: true,
          success: function () {
            ZoomMtg.join({
              signature: signature,
              meetingNumber: "2715966816",
              userName: `${username}`,
              apiKey: "Pvr06z3zRNueKolA69kBCA",
              passWord: `${meetingPass}`,
              disableCallOut: false,
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
    }
  }, [submitted, signature]);

  return <></>;
};

export default Zoom;
