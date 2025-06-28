export type LoginResponse = {
  message: string;
  token: string;
  user: {
    user_name: string;
    email: string;
  };
};

export type LoginFormInputs = {
  email: string;
  password: string;
};
