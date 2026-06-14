import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = ({ show }) => {
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`
        fixed
        bottom-6
        right-6
        z-50
        h-12
        w-12
        rounded-xl
        text-white
        bg-linear-to-r
        from-amber-500
        to-orange-600
        shadow-lg
        cursor-pointer
        transition-all
        duration-300
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }
      `}
      aria-label="Back to top"
    >
      <FaArrowUp className="mx-auto" />
    </button>
  );
};

export default BackToTopButton;
