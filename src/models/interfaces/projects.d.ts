export interface ProjectItem {
  _id: string;
  project: Project;
  tasks: Tasks[];
}

export interface Project {
  name: string;
  description: string;
  due_date: string;
  total_tasks: number;
  done_tasks: number;
}

export interface Tasks {
  _id: string;
  name: string;
  description: string;
  due_date: string;
  done: boolean;
}
