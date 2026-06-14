import { IoIosCut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SiteFooter = () => {
  const navigate = useNavigate();

  return (
    <footer
      className="
        relative overflow-hidden mt-24
        bg-linear-to-br
        from-[#1186A8] via-[#0B6F94] to-[#003865]
      "
    >
      {/* depth circles matching the header aesthetic */}
      <div className="absolute -top-40 -right-28 w-96 h-96 rounded-full bg-white/[0.04] pointer-events-none" />
      <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-white/[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand — mirrors the header logo */}
          <div>
            <div
              className="flex items-center gap-3 cursor-pointer w-fit"
              onClick={() => navigate("/")}
            >
              <div className="
                flex h-10 w-10 items-center justify-center
                rounded-xl shadow-md
                bg-linear-to-br from-amber-500 to-orange-600
              ">
                <IoIosCut className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-white">Shrtnr</span>
            </div>

            <p className="mt-3 text-[0.83rem] text-white/50 max-w-[220px] leading-relaxed">
              Simple URL shortening and link management.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-7 text-[0.9rem]">
            <a href="#features" className="text-white/60 hover:text-white transition-colors duration-150">
              Features
            </a>
            <a href="#faq" className="text-white/60 hover:text-white transition-colors duration-150">
              FAQ
            </a>
            <a href="/about" className="text-white/60 hover:text-white transition-colors duration-150">
              About
            </a>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 py-5 text-center">
          <p className="text-[0.78rem] text-white/30">
            © 2026 Shrtnr. Built as a collaborative academic project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;