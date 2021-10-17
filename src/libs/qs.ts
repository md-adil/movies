function stringify(queries: any) {
    const params = new URLSearchParams(queries);
    return params.toString();
}

export default { stringify };
