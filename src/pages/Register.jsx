import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import {
  useRegisterMutation,
 
} from "../redux/features/auth/authApi";
import { useAuthActions } from "../redux/hooks";

const Register = () => {
 const [register, { isLoading, isError, error }] = useRegisterMutation();


  const { setAuthUser } = useAuthActions();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to the Terms & Privacy Policy first.");
      return;
    }

    try {
      const res = await register(formData);
      if (res?.data) {
        setAuthUser(res.data.user);
        console.log("Registered User:", res.data.user);
      }
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  {
    isLoading && (
      <p className="text-center text-blue-500 mt-2">Registering...</p>
    );
  }
  {
    isError && (
      <p className="text-center text-red-500 mt-2">
        {error?.data?.message || "Something went wrong. Please try again."}
      </p>
    );
  }



  return (
    <div
      style={{
        background: `linear-gradient(to bottom, #E7F5FD 0%, #E6F9F6 50%, #E3FCEF 100%)`,
      }}
    >
      <div className="hero min-h-screen">
        <div className="card bg-base-100 w-full max-w-[435px] shrink-0 shadow">
          <div className="p-8">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold">Welcome to RevuAI</h3>
              <p className="mt-1 text-accentColor">
                Welcome to RevuAI! Please enter your details.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label font-medium text-gray-700 mt-8">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Your Name"
                  className="input font-medium border w-full border-gray-300 focus:border-purple-300 focus:outline-none focus:shadow-[0_0_0_3px_rgba(168,85,247,0.4)] transition duration-200"
                />

                <label className="label font-medium text-gray-700 mt-4">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Your Number"
                  className="input font-medium w-full border border-gray-300 focus:border-purple-300 focus:outline-none focus:shadow-[0_0_0_3px_rgba(168,85,247,0.4)] transition duration-200"
                />

                <label className="label font-medium text-gray-700 mt-4">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter Your Email"
                  className="input font-medium w-full border border-gray-300 focus:border-purple-300 focus:outline-none focus:shadow-[0_0_0_3px_rgba(168,85,247,0.4)] transition duration-200"
                />

                <label className="label font-medium text-gray-700 mt-4">
                  Password
                </label>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Enter Your Password"
                  className="input font-medium w-full border border-gray-300 focus:border-purple-300 focus:outline-none focus:shadow-[0_0_0_3px_rgba(168,85,247,0.4)] transition duration-200"
                />

                <label className="label font-medium text-gray-700 mt-4">
                  Company Details
                </label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:shadow-[0_0_0_4px_rgba(168,85,247,0.4)] transition duration-200">
                  <TbWorld className="text-primaryColor text-lg mr-2" />
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    type="text"
                    placeholder="Website URL"
                    className="w-full focus:outline-none font-medium"
                  />
                </div>

                {/* <button
                  type="submit"
                  className="btn bg-primaryColor hover:bg-purple-500 text-white rounded-lg mt-4 transition-all duration-300"
                >
                  Register
                </button> */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn bg-primaryColor hover:bg-purple-500 text-white rounded-lg mt-4 transition-all duration-300"
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
              </fieldset>
            </form>
            {isLoading && (
              <p className="text-center text-blue-500 mt-2">Registering...</p>
            )}
            {isError && (
              <p className="text-center text-red-500 mt-2">
                {error?.data?.message ||
                  "Something went wrong. Please try again."}
              </p>
            )}
            <div className="space-x-1 text-gray-800 mt-4 flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 accent-purple-600"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span>
                I agree with{" "}
                <Link to="/terms-services" className="underline text-gray-600">
                  Terms & Services
                </Link>{" "}
                &{" "}
                <Link to="/privacy-policy" className="underline text-gray-600">
                  Privacy & Policy
                </Link>
              </span>
            </div>

            <p className="text-center mt-4">
              Have a Revu Account?{" "}
              <Link to="/login" className="text-primaryColor">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
