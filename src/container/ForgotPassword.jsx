import React, { useEffect, useState } from "react";
import { ArrowRightOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import {
  BParagraph,
  BText,
  BH3,
} from "@common/components/bTypography/bTypography";
import { BButton } from "@common/components/bButton/bButton";
import BPasswordInput from "@common/components/bPasswordInput";
import BTooltip from "@common/components/bTooltip";

const ForgotPassword = ({
  inputValue,
  inputType,
  goToLogin,
  mailSent,
  email = "anas.khalid@nagarro.com",
}) => {
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [saveBtn, setSaveBtn] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPass(e.target.value);
    if (password === e.target.value) {
      setSaveBtn(true);
    }
  };

  return (
    <div>
      <div
        className="login-screen"
        style={{ display: "flex", flexDirection: "column", padding: "20px" }}
      >
        <div className="">
          <BH3 style={{ color: "#0048BA" }}>New Password</BH3>
          <BParagraph>
            Create a new password for the account registered to
            <br /> {email}.
          </BParagraph>
        </div>
        <div>
          <BPasswordInput
            previousSibling={
              <>
                <span style={{ color: "red" }}>*</span>
                <BText>Enter new Password</BText>
                <BTooltip
                  text={
                    "Passwords must contain at least seven characters and at least three must be alphabetical"
                  }
                >
                  <QuestionCircleOutlined
                    style={{
                      color: "#000",
                      marginLeft: "5px",
                      marginBottom: "3px",
                      verticalAlign: "baseline",
                    }}
                  />
                </BTooltip>
              </>
            }
            placeholder={"Enter details"}
            className="input-email-field"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
        </div>
        <div className="mt-3">
          <BPasswordInput
            previousSibling={
              <>
                <span style={{ color: "red" }}>*</span>
                <BText>Re-Enter new Password</BText>
              </>
            }
            placeholder={"Enter details"}
            className="input-email-field"
            passwordEqual={saveBtn}
            value={confirmPass}
            onChange={(e) => handleConfirmPasswordChange(e)}
          />
        </div>
        <div className="d-flex mb-5" style={{ justifyContent: "center" }}>
          <BButton type="link" onClick={mailSent}>
            Forgot password
          </BButton>
        </div>
        <div className="mt-3 bottom-btns">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                justifyContent: "space-between",
                border: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BButton
                type="link"
                icon={
                  <QuestionCircleOutlined
                    style={{ verticalAlign: "baseline" }}
                  />
                }
                onClick={() => props?.setRaisingIssue()}
                style={{
                  fontSize: "12px",
                  padding: "0px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Need help logging in?
              </BButton>
            </div>
            <div
              style={{
                justifyContent: "space-between",
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
              }}
            >
              <BButton
                disabled={isNextDisabled}
                type="primary"
                icon={<ArrowRightOutlined />}
                //onClick={nextButtonClick}
                style={{ alignItems: "center", display: "flex" }}
              >
                Next
              </BButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
