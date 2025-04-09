import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Stars } from "lucide-react";
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from "../Components/Footer";

const Whyh4b = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const features = [
    {
      title: "Innovative Development",
      description:
        "Leveraging cutting-edge technologies to create robust, scalable web solutions that push the boundaries of digital innovation.",
      color: "text-[#198f51]",
      icon: "💡",
    },
    {
      title: "Creative Design",
      description:
        "Crafting visually stunning and intuitive interfaces that captivate users and enhance digital experiences.",
      color: "text-[#198f51]",
      icon: "🎨",
    },
    {
      title: "Rapid Deployment",
      description:
        "Agile methodologies and streamlined processes ensure quick, efficient project delivery without compromising quality.",
      color: "text-[#198f51]",
      icon: "🚀",
    },
    {
      title: "Precision & Expertise",
      description:
        "Meticulous attention to detail and deep technical expertise drive our commitment to excellence.",
      color: "text-[#198f51]",
      icon: "🎯",
    },
    {
      title: "Innovative Solutions",
      description:
        "Transforming challenges into opportunities through creative problem-solving and forward-thinking approaches.",
      color: "text-[#198f51]",
      icon: "🧩",
    },
    {
      title: "Collaborative Approach",
      description:
        "Building strong partnerships with clients, focusing on understanding their unique needs and delivering tailored solutions.",
      color: "text-[#198f51]",
      icon: "🤝",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const backgroundTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["translateY(0%)", "translateY(-50%)"]
  );

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-black text-white overflow-hidden px-4 sm:px-6 md:pl-20"
    >
      <div className="relative z-10 container mx-auto py-8 sm:py-12 md:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="relative flex flex-col items-center container mx-auto px-2 sm:px-4 text-[#198f51] mb-6 sm:mb-10">
            <AnimatedTitle
              title="<b>Why</b> <b>Hack4Brahma?</b>"
              containerClass="mt-4 sm:mt-8 !text-black text-center reveal-element"
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-6xl mx-auto font-robert-regular px-2">
            <p>
              <b>Hack4Brahma isn’t just a hackathon, it’s a mission.</b>
            </p>

            <p>
              Set in one of the most <b>culturally rich</b> and{" "}
              <b>strategically important</b> regions of India, Hack4Brahma
              invites you to <b>build for purpose, not just prizes</b>. With
              Northeast India connected to the mainland through the fragile{" "}
              <b>Siliguri Corridor</b> and surrounded by international borders,
              the need for innovation here is <b>urgent and real</b>.
            </p>

            <p>
              At Hack4Brahma, you’re not just coding, you’re contributing to{" "}
              <b>regional stability</b>, <b>security</b>, and <b>growth</b>.
              From solving problems in <b>digital defense</b> and{" "}
              <b>cross-border collaboration</b> to empowering{" "}
              <b>rural communities</b> and strengthening{" "}
              <b>critical infrastructure</b>, your ideas have the power to{" "}
              <b>make a difference</b>.
            </p>

            <p>
              Join a movement where <b>tech meets impact</b>. Work alongside{" "}
              <b>visionary mentors</b>, tackle <b>real problem statements</b>,
              and rise as a <b>Brahma Guardian</b>, someone who codes not for{" "}
              <b>applause</b>, but for <b>action</b>.
            </p>
          </p>
        </motion.div>

        {/* <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-2 sm:p-3"
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className={`
                bg-white/70 
                p-4 sm:p-6 rounded-xl shadow-2xl 
                border border-blue-900/20 
                hover:border-blue-500/50 
                transition-all duration-300
              `}
            >
              <div className="mb-3 sm:mb-4 flex items-center flex-wrap sm:flex-nowrap">
                <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">
                  {feature.icon}
                </span>
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-general font-semibold ${feature.color}`}
                >
                  {feature.title}
                </h3>
              </div>
              <p className="text-black text-base sm:text-lg md:text-xl font-robert-regular leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div> */}

        {/* <motion.div
          className="mt-8 sm:mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#198f51] font-general">
            Our Commitment to Excellence
          </h2>
          <div className="max-w-4xl mx-auto bg-white/70 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl border border-green-900/20">
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed font-robert-regular">
              At H4B, we believe in the power of technology to create meaningful
              digital experiences. Our multidisciplinary team combines technical
              expertise, creative thinking, and a passion for innovation to
              deliver solutions that not only meet but exceed expectations.
            </p>
          </div>
        </motion.div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Whyh4b;
