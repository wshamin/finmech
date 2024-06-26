export interface AuthRequest {
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

interface Role {
  id: number;
  roleName: string;
  authority: string;
}

export interface UserRequest {
  username: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export interface UserResponse {
  id: number;
  username: string;
  email: string;
  roles: Role[];
}
