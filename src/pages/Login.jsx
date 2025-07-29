import { FiLogIn } from "react-icons/fi";
import SocialLoginButtons from "../components/auth/SocialLoginButtons";
import { Link } from "react-router";
import { useState } from "react";
import {
  useLoginMutation,
  // useSocialLoginMutation,
} from "../redux/features/auth/authApi";
import { useAuthActions } from "../redux/hooks";

const Login = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  // const [socialLogin] = useSocialLoginMutation();
  const { setAuthUser } = useAuthActions();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(formData);
    try {
      const res = await login(formData);
      console.log('responsive',res);
      if (res?.user) {
        setAuthUser(res.use);
        console.log("Logged in successfully", res.user);
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  // const handleSocialLogin = async (provider) => {
  //   console.log(provider);
  //   try {
  //     const res = await socialLogin( provider );
  //     if (res?.user) {
  //       setAuthUser(res.user);
  //       console.log("Social login successful", res.user);
  //     }
  //   } catch (err) {
  //     console.error("Social login failed", err);
  //   }
  // };
  const handleSocialLogin = (provider) => {
    // provider = "google" or "facebook" ইত্যাদি
    window.location.href = `http://localhost:5000/api/v1/auth/${provider}`;
  };


  return (
    <div
      style={{
        background: `linear-gradient(to bottom, #E7F5FD 0%, #E6F9F6 50%, #E3FCEF 100%)`,
      }}
    >
      <div className="hero min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow">
          <div className="p-8">
            <div className="flex flex-col justify-center items-center">
              <FiLogIn className="w-10 h-8 text-primaryColor" />
              <h3 className="text-2xl mt-8 font-semibold">Welcome Back</h3>
              <p className="mt-1 text-accentColor">
                Welcome back! Please enter your details.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <label className="label font-medium text-gray-700 mt-8">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="input font-medium border border-gray-300 focus:outline-none focus:shadow-[0_0_0_3px_rgba(168,85,247,0.4)] transition duration-200"
              />

              <label className="label font-medium text-gray-700 mt-4">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="input font-medium border border-gray-300 focus:outline-none focus:shadow-[0_0_0_3px_rgba(168,85,247,0.4)] transition duration-200"
              />

              {isError && (
                <p className="text-sm text-red-500 mt-2">
                  {error?.data?.message || "Login failed"}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`btn bg-primaryColor w-full hover:bg-purple-500 text-white rounded-lg mt-4 transition-all duration-300 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="divider py-3">Or sign in with</div>

            <SocialLoginButtons onLogin={handleSocialLogin} />

            <p className="text-center mt-4">
              Don’t have a Revu Account{" "}
              <Link to="/register" className="text-primaryColor">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
