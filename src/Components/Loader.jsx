import { motion } from "framer-motion";

const Loader = () => {
  // Text to animate letter by letter
  const text = "Hack4Brahma";
  
  // Container variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      scale: 1.5,
      transition: { 
        duration: 1,
        ease: "easeInOut", 
        when: "afterChildren",
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    }
  };
  
  // Letter variants
  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 1.2,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="flex overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            className={`text-7xl sm:text-6xl md:text-[270px] font-zentry font-bold ${
              letter === "4" ? "text-[#198f51]" : "text-white"
            }`}
            variants={letterVariants}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;