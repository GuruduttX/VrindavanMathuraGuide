"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase/SupabaseConfig";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid admin credentials");
      setLoading(false);
      return;
    }

     if (data.user.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
        await supabase.auth.signOut();
        setError("Unauthorized access");
        return;
    }

    router.push("/admin-x9AqP7mK2");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 to-orange-100 px-4">
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-orange-200">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Admin Login
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1">
          Mathura Vrindavan Tour Panel
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-6 space-y-4">

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-orange-500 w-4 h-4" />
            <input
              type="email"
              required
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-orange-500 w-4 h-4" />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Error Handling */}
          {error && (
            <p className="text-sm text-red-600 font-medium">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
