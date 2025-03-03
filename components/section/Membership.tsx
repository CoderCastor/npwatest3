'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type MembershipTier = {
  title: string;
  description: string;
  price: string;
  duration: string;
  benefits: string[];
  features: string[];
  imageUrl: string;
  highlight: string;
  recommended?: boolean;
};

const MembershipCard: React.FC<MembershipTier> = ({
  title,
  description,
  price,
  duration,
  benefits,
  features,
  imageUrl,
  highlight,
  recommended,
}) => {
  const router = useRouter();

  return (
    <div id="Membership" className={`relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      recommended ? 'border-2 border-blue-500' : 'border border-gray-200'
    }`}>
      {recommended && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 text-sm rounded-b-lg font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Image Section */}
        <div className="relative w-full h-48 mb-6">
          <Image 
            src={`/membership/${imageUrl}`} 
            alt={title} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>

        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mb-4">
            <span className="text-4xl font-bold text-blue-600">{price}</span>
            <span className="text-gray-500 ml-2">{duration}</span>
          </div>
          <p className="text-blue-800 font-semibold">{highlight}</p>
        </div>

        {/* Benefits Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Benefits:</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Features Include:</h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button
          onClick={() => router.push(`/membership/${title.toLowerCase().replace(' ', '-')}`)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

const MembershipPage: React.FC = () => {
  const memberships: MembershipTier[] = [
    {
      title: "Premium Access",
      description: "Perfect for professionals seeking essential benefits and resources",
      price: "$49.99/month",
      duration: "Monthly or Annual Plan",
      highlight: "Access to Premium Resources & Support",
      benefits: [
        "24/7 Priority Customer Support",
        "Exclusive Industry Reports",
        "Professional Development Resources",
        "Member-only Webinars"
      ],
      features: [
        "Unlimited Access to Resource Library",
        "Monthly Professional Development Sessions",
        "Networking Events Access",
        "Digital Certificate of Membership"
      ],
      imageUrl: "pr.jpg"
    },
    {
      title: "Gold Elite",
      description: "Enhanced benefits for growing professionals and businesses",
      price: "$79.99/month",
      duration: "Monthly or Annual Plan (15% off)",
      highlight: "Premium Plus Advanced Features",
      benefits: [
        "All Premium Benefits",
        "1-on-1 Consultation Sessions",
        "Priority Event Registration",
        "Advanced Analytics Tools"
      ],
      features: [
        "Custom Professional Development Path",
        "Quarterly Strategy Sessions",
        "Industry Expert Connection",
        "Enhanced Profile Visibility"
      ],
      imageUrl: "go1.jpg",
      recommended: true
    },
    {
      title: "Platinum Elite",
      description: "Ultimate membership package for industry leaders",
      price: "$129.99/month",
      duration: "Monthly or Annual Plan (20% off)",
      highlight: "Comprehensive Elite Benefits",
      benefits: [
        "All Gold Elite Benefits",
        "Executive Mentorship Program",
        "Custom Research Reports",
        "Speaking Opportunities"
      ],
      features: [
        "Dedicated Account Manager",
        "Private Executive Events",
        "Custom Technology Solutions",
        "Board Member Network Access"
      ],
      imageUrl: "pt1.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 mb-4">
            Elevate Your Professional Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the membership tier that aligns with your goals and access exclusive benefits designed to accelerate your success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberships.map((membership, index) => (
            <MembershipCard key={index} {...membership} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;