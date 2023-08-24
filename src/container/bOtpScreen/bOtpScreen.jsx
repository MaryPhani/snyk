import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import BInput from "@common/components/bInput";
import {
  BParagraph,
  BText,
  BH3,
} from "@common/components/bTypography/bTypography";
import { BButton } from "@common/components/bButton/bButton";
import BOtpInput from "@common/components/bOtpContainer/bOTP";
import IsMobileContext from "@utils/isMobileContext";

const BOtpScreen = ({ inputValue, inputType, goToLogin, setRaisingIssue }) => {
  const [isOTPNextDisabled, setOTPNextDisabled] = useState(false);
  const [resendOtpTimeout, setResendOtpTimeout] = useState(60);
  const isMobile = useContext(IsMobileContext);

  return (
    <>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          padding: "20px",
        }}
      >
        <div>
          <div className="mb-5">
            <BH3 style={{ color: "#0048BA" }}>Welcome</BH3>
            <BParagraph>
              Enter credentials to access your account securely.
            </BParagraph>
          </div>
          <div>
            <BInput
              previousSibling={
                <BParagraph>
                  <BText style={{ color: "red" }}>* </BText>Enter registered
                  phone or email
                </BParagraph>
              }
              className="input-email-field"
              value={"9889941287"}
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
          <BOtpInput
            autoFocus
            length={6}
            className="otpContainer"
            inputClassName="otpInput"
            previousSibling={
              <BParagraph>
                <BText style={{ color: "red" }}>* </BText>
                <BText>Enter OTP</BText>
              </BParagraph>
            }
            onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
            nextSibling={
              isMobile ? (
                <BParagraph>
                  Didn't recieve the code?{" "}
                  <BText style={{ color: "#0048BA" }}>
                    Resend OTP in {resendOtpTimeout} secs
                  </BText>
                </BParagraph>
              ) : (
                <BParagraph style={{ float: "right" }}>
                  Resend OTP in {resendOtpTimeout} secs
                </BParagraph>
              )
            }
          />
        </div>

        <div>
          <div className="footer-btns-wrapper">
            <div className="btn-next-wrapper">
              <BButton
                disabled={isOTPNextDisabled}
                type="primary"
                //icon={<ArrowRightOutlined />}
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
    </>
  );
};

export default BOtpScreen;
