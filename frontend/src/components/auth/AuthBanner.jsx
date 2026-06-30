import LoginSignUpBackground from "../../assets/LoginSignUpBackground.jpg";

const AuthBanner = ({ isLogin, setIsLogin, mobile = false }) => {
  return (
    <div
      className="relative w-full h-full bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${LoginSignUpBackground})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 via-black/10 to-amber-600/30" />

      {/* Content */}
      <div
        className={`
          relative
          z-10
          flex
          flex-col
          justify-center
          items-center
          text-center
          text-white
          h-full
          px-8
          transition-all
          duration-500
        `}
      >
        <div
          key={isLogin ? "login-banner" : "register-banner"}
          className="
            animate-in
            fade-in
            duration-500
          "
        >
          <h2 className="text-4xl font-bold mb-4">
            {isLogin ? "Welcome Back!" : "Join Our Platform"}
          </h2>

          <p
            className={`
              max-w-md
              mx-auto
              text-white/90
              leading-relaxed
              ${mobile ? "text-sm" : "text-base"}
            `}
          >
            {isLogin
              ? "Sign in to access your dashboard, manage shortened URLs, monitor analytics, and continue building your online presence."
              : "Create your account today and start shortening links, tracking performance, and managing everything from one beautiful dashboard."}
          </p>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="
              mt-8
              px-8
              py-3
              rounded-xl
              border-2
              border-white
              font-semibold
              backdrop-blur-sm
              hover:bg-white
              hover:text-black
              hover:scale-105
              transition-all
              duration-300
              cursor-pointer
            "
          >
            {isLogin ? "Create Account" : "Sign In"}
          </button>

          {!mobile && (
            <div className="mt-10">
              <div className="w-20 h-1 bg-white/40 mx-auto rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthBanner;