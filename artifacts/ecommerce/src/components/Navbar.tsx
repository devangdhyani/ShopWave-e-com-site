import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Store, LogIn, User, LayoutDashboard, ClipboardList, Settings, LogOut } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navbar() {
  const { cartCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const cartControls = useAnimation();

  useEffect(() => {
    if (cartCount > 0) {
      cartControls.start({
        scale: [1, 1.35, 0.9, 1.15, 1],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [cartCount, cartControls]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-card/70 backdrop-blur-md border-b border-border/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={isAuthenticated ? "/home" : "/"} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Store className="h-6 w-6 text-primary" />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight">ShopWave</span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wide">Powered by Ytlcourses</span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/home"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/cart"
              className="relative flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <motion.div animate={cartControls} style={{ display: "flex" }}>
                <ShoppingCart className="h-5 w-5" />
              </motion.div>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 18 }}
                  className="absolute -top-2 -right-3 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>

            <div className="h-4 w-px bg-border mx-1"></div>

            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    {user.name.charAt(0)}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuLabel>
                    <p className="font-semibold truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground font-normal truncate">{user.email}</p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/orders")}>
                    <ClipboardList className="h-4 w-4 mr-2" />
                    Order History
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <Settings className="h-4 w-4 mr-2" />
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground text-sm font-semibold rounded-full transition-all duration-300 active:scale-95"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
