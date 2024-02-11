function stringify(queries: any) {
  const params = new URLSearchParams(queries);
  return params.toString();
}
const qs = { stringify };
export default qs;
