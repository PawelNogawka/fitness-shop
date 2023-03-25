import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useLogin } from "../../hooks/useLogin";

import Button from "../../componets/ui/Button";
import Input from "../../componets/ui/Input";

import "./Login.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) return;

    login(
      `*[_type == "user1" && email == '${email}' && password == '${password}']`
    );
  };
  return (
    <main className="login">
      <div className="login__container">
        <form onSubmit={handleSubmit} className="login__form">
          <h1 className="login__heading">login</h1>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <Input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            label="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          {error && <p>{error}</p>}
          <div className="login__btns">
            <Button submit text={isLoading ? "loading..." : "login"} />
            <Link to="/auth/register">
              <Button outlined text="register" />
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
