import api from "../../../services/api/axios";
import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "../../dashboard/types/auth";

export const login = async (
  data: LoginRequest
): Promise<AuthResponse> => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

export const register = async (
  data: RegisterRequest
) => {
  const response = await api.post("/auth/register", data);

  return response.data;
};

import axiosInstance from "../../../services/api/axios";

export const getProfile = async () => {
  const response = await axiosInstance.get("/user/profile");
  return response.data;
};
