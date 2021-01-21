import React, {useEffect} from "react";

const Settings = (props) => {
  const {
    selectSettings,
    pushMessageToSnackbar,
  } = props;

  useEffect(selectSettings, [selectSettings]);
    return (
        <div>Settings Page</div>
    );
}

export default Settings;
