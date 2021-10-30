import { css, cx, injectGlobal } from "@emotion/css";
import { Filter, Menu, Search } from "@mui/icons-material";
import Close from "@mui/icons-material/Close";
import { Button, Card, CardActions, CardHeader, Chip, Collapse, Grid, IconButton, Input } from "@mui/material";
import router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { bp } from "../../libs/device";
import { SearchBox, useQueryState } from "../search";
import { keys } from "../filters";
import qs from "../../libs/qs";

const container = css`
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 100%);
    color: #fff;
`;

const content = css`
    padding: 1rem;
`;
const contentSearchBtn = css`
    display: flex;
    justify-content: space-between;
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

export default function SearchBar() {
    const [focused, setFocused] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const handleFocus = () => {
        setFocused((x) => !x);
        if (!focused) {
            window.scrollTo({ top: 0 });
        }
    };
    return (
        <>
            <div className={cx(container)}>
                <Collapse in={!focused}>
                    <Grid container className={contentSearchBtn}>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            className={css`
                                display: flex;
                                justify-content: flex-end;
                                flex: 1;
                            `}
                        >
                            <SearchForm />
                            <IconButton color="inherit" onClick={handleFocus}>
                                <Menu color="inherit" />
                            </IconButton>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={8}
                            className={css`
                                flex: 2;
                            `}
                        >
                            <SelectedFilters />
                        </Grid>
                    </Grid>
                </Collapse>
            </div>
            <Collapse in={focused} unmountOnExit>
                <Card
                    ref={ref}
                    className={css`
                        background-color: rgba(0, 0, 0, 0.35);
                        margin: 0.25rem;
                    `}
                >
                    <div className={content}>
                        <SearchBox onClose={() => setFocused(false)} />
                    </div>
                </Card>
            </Collapse>
        </>
    );
}

function SelectedFilters() {
    const { query, push } = useRouter();
    const handleRemove = (key: string) => {
        const q = { ...query };
        delete q[key];
        push(`/?${qs.stringify(q)}`);
    };
    return (
        <>
            {keys.map(
                (key) =>
                    query[key] && (
                        <Chip
                            size="small"
                            key={key}
                            className={css`
                                margin-left: 0.4rem;
                                margin-bottom: 0.25rem;
                                margin-top: 0.25rem;
                                color: inherit;
                                background: #b7b7b782;
                            `}
                            variant="filled"
                            label={query[key]}
                            onDelete={() => handleRemove(key)}
                        />
                    )
            )}
        </>
    );
}

function SearchForm() {
    const router = useRouter();
    const [keywords, setKeywords] = useQueryState((q) => q.keywords ?? "");
    const [collapsed, setCollapsed] = useState(true);
    const ref = useRef<HTMLInputElement>(null);
    const handleCollapse = () => {
        setCollapsed((x) => !x);
        if (collapsed) {
            ref.current?.focus();
        }
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push(`/?${qs.stringify({ ...router.query, keywords })}`);
    };
    return (
        <form
            onSubmit={handleSubmit}
            className={css`
                display: flex;
                justify-content: flex-end;
            `}
        >
            <Input
                inputRef={ref}
                onBlur={() => setCollapsed(true)}
                className={cx(
                    css`
                        width: 0px;
                        transition: width 0.3s;
                        overflow: hidden;
                    `,
                    {
                        [css`
                            width: 250px;
                        `]: !collapsed,
                    }
                )}
                type="text"
                name="keywords"
                style={{ color: "inherit" }}
                placeholder="Search by movie title"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
            />
            <button style={{ display: "none" }} type="submit"></button>
            <IconButton onClick={handleCollapse} color="inherit">
                {!collapsed ? <Close /> : <Search />}
            </IconButton>
        </form>
    );
}
