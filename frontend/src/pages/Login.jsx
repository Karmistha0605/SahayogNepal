import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Welcome back to SahayogNepal!");
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl">
              Sahayog<span className="text-[#FF8F2B]">Nepal</span>
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-500 mt-2">
              Sign in to continue supporting causes.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email Address</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Password</label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-[#FF8F2B] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2 border rounded-md"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 text-white rounded-md bg-gradient-to-r from-[#FF8F2B] to-[#FFB347] hover:opacity-90 disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Sign up */}
          <div className="text-center text-gray-500">
            Don’t have an account?
          </div>

          <Link to="/register">
            <button className="w-full h-11 border rounded-md hover:bg-gray-100">
              Create an Account
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex flex-1 bg-[#FF8F2B] text-white items-center justify-center p-8">
        <div className="text-center max-w-sm space-y-4">
          <h2 className="text-3xl font-bold">Your Generosity Changes Lives</h2>
          <p className="text-m">
            Join Thousands of Nepalis making a difference in their communities
            through verified, transparent crowdfunding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
