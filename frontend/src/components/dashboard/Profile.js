import React, {useEffect  } from "react";

const Profile = (props) => {
  const {
    selectProfile,
    pushMessageToSnackbar,
    userData
  } = props;

  useEffect(selectProfile, [selectProfile]);

  return (
    <div>Profile Page</div>
  );
}

export default Profile;
