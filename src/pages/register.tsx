import { useForm } from "react-hook-form";
import { useRegister } from "../hooks/useAsync";
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
      <h1
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: "rgb(64, 145, 108)" }}
      >
        Register
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
        style={{ color: "rgb(85, 85, 85)" }}
      >
        <div className="flex flex-col">
          <label
            className="mb-1 font-medium"
            style={{ color: "rgb(64, 145, 108)" }}
          >
            Name
          </label>
          <input
            {...register("name")}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
            style={{ color: "rgb(85, 85, 85)" }}
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1 text-center w-full">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 font-medium"
            style={{ color: "rgb(64, 145, 108)" }}
          >
            Email
          </label>
          <input
            {...register("email")}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            type="email"
            style={{ color: "rgb(85, 85, 85)" }}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 font-medium"
            style={{ color: "rgb(64, 145, 108)" }}
          >
            Password
          </label>
          <input
            {...register("password")}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            type="password"
            style={{ color: "rgb(85, 85, 85)" }}
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1 text-center w-full">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 font-medium"
            style={{ color: "rgb(64, 145, 108)" }}
          >
            Gender Selection
          </label>
          <select
            {...register("gender")}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{ color: "rgb(85, 85, 85)" }}
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
          className="rounded px-6 py-2 font-semibold mt-4"
          style={{
            background: "rgb(64, 145, 108)",
            color: "#fff",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
