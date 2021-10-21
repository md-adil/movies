import { css, cx } from "@emotion/css"
import { CSSProperties } from "react";

const container = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

interface IProps {
    children: any;
    style?: CSSProperties;
    className?: string;
}
export default function Center(props: IProps) {
    return <div className={cx(container, props.className)} style={props.style}>
        {props.children}
    </div>
}