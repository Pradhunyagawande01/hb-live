"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedTitle from "../Components/AnimatedTitle";
import CircularGallery from '../Components/CircularGallery'
import Footer from "../Components/Footer";



export default function Faqs() {
  const faqData = [
    {
      id: 1,
      question: "What is Hack4Brahma?",
      answer:
        "Hack4Brahma is a 24-hour offline hackathon themed around regional impact and defense-tech, bringing together innovators to solve real-world challenges for Northeast India.",
    },
    {
      id: 2,
      question: "What are the venue rules?",
      answer:
        "Participants must carry valid ID, follow code of conduct, and stay within the hackathon area. Outside food, alcohol, or any disruptive behavior is strictly prohibited.",
    },
    {
      id: 3,
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, ID card, any other devices you need, and lots of energy! We’ll provide internet, power, food, and swag.",
    },
    {
      id: 4,
      question: "How does judging work?",
      answer:
        "Judging will be based on innovation, impact, technical complexity, scalability, and relevance to theme. Final presentations will be evaluated by industry experts.",
    },
    {
      id: 5,
      question: "Are there any team requirements?",
      answer:
        "Yes, teams should consist of 3 to 4 members. You can form a team in advance or join our Discord to find teammates.",
    },
    {
      id: 6,
      question: "What technologies can we use?",
      answer:
        "You’re free to use any tech stack, APIs, or tools. Just make sure your project is built during the hackathon hours.",
    },
    {
      id: 7,
      question: "Can I attend Hack4Brahma virtually?",
      answer: "UnfortunatelyNo, this is a fully offline event. All participants are required to be physically present at the venue.",
    },
    {
      id: 8,
      question: "What is the participation fee?",
      answer: "There is no fee. Hack4Brahma is completely free to attend for selected participants.",
    },
    {
      id: 9,
      question: "Who can participate?",
      answer:
        "Anyone with a passion for technology—students, developers, designers, creators. Beginners are welcome too!",
    },
    {
      id: 10,
      question: "What is the ideal team size?",
      answer: "3 to 4 members per team. Teams with fewer or more members will not be eligible.",
    },
    {
      id: 11,
      question:
        "Can my parent/guardian stay at the venue if they come with me?",
      answer:
        "No, only registered participants are allowed inside the hackathon zone. Accommodation details (if any) will be shared beforehand.",
    },
    {
      id: 12,
      question:
        "I am below 18 years of age, can I participate in the hackathon?",
      answer:
        "Yes, but you’ll need to submit a parental consent form before the event. Further instructions will be shared post-selection.",
    },
  ];

  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <AnimatedTitle
            title="<b> FAQ's</b>"
            containerClass="mt-8 !text-black text-center reveal-element"
          />
          <p className="text-gray-400 text-lg mt-16 mb-4 font-general">
            Find answers to the most common questions about our services
          </p>
        </div>

        {/* FAQ in 2 Columns */}
        <div className="flex flex-col gap-8">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="pb-4 border-b border-gray-700 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left flex justify-between items-center py-3 hover:text-green-500 transition-colors duration-200"
              >
                <span className="text-lg font-medium font-robert-regular">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-green-500 transition-transform duration-300 ${
                    openItem === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openItem === faq.id && (
                <div className="pt-2">
                  <p className="text-gray-400 font-robert-medium">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative, h-[600px] py-8 sm:py-12 md:py-16">
        <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.1} />
      </div>
      <Footer />
    </div>
  );
}
