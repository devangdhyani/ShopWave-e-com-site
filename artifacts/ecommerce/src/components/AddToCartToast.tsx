import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, X } from 'lucide-react';

interface AddToCartToastProps {
  productName: string | null;
  onClose: () => void;
}

export default function AddToCartToast({ productName, onClose }: AddToCartToastProps) {
  useEffect(() => {
    if (!productName) return;
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [productName, onClose]);

  return (
    <AnimatePresence>
      {productName && (
        <motion.div
          key={productName + Date.now()}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-card/90 backdrop-blur-md border border-border shadow-2xl rounded-2xl px-4 py-3 min-w-[260px] max-w-xs"
        >
          {/* Icon */}
          <div className="flex-shrink-0 h-9 w-9 rounded-full bg-green-500/15 flex items-center justify-center">
            <ShoppingBag className="h-5 w-5 text-green-500" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">
              {productName}
            </p>
            <p className="text-xs text-muted-foreground">Added to cart</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              to="/cart"
              onClick={onClose}
              className="text-xs font-semibold text-primary hover:underline whitespace-nowrap"
            >
              View Cart
            </Link>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-green-500 to-primary rounded-b-2xl"
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 3, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
