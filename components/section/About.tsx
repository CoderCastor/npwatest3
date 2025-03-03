"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/carousel/p1.jpg",
  "/carousel/p2.jpg",
  "/carousel/p3.jpg",
  "/carousel/p4.jpg",
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent, info: { offset: { x: number } }) => {
    const dragOffset = info.offset.x;
    if (dragOffset < -50) {
      // Dragged left → Next Image
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (dragOffset > 50) {
      // Dragged right → Previous Image
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div id="About" className="relative w-full h-[85vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={images[index]}
          className="absolute w-full h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(event, info) => {
            setIsDragging(false);
            handleDragEnd(event, info);
          }}
        >
          <Image
            src={images[index]}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
