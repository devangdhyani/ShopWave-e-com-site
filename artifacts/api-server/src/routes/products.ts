import { Router, type IRouter } from "express";
import { logger } from "../lib/logger";

const productsRouter: IRouter = Router();

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "Premium over-ear wireless headphones with active noise cancellation, 30-hour battery life, and studio-quality sound. Features Bluetooth 5.0, foldable design, and plush ear cushions for all-day comfort.",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 129.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "Lightweight, high-performance running shoes engineered for speed and endurance. Responsive cushioning, breathable mesh upper, and durable rubber outsole grip for any terrain.",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 89.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Handcrafted full-grain leather backpack with a 20L capacity. Features a padded laptop compartment (fits up to 15\"), multiple organizer pockets, and solid brass zippers. Ages beautifully.",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Advanced smartwatch with health monitoring including heart rate, SpO2, and sleep tracking. Always-on AMOLED display, GPS, 5ATM water resistance, and 7-day battery life. Compatible with iOS and Android.",
  },
  {
    id: 5,
    name: "Cotton T-Shirt",
    price: 29.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Classic crew-neck t-shirt made from 100% organic ring-spun cotton. Soft, breathable, and pre-shrunk for a consistent fit. Available in a relaxed, everyday cut. Ethically sourced and sustainably made.",
  },
  {
    id: 6,
    name: "Ceramic Coffee Mug",
    price: 14.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    description: "Hand-thrown ceramic coffee mug with a 12oz capacity and a comfortable thumb-rest handle. Lead-free glaze, microwave and dishwasher safe. Each piece is unique with a beautifully rustic finish.",
  },
];

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: number;
  items: OrderItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  createdAt: string;
}

const orders: Order[] = [];

productsRouter.get("/products", (_req, res) => {
  res.json(products);
});

productsRouter.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }
  res.json(product);
});

productsRouter.get("/orders", (_req, res) => {
  res.json(orders);
});

productsRouter.post("/checkout", (req, res) => {
  const { items, customerName, customerEmail } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    res.status(400).json({ message: "Cart is empty or invalid" });
    return;
  }

  if (!customerName || !customerEmail) {
    res.status(400).json({ message: "Customer name and email are required" });
    return;
  }

  const total = items.reduce(
    (sum: number, item: OrderItem) => sum + item.price * item.quantity,
    0
  );

  const order: Order = {
    id: orders.length + 1,
    items,
    total,
    customerName,
    customerEmail,
    createdAt: new Date().toISOString(),
  };

  orders.push(order);

  logger.info({ orderId: order.id }, "New order placed");

  res.status(201).json({
    message: "Order placed successfully!",
    orderId: order.id,
    total: total.toFixed(2),
  });
});

export default productsRouter;
