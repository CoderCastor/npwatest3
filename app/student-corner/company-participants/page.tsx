"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

interface Company {
  name: string;
  logo: string;
}

export default function Page() {
  const companies: Company[] = [
    { name: "Vishvabharti", logo: "/logos/vishwa.png" },
    { name: "WW Clinics", logo: "/logos/ww-clinics.png" },
    { name: "Genvis Remedies", logo: "/logos/genvis.png" },
    { name: "MedPlus", logo: "/logos/medplus.png" },
    { name: "Shloka Medico", logo: "/logos/shloka-medico.png" },
    { name: "Art Logo", logo: "/logos/art-logo.png" },
    { name: "Libra", logo: "/logos/libra.png" },
    { name: "EPI", logo: "/logos/epi.png" },
    { name: "Yagmine Healthcare", logo: "/logos/yagmine.png" },
    { name: "Wellness Forever", logo: "/logos/wellness-forever.png" },
    { name: "Unity Medicare", logo: "/logos/unity-medicare.png" },
    { name: "Genericart", logo: "/logos/genericart.png" },
    { name: "Ze Logo", logo: "/logos/ze.png" },
    { name: "Zusamen", logo: "/logos/zusamen.png" },
    { name: "A Logo", logo: "/logos/a-logo.png" },
    { name: "Nature Cart", logo: "/logos/nature-cart.png" },
    { name: "NV Logo", logo: "/logos/nv.png" },
    { name: "Generic Aahar", logo: "/logos/generic-adhar.png" },
    { name: "Laxmi Medicals", logo: "/logos/laxmi-medical.png" },
    { name: "Cipla", logo: "/logos/cipla.png" },
    { name: "Jupiter Hospital", logo: "/logos/jupiter-hospital.png" },
    { name: "Ruby Hall Clinic", logo: "/logos/ruby-hall.png" },
    { name: "Medicover Hospitals", logo: "/logos/medicover.png" },
    { name: "Surya Sahyadri", logo: "/logos/surya-sahyadri.png" },
    { name: "Anuveda", logo: "/logos/anuveda.png" },
    { name: "Soham Medicals", logo: "/logos/soham-medicals.png" },
    { name: "Genericpedia Pharmacy", logo: "/logos/genericplus.png" },
    { name: "Epitome", logo: "/logos/epitome.png" },
    { name: "Callidus", logo: "/logos/callidus.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 py-12 px-8">
      <div className="max-w-7xl   mx-auto">
        <div className="flex items-center justify-center mb-8">
        <span className=" absolute left-12 top-4 text-black-600">
            <Link href={"/"}>
              <IoArrowBackOutline size={30} />
            </Link>{" "}
          </span>
          <Image src="/logos/image.png" alt="NPWA Logo" width={48} height={48} className="mr-4" />
          <h1 className="text-3xl font-bold text-center text-gray-800">Company Participating</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-full aspect-[3/2] relative flex items-center justify-center">
                <Image src={company.logo} alt={`${company.name} logo`} width={150} height={100} className="max-w-full max-h-full object-contain p-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
