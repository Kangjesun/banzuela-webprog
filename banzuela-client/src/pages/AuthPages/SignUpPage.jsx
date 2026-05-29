import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { registerUser } from "../../services/UserService";

const inputClasses =
  "mt-2 w-full rounded-xl border border-white/30 bg-[#1A1A1A] px-4 py-3 text-sm text-[#F5F5F5] outline-none transition placeholder:text-[#8A8A8A] focus:border-[#D4AF37] focus:bg-[#1A1A1A]";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    contactNumber: "",
    email: "",
    username: "",
    password: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setError("");

      await registerUser(formData);

      navigate("/auth/signin");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Signup failed"
      );
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight !text-white sm:text-4xl">
        Begin your fashion journey
      </h1>

      <p className="mt-3 text-sm leading-6 text-[#C9A227]">
        Sign up to access exclusive editorial content and timeless style inspiration.
      </p>

      {error && (
        <p className="mt-4 text-sm text-red-500">
          {error}
        </p>
      )}

      <form
        className="mt-8 space-y-5"
        onSubmit={handleSignup}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-white">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Damien"
              className={inputClasses}
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-white">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Vossler"
              className={inputClasses}
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-white">
              Age
            </label>
            <input
              type="text"
              name="age"
              placeholder="00"
              className={inputClasses}
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-white">
              Gender
            </label>
            <select
              name="gender"
              className={inputClasses}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-white">
            Contact Number
          </label>
          <input
            type="text"
            name="contactNumber"
            placeholder="09123456789"
            className={inputClasses}
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="name@vogueavenue.com"
            className={inputClasses}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="DamienVosler"
            className={inputClasses}
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white">
            Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="Manila, Philippines"
            className={inputClasses}
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Create your password"
            className={inputClasses}
            value={formData.password}
            onChange={handleChange}
          />
          <p className="mt-2 text-xs text-[#8A8A8A]">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button
          type="submit"
          variant="secondary"
          className={actionButtonClassName}
        >
          Create Account
        </Button>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-[#B8B8B8]">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-[#F5F5F5] transition hover:text-[#D4AF37]"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;