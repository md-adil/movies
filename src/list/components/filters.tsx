import { Checkbox, IconButton, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Divider, Button } from "@mui/material";
import { MenuOpen as Filter } from "@mui/icons-material";
import { useRouter } from "next/router";
import * as filters from "../filters";
import Dialog from "../../components/dialog";
import { useState } from "react";
import { css } from "@emotion/css";
import { SearchBox } from "../search";

const container = css``;
export function Filters() {
    const [open, setOpen] = useState(false);
    return <div className={container}></div>;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            // width: 250,
        },
    },
};

interface IOption {
    label: string;
    value: string;
}

interface IMultiSelectProps {
    data: IOption[];
    value: string[];
    label: string;
    onChange(opt: string[]): void;
}
export function MultiSelect(props: IMultiSelectProps) {
    return (
        <FormControl fullWidth>
            <Select
                variant="standard"
                label={props.label}
                multiple
                placeholder={props.label}
                displayEmpty
                value={props.value}
                onChange={(e) => props.onChange(e.target.value as string[])}
                renderValue={(selected) => (selected.length ? selected.join(", ") : props.label)}
                MenuProps={MenuProps}
                inputProps={{
                    className: css`
                        color: #fff;
                    `,
                }}
            >
                {props.data.map((filter) => (
                    <MenuItem key={filter.value} value={filter.value}>
                        <Checkbox checked={props.value.includes(filter.value)} />
                        <ListItemText primary={filter.label} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

interface ISingleSelectProps {
    data: IOption[];
    value: string;
    label: string;
    onChange(opt: string): void;
}
export function SingleSelect(props: ISingleSelectProps) {
    return (
        <FormControl fullWidth>
            <Select
                variant="standard"
                inputProps={{
                    className: css`
                        color: #fff;
                    `,
                }}
                value={props.value}
                label={props.label}
                placeholder={props.label}
                displayEmpty
                onChange={(e) => props.onChange(e.target.value)}
            >
                <MenuItem value="">{props.label}</MenuItem>
                {props.data.map((x) => (
                    <MenuItem key={x.value} value={x.value}>
                        {x.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
