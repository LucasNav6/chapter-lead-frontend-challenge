export interface Project {
  name: string;
  description: string;
  due_date: string;
  total_tasks: number;
  done_tasks: number;
}

interface ProjectItem {
  _id: number;
  project: Project;
}

export const projects: ProjectItem[] = [
  {
    _id: 1,
    project: {
      name: "Holidays in Norway",
      description: "Plan the next holidays in Norway",
      due_date: "01-01-2023",
      total_tasks: 10,
      done_tasks: 8
    }
  },
  {
    _id: 2,
    project: {
      name: "Explore Mountains",
      description: "Discover the beauty of mountain landscapes",
      due_date: "05-15-2023",
      total_tasks: 15,
      done_tasks: 5
    }
  },
  {
    _id: 3,
    project: {
      name: "Learn Photography",
      description: "Improve photography skills",
      due_date: "03-01-2023",
      total_tasks: 8,
      done_tasks: 3
    }
  },
  {
    _id: 4,
    project: {
      name: "Healthy Lifestyle",
      description: "Start a fitness and wellness journey",
      due_date: "02-28-2023",
      total_tasks: 12,
      done_tasks: 6
    }
  },
  {
    _id: 5,
    project: {
      name: "Read Classic Novels",
      description: "Dive into the world of classic literature",
      due_date: "04-10-2023",
      total_tasks: 20,
      done_tasks: 15
    }
  },
  {
    _id: 6,
    project: {
      name: "Garden Makeover",
      description: "Transform the backyard into a beautiful garden",
      due_date: "06-30-2023",
      total_tasks: 18,
      done_tasks: 10
    }
  },
  {
    _id: 7,
    project: {
      name: "Learn a New Language",
      description: "Master the basics of a foreign language",
      due_date: "03-15-2023",
      total_tasks: 15,
      done_tasks: 7
    }
  },
  {
    _id: 8,
    project: {
      name: "Home Cooking Challenge",
      description: "Experiment with new recipes and cuisines",
      due_date: "05-05-2023",
      total_tasks: 12,
      done_tasks: 9
    }
  },
  {
    _id: 9,
    project: {
      name: "Art and Craft Marathon",
      description: "Create a series of artistic projects",
      due_date: "04-20-2023",
      total_tasks: 25,
      done_tasks: 18
    }
  },
  {
    _id: 10,
    project: {
      name: "Tech Side Project",
      description: "Build a cool software application",
      due_date: "07-15-2023",
      total_tasks: 30,
      done_tasks: 22
    }
  }
];

console.log(projects);
