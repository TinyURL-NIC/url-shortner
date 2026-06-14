import { FaEye, FaEyeSlash } from "react-icons/fa";
import Google from "../../assets/google.png";
import LoginSignUpBackground from "../../assets/LoginSignUpBackground.jpg";
import { useState } from "react";
// import { login } from "../../services/authService";

const LoginSignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const[isLogin, setIsLogin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="flex items-center bg-white min-h-screen">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row rounded-xl shadow-xl overflow-hidden">
            {/* LEft Form - Login*/}
            <div className="hidden w-full lg:w-1/2 p-12">
              <div className="flex flex-col">
                <h3 className="text-3xl text-gray-700 mb-2 font-bold">
                  Welcome Back
                </h3>
                <p className="text-gray-600 ">Login to your account</p>
                {/* Socials */}
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <button className="text-black flex items-center justify-center gap-2 pr-15 rounded-3xl py-2 border border-gray-300 cursor-pointer">
                    <img className="w-6" src={Google} alt="Google" />
                    Continue with Google
                  </button>
                  <button className="text-black flex items-center justify-center gap-2 pl-2 pr-15 rounded-3xl py-2 border border-gray-300 cursor-pointer">
                    <img className="w-6" src={Google} alt="Google" />
                    Continue with Google
                  </button>
                </div>
                {/* Line */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="grow border-t border-gray-300"></div>
                  <span className="text-gray-700">or</span>
                  <div className="grow border-t border-gray-300"></div>
                </div>

                {/* Authentication Form */}
                <form onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <div className="mb-4 mt-6">
                    <label className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded outline-none text-gray-600 placeholder:text-sm placeholder:text-gray-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                  {/* Password Field */}
                  <div className="mb-4 mt-6">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded outline-none text-gray-600 placeholder:text-sm placeholder:text-gray-400"
                        placeholder="Enter your password"
                      />
                      {showPassword ? (
                        <FaEyeSlash
                          className="absolute right-3.75 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-700"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <FaEye
                          className="absolute right-3.75 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-700"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>
                  </div>
                  {/* Remember */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <input
                        className="w-4 h-4"
                        type="checkbox"
                        name=""
                        id=""
                      />
                      <span className="text-sm text-gray-700 font font-semibold">
                        Remember me
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-amber-600 text-sm font-semibold hover:underline"
                    >
                      Forget Password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <div className="mt-6 mb-2">
                    <button className="w-full bg-amber-600 text-white font-bold rounded cursor-pointer py-2">
                      Login
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm text-center">
                    Don't have an account?{" "}
                    <span className="text-amber-600 text-sm font-semibold hover:underline ml-2">
                      <a href="">Register</a>
                    </span>
                  </p>
                </form>
              </div>
            </div>
            {/* Left Form - Signup*/}
            <div className="w-full lg:w-1/2 p-12">
              <div className="flex flex-col">
                <h3 className="text-3xl text-gray-700 mb-2 font-bold">
                  Create Account
                </h3>
                <p className="text-gray-600 ">Sign up to your account</p>
                {/* Socials */}
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <button className="text-black flex items-center justify-center gap-2 pr-15 rounded-3xl py-2 border border-gray-300 cursor-pointer">
                    <img className="w-6" src={Google} alt="Google" />
                    Continue with Google
                  </button>
                  <button className="text-black flex items-center justify-center gap-2 pl-2 pr-15 rounded-3xl py-2 border border-gray-300 cursor-pointer">
                    <img className="w-6" src={Google} alt="Google" />
                    Continue with Google
                  </button>
                </div>
                {/* Line */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="grow border-t border-gray-300"></div>
                  <span className="text-gray-700">or</span>
                  <div className="grow border-t border-gray-300"></div>
                </div>

                {/* Authentication Form */}
                <form onSubmit={handleSubmit}>
                  {/* First name and last name */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <label className="block nb-2 text-gray-700">First name</label>
                      <input type="text" placeholder="Enter your first name"
                      className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded outline-none placeholder:text-sm placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block nb-2 text-gray-700">Last name</label>
                      <input type="text" placeholder="Enter your last name"
                      className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded outline-none placeholder:text-sm placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  {/* Email Field */}
                  <div className="mb-4 mt-6">
                    <label className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded outline-none text-gray-600 placeholder:text-sm placeholder:text-gray-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                  {/* Password Field */}
                  <div className="mb-4 mt-6">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded outline-none text-gray-600 placeholder:text-sm placeholder:text-gray-400"
                        placeholder="Enter your password"
                      />
                      {showPassword ? (
                        <FaEyeSlash
                          className="absolute right-3.75 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-700"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <FaEye
                          className="absolute right-3.75 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-700"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>
                  </div>
                  {/* Confirm Password Field */}
                  <div className="mb-4 mt-6">
                    <label className="block text-gray-700 mb-2">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded outline-none text-gray-600 placeholder:text-sm placeholder:text-gray-400"
                        placeholder="Confirm your password"
                      />
                      {showConfirmPassword ? (
                        <FaEyeSlash
                          className="absolute right-3.75 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-700"
                          onClick={() => setShowConfirmPassword(false)}
                        />
                      ) : (
                        <FaEye
                          className="absolute right-3.75 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-700"
                          onClick={() => setShowConfirmPassword(true)}
                        />
                      )}
                    </div>
                  </div>

                  {/* Login Button */}
                  <div className="mt-6 mb-2">
                    <button className="w-full bg-amber-600 text-white font-bold rounded cursor-pointer py-2">
                      Register
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm text-center">
                    Already have an account?{" "}
                    <span className="text-amber-600 text-sm font-semibold hover:underline ml-2">
                      <a href="">Login</a>
                    </span>
                  </p>
                </form>
              </div>
            </div>
            {/* Right banner */}
            <div
              className="relative w-full lg:w-1/2 bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${LoginSignUpBackground})`,
                height: "83.7vh",
                width: "50%",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="relative text-center">
                  <h3 className="text-3xl font-bold">Login to your account and explore it.</h3>
                  <p className="max-w-sm mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, hic.</p>
                  <button className="mt-6 px-6 py-2 border-2 border-white rounded cursor-pointer font-bold">Create an account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUpPage;
