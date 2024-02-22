import * as React from "react";
import MuiDialog, { type DialogProps } from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { usePhone } from "../hooks/device";
import { Drawer } from "@mui/material";

interface IProps extends DialogProps {
  title?: string;
  header?: React.ReactNode;
}
export default function Dialog({ title, children, header, ...props }: IProps) {
  const isPhone = usePhone();
  if (isPhone) {
    return (
      <Drawer anchor="bottom" classes={{ paper: "!bg-[#121212c2] backdrop-blur-sm" }} open={props.open} onClose={props.onClose}>
        {header}
        <IconButton
          aria-label="close"
          onClick={props.onClose as any}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            zIndex: 100,
          }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Drawer>
    );
  }

  return (
    <MuiDialog classes={{ paper: "!bg-[#121212c2] backdrop-blur-sm" }} {...props}>
      {header}
      <IconButton
        aria-label="close"
        onClick={props.onClose as any}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      {children}
    </MuiDialog>
  );
}
