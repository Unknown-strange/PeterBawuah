import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, // Replaces circle-book-open
  PenTool, // Replaces microphone-alt
  BrainCircuit, // Replaces person-sign
  Search, // Replaces apartment
  Briefcase, // Replaces toolbox
  Handshake, // Replaces farm (Client Relations)
  Network // Replaces farm (Networking)
} from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Motivational Speake',
    description: 'I deliver high-impact talks that inspire students and professionals to pursue purpose, leadership, and personal growth.',
    Icon: PenTool,
  },
  {
    id: 2,
    title: 'Youth Empowerment Coach',
    description: 'I guide young people to build confidence, set goals, and take charge of their future through workshops and mentorship.',
    Icon:  BrainCircuit,
  },
  {
    id: 3,
    title: 'Mentorship & Advisory',
    description: 'I offer mentorship for students and aspiring leaders, helping them navigate life choices and achieve their goals.',
    Icon: Briefcase,
  },
  {
    id: 4,
    title: 'Educational Program Consultant',
    description: 'I help institutions and nonprofits design effective, inspiring programs that uplift and engage young minds.',
    Icon: Search,
  },
  {
    id: 5,
    title: 'Nonprofit & CSR Collaboration',
    description: 'Through my foundation, I partner with individuals and organizations to support scholarships, mentorship, and youth programs.',
    Icon: Briefcase,
  },
  {
    id: 6,
    title: 'Networking & Outreach',
    description: 'I connect with changemakers, educators, and advocates to build a global community dedicated to youth development.',
    Icon: Network,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="service" className="py-16 md:py-24 bg-[#f1f5f9] dark:bg-[#0d0d0d]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-amber-400 dark:text-amber-400 font-semibold mb-2">What I Do?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-amber-400 text-white scale-105' : 'bg-white dark:bg-amber-600 hover:shadow-lg hover:-translate-y-1'}`}
              onClick={() => handleItemClick(index)}
              whileHover={{ scale: activeIndex !== index ? 1.03 : 1.05 }}
              layout // Animate layout changes
            >
              <service.Icon className={`h-10 w-10 mx-auto mb-4 ${activeIndex === index ? 'text-white' : 'text-amber-400 dark:text-amber-400'}`} />
              <h3 className={`text-xl font-semibold ${activeIndex === index ? 'text-white' : 'text-black dark:text-white'}`}>{service.title}</h3>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait"> {/* Use mode="wait" for smoother transitions */}
          {activeIndex !== null && (
            <motion.div
              key={activeIndex} // Ensure re-render on index change
              className="mt-8 p-6 bg-white dark:bg-amber-700 rounded-lg shadow-lg max-w-3xl mx-auto text-left md:text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h4 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{servicesData[activeIndex].title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{servicesData[activeIndex].description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;

