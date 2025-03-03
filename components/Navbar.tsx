"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/npwa-logo.png";
import FeedbackButton from "./FeedbackButton";

const sections = ["About", "Events", "Membership", "FAQs", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommitteeOpen, setIsCommitteeOpen] = useState(false);
  const [isStudentCornerOpen, setIsStudentCornerOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileCommitteeOpen, setIsMobileCommitteeOpen] = useState(false);
  const [isMobileStudentCornerOpen, setIsMobileStudentCornerOpen] =
    useState(false);
  const [isMobileLoginOpen, setIsMobileLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.clientHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(section);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-100 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex gap-4 justify-center items-center">
          <Image src={logo.src} alt="NPWA Logo" width={80} height={80} />
          <h1 className="text-md sm:text-xl font-bold text-blue-600 leading-none">
            National Pharmacy <br /> Welfare Association
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleScrollToSection(section)}
              className={`relative px-4 py-2 text-gray-600 transition ${
                activeSection === section
                  ? "bg-blue-500 text-white font-bold rounded-md"
                  : "hover:text-blue-500"
              }`}
            >
              {section}
            </button>
          ))}

          {/* Committee Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCommitteeOpen(!isCommitteeOpen)}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-500"
            >
              Committee <ChevronDown size={16} className="ml-1" />
            </button>
            {isCommitteeOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-56 py-2">
                <Link
                  href="/committee/local-organizing-committee"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Local Organizing Committee
                </Link>
                <Link
                  href="/committee/advisory-committee"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Advisory Committee
                </Link>
                <Link
                  href="/committee/committee-members"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  {" "}
                  Committee Members
                </Link>
              </div>
            )}
          </div>

          {/* Student Corner Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsStudentCornerOpen(!isStudentCornerOpen)}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-500"
            >
              Student Corner <ChevronDown size={16} />
            </button>
            {isStudentCornerOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-56 py-2">
                <Link
                  href="/student-corner/tpo-committee"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  TPO Committee
                </Link>
                <Link
                  href="/student-corner/college-participants"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  College Participants
                </Link>
                <Link
                  href="/student-corner/company-participants"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Company Participants
                </Link>
                <Link
                  href="/student-corner/advocacy"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Advocacy
                </Link>
                <Link
                  href="/student-corner/job-opening"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Job Openings
                </Link>
              </div>
            )}
          </div>

          {/* Login Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white flex items-center gap-2"
            >
              Login <ChevronDown size={16} />
            </button>
            {isLoginOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-40 py-2">
                <Link
                  href="/member/login"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Member
                </Link>
                <Link
                  href="/admin/login"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Admin
                </Link>
                <Link
                  href="/industry-register"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Industry
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleScrollToSection(section)}
              className={`text-gray-600 transition text-lg ${
                activeSection === section
                  ? "bg-green-500 text-white font-bold rounded-md px-4 py-2"
                  : "hover:text-blue-500"
              }`}
            >
              {section}
            </button>
          ))}

          {/* Mobile Committee Dropdown */}
          <button
            onClick={() => setIsMobileCommitteeOpen(!isMobileCommitteeOpen)}
            className="flex items-center gap-2 text-gray-600"
          >
            Committee <ChevronDown size={16} />
          </button>
          {isMobileCommitteeOpen && (
            <div className="bg-white shadow-lg rounded-lg py-2">
              <Link
                href="/committee/local-organizing-committee"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Local Organizing Committee
              </Link>
              <Link
                href="/committee/advisory-committee"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Advisory Committee
              </Link>
              <Link
                href="/committee/committee-members"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Committee Members
              </Link>
            </div>
          )}

          {/* Mobile Student Corner */}
          <button
            onClick={() =>
              setIsMobileStudentCornerOpen(!isMobileStudentCornerOpen)
            }
            className="flex items-center gap-2 text-gray-600"
          >
            Student Corner <ChevronDown size={16} />
          </button>
          {isMobileStudentCornerOpen && (
            <div className="bg-white shadow-lg rounded-lg py-2">
              <Link
                href="/student-corner/tpo-committee"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                TPO Committee
              </Link>
              <Link
                href="/student-corner/college-participants"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                College Participants
              </Link>
              <Link
                href="/student-corner/company-participants"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Company Participants
              </Link>
              <Link
                href="/student-corner/advocacy"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Advocacy
              </Link>
              <Link
                href="/student-corner/job-opening"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Job Openings
              </Link>
            </div>
          )}

          {/* Mobile Login */}
          <button
            onClick={() => setIsLoginOpen(!isLoginOpen)}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white flex items-center gap-2"
          >
            Login <ChevronDown size={16} />
          </button>
          {isMobileLoginOpen && (
            <div className="bg-white shadow-lg rounded-lg py-2">
              <Link
                href="/member/login"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Member
              </Link>
              <Link
                href="/admin/login"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Admin
              </Link>
              <Link
                href="/industry-register"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Industry
              </Link>
            </div>
          )}
        </motion.div>
      )}

      {/* Fixed Feedback Button */}
      <FeedbackButton />
    </nav>
  );
  setIsMobileLoginOpen(false);
};

export default Navbar;
