import { css } from "@emotion/react";
import { type CSSProperties } from "react";

const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
`;

interface IProps {
  children: any;
  style?: CSSProperties;
  className?: string;
  root?: boolean;
}
export default function Center(props: IProps) {
  return (
    <div className={props.className} css={container} style={props.style}>
      {props.children}
    </div>
  );
}
