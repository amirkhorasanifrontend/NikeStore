import React from 'react'
import { useState } from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { SiJordan, SiNike } from 'react-icons/si';
import { Link } from "react-router-dom";
import { requiredValidator, minValidator, maxValidator, emailValidator } from '../../validators/rules';

const Register = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isPasswordValid = password.length >= 6 && password.length <= 16;


  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register:", { name, email, password });
  };

  return (
    <>
    <div className="px-6 py-5 bg-gray-100 dark:bg-neutral-950/60  max-w-110 mx-auto mt-25">
    <div className='flex justify-center items-center'>
      <SiNike className='text-6xl'/>
      <SiJordan className='text-5xl'/>
    </div>
      <h2 className="text-3xl flex gap-1.5 font-semibold mb-4 text-center">
      Enter your email to join us or sign in.
      </h2>
      <div className="flex bg-black/10 dark:bg-white/10 py-2 rounded-2xl items-center justify-center gap-4 font-semibold mb-8 text-center">
        <p>Have you already registered ?</p>
        <Link to="/login" className="bg-black text-white px-3 py-1 rounded-xl">Login</Link>
      </div>
      <form onSubmit={handleRegister} className="space-y-5">

        {/* Full name */}
        <div className="relative">
          <FiUser className="absolute left-4 top-3.5 text-xl" />
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full pl-12 pr-4 py-2.5 rounded-2xl border-2 
              ${name ? "border-green-500 focus:border-green-500" : "border-red-500 focus:border-red-500"}
              dark:border-white/15 focus:outline-none`}
            validations={[
              requiredValidator(),
              minValidator(3),
              maxValidator(20)
            ]}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FiMail className="absolute left-4 top-3.5 text-xl" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full pl-12 pr-4 py-2.5 rounded-2xl border-2 
              ${email ? "border-green-500 focus:border-green-500" : "border-red-500 focus:border-red-500"}
              dark:border-white/15 focus:outline-none`}
              validations={[
                requiredValidator(),
                minValidator(8),
                maxValidator(30)
              ]}
          />
        </div>

        {/* Password */}
<div className="relative">
  <FiLock className="absolute left-4 top-3.5 text-xl" />

  {/** شرط اعتبار پسورد */}


  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className={`w-full pl-12 pr-4 py-2.5 rounded-2xl border-2
      ${password.length === 0
        ? "border-red-500 focus:border-red-500"
        : isPasswordValid
          ? "border-green-500 focus:border-green-500"
          : "border-red-500 focus:border-red-500"}
      dark:border-white/15 focus:outline-none`}
  />
</div>


        <button className="w-full text-white bg-black dark:bg-white dark:text-black py-2 rounded-2xl font-semibold text-lg hover:opacity-90 transition">
          Create Account
        </button>
      </form>
    </div>
    </>
  );
}

export default Register;