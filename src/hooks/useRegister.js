import { useState } from "react";
import { client } from "../lib/client";
import { useAuthContext } from "../hooks/useAuthContext";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const register = async (name, email, password, avatar) => {
    try {
      setError(null);
      setIsLoading(true);

     // const formData = new FormData();
     // formData.append("file", avatar);

      const user = await client.create({
        _type: "user1",
        name: name,
        email: email,
        password: password,
      });

      if (!user) {
        throw new Error("Could not complete signup");
      }

      const response = await client.assets.upload("image", avatar, {
        label: avatar.name,
      });
      const patchResult = await client
        .patch(user._id)
        .set({
          avatar: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: response._id,
            },
          },
        })
        .commit();

      const userWithAvatar = Object.assign({}, user, {
        avatar: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: response._id,
          },
        },
      });
      dispatch({ type: "SIGN_UP", payload: userWithAvatar });

      setError(null);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  return { register, isLoading, error };
};
