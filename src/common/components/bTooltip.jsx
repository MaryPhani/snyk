import { Input, Tooltip } from "antd";
import React, { useMemo, useState } from "react";

const BTooltip = ({ text, ...props }) => {
  const options = ["Show", "Hide", "Center"];
  const [arrow, setArrow] = useState("Show");

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  return (
    <Tooltip placement="top" title={text} arrow={mergedArrow}>
      {props.children}
    </Tooltip>
  );
};

export default BTooltip;
