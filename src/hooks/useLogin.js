import { useState, useEffect } from "react";
import { client } from "../lib/client";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogin = (query) => {
  const { dispatch } = useAuthContext();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (query) => {
    try {
      setIsLoading(true);
      setError(null);
      const user = await client.fetch(query);
      if (user.length == 0) {
        throw new Error("Could not complete login");
      }
      dispatch({ type: "LOGIN", payload: user });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error)
    }
  };

  return { login, isLoading, error };
};
