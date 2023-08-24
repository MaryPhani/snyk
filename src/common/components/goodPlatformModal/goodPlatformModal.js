import React from "react";
import goodPlatformLogo from "@assets/images/TheGoodPlatformlogo.svg";
import loginbgImage from "@assets/images/loginbgImage.png";
import BImage from "../BImage";
import LanguageDropdown from "@common/components/languageDropdown";
import "./goodPlatformModal.css";

const GoodPlatformModal = (props) => {
  return (
    <div className="d-flex">
      <img
        id="fullscreen-image"
        src={loginbgImage}
        alt="Fullscreen Image"
        className="bg-image-modal"
      />
      <div className="login-forms-wrapper">
        <div className="d-flex-column h-100">
          {!props.disableLogo && (
            <div
              className="d-flex mb-4 mt-2"
              style={{ justifyContent: "space-between", padding: "20px" }}
            >
              <div>
                <BImage src={goodPlatformLogo} height={40} width={100} />
              </div>
              <LanguageDropdown />
            </div>
          )}
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default GoodPlatformModal;
