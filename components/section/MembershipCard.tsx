"use client";

import { motion } from "framer-motion";

interface MembershipCardProps {
  title: string;
  description: string;
  borderColor: string;
}

const MembershipCard: React.FC<MembershipCardProps> = ({ title, description, borderColor }) => {
  return (
    <motion.div
      className={`bg-white shadow-lg rounded-xl p-6 text-center border-t-4 ${borderColor} flex flex-col justify-center items-center`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </motion.div>
  );
};

export default MembershipCard;
