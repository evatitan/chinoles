import { useForm } from "react-hook-form";
import { useRegister } from "../hooks/useFetch";
import type { RegisterResponse } from "../types/types";
import { useNavigate } from "react-router-dom";

type GenderEnum = "female" | "male" | "other";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  gender: GenderEnum;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { fetchData } = useRegister<RegisterResponse>();
  const navigate = useNavigate();
  const onSubmit = async (data: IFormInput) => {
    try {
      const res = await fetchData(data);
      if (res) {
        navigate("/login");
      }
    } catch (error) {
      alert("An unexpected error occurred. Please try again later.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Name</label>
          <input
            {...register("name")}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1 text-center w-full">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <input
            {...register("email")}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Password</label>
          <input
            {...register("password")}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            type="password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1 text-center w-full">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Gender Selection</label>
          <select
            {...register("gender")}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-sm mt-1 text-center w-full">
              {errors.gender.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-gray-800 text-white rounded px-6 py-2 hover:bg-gray-700 font-semibold mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
