import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  User,
  Phone,
  Users,
  Megaphone,
} from "lucide-react";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("donor");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully!");
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-md space-y-6 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl">
              Sahayog<span className="text-blue-600">Nepal</span>
            </span>
          </div>

          <div>
            <h1 className="text-3xl font-bold">Create Account</h1>
            <p className="text-gray-500 mt-2">
              Join our community and make a difference.
            </p>
          </div>

          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedRole("donor")}
              className={`p-4 border rounded-lg ${
                selectedRole === "donor"
                  ? "border-blue-600 bg-blue-50"
                  : "hover:border-blue-400"
              }`}
            >
              <Users className="mx-auto mb-2" />
              Donate
            </button>

            <button
              type="button"
              onClick={() => setSelectedRole("campaigner")}
              className={`p-4 border rounded-lg ${
                selectedRole === "campaigner"
                  ? "border-blue-600 bg-blue-50"
                  : "hover:border-blue-400"
              }`}
            >
              <Megaphone className="mx-auto mb-2" />
              Campaign
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <input
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            {/* Phone */}
            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {/* Confirm Password */}
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
