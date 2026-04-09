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
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 129.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 89.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Cotton T-Shirt",
    price: 29.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Ceramic Coffee Mug",
    price: 14.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
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
