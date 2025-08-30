// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../redux/store";
// import { setAuth } from "./../redux/slices/authSlice";
// import { useLogin, useRegister } from "../hooks/useAsync";
// import { useNavigate } from "react-router-dom";
// import type {
//   LoginResponse,
//   LoginFormInputs,
//   RegisterResponse,
// } from "../types/types";

// type GenderEnum = "female" | "male" | "other";
// interface RegisterFormInputs {
//   name: string;
//   email: string;
//   password: string;
//   gender: GenderEnum;
// }

// const LoginRegister: React.FC = () => {
//   const [tab, setTab] = React.useState<"login" | "register">("login");
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();

//   // Login form
//   const {
//     register: loginRegister,
//     handleSubmit: handleLoginSubmit,
//     formState: { errors: loginErrors },
//   } = useForm<LoginFormInputs>();
//   const { fetchData: loginFetch, error: loginError } =
//     useLogin<LoginResponse>();

//   // Register form
//   const {
//     register: registerRegister,
//     handleSubmit: handleRegisterSubmit,
//     formState: { errors: registerErrors },
//   } = useForm<RegisterFormInputs>();
//   const { fetchData: registerFetch } = useRegister<RegisterResponse>();

//   // Handlers
//   const onLogin = async (data: LoginFormInputs) => {
//     try {
//       const res = await loginFetch(data);
//       if (res) {
//         dispatch(setAuth(res));
//         navigate("/");
//       } else if (loginError) {
//         alert(loginError.message);
//       }
//     } catch (error) {
//       alert("An unexpected error occurred. Please try again later.");
//       console.error("Login error:", error);
//     }
//   };

//   const onRegister = async (data: RegisterFormInputs) => {
//     try {
//       const res = await registerFetch(data);
//       if (res) {
//         setTab("login");
//       }
//     } catch (error) {
//       alert("An unexpected error occurred. Please try again later.");
//       console.error("Register error:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
//       <div className="flex w-full mb-8">
//         <button
//           onClick={() => setTab("login")}
//           style={{
//             flex: 1,
//             background: tab === "login" ? "rgb(64, 145, 108)" : "#f3f3f3",
//             color: tab === "login" ? "#fff" : "rgb(85, 85, 85)",
//             borderRadius: "8px 0 0 8px",
//             padding: "0.75rem 0",
//             fontWeight: 700,
//             border: "none",
//             outline: "none",
//             cursor: "pointer",
//             fontSize: "1.1rem",
//             transition: "background 0.2s",
//           }}
//         >
//           Login
//         </button>
//         <button
//           onClick={() => setTab("register")}
//           style={{
//             flex: 1,
//             background: tab === "register" ? "rgb(64, 145, 108)" : "#f3f3f3",
//             color: tab === "register" ? "#fff" : "rgb(85, 85, 85)",
//             borderRadius: "0 8px 8px 0",
//             padding: "0.75rem 0",
//             fontWeight: 700,
//             border: "none",
//             outline: "none",
//             cursor: "pointer",
//             fontSize: "1.1rem",
//             transition: "background 0.2s",
//           }}
//         >
//           Register
//         </button>
//       </div>
//       {tab === "login" ? (
//         <form
//           onSubmit={handleLoginSubmit(onLogin)}
//           className="w-full flex flex-col gap-6"
//           style={{ color: "rgb(85, 85, 85)" }}
//         >
//           <h1
//             className="text-3xl font-bold mb-6 text-center"
//             style={{ color: "rgb(64, 145, 108)" }}
//           >
//             Login
//           </h1>
//           <div className="flex flex-col items-center">
//             <label
//               className="mb-1 font-medium"
//               style={{ color: "rgb(64, 145, 108)" }}
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               className="border rounded px-4 py-2 w-full text-center"
//               style={{ color: "rgb(85, 85, 85)" }}
//               {...loginRegister("email", { required: "Email is required" })}
//             />
//             {loginErrors.email && (
//               <span className="text-red-500 text-sm mt-1 text-center w-full">
//                 {loginErrors.email.message}
//               </span>
//             )}
//           </div>
//           <div className="flex flex-col items-center">
//             <label
//               className="mb-1 font-medium"
//               style={{ color: "rgb(64, 145, 108)" }}
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               className="border rounded px-4 py-2 w-full text-center"
//               style={{ color: "rgb(85, 85, 85)" }}
//               {...loginRegister("password", {
//                 required: "Password is required",
//               })}
//             />
//             {loginErrors.password && (
//               <span className="text-red-500 text-sm mt-1 text-center w-full">
//                 {loginErrors.password.message}
//               </span>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="rounded px-6 py-2 w-full font-semibold"
//             style={{
//               background: "rgb(64, 145, 108)",
//               color: "#fff",
//             }}
//           >
//             Login
//           </button>
//         </form>
//       ) : (
//         <form
//           onSubmit={handleRegisterSubmit(onRegister)}
//           className="flex flex-col gap-5 w-full"
//           style={{ color: "rgb(85, 85, 85)" }}
//         >
//           <h1
//             className="text-3xl font-bold mb-6 text-center"
//             style={{ color: "rgb(64, 145, 108)" }}
//           >
//             Register
//           </h1>
//           <div className="flex flex-col">
//             <label
//               className="mb-1 font-medium"
//               style={{ color: "rgb(64, 145, 108)" }}
//             >
//               Name
//             </label>
//             <input
//               {...registerRegister("name")}
//               className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter your username"
//               style={{ color: "rgb(85, 85, 85)" }}
//             />
//             {registerErrors.name && (
//               <span className="text-red-500 text-sm mt-1 text-center w-full">
//                 {registerErrors.name.message}
//               </span>
//             )}
//           </div>
//           <div className="flex flex-col">
//             <label
//               className="mb-1 font-medium"
//               style={{ color: "rgb(64, 145, 108)" }}
//             >
//               Email
//             </label>
//             <input
//               {...registerRegister("email")}
//               className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter your email"
//               type="email"
//               style={{ color: "rgb(85, 85, 85)" }}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label
//               className="mb-1 font-medium"
//               style={{ color: "rgb(64, 145, 108)" }}
//             >
//               Password
//             </label>
//             <input
//               {...registerRegister("password")}
//               className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter your password"
//               type="password"
//               style={{ color: "rgb(85, 85, 85)" }}
//             />
//             {registerErrors.password && (
//               <span className="text-red-500 text-sm mt-1 text-center w-full">
//                 {registerErrors.password.message}
//               </span>
//             )}
//           </div>
//           <div className="flex flex-col">
//             <label
//               className="mb-1 font-medium"
//               style={{ color: "rgb(64, 145, 108)" }}
//             >
//               Gender Selection
//             </label>
//             <select
//               {...registerRegister("gender")}
//               className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               style={{ color: "rgb(85, 85, 85)" }}
//             >
//               <option value="female">Female</option>
//               <option value="male">Male</option>
//               <option value="other">Other</option>
//             </select>
//             {registerErrors.gender && (
//               <span className="text-red-500 text-sm mt-1 text-center w-full">
//                 {registerErrors.gender.message}
//               </span>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="rounded px-6 py-2 font-semibold mt-4"
//             style={{
//               background: "rgb(64, 145, 108)",
//               color: "#fff",
//             }}
//           >
//             Register
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginRegister;
