import {ITask} from "@Adapters/tasks/createTaskIntoProject";
import {ProjectItem} from "src/data";
import {create} from "zustand";
import {persist} from "zustand/middleware";

type Store = {
  user_uuid?: string | null;
  removeUserUUID?: () => void;
  setUserUUID?: (uuid: string) => void;
  user_mail?: string | null;
  removeUserMail?: () => void;
  setUserMail?: (mail: string) => void;
  projects?: ProjectItem[];
  setProjects?: (projects: ProjectItem[]) => void;
  setTaskIntoProject?: (projectId: string, task: ITask) => void;
  logOut?: () => void;
};

const useStore: () => Store = create(
  persist(
    (set) => ({
      user_uuid: null,
      removeUserUUID: () => set({user_uuid: null}),
      setUserUUID: (uuid) => set({user_uuid: uuid}),
      user_mail: null,
      removeUserMail: () => set({user_mail: null}),
      setUserMail: (mail) => set({user_mail: mail}),
      projects: [],
      setProjects: (projects) => set({projects: projects}),
      logOut: () => {
        set({user_uuid: null, user_mail: null, projects: []});
      }
    }),
    {
      name: "user-storage"
    }
  )
);

export default useStore;

// const useStore = create<Store>()((set) => ({
//   // Manage the UUID state of the user
//   user_uuid: null,
//   removeUserUUID: () => set({user_uuid: null}),
//   setUserUUID: (uuid: string) => set({user_uuid: uuid}),

//   // Manage the user mail
//   user_mail: null,
//   removeUserMail: () => set({user_mail: null}),
//   setUserMail: (mail: string) => set({user_mail: mail})
// }));

// export default useStore;
