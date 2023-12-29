import React from "react";
import NotAuthorized from "@Pages/error/NotAuthorized.page";
import useStore from "src/storage/storage";

interface IUseUserAuthorized {
  isAuthorized: () => JSX.Element;
  isUnauthorized?: () => JSX.Element;
}

// Default functions
const isAuthorizedDefault = () => {
  return <></>;
};

const isUnauthorizedDefault = () => {
  return <NotAuthorized />;
};

// Main function
const useRedirectUserWhen = ({
  isAuthorized = isAuthorizedDefault,
  isUnauthorized = isUnauthorizedDefault
}: IUseUserAuthorized) => {
  // Check if user is authorized
  const {user_uuid} = useStore();

  // Return component
  if (user_uuid) {
    return isAuthorized();
  } else {
    return isUnauthorized();
  }
};

export default useRedirectUserWhen;
