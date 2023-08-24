import { Typography } from "antd";
const { Title, Link, Text, Paragraph } = Typography;
import "./bTypography.css";

export const BH1 = (props) => (
  <>
    <Title className={props?.className} style={{ ...props?.style }}>
      {props?.children}{" "}
    </Title>
  </>
);
export const BH2 = (props) => (
  <>
    <Title className={props?.className} style={{ ...props?.style }} level={2}>
      {props?.children}
    </Title>
  </>
);
export const BH3 = (props) => (
  <>
    <Title className={props?.className} style={{ ...props?.style }} level={3}>
      {props?.children}
    </Title>
  </>
);
export const BH4 = (props) => (
  <>
    <Title className={props?.className} style={{ ...props?.style }} level={4}>
      {props?.children}
    </Title>
  </>
);
export const BH5 = (props) => (
  <>
    <Title className={props?.className} style={{ ...props?.style }} level={5}>
      {props?.children}
    </Title>
  </>
);

export const BLink = (props) => (
  <>
    <Link style={{ ...props?.style }} className={props?.className}>
      {props?.children}
    </Link>
  </>
);

export const BText = (props) => (
  <>
    <Text style={{ ...props?.style }} className={props?.className}>
      {props?.children}
    </Text>
  </>
);

export const BParagraph = (props) => (
  <>
    <Paragraph style={{ ...props?.style }} className={props?.className}>
      {props?.children}
    </Paragraph>
  </>
);
