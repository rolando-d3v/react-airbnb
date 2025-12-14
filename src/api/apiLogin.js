import api_back from "./apiRest";

export const loginRequest = (data) => {
  return api_back.post("/auth/login", data);
};
