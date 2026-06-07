import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { LinkIcon, LogOut, LayoutDashboard } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const user = true;

  return (
    <header className="fixed top-0 z-50 w-full glass border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src={Logo}
            className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/10 group-hover:ring-blue-500/40 transition-all duration-200"
            alt="Logo"
          />
          <span className="text-white font-bold text-lg tracking-tight hidden sm:block">
            Shrtnr
          </span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {!user ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/login")}
                className="text-slate-300 hover:text-white hover:bg-white/10 border-transparent"
              >
                Log in
              </Button>
              <Button
                size="sm"
                onClick={() => navigate("/register")}
                className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg shadow-blue-900/30"
              >
                Get started
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/dashboard")}
                className="hidden sm:flex gap-1.5 text-slate-300 hover:text-white hover:bg-white/10 border-transparent"
              >
                <LayoutDashboard size={15} />
                Dashboard
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="h-9 w-9 rounded-full ring-2 ring-blue-500/40 hover:ring-blue-400/70 transition-all duration-200 focus:outline-none cursor-pointer">
                    <Avatar className="h-full w-full">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback className="bg-blue-700 text-white text-xs font-bold">
                        AR
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="w-52 bg-slate-900/95 border-slate-700/60 backdrop-blur-xl shadow-2xl shadow-black/40 mt-2"
                >
                  <DropdownMenuLabel className="pb-1">
                    <p className="text-sm font-semibold text-white">Aniket Roy</p>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">aniket@example.com</p>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator className="bg-slate-700/60 my-1" />

                  <DropdownMenuGroup>
                    <DropdownMenuItem className="gap-2 text-slate-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white cursor-pointer">
                      <LinkIcon size={14} className="text-blue-400" />
                      My Links
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-slate-300 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white cursor-pointer">
                      <LayoutDashboard size={14} className="text-purple-400" />
                      Dashboard
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator className="bg-slate-700/60 my-1" />

                  <DropdownMenuItem className="gap-2 text-red-400 hover:text-red-300 hover:bg-red-950/40 focus:bg-red-950/40 focus:text-red-300 cursor-pointer">
                    <LogOut size={14} />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;