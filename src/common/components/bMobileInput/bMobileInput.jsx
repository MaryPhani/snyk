import React, { useState } from "react";
import { InputNumber, Select, Space } from "antd";

const BMobileInput = (props) => {
  const { Option } = Select;

  const options = [
    {
      value: "+91",
      label: "+91",
    },
    {
      value: "+90",
      label: "+90",
    },
  ];

  const selectBefore = (
    <Select
      defaultValue="+91"
      style={{
        width: 100,
        backgroundColor: "#f5f5f5",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    >
      <Option value="+91">+91</Option>
      <Option value="+90">+90</Option>
    </Select>
  );

  return (
    <Space direction="vertical" style={{ ...props?.style }}>
      <InputNumber
        addonBefore={selectBefore}
        defaultValue={"9891000000"}
        controls={false}
        style={{ width: "100%" }}
      />
      {props?.errorMsg ?? <div className="danger">{props?.errorMsg}</div>}
    </Space>
  );
};

export default BMobileInput;
