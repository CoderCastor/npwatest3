"use client";

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Loading Text */}
      <motion.p
        className="mt-6 text-5xl font-semibold text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loading;
