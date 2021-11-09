import {css} from "@emotion/react";
import { bp } from "../../libs/device";

export const container = css`
background: rgb(0, 0, 0);
background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 100%);
color: #fff;
`;

export const content = css`
    padding: 1rem;
`;
export const contentSearchBtn = css`
display: flex;
justify-content: space-between !important;
flex-direction: row-reverse;
align-items: flex-start;
padding-left: 1rem;
padding-right: 1rem;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
${bp.down.sm} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
`;

export const grid = css`
display: flex;
justify-content: flex-end;
flex: 1;
`;
