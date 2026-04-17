import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check, Tag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const inCart = product ? cart.some((item) => item.id === product.id) : false;

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-destructive text-lg font-medium mb-4">
            {error ?? "Product not found"}
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 w-fit px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider">
              <Tag className="h-3 w-3" />
              {product.category}
            </div>

            <h1 className="text-4xl font-extrabold text-foreground leading-tight">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-foreground">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-muted-foreground leading-relaxed text-base">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.button
                onClick={handleAddToCart}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${
                  added
                    ? "bg-gradient-to-r from-green-500 to-purple-600 text-white shadow-lg"
                    : "bg-primary text-primary-foreground hover:opacity-90 shadow-md"
                }`}
              >
                {added ? (
                  <>
                    <Check className="h-5 w-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    {inCart ? "Add More" : "Add to Cart"}
                  </>
                )}
              </motion.button>

              <button
                onClick={() => navigate("/cart")}
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold border border-border hover:bg-secondary transition-all"
              >
                View Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
