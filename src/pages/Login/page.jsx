import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SiJordan, SiNike } from 'react-icons/si';

  const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password, remember });
  };

  return (
    <div className="bg-gray-100 px-6 py-10 max-w-110 mx-auto mt-25">
    <div className='flex justify-center items-center'>
      <SiNike className='text-6xl'/>
      <SiJordan className='text-5xl'/>
    </div>
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Login to your account
      </h2>
        <div className="flex bg-black/10 py-2 rounded-2xl items-center justify-center gap-4 font-semibold mb-8 text-center">
            <p>Are you a new user ?</p>
            <Link to="/register" className="bg-black text-white px-3 py-1 rounded-xl">Register</Link>
        </div>
      <form onSubmit={handleLogin} className="space-y-5">

        {/* Email */}
        <div className="relative">
          <FiMail className="absolute left-4 top-3.5 text-xl" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-2.5 rounded-2xl border-2 border-black/50
            focus:outline-none focus:border-black"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <FiLock className="absolute left-4 top-3.5 text-xl" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-12 pr-4 py-2.5 rounded-2xl border-2 border-black/50
            focus:outline-none focus:border-black"
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-[15px] font-medium">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="w-4 h-4 accent-green"
            />
            Remember me
          </label>

          <button
            type="button"
            className="text-green font-semibold hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button className="w-full text-white bg-black py-2 rounded-2xl font-semibold text-lg hover:opacity-90 transition">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;