import { useEffect, useState } from "react";

import SiteHeader from "../../components/SiteHeader/SiteHeader";
import LandingSection from "../../sections/LandingSection/LandingSection";
import SiteFooter from "../../components/SiteFooter/SiteFooter";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 20);
      setShowBackToTop(currentScroll > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-[#F8F5F0] overflow-x-hidden">

      {/* Header */}
      <SiteHeader
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="
            fixed
            inset-0
            z-30
            bg-black/20
            backdrop-blur-sm
            md:hidden
          "
        />
      )}

      {/* Main Content */}
      <div className="relative z-10">
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            pt-32
            pb-12
            sm:px-6
            lg:px-8
          "
        >
          <LandingSection />
        </div>

          <SiteFooter />
      </div>

      {/* Back To Top */}
      <BackToTopButton show={showBackToTop} />
    </div>
  );
};

export default LandingPage;