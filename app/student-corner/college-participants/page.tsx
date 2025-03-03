"use client";

import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

interface College {
  id: number;
  name: string;
  address: string;
}

const colleges : College[]= [
    { id: 1, name: "Bharati Vidyapeeth's Institute of Pharmacy", address: "Mere Viralaya Campus, Paud Road, Kothrud, Pune 411038" },
    { id: 2, name: "M.C.E Society's, Institute of Pharmacy", address: "Azam Campus, Camp, Pune - 411001" },
    { id: 3, name: "Shriram Shikshan Saustha College of Pharmacy", address: "Paniv, Maluj" },
    { id: 4, name: "Vitthal Pratisthan College Of Pharmacy", address: "Medha, Dist- Satapun" },
    { id: 5, name: "Varangad Gram Shikshan Sanstha's Roaath", address: "Shiram Divekar college of Pharmacy Varangad, Tal. Daund, Dist: Pune" },
    { id: 6, name: "BMPS Bhalchandra Institute Of Pharmacy", address: "Sr.no.497, Shikrapur Hills Parishel Road Pune-422" },
    { id: 7, name: "Indrayani Vidya Mandir's Indrayani Institute", address: "of Pharmacy Talegaon Dabhade, Tal. Maval, Dist. Pune" },
    { id: 8, name: "PES Modern College Of Pharmacy For Ladies", address: "Borhadewadi, Dehu - Alandi Road, Moshi, Pune 412105" },
    { id: 9, name: "JSPM'S Jayawant Institute Of Pharmacy", address: "Survey no. 32/2, Pune Mumbai bypass Highway Tathawade Pune" },
    { id: 10, name: "P.D.E.A.'s Shankarrao Ursal College of", address: "Pharmaceutical Sciences and Research Centre Near Zensar IT Tower, Kharadi, Pune" },
    { id: 11, name: "Elixir Institute of Pharmacy", address: "Warwadi, Pune" },
    { id: 12, name: "Jayawantrao Sawant Institute of Pharmacy", address: "Handewadi Road, Hadapsar, Pune" },
    { id: 13, name: "Mahadev Kanchan College Of Pharmaceutical", address: "Education And Research, Urul Kanchan" },
    { id: 14, name: "Lokseva College of Pharmacy S.No.200/8,", address: "Alandi Markal Road, Phulgaon, Tal Haveli, Dist Pune" },
    { id: 15, name: "Siddhant College Of Pharmacy Diploma", address: "Sudumbare, Taluks - Maval, District - Pune" },
    { id: 16, name: "PDEA'S College of Pharmacy", address: "Mahadevnagar, Hadapsar Pune 411028" },
    { id: 17, name: "S.V.P.M'S Rasiklal M Dhariwal college of Pharmacy", address: "72, 50/51, Acharya Anand Rushiji Marg Telco Road Chinchwad Pune 411019" },
    { id: 18, name: "S.B. Patil College Of Pharmacy", address: "Vangali Indapur" },
    { id: 19, name: "P.D.E.A.'s Shankarrao Ursal college of", address: "Pharmacy Diploma Near Zensar Info Park, Kharadi, Pune 411014" },
    { id: 20, name: "Aditya College Of Pharmacy", address: "S.N. 243/5, Saswavati Road Kedgaon Tal & Dist - Ahmednagar" },
    { id: 21, name: "Dr.D.Y.Patil College Of pharmacy Akurdi Pune", address: "Sector 29, Nigadi Pradhikaran, Akurdi, near akurdi railway station" },
    { id: 22, name: "Trinity College Of Pharmacy, Pune", address: "Yewalewadi, Saswad Kondhwa Road, Pune 411048" },
    { id: 23, name: "Siddhant School Of Pharmacy", address: "Women Siddhant School of Pharmacy Sudumbare Pune" },
    { id: 24, name: "Rajmata Jijau Shikshan Prasarak Mandal's,", address: "Institute of Pharmacy Dudulgaon, Pune" },
    { id: 25, name: "Dalight Institute of Pharmacy", address: "Kusgaon Bhima Tal Shirur, Dist-Pune" },
    { id: 26, name: "AES College Of Pharmacy Diploma", address: "A/p Narhe, Tal - Haveli, Dist - Pune 411041" },
    { id: 27, name: "Sinhgad Title College Of Pharmacy (Poly)", address: "Shirur, Dist: Pune" },
    { id: 28, name: "S.S.P. Shikshan Sanstha Siddhi College of Pharmacy", address: "Chicholi Pune-62 Survey No.115/7-60, varwadi Vasti Chicholi, P.O&C Pune-62" },
    { id: 29, name: "Navsahyadri Institute of Pharmacy", address: "Naigaon (Nasrapur), Pune" },
    { id: 30, name: "Rajgad Dnyanpeeth's College of Pharmacy,", address: "Bhor-Tal-Bhor, Dist-Pune-412206" },
    { id: 31, name: "SVPM'S, Institute of Pharmacy,", address: "Malegaon, Baramati Malegaon, Baramati, Dist: Pune" },
    { id: 32, name: "PDEA'S Seth Govind Raghunath", address: "Sable College of Pharmacy (Polytechnic) Saswad-412301" },
    { id: 33, name: "PDEA's, Seth Govind Raghunath Sable", address: "College Of Pharmacy, Saswad-Tal:saswad,Saswad" },
    { id: 34, name: "Suryadatta Education Foundation's", address: "Suryadatta College of Pharmacy, HealthCare & Research (SCPHR), Pune Survey No. 342, Bavdhan, Pune 411021" },
    { id: 35, name: "Vidya Niketan College of Pharmacy", address: "Lakhewadi North block, JBVP Campus, A/P Lakhewadi, Tal. Indapur, Dist - Pune - 413103" },
    { id: 36, name: "Late Laxmibai Phaitare college of", address: "pharmacy Kalamb Walchandnagar Kalamb, Walchandnagar, tal-Indapur, Dist-pune" },
    { id: 37, name: "Jaihind College of Pharmacy Vadgaon Sahani", address: "Indira College of Pharmacy Tathwade, Pune" },
    { id: 38, name: "Indira College Of Pharmacy Tathwade,", address: "Mumbai Pune Highway, Near Bharati Chowk, Pune" },
    { id: 39, name: "Pharate Patil College of Pharmacy Diploma", address: "Mandavgan Pharata, Shirur, Pune" },
    { id: 40, name: "Loknete Shri Dadapatil Pharate College of", address: "Pharmacy, Mandavgan Farsta, Shirur, Pune" },
    { id: 41, name: "VISOR's Institute of Pharmacy,", address: "Alp.Tal.Junnar, Dist. Pune - 412411" },
    { id: 42, name: "Shri Gajpati Institute of Pharmaceutical Sciences", address: "and Research, Tembhurni" },
    { id: 43, name: "Delight College of Pharmacy", address: "Koregaon Bhima Tal Shirur, Dist Pune" }
  ];

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
          <div className="w-full relative max-w-7xl mx-auto bg-gradient-to-b from-blue-50 to-white shadow-xl border-2 border-blue-100 rounded-lg">
          <span className=" absolute left-12 top-4 text-white">
            <Link href={"/"}>
              <IoArrowBackOutline size={30} />
            </Link>{" "}
          </span>
            <div className="w-full bg-blue-600 flex justify-center text-3xl font-semibold text-white py-4 items-center">College Participants</div>
            <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {colleges.map((college) => (
                  <div key={college.id} className="relative group">
                    <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-1 transition-transform group-hover:rotate-2"/>
                    <div className="absolute inset-0 bg-blue-100 rounded-lg transform -rotate-1 transition-transform group-hover:-rotate-2"/>
                    <div 
                      className="relative border-2 border-blue-200 rounded-lg p-4 bg-white shadow-md 
                                transform transition-all duration-300 
                                hover:shadow-xl hover:-translate-y-1 
                                hover:border-blue-400 h-32 flex flex-col"
                    >
                      <div className="flex gap-3">
                        <span className="font-bold text-lg text-blue-600 min-w-[24px]">
                          {college.id}
                        </span>
                        <div className="flex-1 overflow-hidden">
                          <h3 className="font-medium text-gray-800 mb-1 line-clamp-2 group-hover:text-blue-700">
                            {college.name}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-blue-600">
                            {college.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
      
};

export default Home;
