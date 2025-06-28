import { useCallback, useState } from "react";
import type { LoginResponse,LoginFormInputs } from "../types/types";

export function useFetch<T>() {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data: T = await response.json();
      setLoginRes(data as LoginResponse);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [url]);
  return { loginRes, loading, error, fetchData }
}