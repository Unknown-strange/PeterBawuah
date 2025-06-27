

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-800 dark:bg-[#111111] dark:text-[#e5e5e5] py-16 px-6 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-amber-400  dark:text-amber-400 font-semibold mb-2">Who Am I?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">About Me</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Holder */}
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="/peter_official.jpg" // Placeholder path - Put actual image in /public/avatars/
              alt="Francis Dugbe" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-gray-200 dark:border-gray-700"
              onError={(e) => { e.target.src = '/placeholder-avatar.png'; /* Fallback avatar */ }}
            />
          </div>
          
          {/* About Caption */}
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
              I am Peter Bawuah a passionate motivational speaker, youth advocate, and philanthropist from Ghana. 
              With a Master's degree and years of experience speaking to students in both rural and urban areas, 
              I am on a mission to inspire, empower, and uplift the next generation of leaders.
              I have spoken at institutions including KNUST, UMAT, and the University of Windsor. 
              I am also the founder of the PeterHills Needy Foundation, which has supported over 34 students through scholarships and mentorship.
            </p>
            {/* Optional: Download Resume Button (if CV is available) */}
            {/* <a 
              href="/path/to/your/cv.pdf" 
              download="Francis_Dugbe_CV.pdf"
              className="inline-block bg-transparent hover:bg-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:text-white dark:hover:text-white py-2 px-6 border border-blue-600 dark:border-blue-400 hover:border-transparent rounded-full transition duration-300"
            >
              Download Resume
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

