import useStore from "src/storage/storage";

// Main function
const useRedirectUserWhen = () => {
  // Check if user is authorized
  const {user_uuid} = useStore();

  // If user is not authorized, return false
  return user_uuid ? true : false;
};

export default useRedirectUserWhen;
