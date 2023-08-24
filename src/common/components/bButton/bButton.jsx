import React from "react";
import { Button } from "antd";
import "./bButton.css";

// type options: ["primary", link] there were many other options as well.
export function BButton(props) {
  return (
    <Button
      type={props?.type}
      style={props.style}
      className={props?.type !== "link" ? "button-style" : ""}
      disabled={props?.disabled}
      block={"true"}
      onClick={props?.onClick}
      {...props}
    >
      {props?.children}
    </Button>
  );
}
