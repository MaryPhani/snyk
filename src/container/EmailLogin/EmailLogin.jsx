import React, { useState } from "react";
import { ArrowRightOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import BInput from "@common/components/bInput";
import {
  BParagraph,
  BText,
  BH3,
} from "@common/components/bTypography/bTypography";
import { BButton } from "@common/components/bButton/bButton";
import { Space } from "antd";
import BPasswordInput from "@common/components/bPasswordInput";
import "./EmailLogin.css";

const EmailLogin = ({
  inputValue,
  inputType,
  goToLogin,
  setRaisingIssue,
  forgotPassword,
}) => {
  const [isOTPNextDisabled, setOTPNextDisabled] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Space direction="vertical" size="middle" className="space-wrapper">
      <div className="login-screen">
        <div className="mb-4">
          <BH3 style={{ color: "#0048BA" }}>Welcome</BH3>
          <BParagraph>
            Enter credentials to access your account securely.
          </BParagraph>
        </div>
        <div>
          <BInput
            previousSibling={
              <BText>
                <span style={{ color: "red" }}>* </span>Enter registered phone
                or email
              </BText>
            }
            className="input-email-field"
            value={inputValue}
            disabled={true}
            addonAfter={
              <div
                style={{ cursor: "pointer", color: "#0048BA" }}
                onClick={goToLogin}
              >
                Change
              </div>
            }
          />
        </div>
        <div className="mt-3">
          <BPasswordInput
            previousSibling={
              <>
                <span style={{ color: "red" }}>* </span>
                <BText>Password</BText>
              </>
            }
            placeholder={"Enter details"}
            className="input-email-field"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
        </div>
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <BButton type="link" onClick={forgotPassword}>
            Forgot password
          </BButton>
        </div>
      </div>
      <div>
        <div className="footer-btns-wrapper">
          <div className="btn-next-wrapper">
            <BButton
              disabled={isOTPNextDisabled}
              type="primary"
              icon={<ArrowRightOutlined />}
              className="d-flex-a-jc-center"
              //onClick={nextOtpButtonClick}
            >
              Login
            </BButton>
          </div>
          <div className="btn-needhelp-wrapper">
            <BButton
              type="link"
              icon={<QuestionCircleOutlined />}
              style={{
                fontSize: "14px",
                padding: "0px",
              }}
              className="d-flex-a-jc-center btn-needhelp"
              onClick={() => setRaisingIssue()}
            >
              Need help logging in?
            </BButton>
          </div>
        </div>
      </div>
    </Space>
  );
};

export default EmailLogin;
