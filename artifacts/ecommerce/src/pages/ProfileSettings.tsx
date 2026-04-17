import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";

export default function ProfileSettings() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-xl mx-auto">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <h1 className="text-3xl font-extrabold text-foreground mb-8">Profile Settings</h1>

        <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold uppercase">
              {user?.name.charAt(0)}
            </div>
            <div>
              <p className="text-lg font-bold text-foreground capitalize">{user?.name}</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Display Name</label>
              <input
                type="text"
                defaultValue={user?.name}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
              <input
                type="email"
                defaultValue={user?.email}
                disabled
                className="w-full px-4 py-3 rounded-xl border border-input bg-muted text-muted-foreground cursor-not-allowed"
              />
            </div>
          </div>

          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <User className="h-3 w-3" />
            Profile editing coming soon — this is a demo view.
          </p>
        </div>
      </div>
    </div>
  );
}
