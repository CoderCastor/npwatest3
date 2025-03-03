"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, MapPin, X, ArrowLeft } from "lucide-react"; // Icons for UI

interface Job {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
}

const jobOpenings: Job[] = [
  {
    id: 1,
    title: "Pharmacist",
    location: "Pune, Maharashtra",
    description: "Looking for a certified pharmacist with 2+ years of experience.",
    image: "/job-opening/ph1.jpg",
  },
  {
    id: 2,
    title: "Medical Representative",
    location: "Mumbai, Maharashtra",
    description: "Seeking a dynamic MR with experience in sales and marketing.",
    image: "/job-opening/ph2.jpg",
  },
  {
    id: 3,
    title: "Clinical Research Associate",
    location: "Bangalore, Karnataka",
    description: "Opportunity for research associates in the clinical industry.",
    image: "/job-opening/ph3.jpg",
  },
  {
    id: 4,
    title: "Hospital Administrator",
    location: "Hyderabad, Telangana",
    description: "Looking for an experienced administrator to manage hospital operations.",
    image: "/job-opening/ev1.jpg",
  },
  {
    id: 5,
    title: "Lab Technician",
    location: "Delhi, India",
    description: "Seeking a lab technician with expertise in pathology and diagnostics.",
    image: "/job-opening/p4.jpg",
  },
  {
    id: 6,
    title: "Healthcare Data Analyst",
    location: "Chennai, Tamil Nadu",
    description: "Analyzing healthcare trends and optimizing hospital performance.",
    image: "/job-opening/ev2.jpg",
  },
];

export default function JobOpeningsPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application submitted for ${selectedJob?.title}!`);
    setFormData({ name: "", email: "", phone: "", resume: "" });
    setSelectedJob(null);
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
            Job Openings
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Explore opportunities and build your career with NPWA.
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white border-2 border-blue-500 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 p-6 cursor-pointer"
              onClick={() => handleApplyClick(job)}
            >
              <Image src={job.image} alt={job.title} width={300} height={200} className="rounded-lg w-full object-cover" />
              <h2 className="text-2xl font-semibold text-blue-700 mt-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                {job.title}
              </h2>
              <p className="text-gray-600 flex items-center mt-2">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                {job.location}
              </p>
              <p className="mt-2 text-gray-700">{job.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Job Application Modal */}
        {selectedJob && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg border-2 border-blue-500">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-blue-800">Apply for {selectedJob.title}</h2>
                <X className="w-6 h-6 cursor-pointer text-gray-600 hover:text-red-600" onClick={() => setSelectedJob(null)} />
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
                  name="resume"
                  placeholder="Paste your resume link"
                  value={formData.resume}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                  required
                />
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="text-gray-600 hover:text-red-600 transition"
                    onClick={() => setSelectedJob(null)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Submit Application
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
