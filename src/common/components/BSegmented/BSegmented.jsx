import React from "react";
import { Segmented, Space } from "antd";

export const BSegmented = (props) => (
  <Space direction="vertical">
    <Segmented
      options={props?.options}
      onChange={(e) => props?.onChange(e?.target?.value)}
      style={{ ...props?.style }}
      {...props}
    />
  </Space>
);
