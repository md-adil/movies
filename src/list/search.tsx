import { Button, Container, IconButton, Input, Grid } from "@mui/material";
import { useRouter } from "next/router";
import qs from "../libs/qs";
import { css } from "@emotion/css";
import { Close, Search } from "@mui/icons-material";
import { bp } from "../libs/device";
import { useEffect, useMemo, useState } from "react";
import { MultiSelect, SingleSelect } from "./components/filters";
import * as filters from "./filters";
import { transform } from "lodash";

export const removeEmpty = (obj: any) => {
    return transform(obj, (o: any, v: string, k: string) => {
        const val = v && v.trim();
        if (val && val !== "seeds") {
            o[k] = val;
        }
    });
};

export function useQueryState(cb: (q: Record<string, string>) => any) {
    const router = useRouter();
    const [state, setState] = useState(() => cb(router.query as any));
    useEffect(() => {
        setState(cb(router.query as any));
    }, [router.query]);
    return [state, setState];
}

export function SearchBox(props: any) {
    const router = useRouter();
    const [genre, setGenre] = useQueryState((q) => q.genre ?? "");
    const [quality, setQuality] = useQueryState((q) => q.quality?.split(",") ?? []);
    const [sort, setSort] = useQueryState((q) => q.sort ?? "seeds");
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const query = qs.stringify(
            removeEmpty({
                genre,
                quality: quality.join(","),
                sort,
                page: undefined,
            })
        );
        router.push(`?${query}`);
        props.onClose();
    };
    const handleReset = () => {
        router.push(`?`);
        props.onClose();
    };
    const hasFilter = useMemo(() => filters.keys.some((x) => router.query[x]), [router.query]);
    return (
        <form onSubmit={handleSubmit}>
            <Grid container flexDirection="row-reverse" spacing={2}>
                <Grid item xs={12} sm={3}>
                    <SingleSelect label="Genre" data={filters.genres} value={genre} onChange={setGenre} />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <MultiSelect label="Quality" data={filters.qualities} value={quality} onChange={setQuality} />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <SingleSelect label="Sort" value={sort} data={filters.sorts} onChange={setSort} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    className={css`
                        padding-top: 0.5rem;
                        text-align: right;
                    `}
                >
                    <Button onClick={props.onClose} color="secondary">
                        cancel
                    </Button>
                    {hasFilter && (
                        <Button onClick={handleReset} type="reset" color="warning">
                            Reset
                        </Button>
                    )}
                    <Button type="submit">Apply</Button>
                </Grid>
            </Grid>
        </form>
    );
}
