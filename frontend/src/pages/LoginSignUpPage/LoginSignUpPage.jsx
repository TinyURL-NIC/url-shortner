import { useLocation, useNavigate } from "react-router-dom";

import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";
import AuthBanner from "../../components/auth/AuthBanner";

const LoginSignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === "/login";

  const setIsLogin = (value) => {
    navigate(value ? "/login" : "/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-orange-50 to-amber-100 px-4 py-10">
      <div
        className="
          relative
          w-full
          max-w-6xl
          h-[750px]
          rounded-3xl
          overflow-hidden
          bg-white/60
          backdrop-blur-xl
          border
          border-white/30
          shadow-2xl
        "
      >
        {/* Desktop */}
        <div className="hidden lg:block h-full">
          {/* Banner */}
          <div
            className={`
              absolute
              top-0
              h-full
              w-1/2
              z-20
              transition-all
              duration-700
              ease-in-out
              ${isLogin ? "left-1/2" : "left-0"}
            `}
          >
            <AuthBanner
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          </div>

          {/* Form Panel */}
          <div
            className={`
              absolute
              top-0
              h-full
              w-1/2
              bg-white/70
              backdrop-blur-lg
              transition-all
              duration-700
              ease-in-out
              z-10
              ${isLogin ? "left-0" : "left-1/2"}
            `}
          >
            <div className="h-full flex items-center justify-center p-12">
              <div
                key={isLogin ? "login" : "register"}
                className="
                  w-full
                  transition-all
                  duration-500
                "
              >
                {isLogin ? (
                  <LoginForm setIsLogin={setIsLogin} />
                ) : (
                  <RegisterForm setIsLogin={setIsLogin} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col">
          <div className="h-[300px]">
            <AuthBanner
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              mobile
            />
          </div>

          <div className="p-8 bg-white/70 backdrop-blur-lg">
            {isLogin ? (
              <LoginForm setIsLogin={setIsLogin} />
            ) : (
              <RegisterForm setIsLogin={setIsLogin} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpPage;