import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Google from "../../assets/google.png";

const LoginForm = ({ setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    console.log("Login submitted");
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome Back
        </h2>

        <p className="mt-2 text-gray-600">
          Login to your account
        </p>
      </div>

      {/* Social Login */}
      {/* <div className="grid grid-cols-1 gap-4 mb-6">
        <button
          type="button"
          className="
            flex
            items-center
            justify-center
            gap-3
            w-full
            py-3
            px-4
            rounded-xl
            border
            border-gray-200
            bg-white/80
            hover:bg-white
            hover:shadow-lg
            hover:scale-[1.02]
            transition-all
            duration-300
            cursor-pointer
          "
        >
          <img
            src={Google}
            alt="Google"
            className="w-5 h-5"
          />

          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>
      </div>*/}

      {/* Divider */}
      {/* <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 border-t border-gray-300" />

        <span className="text-sm text-gray-500">
          or
        </span>

        <div className="flex-1 border-t border-gray-300" />
      </div>  */}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>

          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-gray-200
              bg-white/80
              text-gray-700
              placeholder:text-gray-400
              outline-none
              focus:ring-2
              focus:ring-amber-400
              focus:border-amber-500
              transition-all
            "
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-gray-200
                bg-white/80
                text-gray-700
                placeholder:text-gray-400
                outline-none
                focus:ring-2
                focus:ring-amber-400
                focus:border-amber-500
                transition-all
              "
            />

            {showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(false)}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                  hover:text-amber-600
                  cursor-pointer
                  transition-colors
                "
              />
            ) : (
              <FaEye
                onClick={() => setShowPassword(true)}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                  hover:text-amber-600
                  cursor-pointer
                  transition-colors
                "
              />
            )}
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="
                w-4
                h-4
                accent-amber-600
              "
            />

            <span className="text-sm text-gray-700">
              Remember me
            </span>
          </label>

          <button
            type="button"
            className="
              text-sm
              text-amber-600
              hover:text-amber-700
              hover:underline
              transition-all
            "
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="
            w-full
            py-3
            rounded-xl
            bg-linear-to-r
            from-amber-500
            to-orange-600
            text-white
            font-semibold
            hover:scale-[1.02]
            hover:shadow-xl
            transition-all
            duration-300
            cursor-pointer
          "
        >
          Login
        </button>
      </form>

      {/* Switch Form */}
      <p className="text-center text-gray-600 mt-6">
        Don't have an account?

        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className="
            ml-2
            text-amber-600
            font-semibold
            hover:underline
            cursor-pointer
          "
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginForm;