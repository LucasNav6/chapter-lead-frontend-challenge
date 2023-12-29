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
