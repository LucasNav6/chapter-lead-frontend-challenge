import {ProjectItem} from "@Models/interfaces/projects";
import {create} from "zustand";
import {persist} from "zustand/middleware";

// Define the structure of the store
type TStoreInitialState = {
  user_uuid?: string | null;
  user_mail?: string | null;
  projects?: ProjectItem[];
};
interface IStore extends TStoreInitialState {
  removeUserUUID?: () => void;
  setUserUUID?: (uuid: string) => void;
  removeUserMail?: () => void;
  setUserMail?: (mail: string) => void;
  setProjects?: (projects: ProjectItem[]) => void;
  logOut?: () => void;
}

// Create the Zustand store
const initialState: TStoreInitialState = {
  user_uuid: null,
  user_mail: null,
  projects: []
};

const useStore: () => IStore = create(
  persist(
    (set) => ({
      ...initialState,
      removeUserUUID: () => set({user_uuid: null}),
      setUserUUID: (uuid) => set({user_uuid: uuid}),
      removeUserMail: () => set({user_mail: null}),
      setUserMail: (mail) => set({user_mail: mail}),
      setProjects: (projects) => set({projects: projects}),
      logOut: () => set(initialState)
    }),
    {
      name: "user-storage"
    }
  )
);

export default useStore;
