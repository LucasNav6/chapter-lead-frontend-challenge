export interface FirestoreAPI {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: ProviderDatum[];
  stsTokenManager?: StsTokenManager;
  createdAt?: string;
  lastLoginAt?: string;
  apiKey?: string;
  appName?: string;
}

export interface ProviderDatum {
  providerId: string;
  uid: string;
  displayName: string | null;
  email: string;
  phoneNumber: string | null;
  photoURL: string | null;
}

export interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

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
