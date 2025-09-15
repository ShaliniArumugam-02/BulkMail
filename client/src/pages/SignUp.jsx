import React, { useState } from "react";
import mail_img from "../assets/mail_image.avif";
import { Link, useNavigate } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.data;
      toast.success("Signup successfull");
      if (data.success === false) {
        setLoading(false);
        return;
      }
      navigate("/signin");
    } catch (error) {
      console.log("error in signup", error);
      toast.error("Failed to signup");
      toast(
        "User already exit",
        {
          duration: 6000,
        }
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  max-w-lg mx-auto sm:max-w-xl p-5 flex flex-col  justify-center">
      <div className="flex bg-[#C6AE82] rounded items-stretch">
        <form onSubmit={handleSubmit} className="p-4 space-y-2 sm:w-1/2 h-full">
          <h1 className="text-center  font-semibold text-2xl  text-white">
            SignUp
          </h1>
          <p>Create an account</p>
          <input
            value={formData.username}
            onChange={handleChange}
            className="border rounded-md p-2 w-full focus:outline-none ring-1 ring-[#C6AE82] shadow-xl placeholder:text-sm"
            placeholder="Username"
            type="text"
            name="username"
          />
          <input
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md p-2 w-full focus:outline-none ring-1 ring-[#C6AE82] shadow-xl placeholder:text-sm"
            type="email"
            name="email"
            placeholder="test@example.com"
          />
          <input
            value={formData.password}
            onChange={handleChange}
            className="border rounded-md p-2 w-full focus:outline-none ring-1 ring-[#C6AE82] shadow-xl placeholder:text-sm"
            type="password"
            name="password"
            placeholder="At least 6 letters"
          />
          <button className="bg-[#6C4F55] p-2 w-[80%] text-white rounded-full uppercase hover:opacity-80 disabled:opacity-50 ">
            {loading ? "Loading..." : "SignUp"}
          </button>
            <OAuth/>
          <div className="mt-5 flex items-center ml-3">
            <p className="text-sm mr-3">Have an account?</p>
            <Link to={"/signin"}>
              <span className="text-amber-950 hover:underline">Signin</span>
            </Link>
          </div>
        </form>
        <div className="w-1/2 h-full">
          <img
            className="w-full h-full rounded object-cover hidden sm:flex"
            src={mail_img}
            alt="mail img"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
