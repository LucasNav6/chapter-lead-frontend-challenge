import useStore from "src/storage/storage";

// Main function
const useRedirectUserWhen = () => {
  // Check if user is authorized
  const {user_uuid} = useStore();

  console.log("user_uuid", user_uuid);

  // If user is not authorized, return false
  return user_uuid ? true : false;
};

export default useRedirectUserWhen;
