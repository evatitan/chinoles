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

export type AuthState = {
  isAuthenticated: boolean;
  user: {
    email: string;
    username: string;
  } | null;
};

export type Course = {
  id?: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  model: string;
  // TODO: add duration
};

export type RegisterResponse = {
  message: string;
  token: string;
  user: {
    user_name: string;
    email: string;
  };
};

export type RegisterFormInputs = {
  user_name: string;
  email: string;
  password: string;
  gender: string;
};
