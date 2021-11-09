import { css } from '@emotion/react'

export const global = css`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
body {
  background: #33333d !important;
  color: #fff !important;
  padding-bottom: 3rem;
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
`;
