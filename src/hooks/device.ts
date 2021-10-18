import useMediaQuery from "@mui/material/useMediaQuery";
export function usePhone() {
    const matches = useMediaQuery("(max-width:600px)");
    return matches;
}
