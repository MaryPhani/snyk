import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MailOutlined,
  MobileOutlined,
  ArrowRightOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import BInput from "@common/components/bInput";
import {
  BParagraph,
  BText,
  BH3,
} from "@common/components/bTypography/bTypography";
import { BButton } from "@common/components/bButton/bButton";
import GoodPlatformModal from "@common/components/goodPlatformModal/goodPlatformModal";
import BasicModal from "@common/components/BasicModal";
import BOtpScreen from "../bOtpScreen/bOtpScreen";
import { Modal } from "antd";
import ForgotPassword from "../ForgotPassword";
import BRaiseIssue from "../bRaiseIssue/bRaiseIssue";
import EmailLogin from "../EmailLogin/EmailLogin";
import IsMobileContext from "@utils/isMobileContext";
import { useTranslation } from "react-i18next";
import "./LoginPage.css";
import { verifyUser } from "@api/verifyUser";

const LoginPage = () => {
  let navigate = useNavigate();
  const isMobile = useContext(IsMobileContext);
  //console.log("isMobile", isMobile);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isNextDisabled, setNextDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");
  const [raisingIssue, setRaisingIssue] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    checkInputType(e.target.value);
  };

  const checkInputType = (value) => {
    if (isValidEmail(value)) {
      setInputType("email");
      setNextDisabled(false);
    } else if (isValidPhoneNumber(value)) {
      setInputType("phone");
      setNextDisabled(false);
    } else {
      setInputType("");
      setNextDisabled(true);
    }
  };

  const isValidEmail = (value) => {
    return /\S+@\S+\.\S+/.test(value);
  };

  const isValidPhoneNumber = (value) => {
    return /^\d{10}$/.test(value);
  };

  const nextButtonClick = (values) => {
    verifyUserExists();
  };

  const verifyUserExists = () => {
    const res = verifyUser(inputValue, inputType);
    if (res.status == "true") {
      if (inputType === "email") setShowEmailLogin(true);
      else setShowOtpScreen(true);
    } else {
      Modal.warning({
        title: `Inavalid ${inputType}`,
        content: res.message,
      });
    }
  };

  function renderLoginScreen() {
    return (
      <div
        className="d-flex-column-jc-space-between h-100"
        style={{
          padding: "20px",
        }}
      >
        <div>
          <div className="mb-4">
            <BH3 style={{ color: "#0048BA" }}>{t("title.welcome")}</BH3>
            <BParagraph>{t("title.loginText")}</BParagraph>
          </div>
          <div>
            <BInput
              previousSibling={<BText>{t("title.credentialText")}</BText>}
              placeholder={"Enter details"}
              className="input-email-field"
              autoFocus={true}
              value={inputValue}
              onChange={(e) => handleInputChange(e)}
              suffix={
                inputType === "phone" ? (
                  <MobileOutlined />
                ) : inputType === "email" ? (
                  <MailOutlined />
                ) : (
                  ""
                )
              }
            />
          </div>
          <div className="d-flex mb-5" style={{ justifyContent: "center" }}>
            <BButton type="link" onClick={mailSent}>
              {t("title.forgotPassword")}
            </BButton>
          </div>
        </div>
        <div>
          <div className="footer-btns-wrapper">
            <div className="btn-next-wrapper">
              <BButton
                disabled={isNextDisabled}
                type="primary"
                icon={<ArrowRightOutlined />}
                onClick={nextButtonClick}
                className="d-flex-a-jc-center"
              >
                Next
              </BButton>
            </div>
            <div className="btn-needhelp-wrapper">
              <BButton
                type="link"
                icon={
                  <QuestionCircleOutlined
                    style={{ verticalAlign: "baseline" }}
                  />
                }
                style={{
                  fontSize: "14px",
                  padding: "0px",
                }}
                className="d-flex-a-jc-center btn-needhelp"
                onClick={() => setRaisingIssue(true)}
              >
                Need help logging in?
              </BButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const mailSent = () => {
    Modal.warning({
      title: "Forgot Password",
      content:
        "A link has been sent to your registered email ramkumar@nagarro.com with instructions on how to create new password.",
    });
  };

  return (
    <div>
      {raisingIssue ? (
        <GoodPlatformModal disableLogo={true}>
          <BRaiseIssue setRaisingIssue={() => setRaisingIssue(!raisingIssue)} />
        </GoodPlatformModal>
      ) : (
        <GoodPlatformModal>
          {showOtpScreen ? (
            <BOtpScreen
              inputValue={inputValue}
              inputType={inputType}
              goToLogin={() => setShowOtpScreen(false)}
              setRaisingIssue={() => setRaisingIssue(true)}
            />
          ) : showEmailLogin ? (
            <EmailLogin
              inputValue={inputValue}
              inputType={inputType}
              goToLogin={() => setShowOtpScreen(false)}
              setRaisingIssue={() => setRaisingIssue(true)}
              forgotPassword={mailSent}
            />
          ) : showNewPassword ? (
            <ForgotPassword
              inputValue={inputValue}
              inputType={inputType}
              mailSent={mailSent}
              goToLogin={() => setShowOtpScreen(false)}
              setRaisingIssue={() => setRaisingIssue(true)}
            />
          ) : (
            renderLoginScreen()
          )}
        </GoodPlatformModal>
      )}
      <BasicModal isOpen={false} onCancel={() => setShowModal(false)}>
        <p>ANas</p>
      </BasicModal>
    </div>
  );
};

export default LoginPage;
