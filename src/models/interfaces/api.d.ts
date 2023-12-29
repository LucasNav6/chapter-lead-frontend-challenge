import {FirestoreAPI} from "./firestore";

export interface IApiResponse {
  isSuccessful: boolean;
  errorMessage?: string;
  successMessage?: string;
  data?: FirestoreAPI;
}
