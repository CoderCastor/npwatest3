"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, MapPin, X, ArrowLeft } from "lucide-react"; // Icons for UI

interface Advocacy {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
}

const advocacyEvents: Advocacy[] = [
  {
    id: 1,
    title: "Healthcare Awareness Campaign",
    location: "Pune, Maharashtra",
    description: "Join us in spreading awareness about healthcare rights and policies.",
    image: "/advocacy/h1.jpg",
  },
  {
    id: 2,
    title: "Medical Policy Discussion",
    location: "Mumbai, Maharashtra",
    description: "A panel discussion on upcoming changes in medical regulations.",
    image: "/advocacy/h2.jpg",
  },
  {
    id: 3,
    title: "Community Health Workshop",
    location: "Bangalore, Karnataka",
    description: "Learn about community-driven health initiatives and their impact.",
    image: "/advocacy/h3.jpg",
  },
  {
    id: 4,
    title: "Environmental Health Seminar",
    location: "Hyderabad, Telangana",
    description: "Exploring the connection between environmental factors and public health.",
    image: "/advocacy/h4.jpg",
  },
  {
    id: 5,
    title: "Legal Rights in Healthcare",
    location: "Delhi, India",
    description: "Understanding patient rights and legal frameworks in healthcare.",
    image: "/advocacy/h5.jpg",
  },
  {
    id: 6,
    title: "Mental Health Awareness Drive",
    location: "Chennai, Tamil Nadu",
    description: "Advocating for better mental health support and policies.",
    image: "/advocacy/6.jpg",
  },
];

export default function AdvocacyPage() {
  const [selectedAdvocacy, setSelectedAdvocacy] = useState<Advocacy | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleJoinClick = (advocacy: Advocacy) => {
    setSelectedAdvocacy(advocacy);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Your interest has been submitted for ${selectedAdvocacy?.title}!`);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSelectedAdvocacy(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-blue-700 hover:text-blue-900 transition mb-6 border border-blue-500 px-4 py-2 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        {/* Page Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-md">
            Advocacy Events
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Join us in making a difference in healthcare policies and awareness.
          </p>
        </div>

        {/* Advocacy Events List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {advocacyEvents.map((advocacy) => (
            <div
              key={advocacy.id}
              className="bg-white border border-blue-400 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 p-6 cursor-pointer"
              onClick={() => handleJoinClick(advocacy)}
            >
              <Image src={advocacy.image} alt={advocacy.title} width={300} height={200} className="rounded-lg w-full object-cover" />
              <h2 className="text-2xl font-semibold text-blue-700 mt-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                {advocacy.title}
              </h2>
              <p className="text-gray-600 flex items-center mt-2">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                {advocacy.location}
              </p>
              <p className="mt-2 text-gray-700">{advocacy.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Join Now
              </button>
            </div>
          ))}
        </div>

        {/* Advocacy Join Modal */}
        {selectedAdvocacy && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-blue-800">Join {selectedAdvocacy.title}</h2>
                <X className="w-6 h-6 cursor-pointer text-gray-600 hover:text-red-600" onClick={() => setSelectedAdvocacy(null)} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Why do you want to join?"
                  value={formData.message}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                  required
                />
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="text-gray-600 hover:text-red-600 transition"
                    onClick={() => setSelectedAdvocacy(null)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Submit Interest
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
