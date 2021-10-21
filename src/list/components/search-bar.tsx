import {css, cx} from "@emotion/css";
import { Search } from "@mui/icons-material";
import Close from "@mui/icons-material/Close";
import { Button, Card, CardActions, CardHeader, Collapse, IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { bp } from "../../libs/device";
import { SearchBox } from "../search";

const container = css`
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0, 0, 0, 0) 100%);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
`;

const content = css`
    padding: 1rem;
`
const contentSearchBtn = css`
    padding-left: 1rem;
    padding-right: 1rem;
    ${bp.down.sm} {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
`

export default function SearchBar() {
    const [focused, setFocused] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const handleFocus = () => {
        setFocused(true);
        ref.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <>
            <div className={cx(container)}>
                <Collapse in={!focused}>
                    <div className={contentSearchBtn} style={{textAlign: 'right'}}>
                        <IconButton size="large" onClick={handleFocus} color="inherit"><Search fontSize="inherit" color="inherit" /></IconButton>
                    </div>
                </Collapse>
            </div>
            <Collapse in={focused} ref={ref} unmountOnExit>
                <Card className={css`margin: 0.25rem;`} >
                    <div className={content}>
                        <SearchBox onClose={() => setFocused(false)} />
                    </div>
                </Card>
            </Collapse>
        </>
    )
}