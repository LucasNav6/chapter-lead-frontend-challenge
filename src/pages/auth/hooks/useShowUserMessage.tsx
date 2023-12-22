import toast from "react-hot-toast";

const useShowUserMessage = () => {
  const showSuccessMessage = (message: string) => {
    toast.success(message);
  };

  const showFailedMessage = (message: string) => {
    toast.error(message);
  };

  return {showSuccessMessage, showFailedMessage};
};

export default useShowUserMessage;
