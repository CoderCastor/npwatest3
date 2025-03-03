"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    registrationNumber: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    licenseNumber: "",
    yearEstablished: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Industry registered successfully!");
      setError("");
      setFormData({
        organizationName: "",
        registrationNumber: "",
        ownerName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        licenseNumber: "",
        yearEstablished: "",
        password: "",
        confirmPassword: "",
      });
      setTimeout(() => {
        router.push("/"); // Change "/home" to your desired landing page
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto border border-black rounded-lg p-6 bg-white shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Industry Registration</h2>
          <p className="text-sm text-gray-600 bg-blue-50 inline-block px-4 py-2 rounded-full">
            National Pharmacy Welfare Association, Pune
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Organization Details */}
            <input type="text" name="organizationName" placeholder="Organization Name" value={formData.organizationName} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="text" name="registrationNumber" placeholder="Registration Number" value={formData.registrationNumber} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="text" name="ownerName" placeholder="Owner Name" value={formData.ownerName} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="text" name="licenseNumber" placeholder="License Number" value={formData.licenseNumber} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="text" name="yearEstablished" placeholder="Year Established" value={formData.yearEstablished} onChange={handleChange} className="border p-2 rounded w-full" required />
            
            {/* Address */}
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="border p-2 rounded w-full" required />
            <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="border p-2 rounded w-full" required />
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="border p-2 rounded w-full" required />
              <button type="button" className="absolute top-2 right-3 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <div className="relative">
              <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="border p-2 rounded w-full" required />
              <button type="button" className="absolute top-2 right-3 text-gray-500" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          {/* Error & Success Messages */}
          {error && <div className="text-red-600 text-sm bg-red-100 p-3 rounded">{error}</div>}
          {successMessage && <div className="text-green-600 text-sm bg-green-100 p-3 rounded">{successMessage}</div>}

          {/* Submit Button */}
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
