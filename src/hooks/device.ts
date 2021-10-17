import useMediaQuery from "@mui/material/useMediaQuery";
export function usePhone() {
    const matches = useMediaQuery("(max-width:768px)");
    return matches;
}
