import packageJson from "../package.json";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen grid place-items-center bg-black text-white p-8">
      <div className="max-w-[600px] space-y-8">
        {/* Entrance Animation with Stagger */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            Framer Motion Showcase
          </motion.h1>
        </motion.div>

        {/* Hover Animations */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg cursor-pointer"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#374151",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2 className="text-xl font-semibold mb-2">Hover & Tap Me!</h2>
          <p>This card scales and changes color on hover</p>
        </motion.div>

        {/* Layout Animation */}
        <motion.div layout className="bg-gray-800 p-4 rounded-lg">
          <motion.button
            layout
            onClick={() => setCount(count + 1)}
            className="bg-blue-600 px-4 py-2 rounded mb-4"
            whileHover={{ backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.9 }}
          >
            Count: {count}
          </motion.button>
          {count > 0 && (
            <motion.div
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-green-400"
            >
              You've clicked {count} times!
            </motion.div>
          )}
        </motion.div>

        {/* Keyframe Animation */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <h3 className="text-lg font-semibold">Continuous Animation</h3>
          <p>This card gently pulses and rotates</p>
        </motion.div>

        {/* Staggered Children */}
        <motion.div
          className="space-y-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              className="bg-gray-700 p-3 rounded"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Staggered item {item}
            </motion.div>
          ))}
        </motion.div>

        {/* Exit Animation with AnimatePresence */}
        <div className="space-y-4">
          <motion.button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-red-600 px-4 py-2 rounded"
            whileHover={{ backgroundColor: "#dc2626" }}
            whileTap={{ scale: 0.9 }}
          >
            Toggle Visibility
          </motion.button>

          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key="visible-content"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.5 }}
                className="bg-yellow-600 p-4 rounded-lg"
              >
                <h4 className="font-semibold">I can disappear!</h4>
                <p>This content animates in and out smoothly</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Path Animation */}
        <motion.div className="flex justify-center">
          <motion.div
            className="w-4 h-4 bg-blue-500 rounded-full"
            animate={{
              x: [0, 100, 0, -100, 0],
              y: [0, -50, -100, -50, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Dependencies with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-gray-900 p-4 rounded-lg"
        >
          <h3 className="text-lg font-semibold mb-2">Dependencies</h3>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(packageJson.dependencies, null, 2)}
          </pre>
        </motion.div>
      </div>
    </main>
  );
}
