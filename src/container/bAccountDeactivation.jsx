import React, { useState } from "react";
import { BH2, BText } from "@common/components/bTypography/bTypography";
import BInput from "@common/components/bInput";
import BMobileInput from "@common/components/bMobileInput/bMobileInput";
import { BDropdown } from "@common/components/bDropdown/bDropdown";
import BTextArea from "@common/components/bTextArea/bTextArea";
import closeOutlined from "@assets/images/closeOutlined.png";
import sendOutlined from "@assets/images/sendOutlined.png";
import { BButton } from "@common/components/bButton/bButton";
import { CONSTANTS_FIELDS } from "@utils/constant";
import { BSegmented } from "@common/components/BSegmented/BSegmented";

const BAccountDeactivation = (props) => {
  const [selectedIssue, setSelectedIssue] = useState(1);
  const [issueDescription, setIssueDescription] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [selectEmailOrPhoneInput, setSelectEmailOrPhoneInput] = useState(
    CONSTANTS_FIELDS.EMAIL
  );

  const dropDownItems = [
    {
      label: "Pick an option",
      key: "1",
    },
    {
      label: "others",
      key: "2",
    },
  ];

  const dropdownProps = {
    items: dropDownItems,
    handleMenuClick: (e) => {
      setSelectedIssue(e?.key);
    },
    selectable: true,
    defaultSelectedKeys: [selectedIssue],
  };

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <BH2>Account deactivated</BH2>
        <img
          src={closeOutlined}
          height={16}
          width={16}
          style={{ cursor: "pointer" }}
          onClick={() => props?.setRaisingIssue()}
        />
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ height: "90%" }}>
          <div>
            <BText>
              Having trouble logging in? Let us know and we'll assist you in
              resolving the issue promptly.
            </BText>
          </div>
          <div className="mt-3">
            <BInput
              previousSibling={<BText>Subject</BText>}
              placeholder="Account deactivated"
              value={subject}
              onChange={(value) => setSubject(value)}
            />
          </div>
          <div className="mt-3">
            <BDropdown
              previousSibling={<BText>Select an Issue</BText>}
              dropdownProps={dropdownProps}
              style={{ width: "100%" }}
              btnStyle={{ width: "100%" }}
            />
          </div>
          <div className="mt-3">
            <BSegmented
              onChange={(value) => {
                value === CONSTANTS_FIELDS.PHONE
                  ? setSelectEmailOrPhoneInput(CONSTANTS_FIELDS.PHONE)
                  : setSelectEmailOrPhoneInput(CONSTANTS_FIELDS.EMAIL);
              }}
              options={[CONSTANTS_FIELDS.EMAIL, CONSTANTS_FIELDS.PHONE]}
              style={{ width: "100%" }}
              defaultValue={CONSTANTS_FIELDS.EMAIL}
            />
          </div>
          <div className="mt-3">
            {selectEmailOrPhoneInput === CONSTANTS_FIELDS.PHONE ? (
              <BMobileInput
                style={{ width: "100%" }}
                value={phoneNo}
                onChange={(value) => setPhoneNo(value)}
              />
            ) : (
              <BInput
                placeholder="Enter Email Address"
                value={email}
                onChange={(value) => setEmail(value)}
              />
            )}
          </div>
          <div className="mt-3">
            <BTextArea
              value={issueDescription}
              width="100%"
              onChange={setIssueDescription}
              placeholder="Additional Comments (Optional)"
            />
          </div>
        </div>
        <div>
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
                padding: "10px 10px",
                border: "none",
              }}
            >
              <BButton
                disabled={!true}
                onClick={() => props?.setRaisingIssue()}
              >
                <>
                  <span style={{ marginLeft: "5px" }}>Back</span>
                </>
              </BButton>
            </div>
            <div
              style={{
                justifyContent: "space-between",
                border: "none",
              }}
            >
              <BButton type="primary" disabled={!true}>
                <>
                  <img src={sendOutlined} height={16} width={16} />
                  <span style={{ marginLeft: "5px" }}>Send</span>
                </>
              </BButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BAccountDeactivation;
