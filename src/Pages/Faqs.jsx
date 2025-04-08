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
        "Hack4Brahma is where retro meets innovation, a 24-hour in-person hackathon that combines the nostalgia of classic arcade games with modern tech wizardry. Connect with amazing people, enjoy gaming sessions to take a break from coding!",
    },
    {
      id: 2,
      question: "What are the venue rules?",
      answer:
        "Once checked in, participants must remain at the venue until the hackathon ends after the closing ceremony. Only registered participants are allowed - no guests or guardians can stay at the venue during the event.",
    },
    {
      id: 3,
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, any necessary peripherals, and personal items for an overnight stay. Food and basic amenities will be provided at the venue. Don't forget your student ID and registration confirmation!",
    },
    {
      id: 4,
      question: "How does judging work?",
      answer:
        "Judging details, including criteria and round structure, can be found in the Hacker Guide sent to your email. Projects will be evaluated on innovation, technical complexity, and presentation quality.",
    },
    {
      id: 5,
      question: "Are there any team requirements?",
      answer:
        "Teams can consist of 3-4 members. You can form teams beforehand or find teammates during our team formation session at the start of the event. Solo participation is not permitted.",
    },
    {
      id: 6,
      question: "What technologies can we use?",
      answer:
        "Youre free to use any programming languages, frameworks, or tools. All code must be written during the hackathon. Pre-built templates or previous projects are not allowed.",
    },
    {
      id: 7,
      question: "Can I attend Hack4Brahma virtually?",
      answer: "Unfortunately, Hack4Brahma is only offered in-person.",
    },
    {
      id: 8,
      question: "What is the participation fee?",
      answer: "There is no participation fee; it's completely free to join!",
    },
    {
      id: 9,
      question: "Who can participate?",
      answer:
        "Anyone is welcome to apply—students or working professionals. Whether you want to innovate or just enjoy a fun weekend, you're welcome!",
    },
    {
      id: 10,
      question: "What is the ideal team size?",
      answer: "Teams should consist of 3-4 members.",
    },
    {
      id: 11,
      question:
        "Can my parent/guardian stay at the venue if they come with me?",
      answer:
        "The answer is No. Arrangements like food, etc., are only for the attendees. We recommend you to find a stay option for them near the venue. They can drop you at the hackathon venue and can pick you but can't stay at venue during the hackathon as we do not have any provision for them",
    },
    {
      id: 12,
      question:
        "I am below 18 years of age, can I participate in the hackathon?",
      answer:
        "Yes! You can participate in the hackathon but we would need written consent from your parent/guardian and you wouldn't be allowed to leave the venue during the hackathon.",
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
