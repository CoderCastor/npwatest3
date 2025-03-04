"use client"; // This tells Next.js that this file is a client component

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// Define the shape of the formData object
interface FormData {
  organization_name: string;
  registration_number: string;
  owner_name: string;
  email_address: string;
  phone_number: string;
  license_number: string;
  year_established: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  password: string;
  confirmPassword: string;
}

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

export default function IndustryRegistration() {
  const router = useRouter();

  // Set the form data with the defined type
  const [formData, setFormData] = useState<FormData>({
    organization_name: "",
    registration_number: "",
    owner_name: "",
    email_address: "",
    phone_number: "",
    license_number: "",
    year_established: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const { confirmPassword, ...dataToSend } = formData; // Exclude confirmPassword from the request
      await axios.post("http://localhost:5000/industry-register", dataToSend);
      setSuccessMessage("Industry registered successfully!");
      setError("");
      setTimeout(() => {
        router.push("/"); // Redirect to home page
      }, 2000);
    } catch (error) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Filter out password and confirmPassword from the main input fields
  const mainInputFields = Object.keys(formData).filter(
    key => !['password', 'confirmPassword'].includes(key)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto border border-black rounded-lg p-6 bg-white shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Industry Registration</h2>
          <p className="text-sm text-gray-600 bg-blue-50 inline-block px-4 py-2 rounded-full">
            National Pharmacy Welfare Association, Pune
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mainInputFields.map((key) => (
              <input
                key={key}
                type="text"
                name={key}
                placeholder={key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
                value={formData[key as keyof FormData]}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
                aria-label={key}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
                aria-label="password"
              />
              <button 
                type="button" 
                className="absolute top-2 right-3 text-gray-500" 
                onClick={() => setShowPassword(!showPassword)} 
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
                aria-label="confirm password"
              />
              <button 
                type="button" 
                className="absolute top-2 right-3 text-gray-500" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          {error && <div className="text-red-600 text-sm bg-red-100 p-3 rounded">{error}</div>}
          {successMessage && <div className="text-green-600 text-sm bg-green-100 p-3 rounded">{successMessage}</div>}

          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}