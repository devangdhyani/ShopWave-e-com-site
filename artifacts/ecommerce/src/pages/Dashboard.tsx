import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ShoppingBag, ClipboardList, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { user } = useAuth();
  const [orderCount, setOrderCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data: { customerEmail: string }[]) => {
        const mine = data.filter((o) => o.customerEmail === user?.email);
        setOrderCount(mine.length);
      })
      .catch(() => setOrderCount(0));
  }, [user]);

  const cards = [
    {
      title: "Orders Placed",
      value: orderCount === null ? "..." : String(orderCount),
      icon: ShoppingBag,
      href: "/orders",
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Order History",
      value: "View All",
      icon: ClipboardList,
      href: "/orders",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Profile Settings",
      value: "Manage",
      icon: User,
      href: "/profile",
      color: "bg-purple-500/10 text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-foreground">Dashboard</h1>
          <p className="mt-1 text-muted-foreground">
            Welcome back,{" "}
            <span className="font-semibold text-foreground capitalize">
              {user?.name}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={card.href}
                className="block bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${card.color}`}>
                  <card.icon className="h-6 w-6" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{card.title}</p>
                <p className="text-2xl font-bold text-foreground">{card.value}</p>
                <div className="flex items-center gap-1 mt-3 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Go <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            Browse Shop
          </Link>
          <Link
            to="/orders"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-semibold hover:bg-secondary transition-all"
          >
            <ClipboardList className="h-4 w-4" />
            Order History
          </Link>
        </div>
      </div>
    </div>
  );
}
