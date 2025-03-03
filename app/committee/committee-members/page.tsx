"use client";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

interface CommitteeMember {
  id: number;
  name: string;
  designation: string;
}

interface Committees {
  [key: string]: CommitteeMember[];
}

export default function Home() {
  const committees: Committees = {
    "Core Committee": [
      { "id": 1, "name": "Prof. R. A. Jadhav", "designation": "Chairman" },
      { "id": 2, "name": "Dr. R. V. Shete", "designation": "Member" },
      { "id": 3, "name": "Dr. V. N. Jagtap", "designation": "Member" },
      { "id": 4, "name": "Dr. Sachin Kotwal", "designation": "Member" },
      { "id": 5, "name": "Prof. Pravin Jawale", "designation": "Member" },
      { "id": 6, "name": "Prof. Prashant Hambar", "designation": "Member" },
      { "id": 7, "name": "Dr. Pravin Salbe", "designation": "Member" },
      { "id": 8, "name": "Dr. B. W. Madhoranau", "designation": "Member" },
      { "id": 9, "name": "Dr. Arvind Shah", "designation": "Member" },
      { "id": 10, "name": "Dr. G. M. Swami", "designation": "Member" },
      { "id": 11, "name": "Prof. N. A. Patil", "designation": "Member" }
    ],
    "Finance Committee": [
      { "id": 1, "name": "Prof. Pravin Jawale", "designation": "Chairman" },
      { "id": 2, "name": "Dr. Sachin Kotwal", "designation": "Member" },
      { "id": 3, "name": "Dr. Pralhad Akarte", "designation": "Member" },
      { "id": 4, "name": "Dr. Ravindra Chittamani", "designation": "Member" },
      { "id": 5, "name": "Prof. Sagar Kore", "designation": "Member" }
    ],
    "Sponsorship Committee": [
      { "id": 1, "name": "Dr. V. N. Jagtap", "designation": "Chairman" },
      { "id": 2, "name": "Prof. A. A. Jogdand", "designation": "Member" },
      { "id": 3, "name": "Prof. Pravin Jawale", "designation": "Member" },
      { "id": 4, "name": "Dr. Sachin Kotwal", "designation": "Member" },
      { "id": 5, "name": "Dr. Dhole S. N.", "designation": "Member" },
      { "id": 6, "name": "Dr. Amol Shah", "designation": "Member" },
      { "id": 7, "name": "Dr. Sampat Navale", "designation": "Member" },
      { "id": 8, "name": "Dr. Prashant Hambar", "designation": "Member" },
      { "id": 9, "name": "Dr. Ravindra Chittamani", "designation": "Member" },
      { "id": 10, "name": "Dr. Ashwini Shiwale", "designation": "Member" },
      { "id": 11, "name": "Dr. Amita Dongre", "designation": "Member" },
      { "id": 12, "name": "Dr. R. N. Patil", "designation": "Member" },
      { "id": 13, "name": "Dr. Vijay Nagave", "designation": "Member" },
      { "id": 14, "name": "Dr. Rajashree Chavan", "designation": "Member" },
      { "id": 15, "name": "Prof. Gulabrao Shinde", "designation": "Member" },
      { "id": 16, "name": "Dr. Nitin Deshmukh", "designation": "Member" },
      { "id": 17, "name": "Dr. Prachi Pawar", "designation": "Member" },
      { "id": 18, "name": "Dr. Devita Salbe", "designation": "Member" },
      { "id": 19, "name": "Dr. D. D. Gaikwad", "designation": "Member" },
      { "id": 20, "name": "Prof. H. S. Patil", "designation": "Member" }
    ],
    "Registration Committee": [
      { "id": 1, "name": "Dr. Ashwin Shiwale", "designation": "Chairman" },
      { "id": 2, "name": "Dr. Amita Dongre", "designation": "Member" },
      { "id": 3, "name": "Dr. Prachi Pawar", "designation": "Member" },
      { "id": 4, "name": "Dr. Devika Tilkar", "designation": "Member" },
      { "id": 5, "name": "Dr. Sachin Reagde", "designation": "Member" },
      { "id": 6, "name": "Dr. Ashish Chimbalkar", "designation": "Member" }
    ],
    "Ceremony Co-Ordination Committee": [
      { "id": 1, "name": "Dr. Ravindra Chittamani", "designation": "Chairman" },
      { "id": 2, "name": "Dr. Amita Dongre", "designation": "Member" },
      { "id": 3, "name": "Dr. Sampat Navale", "designation": "Member" },
      { "id": 4, "name": "Dr. Kishor Olari", "designation": "Member" },
      { "id": 5, "name": "Dr. Nitin Deshmukh", "designation": "Member" },
      { "id": 6, "name": "Dr. R. V. Shete", "designation": "Member" },
      { "id": 7, "name": "Dr. Pravin Aatkar", "designation": "Member" },
      { "id": 8, "name": "Dr. Sachin Kosgiwe", "designation": "Member" },
      { "id": 9, "name": "Dr. Vijaykumar Kale", "designation": "Member" },
      { "id": 10, "name": "Dr. Atul Barvekar", "designation": "Member" },
      { "id": 11, "name": "Dr. Hemanti Kamble", "designation": "Member" },
      { "id": 12, "name": "Dr. Pradip Bodke", "designation": "Member" },
      { "id": 13, "name": "Prof. Krifi Sapre", "designation": "Member" }
    ],
    "Hospitality Committee": [
      { "id": 1, "name": "Dr. Nitin Deshmukh", "designation": "Chairman" },
      { "id": 2, "name": "Prof. Tasleem Kurshi", "designation": "Member" },
      { "id": 3, "name": "Prof. Priyank Borude", "designation": "Member" },
      { "id": 4, "name": "Prof. Sagar Sapre", "designation": "Member" },
      { "id": 5, "name": "Prof. Raviraj Jadhav", "designation": "Member" },
      { "id": 6, "name": "Prof. H. S. Patil", "designation": "Member" },
      { "id": 7, "name": "Prof. Yogesh Kakambre", "designation": "Member" },
      { "id": 8, "name": "Prof. Karshite Vishal", "designation": "Member" }
    ],
    "Event Co-Ordination Committee": [
      { "id": 1, "name": "Dr. Sampat Navale", "designation": "Chairman" },
      { "id": 2, "name": "Prof. N. A. Patil", "designation": "Member" },
      { "id": 3, "name": "Prof. Manoj Jorgotra", "designation": "Member" },
      { "id": 4, "name": "Dr. Shelar Natuwar", "designation": "Member" },
      { "id": 5, "name": "Prof. Ashwini Banker", "designation": "Member" },
      { "id": 6, "name": "Prof. Rohini Milind", "designation": "Member" }
    ],
    "Transport Committee": [
      { "id": 1, "name": "Prof. Sagar Shete", "designation": "Chairman" },
      { "id": 2, "name": "Prof. Gulabrao Shinde", "designation": "Member" },
      { "id": 3, "name": "Prof. Sagar Kore", "designation": "Member" }
    ],
    "Publicity Committee": [
        { "id": 1, "name": "Dr. Ravindra Chittamani", "designation": "Chairman" },
        { "id": 2, "name": "Prof. N. A. Patil", "designation": "Member" },
        { "id": 3, "name": "Prof. Prashant Hambar", "designation": "Member" },
        { "id": 4, "name": "Dr. Arvind Shah", "designation": "Member" },
        { "id": 5, "name": "Dr. Sachin Kotwal", "designation": "Member" },
        { "id": 6, "name": "Prof. Ashwini Banker", "designation": "Member" },
        { "id": 7, "name": "Prof. Aarifkhan Pathan", "designation": "Member" }
      ]
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-white-400 via-purple-400 to-pink-400 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl">
        <div className=" relative flex flex-col sm:flex-row items-center justify-center border-b-2 border-blue-200 bg-blue-600 py-4 rounded-t-lg text-center">
        <span className=" absolute left-12 text-white">
            <Link href={"/"}>
              <IoArrowBackOutline size={30} />
            </Link>{" "}
          </span>
          <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white">COMMITTEE&apos;S</h1>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(committees).map(([committeeName, members], idx) => (
              <div key={committeeName} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-500 to-blue-600">
                        <th colSpan={3} className="p-2 text-white text-left">
                          <div className="flex items-center">
                            <span className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full mr-2">
                              {idx + 1}
                            </span>
                            {committeeName}
                          </div>
                        </th>
                      </tr>
                      <tr className="bg-blue-100">
                        <th className="p-2 border-b border-r border-gray-300 w-12 text-center">Sr.No</th>
                        <th className="p-2 border-b border-r border-gray-300">Name of Member</th>
                        <th className="p-2 border-b border-gray-300">Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {members.map((member) => (
                        <tr key={member.id} className="hover:bg-gray-50">
                          <td className="p-2 border-r border-gray-200 text-center">{member.id}</td>
                          <td className="p-2 border-r border-gray-200">{member.name}</td>
                          <td className="p-2">{member.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
}
