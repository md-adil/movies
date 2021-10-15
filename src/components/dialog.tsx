import * as React from 'react';
import MuiDialog, { DialogProps } from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface IProps extends DialogProps {
    title?: string;
}
export default function Dialog({title, children, ...props}: IProps) {
  return (
   
      <MuiDialog
       {...props}
      >
          <IconButton
            aria-label="close"
            onClick={props.onClose as any}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
            {children}
      </MuiDialog>
  );
}