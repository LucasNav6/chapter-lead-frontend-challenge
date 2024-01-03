import useStore from "@Storages/storage";

const useRedirectUserWhen = () => {
  // Get the user_uuid from the store
  const {user_uuid} = useStore();

  // If user is not saved in the store, return false
  return user_uuid ? true : false;
};

export default useRedirectUserWhen;
