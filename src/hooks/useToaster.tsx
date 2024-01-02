import toast from "react-hot-toast";

export interface IUseToaster {
  type: "success" | "error";
  message: string;
}

const useToaster = () => {
  const showUserMessage = ({type, message}: IUseToaster) => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        toast.error(message);
        break;
    }
  };

  return showUserMessage;
};

export default useToaster;
