export interface Project {
  name: string;
  description: string;
  due_date: string;
  total_tasks: number;
  total_done: number;
}

export interface Tasks {
  _id: string;
  name: string;
  description: string;
  due_date: string;
  done: boolean;
}

export interface ProjectItem {
  _id: string;
  project: Project;
  tasks: Tasks[];
}

export interface ProjectItemFirebase {
  projects: ProjectItem[];
}

export const projects: ProjectItem[] = [
  {
    _id: "a",
    project: {
      name: "Holidays in Norway",
      description: "Plan the next holidays in Norway",
      due_date: "01-01-2023",
      total_tasks: 10,
      total_done: 8
    },
    tasks: [
      {
        _id: "1",
        name: "Book the flight",
        description: "Book the flight to Oslo",
        due_date: "01-01-2023",
        done: true
      },
      {
        _id: "2",
        name: "Book the hotel",
        description: "Book the hotel in Oslo",
        due_date: "01-01-2023",
        done: true
      },
      {
        _id: "3",
        name: "Book the car",
        description: "Book the car in Oslo",
        due_date: "01-01-2023",
        done: false
      },
      {
        _id: "4",
        name: "Book the train",
        description: "Book the train in Oslo",
        due_date: "01-01-2023",
        done: false
      },
      {
        _id: "5",
        name: "Book the bus",
        description: "Book the bus in Oslo",
        due_date: "01-01-2023",
        done: false
      },
      {
        _id: "6",
        name: "Book the flight",
        description: "Book the flight to Oslo",
        due_date: "01-01-2023",
        done: true
      },
      {
        _id: "7",
        name: "Book the hotel",
        description: "Book the hotel in Oslo",
        due_date: "01-01-2023",
        done: true
      },
      {
        _id: "8",
        name: "Book the car",
        description: "Book the car in Oslo",
        due_date: "01-01-2023",
        done: false
      },
      {
        _id: "9",
        name: "Book the train",
        description: "Book the train in Oslo",
        due_date: "01-01-2023",
        done: false
      },
      {
        _id: "10",
        name: "Book the bus",
        description: "Book the bus in Oslo",
        due_date: "01-01-2023",
        done: false
      }
    ]
  }
];
