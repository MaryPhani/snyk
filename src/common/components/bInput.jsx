import { Input } from "antd";

const BInput = (props) => {
  return (
    <>
      <div style={{ margin: "5px" }}>
        {props?.previousSibling ?? props?.previousSibling}
      </div>
      <Input
        placeholder={props?.placeholder}
        value={props?.value}
        onChange={props?.onChange}
        className={props?.className}
        {...props}
      />
      {props?.errorMsg ?? <div className="danger">{props?.errorMsg}</div>}
      {props?.nextSibling ?? props?.nextSibling}
    </>
  );
};

export default BInput;
