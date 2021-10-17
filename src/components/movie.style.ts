import { css } from "@emotion/css";

export const container = css`
    display: flex;
`;

export const phoneContainer = css`
    max-height: 80vh;
    overflow: auto;
`;

export const imageContainer = css`
    > div {
        display: block !important;
    }
`;

export const poster = css`
    display: block;
    max-width: 100%;
`;

export const title = css`
    font-weight: 500;
`;

export const content = css`
    padding: 1rem;
    overflow: auto;
`;

export const downloads = css`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`;

export const download = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
