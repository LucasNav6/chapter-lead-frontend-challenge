import useStore from "src/storage/storage";

const useUserAuthorized = ({onAuthorized, onNotAuthorized}) => {
  const {user_uuid} = useStore();
  if (user_uuid) {
    return onAuthorized();
  } else {
    return onNotAuthorized();
  }
};

export default useUserAuthorized;
