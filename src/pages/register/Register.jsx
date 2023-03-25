import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useRegister } from "../../hooks/useRegister";

import Button from "../../componets/ui/Button";
import Input from "../../componets/ui/Input";

import "./Register.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [thumbnail, setThumbnail] = useState([]);
  const [thumbnailError, setThumbnailError] = useState(null);

  const { register, isLoading, error } = useRegister();
  const handleFileInputChange = (e) => {
    const photo = e.target.files[0];
    setThumbnailError(null);
    setThumbnail(null);

    if (!photo) {
      setThumbnailError("Please, choose a photo");
      return;
    }

    if (photo.size > 100000) {
      setThumbnailError("Image is too big");
      return;
    }
    if (!photo.type.includes("image")) {
      setThumbnailError("Photo must be an image");
      return;
    }

    setThumbnail(photo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) return;
    register(name, email, password, thumbnail);
  };
  return (
    <main className="register">
      <div className="register__container">
        <form onSubmit={handleSubmit} className="register__form">
          <h1 className="register__heading">register</h1>
          <Input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
            label="name"
            placeholder="Enter your name"
            required
          />
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            label="email"
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
          <Input
            type="file"
            name="file"
            onChange={(e) => handleFileInputChange(e)}
            label="password"
            placeholder="Enter your password"
          />
          {thumbnailError && <p>{thumbnailError}</p>}
          <div className="register__btns">
            <Button submit text={`${isLoading ? "loading..." : "register"}`} />
            <Link to="/auth/login">
              <Button outlined text="login" />
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
