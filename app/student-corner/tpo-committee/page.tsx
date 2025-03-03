"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

interface CommitteeMember {
  name: string;
  img: string;
  role: string;
}

const committeeMembers : CommitteeMember[] = [
    { name: "Dr. Parag P. Kadam", img: "/committee/Kadam1.png", role: "BVIOP, Pune" },
    { name: "Mr. Aarifkhan M. Pathan", img: "/committee/pathan.png", role: "MCE Society's, IOP, Pune" },
    { name: "Mr. Sagar S. Sonar", img: "/committee/sonar.png", role: "JSPM, IOP, Hadapsar" },
    { name: "Mr. H. S. Patil", img: "/committee/patil3.png", role: "PDEA's, SGRSCOP, Saswad" },
    { name: "Mrs. Pratibha D. Sonawane", img: "/committee/sonawane.png", role: "MCOP, Moshi" },
    { name: "Prof. Pratiksha Namdev Kolekar", img: "/committee/kolakar.png", role: "JSPM IOP, Tathawade" },
    { name: "Mrs. Shinde Shubhangi Kiran", img: "/committee/kiran.png", role: "Abhinav COP, Narhe" },
    { name: "Mrs. Swati N. Dhage", img: "/committee/dhage.png", role: "RMD COP, Chinchwad" },
    { name: "Ms. Apeksha D. Rajguru", img: "/committee/rajguru.png", role: "EIOP, Pune" },
    { name: "Prof. Afroj J. Mulani", img: "/committee/mulani.png", role: "LCOP, Phulgaon, Pune" },
    { name: "Prof. Ashwini Rakesh Muluk", img: "/committee/muluk.png", role: "IOP, Dudulgaon, Moshi" },
    { name: "Prof. Vaidehi Suryawanshi", img: "/committee/suryawanshi.png", role: "RMP's BIOP, Pune" },
    { name: "Mrs. Vishakha Sagar Gaikwad", img: "/committee/galkhe.png", role: "PDEA's SGRS COP, Saswad" },
    { name: "Mr. Yogesh Kakrambe", img: "/committee/kakrambe.png", role: "PDEA's COP, Hapsar" },
    { name: "Mr. Sarang Kulkarni", img: "/committee/kulkarni.png", role: "SCP, Chikhali, Pune" },
    { name: "Ms. Shweta Morarji Mantri", img: "/committee/mantri.png", role: "SCP, Sudumbare" },
    { name: "Tejas T Ombase", img: "/committee/ombase.png", role: "ESDCP, Varvand" },
    { name: "Ms. Shital Kashid", img: "/committee/kashid.png", role: "SSP, Sudumbare" },
    { name: "Mr. Shubham Magar", img: "/committee/magar.png", role: "SOJAR COP, Barshi" },
    { name: "Ms. Namrata Kathawate", img: "/committee/kathawate.png", role: "SBPCP, Indapur" },
    { name: "Mrs. Sonal Y. Satav", img: "/committee/satav.png", role: "DIOP, KOREGAON BHIMA" },
    { name: "Dr. Shubhangi Pawar", img: "/committee/pawar.png", role: "SEF SCPHR, Pune" },
    { name: "Mr. Munde Anirudha", img: "/committee/anirudha.png", role: "Indira COP, Pune" },
    { name: "Prof. G. S. Shinde", img: "/committee/shinde3.png", role: "Indrayani IOP, Talegaon Dabhade" },
    { name: "Swapnil G. Kale", img: "/committee/kale2.png", role: "ACOP, Ahmednagar" },
    { name: "Ms. Snehal Vishwasrao Deshmukh", img: "/committee/deshmukh2.png", role: "Trinity College of Pharmacy" },
    { name: "Miss. Aarati R. Sonawane", img: "/committee/sonawane2.png", role: "Dr. D. Y. Patil IOP, Akurdi" },
    { name: "Khupse Pankaj Ramdas", img: "/committee/ramdas.png", role: "SSSCOP, Paniv" },
    { name: "Mr. Omkar Ram Nawale", img: "/committee/nawale2.png", role: "PCOPD, Mandavgan Pharata" },
    { name: "Mrs. Trupti Pradip Bhujbal", img: "/committee/bhujbal.png", role: "V.J.S.R's IOP, Ale" },
    { name: "Ms. Deepika Prajapati", img: "/committee/prajapti.png", role: "PDEA SUCOP, Kharadi" },
    { name: "Mr. Thakursing Dinesh Pawar", img: "/committee/pawar_n.png", role: "LSDP COP Mandavgan Pharata" },
    { name: "Mr. Nikhil Sampat Kedari", img: "/committee/kedari.png", role: "LT COP, Shirur" },
    { name: "Mr. Raviraj Jadhav", img: "/committee/jadhav_n.png", role: "MKKCOP, Urali Kanchan" },
    { name: "Mr. Nitin B. Patil", img: "/committee/patil_n.png", role: "DCOP, Koregaon Bhima" }
];

const CommitteeSection: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const smoothScroll = (targetPosition: number, duration: number = 1500) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
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
        const targetPosition = sectionRef.current.getBoundingClientRect().top + window.scrollY;
        smoothScroll(targetPosition, 1500);
      }
    }, 300);
  };

  return (
    <div ref={sectionRef} className="bg-white p-8 shadow-xl rounded-2xl max-w-6xl mx-auto">
<div className=" relative mb-7 flex flex-col sm:flex-row items-center justify-center border-b-2 border-blue-200 bg-blue-600 py-4 rounded-t-lg text-center">
        <span className=" absolute left-12 text-white">
            <Link href={"/"}>
              <IoArrowBackOutline size={30} />
            </Link>{" "}
          </span>
          <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Training & Placement Officers</h1>
          </div>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {committeeMembers.slice(0, showAll ? committeeMembers.length : 8).map((member, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-4 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="w-24 h-24 mx-auto relative overflow-hidden rounded-full">
              <Image src={member.img} alt={member.name} width={96} height={96} className="rounded-full object-cover" />
            </div>
            <h4 className="text-lg font-semibold mt-3">{member.name}</h4>
            <p className="text-sm text-gray-600 mt-2">{member.role}</p>
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
