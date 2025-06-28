import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { setAuth } from "./../redux/slices/authSlice";
import { useFetch } from "./../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import type { LoginResponse, LoginFormInputs } from "../types/types";
import "./login.css";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loginRes, error, fetchData } = useFetch<LoginResponse>();

  const onSubmit = async (data: LoginFormInputs) => {
    await fetchData(data);
    if (loginRes) {
      dispatch(setAuth(loginRes));
      navigate("/");
    } else if (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        <div className="flex flex-col items-center">
          <label className="text-lg font-medium mb-2 text-center w-full">
            Email
          </label>
          <input
            type="email"
            className="border rounded px-4 py-2 w-full text-center"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1 text-center w-full">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-center">
          <label className="text-lg font-medium mb-2 text-center w-full">
            Password
          </label>
          <input
            type="password"
            className="border rounded px-4 py-2 w-full text-center"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1 text-center w-full">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-gray-800 text-white rounded px-6 py-2 hover:bg-gray-700 w-full font-semibold"
        >
          Login
        </button>
      </form>
      {/* Optionally show loading/error UI */}
    </div>
  );
};

export default Login;
