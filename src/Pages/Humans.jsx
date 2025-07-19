import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from "../Components/Footer";
import DottedBg from "../Components/DottedBg";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const OrganizerCard = ({ member }) => {
  const ref = useRef(null);
  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -25;
    const rotationY = (offsetX / (rect.width / 2)) * 25;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  };

  const handleMouseEnter = () => scale.set(1.05);
  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  const transform = useMotionTemplate`
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(${scale})
  `;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transformStyle: "preserve-3d" }}
      className="relative group rounded-3xl bg-[#111111] p-5 text-white shadow-xl flex flex-col items-center justify-between h-[320px] w-[220px] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 rounded-3xl bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300" />

      <div className="h-48 w-48 overflow-hidden z-10">
        <img
          src={member.src}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="text-center mt-4 z-10">
        <h3 className="text-xl font-general">{member.name}</h3>
        <p className="text-sm font-robert-regular text-gray-300 mt-1">
          {member.label}
        </p>
      </div>

      {(member.linkedin || member.twitter) && (
        <div className="flex gap-4 text-2xl text-gray-300 mt-5 z-10">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-500 transition" />
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400 transition" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

const Organizers = () => {
  const organizers = [
    
    
    {
      name: "Rishu Kumar Singh",
      src: "/img/rishu.png",
      linkedin: "https://www.linkedin.com/in/rishukumarsinghiitp/",
      twitter: "https://x.com/rishuksingh",
    },
    {
      name: "Pradhunya Gawande",
      src: "/img/pradhunya.png",
      linkedin: "https://www.linkedin.com/in/pradhunya-gawande",
      twitter: "https://x.com/pradhunya_patil",
    },
    {
      name: "Kritika Rukhiyana",
      src: "/img/kritika.png",
      linkedin: "https://www.linkedin.com/in/kritika-rukhiyana-65a28a307",
      twitter: "https://x.com/Kritika8924",
    },
  
    {
      name: "Akshay Gangasagar",
      src: "/img/akshay.png",
      linkedin: "https://www.linkedin.com/in/akshay-gangasagar-67b25b305/",
    },
 
    {
      name: "Harsh Kumar",
      src: "/img/harsh.png",
      linkedin: "https://www.linkedin.com/in/harsh-kumar-560944237/",
      twitter: "https://x.com/Harsh2227ofc",
    },
    {
      name: "Himanshi Aggarwal",
      src: "/img/himanshi.png",
      linkedin: "https://www.linkedin.com/in/himanshi-aggarwal-5a5553321",
      twitter: "https://x.com/HimanshiAg15396",
    },
    {
      name: "Mohd Sahal",
      src: "/img/sahal.png",
      linkedin: "https://www.linkedin.com/in/sahal-parvez",
      twitter: "https://x.com/SahalParvez742",
    },
    {
      name: "Mrunali Dhopte",
      src: "/img/mrunali.png",
      linkedin: "https://www.linkedin.com/in/mrunali-dhopte-944a181aa",
      twitter: "https://x.com/mrunu",
    },
    {
      name: "Navinya Yede",
      src: "/img/navinya.png",
      linkedin: "https://www.linkedin.com/in/navinya-yede-251802257",
      twitter: "https://x.com/navinya_yed0203",
    },
     
    {
      name: "Sunidhi Haware",
      src: "/img/sunidhi.png",
      linkedin: "https://www.linkedin.com/in/sunidhi-haware-797a97323",
      twitter: "https://x.com/Sunidhi_vj",
    },
    {
      name: "Vaibhavi Mangrulkar",
      src: "/img/vaibhavi.png",
      linkedin: "https://www.linkedin.com/in/vaibhavi-mangrulkar-7b0793285",
    },
  ];

  return (
    <div className="relative min-h-screen text-white">
      <DottedBg
        dotColor="rgba(255, 255, 255, 0.25)"
        bgColor="black"
        dotSize={2}
        baseSpacing={30}
        repelRadius={100}
        explodeStrength={25}
        returnSpeed={0.5}
      >
        <div className="relative z-10 py-16 px-6 flex flex-col items-center">
          <AnimatedTitle
            title="<b>Humans</b>"
            containerClass="mt-8 text-black text-center reveal-element"
          />
          <div className="mt-16 py-8 sm:py-12 md:py-16 w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 max-w-6xl w-full justify-items-center">
              {organizers.map((member, index) => (
                <OrganizerCard key={index} member={member} />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </DottedBg>
    </div>
  );
};

export default Organizers;
