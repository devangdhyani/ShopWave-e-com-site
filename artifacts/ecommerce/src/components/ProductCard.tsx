import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddToCartToast from "./AddToCartToast";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, cart } = useCart();
  const [added, setAdded] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const inCart = cart.some((item) => item.id === product.id);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setShowToast(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -12,
          scale: 1.05,
          boxShadow: "0px 20px 30px rgba(0,0,0,0.15)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative z-10 bg-card rounded-xl border border-border overflow-hidden group hover:border-primary/20"
        style={{ display: "block", cursor: "pointer" }}
      >
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 space-y-3">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-lg font-semibold text-foreground leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center justify-between pt-1">
            <span className="text-xl font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            <motion.button
              onClick={handleAdd}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                added
                  ? "bg-gradient-to-r from-green-500 to-purple-600 text-white shadow-lg"
                  : "bg-primary text-primary-foreground hover:opacity-90 shadow-md"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={added ? "added" : "idle"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-2"
                >
                  {added ? (
                    <>
                      <Check className="h-4 w-4" />
                      Added! ✅
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4" />
                      {inCart ? "Add More" : "Add to Cart"}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <AddToCartToast
        productName={showToast ? product.name : null}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
