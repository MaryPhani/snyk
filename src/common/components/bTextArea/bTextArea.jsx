import { Input } from "antd";
const { TextArea } = Input;

const BTextArea = (props) => {
  return (
    <>
      <TextArea
        rows={4}
        placeholder={props?.placeholder}
        maxLength={props?.maxLength}
        value={props?.value}
        onChange={(e) => props?.onChange(e?.target?.value)}
        {...props}
      />
      {props?.errorMsg ?? <div className="danger">{props?.errorMsg}</div>}
    </>
  );
};

export default BTextArea;
