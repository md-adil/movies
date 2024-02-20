import { css } from "@emotion/css";
import { HelpOutline } from "@mui/icons-material";
import Close from "@mui/icons-material/Close";
import { Alert, Collapse, IconButton, Link, Tooltip } from "@mui/material";
import { useState } from "react";
import { getDevice } from "../../libs/device";

const gap = css`
  padding-bottom: 0.5rem;
`;
const faded = css`
  color: #666;
`;

export function Guide() {
  const device = getDevice();
  if (!device) {
    return null;
  }

  if (device.os.name === "Android") {
    return (
      <div>
        <div className={gap}>You might need to install a torrent client first if you don't have already</div>
        <div className={faded}>Suggestions:</div>
        <ol>
          <li>
            <Link target="playstore" href="https://play.google.com/store/apps/details?id=com.delphicoder.flud&hl=en_IN&gl=US">
              Flud
            </Link>
          </li>
        </ol>
      </div>
    );
  }

  return (
    <div>
      <div className={gap}>You might need to install a torrent client first if you don't have already</div>
      <div className={faded}>Suggestions:</div>
      <ol>
        <li>
          <Link target="Webtorrent" href="https://webtorrent.io/">
            Webtorrent
          </Link>
        </li>
      </ol>
    </div>
  );
}

export function Help() {
  const [isIn, setIn] = useState(false);
  const device = getDevice();
  const handleHelp = () => {
    setIn((x) => !x);
  };
  if (device?.os.name === "iOS") {
    return (
      <Alert
        severity="error"
        className={css`
          margin-top: 0.5rem;
        `}
      >
        IOS doesn't support torrent client yet. You might consider other operating system.
      </Alert>
    );
  }
  return (
    <div
      className={css`
        display: flex;
        margin-top: 0.5rem;
      `}
    >
      <Collapse in={isIn}>
        <Guide />
      </Collapse>
      <div>
        <Tooltip title="How to download">
          <IconButton size="small" onClick={handleHelp}>
            {isIn ? <Close fontSize="inherit" /> : <HelpOutline fontSize="inherit" />}
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
