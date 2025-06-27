import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder data - Replace with actual image paths and potentially more items
// Added 'tags' for filtering
const portfolioItems = [
  {
    id: 1,
    title: 'Speaking Engagements',
    description: 'I spoke to people in KNUST,UMAT,University of Windsor and some Rural communities across Ghana on topics like  leadership, self-belief, education, and purpose ',
    imageUrl: '/portfolio/speech.avif', // Placeholder path - Put actual images in /public/portfolio/
    tags: ['Engagement', 'Speech'],
  },
  {
    id: 2,
    title: 'Built PeterHills Needy Foundation',
    description: 'I built the  PeterHills Needy Foundation which is committed to supporting underprivileged students through scholarships and mentorship. With over 34 students supported and GHS 10,000 in donations, the foundation continues to make a significant impact.',
    imageUrl: '/portfolio/building.jpg', // Placeholder path
    tags: ['collaboration', 'Buiding', 'training',],
  },

  /*
  {
    id: 3,
    title: 'Trained and Guided Junior Writers',
    description: 'I provided mentorship and feedback to junior copywriters, helping them refine their skills and align their work with broader sales strategies.',
    imageUrl: '/portfolio/mentorship.png', // Placeholder path
    tags: ['mentorship', 'training', 'copywriting'],
  },
  */
  // Add more portfolio items here if needed, with relevant tags
];

// Get unique tags for filter buttons
const allTags = ['All', ...new Set(portfolioItems.flatMap(item => item.tags))];

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredItems = useMemo(() => {
    if (selectedTag === 'All') {
      return portfolioItems;
    }
    return portfolioItems.filter(item => item.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50 dark:bg-[#111111]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-amber-400 dark:text-amber-400 font-semibold mb-2">What I Did?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">Portfolio</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${selectedTag === tag 
                  ? 'bg-amber-700 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}
              `}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)} {/* Capitalize tag */}
            </button>
          ))}
        </div>

        {/* Portfolio Grid - Using motion.div for layout animation */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'> {/* Use popLayout for better grid animations */}
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout // Animate position changes
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white dark:bg-gray-700"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => { e.target.src = '/placeholder-image.png'; /* Fallback image */ }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center p-4">
                  {/* Caption - Visible on hover */}
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

