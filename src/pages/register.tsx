import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type GenderEnum = "female" | "male" | "other";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: GenderEnum;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="max-w-md mx-auto mt-20 bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">First Name</label>
          <input
            {...register("firstName")}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your first name"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Last Name</label>
          <input
            {...register("lastName")}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your last name"
          />
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
}
