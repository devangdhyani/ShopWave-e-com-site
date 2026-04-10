import { Link } from "react-router-dom";
import { ShoppingCart, Store, LogIn } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Navbar() {
  const { cartCount } = useCart();
  const cartControls = useAnimation();

  // Pop animation every time cartCount increases
  useEffect(() => {
    if (cartCount > 0) {
      cartControls.start({
        scale: [1, 1.35, 0.9, 1.15, 1],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [cartCount, cartControls]);

  return (
    <nav className="bg-card/70 backdrop-blur-md border-b border-border/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Store className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">ShopWave</span>
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

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground text-sm font-semibold rounded-full transition-all duration-300 active:scale-95"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
