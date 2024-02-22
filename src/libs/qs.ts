import { omitBy } from "lodash";
function stringify(queries: any) {
  const params = new URLSearchParams(omitBy(queries, (v) => v === undefined));
  return params.toString();
}
const qs = { stringify };
export default qs;
