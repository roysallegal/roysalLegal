import { motion } from 'framer-motion';
import { useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      className="px-4 py-12 space-y-12"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.section {...fadeInUp} className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Protecting Innovation, Resolving Disputes – Expert Legal Services in IPR & Commercial Law</h1>
          <p className="italic text-sm">“Your ideas. Our Protection.”</p>
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">Brief Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 text-justify">
          At Roy & Sal Associates, we provide sophisticated and strategic legal counsel with a core focus on intellectual property, while also delivering excellence across a wider spectrum of commercial and corporate law. Our team brings a depth of expertise in protecting and enforcing intellectual assets, spanning patents, trademarks, copyrights, design and trade secrets, paired with robust capabilities in contract law, technology law, regulatory advisory and commercial litigation. Be it advising startups, creative professionals, or established enterprises, we offer tailored, business-aligned legal solutions marked by precision, discretion, and a commitment to achieving measurable results. Our approach is proactive, responsive, and always aligned with our clients’ strategic goals.
        </p>
      </motion.section>

      <motion.section {...fadeInUp} className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">Practice Areas Preview</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <Award className="text-blue-700 dark:text-blue-300" size={20} />
            Patents
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <Copyright className="text-blue-700 dark:text-blue-300" size={20} />
            Trademarks
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <Copyright className="text-blue-700 dark:text-blue-300" size={20} />
            Copyright
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <PenTool className="text-blue-700 dark:text-blue-300" size={20} />
            Design
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <Shield className="text-blue-700 dark:text-blue-300" size={20} />
            Other IP
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <Radio className="text-blue-700 dark:text-blue-300" size={20} />
            Telecom & Broadcasting
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <ClipboardList className="text-blue-700 dark:text-blue-300" size={20} />
            Compliance & Regulatory
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <FlaskConical className="text-blue-700 dark:text-blue-300" size={20} />
            Drug Regulatory
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <Gavel className="text-blue-700 dark:text-blue-300" size={20} />
            Arbitration
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <Banknote className="text-blue-700 dark:text-blue-300" size={20} />
            DRT / Competition
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <BarChart3 className="text-blue-700 dark:text-blue-300" size={20} />
            Competition Law
          </li>
          <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
            <Banknote className="text-blue-700 dark:text-blue-300" size={20} />
            DRT Matters
          </li>
        </ul>
      </motion.section>

      {/* <motion.section {...fadeInUp} className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">What Our Clients Say</h2>
        <div className="text-gray-600 italic">“Coming soon...”</div>
      </motion.section> */}

      {/* <motion.section {...fadeInUp} className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">Additional Quotes</h2>
        <ul className="space-y-2 text-sm italic text-gray-600">
          <li>“Protecting Innovation. Empowering Growth.”</li>
          <li>“Excellence in every brief. Strategy in every step. Judgment in every matter.”</li>
          <li>“At the heart of innovation, advocacy, and regulation - where law becomes leadership.”</li>
          <li>“Where law is not just practiced but perfected in service of innovation, resolution, and enduring value.”</li>
          <li>“Where strategy meets structure. Where counsel becomes certainty.”</li>
          <li>“Built on principle. Defined by clarity. Trusted in complexity.”</li>
        </ul>
      </motion.section> */}
    </motion.div>
  );
}
