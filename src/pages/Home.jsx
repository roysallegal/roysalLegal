import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/img/ahmad-matar-t99iqJzb1Ns-unsplash.jpg';
import {
  Award,
  Copyright,
  PenTool,
  Shield,
  Radio,
  ClipboardList,
  FlaskConical,
  Gavel,
  Banknote,
  BarChart3
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const quotes = [
    "Protecting Innovation, Resolving Disputes – Expert Legal Services in IPR & Commercial Law",
    "Your ideas. Our Protection.",
    "Protecting Innovation. Empowering Growth.",
    "Excellence in every brief. Strategy in every step. Judgment in every matter.",
    "At the heart of innovation, advocacy, and regulation - where law becomes leadership.",
    "Where law is not just practiced but perfected in service of innovation, resolution, and enduring value.",
    "Where strategy meets structure. Where counsel becomes certainty.",
    "Built on principle. Defined by clarity. Trusted in complexity."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handlePracticeAreaClick = (areaName) => {
    const urlFriendlyName = areaName.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '');
    navigate(`/practice-areas?area=${urlFriendlyName}`);
  };

  const practiceAreas = [
    { name: 'Patents', icon: Award },
    { name: 'Trademarks', icon: Copyright },
    { name: 'Copyright', icon: Copyright },
    { name: 'Design', icon: PenTool },
    { name: 'Other IP', icon: Shield },
    { name: 'Telecom & Broadcasting', icon: Radio },
    { name: 'Compliance & Regulatory', icon: ClipboardList },
    { name: 'Drug Regulatory', icon: FlaskConical },
    { name: 'Arbitration', icon: Gavel },
    { name: 'DRT', icon: Banknote },
    { name: 'Competition', icon: BarChart3 }
  ];

  return (
    <motion.div
      className="pb-12 space-y-12"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.section {...fadeInUp} className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="max-w-6xl w-full mx-4 grid grid-cols-1 gap-8 items-center">
          {/* First div - existing content */}
          <div className="p-6 rounded-lg h-32 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center">A leading full service law firm.</h1>
          </div>
          
          {/* Second div - rotating quotes */}
          <div className="p-6 rounded-lg relative h-32 overflow-hidden">
            <motion.div
              key={currentQuoteIndex}
              initial={{ 
                opacity: 0,
                scale: 0.9,
                filter: 'blur(15px)'
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)'
              }}
              exit={{ 
                opacity: 0,
                scale: 1.1,
                filter: 'blur(15px)'
              }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0.0, 0.2, 1],
                opacity: { duration: 0.6 },
                scale: { duration: 0.8 },
                filter: { duration: 0.7 }
              }}
              className="absolute inset-0 flex items-center justify-center p-6"
            >
              <motion.p 
                className="text-xl md:text-2xl font-medium text-center italic"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.1,
                  ease: "easeOut"
                }}
              >
                "{quotes[currentQuoteIndex]}"
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 text-justify">
          At Roy & Sal Associates, we provide sophisticated and strategic legal counsel with a core focus on intellectual property, while also delivering excellence across a wider spectrum of commercial and corporate law. Our team brings a depth of expertise in protecting and enforcing intellectual assets, spanning patents, trademarks, copyrights, design and trade secrets, paired with robust capabilities in contract law, technology law, regulatory advisory and commercial litigation. Be it advising startups, creative professionals, or established enterprises, we offer tailored, business-aligned legal solutions marked by precision, discretion, and a commitment to achieving measurable results. Our approach is proactive, responsive, and always aligned with our clients' strategic goals.
        </p>
      </motion.section>

      <motion.section {...fadeInUp} className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">Practice Areas Preview</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <li 
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 hover:shadow-md"
                onClick={() => handlePracticeAreaClick(area.name)}
              >
                <IconComponent className="text-blue-700 dark:text-blue-300" size={20} />
                {area.name}
              </li>
            );
          })}
        </ul>
      </motion.section>

      {/* <motion.section {...fadeInUp} className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">What Our Clients Say</h2>
        <div className="text-gray-600 italic">"Coming soon..."</div>
      </motion.section> */}

      {/* <motion.section {...fadeInUp} className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">Additional Quotes</h2>
        <ul className="space-y-2 text-sm italic text-gray-600">
          <li>"Protecting Innovation. Empowering Growth."</li>
          <li>"Excellence in every brief. Strategy in every step. Judgment in every matter."</li>
          <li>"At the heart of innovation, advocacy, and regulation - where law becomes leadership."</li>
          <li>"Where law is not just practiced but perfected in service of innovation, resolution, and enduring value."</li>
          <li>"Where strategy meets structure. Where counsel becomes certainty."</li>
          <li>"Built on principle. Defined by clarity. Trusted in complexity."</li>
        </ul>
      </motion.section> */}
    </motion.div>
  );
}
