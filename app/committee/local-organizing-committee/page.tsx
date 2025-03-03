"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

const committeeMembers = [
  {
    name: "Prof. P. A. Jadhav",
    role: "Chairman, LOC",
    img: "/photos/image.png",
  },
  {
    name: "Dr. V. N. Jagtap",
    role: "Vice - Chairman, LOC",
    img: "/photos/jagt.png",
  },
  {
    name: "Prof. Sachin Kotwal",
    role: "Secretary, LOC",
    img: "/photos/kotwal.png",
  },
  {
    name: "Prof. Pravin Jawale",
    role: "Organizing Secretary, LOC",
    img: "/photos/jawale.png",
  },
  {
    name: "Prof. N. A. Patil",
    role: "Treasurer, LOC",
    img: "/photos/patil.png",
  },
  { name: "Dr. Amol Shah", role: "Member, LOC", img: "/photos/shah.png" },
  {
    name: "Mr. Sagar Paygude",
    role: "Member, LOC",
    img: "/photos/paygude.png",
  },
  { name: "Dr. Sampat Nawale", role: "Member, LOC", img: "/photos/nawale.png" },
  { name: "Prof. Swami G. M.", role: "Member, LOC", img: "/photos/gm.png" },
  {
    name: "Dr. Ravindra Chitamani",
    role: "Member, LOC",
    img: "/photos/chintamani.png",
  },
  {
    name: "Dr. Ashwini Shewale",
    role: "Member, LOC",
    img: "/photos/shewale.png",
  },
  {
    name: "Dr. Devika Tilekar",
    role: "Member, LOC",
    img: "/photos/tilekar.png",
  },
  {
    name: "Prof. Priyanka Borude",
    role: "Member, LOC",
    img: "/photos/borude.png",
  },
];

const CommitteeSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const smoothScroll = (targetPosition: number, duration = 1000) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleToggle = () => {
    setShowAll((prev) => !prev);

    setTimeout(() => {
      if (!showAll && sectionRef.current) {
        const targetPosition =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        smoothScroll(targetPosition, 1500);
      }
    }, 300);
  };

  return (
    <div
      ref={sectionRef}
      className="bg-white p-8 shadow-xl rounded-2xl max-w-6xl mx-auto"
    >
      <div className="text-blue-600 flex justify-start items-center gap-3">
        <div className="flex justify-center items-center mb-6 gap-4">
          <span>
            <Link href={"/"}>
              <IoArrowBackOutline size={30} />
            </Link>{" "}
          </span>
          <h2 className="text-2xl font-bold text-start text-blue-600">
            Local Organizing Committee
          </h2>
        </div>
      </div>

      {/* Wrapper for committee members */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {committeeMembers
          .slice(0, showAll ? committeeMembers.length : 8) // Show only 8 members initially
          .map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-4 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="w-24 h-24 mx-auto relative overflow-hidden rounded-full">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={96}
                  height={96}
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <h4 className="text-lg font-semibold mt-3">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
      </div>

      {/* View All / Show Less Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleToggle}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default CommitteeSection;
