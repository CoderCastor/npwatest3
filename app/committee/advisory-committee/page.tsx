"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

const committeeMembers = [
  { name: "Dr. M. D. Burande", img: "/photos/burande.png" },
  { name: "Dr. H. M. Kadam", img: "/photos/kadam.png" },
  { name: "Dr. R. V. Shete", img: "/photos/shete.png" },
  { name: "Dr. Niraj Vyavhare", img: "/photos/vyawahare.png" },
  { name: "Dr. M. J. Patil", img: "/photos/mjpatil.png" },
  { name: "Dr. Anagha Joshi", img: "/photos/joshi.png" },
  { name: "Dr. R. N. Patil", img: "/photos/rnpatil.png" },
  { name: "Prof. G. S. Shinde", img: "/photos/shinde.png" },
  { name: "Dr. Dama G. Y.", img: "/photos/dama.png" },
  { name: "Prof. Prashant Hambar", img: "/photos/hambhar.png" },
  { name: "Mrs. Sangeeta Deshpande", img: "/photos/deshpande.png" },
  { name: "Dr. Shashikant Dhole", img: "/photos/dhole.png" },
  { name: "Dr. Pramod Ingale", img: "/photos/ingale.png" },
  { name: "Dr. D. D. Gaikwad", img: "/photos/gaikwad.png" },
  { name: "Dr. Kishor Otari", img: "/photos/otari.png" },
  { name: "Dr. Yogesh Bafana", img: "/photos/bafana.png" },
  { name: "Prof. Manoj Jograna", img: "/photos/jograna.png" },
  { name: "Prof. Tasleem Kureshi", img: "/photos/qureshi.png" },
  { name: "Prof. Nitin Deshmukh", img: "/photos/deshmukh.png" },
  { name: "Dr. Rajashree Chavan", img: "/photos/chavan.png" },
  { name: "Dr. Sachin Fegade", img: "/photos/fegade.png" },
  { name: "Dr. Sanjay Choudhary", img: "/photos/choudhary.png" },
  { name: "Dr. Amita Dongare", img: "/photos/dongare.png" },
  { name: "Prof. Basvaraj V Mathedu", img: "/photos/mathdevru.png" },
  { name: "Dr. Pradeep Bodake", img: "/photos/bodake.png" },
  { name: "Dr. Pravinkumar Sable", img: "/photos/sable.png" },
  { name: "Dr. Ravindra Bendgude", img: "/photos/bendgude.png" },
  { name: "Dr. Swapnil Ashok Phade", img: "/photos/phade.png" },
  { name: "Mr. Sagar Kore", img: "/photos/kore.png" },
  { name: "Dr. Vijaykumar Kale", img: "/photos/kale.png" },
  { name: "Dr. Satpute Mahavir", img: "/photos/mahavir.png" },
  { name: "Dr. Hemant Kamble", img: "/photos/kamble.png" },
  { name: "Prof. Sujit Karpe", img: "/photos/karpe.png" },
  { name: "Dr. Prafulla Adkar", img: "/photos/adkar.png" },
  { name: "Dr. Manoj Patil", img: "/photos/manojpatil.png" },
  { name: "Dr. Sujit Kakade", img: "/photos/kakade.png" },
];

const CommitteeSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const smoothScroll = (targetPosition: number, duration = 1500) => {
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
            Advisory Committee
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {committeeMembers
          .slice(0, showAll ? committeeMembers.length : 8)
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
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold mt-3">{member.name}</h4>
            </div>
          ))}
      </div>

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