import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: number;
  color: string;
}

const Carousel: React.FC = () => {
  const items: CarouselItem[] = [
    { id: 1, color: "bg-red-500" },
    { id: 2, color: "bg-blue-500" },
    { id: 3, color: "bg-green-500" },
    { id: 4, color: "bg-yellow-500" },
    { id: 5, color: "bg-purple-500" },
    { id: 6, color: "bg-pink-500" },
    { id: 7, color: "bg-indigo-500" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + items.length) % items.length;
      visibleItems.push({
        ...items[index],
        position: i,
      });
    }
    return visibleItems;
  };

  return (
    <div className="flex items-center justify-center gap-24 p-8">
      <button
        onClick={handlePrevious}
        className="p-2 rounded-full bg-white hover:bg-white/80 text-black transition-colors"
      >
        <ChevronLeft className="size-6" />
      </button>

      <div className="flex items-center justify-center">
        {getVisibleItems().map((item) => (
          <motion.div
            key={item.id}
            className={`flex items-center justify-center rounded-full ${item.color}`}
            animate={{
              x: item.position * 60,
              scale: item.position === 0 ? 1.5 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              width: item.position === 0 ? "80px" : "60px",
              height: item.position === 0 ? "80px" : "60px",
            }}
          >
            {item.id}
          </motion.div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="p-2 rounded-full bg-white hover:bg-white/80 text-black transition-colors"
      >
        <ChevronRight className="size-6" />
      </button>
    </div>
  );
};

export default function App() {
  return (
    <main className="min-h-screen grid place-items-center bg-black text-white">
      <div className="max-w-[500px] space-y-4">
        <Carousel />
      </div>
    </main>
  );
}
