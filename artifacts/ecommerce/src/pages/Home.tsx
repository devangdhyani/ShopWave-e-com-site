import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight leading-tight">
            Discover Your
            <span className="text-primary block mt-2">Perfect Style</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Shop the latest trends in electronics, fashion, and lifestyle products.
            Quality goods at unbeatable prices, delivered right to your door.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-lg text-base font-semibold hover:opacity-90 transition-all shadow-md"
            >
              Browse Products
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/cart"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground rounded-lg text-base font-semibold hover:opacity-90 transition-all"
            >
              View Cart
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            Why Shop With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-background border border-border">
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Free delivery on all orders over $50. Fast and reliable shipping worldwide.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-background border border-border">
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure Shopping</h3>
              <p className="text-sm text-muted-foreground">
                Your data is protected with enterprise-grade security and encryption.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-background border border-border">
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">
                30-day hassle-free return policy. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Shopping?</h2>
          <p className="text-muted-foreground mb-8">
            Explore our curated collection of premium products.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-lg text-base font-semibold hover:opacity-90 transition-all shadow-md"
          >
            Shop Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
