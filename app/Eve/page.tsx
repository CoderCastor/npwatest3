'use client';

import React from 'react';
import Image from 'next/image';

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  time: string;
  imageUrl: string;
};

const EventCard: React.FC<EventCardProps> = ({ title, date, location, time, imageUrl }) => (
  <div className="group cursor-pointer">
    <div className="bg-white rounded-lg shadow-lg border-l-8 border-blue-600 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 h-96">
      {/* Image Container with Overlay Text */}
      <div className="relative h-60">
        <Image
          src={`/events/${imageUrl}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay with Date & Time */}
        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center p-2">
          <p className="font-semibold text-lg">{date}</p>
          <p className="text-md">{time}</p>
        </div>
      </div>
      
      {/* Event Details */}
      <div className="p-5">
        <h2 className="text-2xl font-extrabold text-blue-800">{title}</h2>
        <div className="space-y-2 mt-3 text-gray-700">
          <div className="flex items-center">
            <span className="mr-2">📍</span>
            <span className="font-semibold">Location:</span> {location}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PharmacyJobFair: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stylish Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text drop-shadow-md animate-fade-in">
            Pharmacy Career Fair Events
          </h1>
          <p className="text-lg text-gray-600 mt-3 animate-fade-in delay-300">
            Connect with top healthcare employers and discover your next career opportunity.
          </p>
        </div>

        {/* Event Cards - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <EventCard
            title="Spring Healthcare Recruitment Fair"
            date="March 15, 2025"
            location="Medical Sciences Building"
            time="10:00 AM - 4:00 PM"
            imageUrl="ev2.jpg"
          />
          <EventCard
            title="Clinical Pharmacy Career Expo"
            date="April 2, 2025"
            location="University Convention Center"
            time="9:00 AM - 3:00 PM"
            imageUrl="ev3.jpg"
          />
          <EventCard
            title="Healthcare Networking Summit"
            date="April 20, 2025"
            location="Grand Medical Plaza"
            time="11:00 AM - 5:00 PM"
            imageUrl="ev4.jpg"
          />
          <EventCard
            title="National Pharmacy Seminar"
            date="March 10, 2025"
            location="Mumbai Convention Center"
            time="10:00 AM - 2:00 PM"
            imageUrl="ev4.jpg"
          />
          <EventCard
            title="Pharmaceutical Career Fair"
            date="May 5, 2025"
            location="New York Expo Center"
            time="12:00 PM - 6:00 PM"
            imageUrl="ev6.jpg"
          />
          <EventCard
            title="Global Healthcare Meetup"
            date="June 12, 2025"
            location="London Medical Hub"
            time="9:30 AM - 3:30 PM"
            imageUrl="ev1.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default PharmacyJobFair;
