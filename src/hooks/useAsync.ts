import { useCallback, useState } from "react";
import type { LoginResponse,LoginFormInputs , RegisterFormInputs, RegisterResponse, Course} from "../types/types";

export function useLogin<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [loginRes, setLoginRes] = useState<LoginResponse>();
  const url = "http://localhost:3000/auth/login";
  const fetchData = useCallback(async (value: LoginFormInputs) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token") || ""}`, // Include token if available
          "Accept": "application/json", // Optional: to specify the expected response format
         },
        body: JSON.stringify(value),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data: T = await response.json();
      setLoginRes(data as LoginResponse);
      return data as LoginResponse;
    } catch (error) {
      setError(error as Error);
      return null;
    } finally {
      setLoading(false);
    }
  }, [url]);
  return { loginRes, loading, error, fetchData }
}

export function useRegister<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState<RegisterResponse>();
  const url = "http://localhost:3000/auth/register";

  const fetchData = useCallback(async (value: RegisterFormInputs) => { 
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // credentials: "include", // Include cookies in the request
        body: JSON.stringify(value),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data: T = await res.json();
      console.log("data---", data)
      setResponse(data as RegisterResponse);
      return data as RegisterResponse;
    } catch (error) {
      setError(error as Error);
      return null;
    } finally {
      setLoading(false);
    }
  },[url])

  return { response, error, loading, fetchData } 
}

export function useCourses<T>() { 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState<Course[]>();
  const url = "http://localhost:3000/api/courses";
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data: T = await res.json();
      setResponse(data as Course[]);
      return data as Course[];
    } catch (error) {
      setError(error as Error);
      return null;
    } finally {
      setLoading(false);
    }
  }, [url]);
  return { response, error, loading, fetchData };
}