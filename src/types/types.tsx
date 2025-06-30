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

export type Course = {
  id: number;
  title: string;
  description: string;
  prices: number;
  img?: string | null;
  category: "chinese" | "spanish";
  duration: number;
  model: "online" | "live" | "hybrid";
  created_at: string;
  updated_at: string;
};
