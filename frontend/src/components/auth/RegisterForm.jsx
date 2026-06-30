import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Google from "../../assets/google.png";

const RegisterForm = ({ setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add registration logic here
    console.log("Register submitted");
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Create Account
        </h2>

        <p className="mt-2 text-gray-600">
          Get started in seconds
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
      </div> */}

      {/* Divider */}
      {/* <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 border-t border-gray-300" />
        <span className="text-sm text-gray-500">or</span>
        <div className="flex-1 border-t border-gray-300" />
      </div> */}

      <form onSubmit={handleSubmit}>
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              First Name
            </label>

            <input
              type="text"
              required
              placeholder="John"
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

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>

            <input
              type="text"
              required
              placeholder="Doe"
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
        </div>

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
              placeholder="Create a password"
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

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              placeholder="Confirm your password"
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

            {showConfirmPassword ? (
              <FaEyeSlash
                onClick={() => setShowConfirmPassword(false)}
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
                onClick={() => setShowConfirmPassword(true)}
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

        {/* Register Button */}
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
          Create Account
        </button>
      </form>

      <p className="text-center text-gray-600 mt-6">
        Already have an account?

        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className="
            ml-2
            text-amber-600
            font-semibold
            hover:underline
            cursor-pointer
          "
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;