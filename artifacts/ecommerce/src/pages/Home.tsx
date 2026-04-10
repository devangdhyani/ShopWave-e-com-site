import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, CreditCard } from "lucide-react";
import HeroVisual from "../components/HeroVisual";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 px-4 overflow-hidden">
        {/* Decorative glow blobs */}
        <div className="absolute top-[-5rem] left-0 w-[40rem] h-[20rem] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-5rem] right-[-5rem] w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-0">

          {/* ── Left: text content ── */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              New Arrivals ✦ Spring 2026
            </span>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
              Discover Your
              <span className="block mt-2 bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Shop the latest trends in electronics, fashion, and lifestyle products.
              Quality goods at unbeatable prices, delivered right to your door.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/30 active:scale-95"
              >
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/cart"
                className="inline-flex items-center gap-2 px-8 py-4 bg-card/80 backdrop-blur-sm text-foreground border border-border rounded-full text-base font-semibold hover:border-primary/50 transition-all"
              >
                View Cart
              </Link>
            </div>
          </div>

          {/* ── Right: 3D gem ── */}
          <div className="flex-1 w-full lg:w-auto">
            <HeroVisual />
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
