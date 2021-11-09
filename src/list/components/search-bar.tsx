/** @jsxImportSource @emotion/react */
import { css  } from "@emotion/react";
import { Menu, Search } from "@mui/icons-material";
import Close from "@mui/icons-material/Close";
import { Card, Chip, Collapse, Grid, IconButton, Input } from "@mui/material";
import router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { bp } from "../../libs/device";
import { SearchBox, useQueryState } from "../search";
import { keys } from "../filters";

import qs from "../../libs/qs";
import * as classes from "./search-bar.style";

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
            <div css={classes.container}>
                <Collapse in={!focused}>
                    <Grid container css={classes.contentSearchBtn}>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            css={classes.grid}
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
                            css={css`
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
                    css={css`
                        background-color: rgba(0, 0, 0, 0.35);
                        margin: 0.25rem;
                    `}
                >
                    <div css={classes.content}>
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
                            css={css`
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
            css={css`
                display: flex;
                justify-content: flex-end;
            `}
        >
            <Input
                inputRef={ref}
                onBlur={() => setCollapsed(true)}
                css={css`
                    width: ${collapsed ? 0 : 250}px;
                    transition: width 0.3s;
                    overflow: hidden;
                `}
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
