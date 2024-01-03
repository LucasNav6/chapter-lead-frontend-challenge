export interface IProjectItem {
  _id: string;
  project: IProject;
  tasks: ITasks[];
}

export interface IProject {
  name: string;
  description: string;
  due_date: string;
  total_tasks: number;
  total_done: number;
}

export interface ITasks {
  _id: string;
  name: string;
  description: string;
  due_date: string;
  done: boolean;
}
