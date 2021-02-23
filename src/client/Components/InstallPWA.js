import { IconButton, Tooltip } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import InstallIcon from "@material-ui/icons/GetApp";

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      console.log(e);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <Tooltip title="Install App">
      <IconButton
        style={{ color: "white", borderColor: "white" }}
        onClick={onClick}
      >
        <InstallIcon style={{ color: "white" }} />
      </IconButton>
    </Tooltip>
  );
};

export default InstallPWA;
