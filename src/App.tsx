import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About'; // Need to create this
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'; // Need to create this
import Footer from './components/Footer';
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider
import './app/globals.css'; // Ensure global styles are imported

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem> {/* Wrap with ThemeProvider */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Header />
          <About />
          <Services />
          <Portfolio />
          {/* Add the 'Want to work with me?' section here if desired */}
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

