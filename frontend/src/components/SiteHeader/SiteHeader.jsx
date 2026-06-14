// SiteHeader.jsx
import { FaBars } from "react-icons/fa";
import { IoIosCut } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
import { LayoutDashboard, Link as LinkIcon, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

// Case 1: !user              → Logo | Features FAQ About | Sign In  Register
// Case 2: user + !isDashboard → Logo | Features FAQ About | Dashboard Avatar
// Case 3: user + isDashboard  → Logo |                    | Dashboard Avatar
const SiteHeader = ({
  user = null,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  isDashboard = false,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <header
        className="
          fixed z-50 w-screen transition-all duration-300
          bg-linear-to-r from-[#1186A8] via-[#0B6F94] to-[#003865]
        "
      >
        <div className="mt-1 flex items-center justify-between px-6 pr-8 py-3">

          {/* ── Logo ────────────────────────────────────────────── */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div
              className="
                flex h-12 w-12 items-center justify-center
                rounded-xl bg-linear-to-br from-amber-500 to-orange-600 shadow-lg
              "
            >
              <IoIosCut className="text-white text-2xl" />
            </div>
            <span className="text-2xl font-bold text-white">Shrtnr</span>
          </div>

          {/* ── Center nav (Cases 1 & 2 only) ───────────────────── */}
          {/* Key fix: was `!user`, now `!isDashboard` so logged-in
              users on the landing page still see the nav links.      */}
          {!isDashboard && (
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-white font-medium text-xl hover:text-amber-300 transition"
              >
                Features
              </a>
              <a
                href="#faq"
                className="text-white font-medium text-xl hover:text-amber-300 transition"
              >
                FAQ
              </a>
              <a
                href="/about"
                className="text-white font-medium text-xl hover:text-amber-300 transition"
              >
                About
              </a>
            </nav>
          )}

          {/* ── Right side ──────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              // Case 1
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="
                    px-5 py-2 rounded-xl border border-white/40
                    text-white hover:bg-white/10 transition cursor-pointer
                  "
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="
                    px-5 py-2 rounded-xl text-white font-medium
                    bg-linear-to-r from-amber-500 to-orange-600
                    hover:scale-105 transition-all cursor-pointer
                  "
                >
                  Register
                </button>
              </>
            ) : (
              // Cases 2 & 3
              <>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="
                    flex items-center gap-2 px-5 py-2 rounded-xl
                    text-white hover:bg-white/10 transition cursor-pointer
                  "
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="
                        h-10 w-10 rounded-full ring-2 ring-white/30
                        hover:ring-white/60 transition-all cursor-pointer overflow-hidden
                      "
                    >
                      <Avatar className="h-full w-full">
                        <AvatarImage src={user?.photoURL} />
                        <AvatarFallback className="bg-[#08244D] text-white text-xs font-bold">
                          {user?.name
                            ?.split(" ")
                            .map((p) => p[0])
                            .join("")
                            .slice(0, 2) || "AR"}
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <p className="font-semibold">{user?.name || "Aniket Roy"}</p>
                      <p className="text-xs text-muted-foreground">
                        {user?.email || "aniket@example.com"}
                      </p>
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator />

                    <DropdownMenuGroup>
                      <DropdownMenuItem asChild>
                        <Link
                          to="/dashboard"
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <LayoutDashboard size={14} />
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          to="/dashboard"
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <LinkIcon size={14} />
                          My Links
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="text-red-500 cursor-pointer">
                      <LogOut size={14} />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>

          {/* ── Mobile hamburger ────────────────────────────────── */}
          <button
            onClick={onToggleMenu}
            className="md:hidden p-3 rounded-xl border-2 border-amber-500 text-white"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* ── Mobile menu ───────────────────────────────────────── */}
      {menuOpen && (
        <div
          className="
            md:hidden fixed top-22 left-1/2 -translate-x-1/2 z-40
            w-[95%] rounded-2xl bg-white border border-amber-100 shadow-xl p-4
          "
        >
          {!user ? (
            <div className="flex flex-col gap-4 text-black">
              <a href="#features" onClick={onCloseMenu}>Features</a>
              <a href="#faq" onClick={onCloseMenu}>FAQ</a>
              <a href="/about" onClick={onCloseMenu}>About</a>
              <button
                onClick={() => navigate("/login")}
                className="rounded-xl border-2 border-amber-500 py-2"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/register")}
                className="rounded-xl py-2 text-white bg-linear-to-r from-amber-500 to-orange-600"
              >
                Register
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 text-black">
              {/* Show nav links on landing page, hide on dashboard */}
              {!isDashboard && (
                <>
                  <a href="#features" onClick={onCloseMenu}>Features</a>
                  <a href="#faq" onClick={onCloseMenu}>FAQ</a>
                  <a href="/about" onClick={onCloseMenu}>About</a>
                  <hr className="border-gray-100" />
                </>
              )}
              <button
                onClick={() => { navigate("/dashboard"); onCloseMenu(); }}
                className="text-left"
              >
                Dashboard
              </button>
              <button
                onClick={() => { navigate("/dashboard"); onCloseMenu(); }}
                className="text-left"
              >
                My Links
              </button>
              <button className="text-left text-red-500">Logout</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SiteHeader;