import { Image } from "antd";

const BImage = (props) => {
  const { src, width, height } = props;

  return (
    <Image
      preview={false}
      width={width || 100}
      height={height || 200}
      src={src}
      style={{ ...props?.style }}
    />
  );
};

export default BImage;
