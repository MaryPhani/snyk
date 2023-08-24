import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

const BPasswordInput = ({ visible, passwordEqual, ...props }) => {
  return (
    <>
      <div style={{ margin: "5px" }}>
        {props?.previousSibling ?? props?.previousSibling}
      </div>
      <Input.Password
        placeholder="input password"
        iconRender={(visible) =>
          passwordEqual ? (
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          ) : visible ? (
            <EyeTwoTone />
          ) : (
            <EyeInvisibleOutlined />
          )
        }
        {...props}
      />
      {props?.errorMsg ?? <div className="danger">{props?.errorMsg}</div>}
      {props?.nextSibling ?? props?.nextSibling}
    </>
  );
};

export default BPasswordInput;
