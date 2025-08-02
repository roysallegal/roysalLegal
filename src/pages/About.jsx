import { motion } from 'framer-motion';
import aboutImg from '../assets/img/about-bg.jpg';

export default function About() {
  return (
    <motion.div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12"
      style={{ backgroundImage: `url(${aboutImg})` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-md shadow-md">
        <section>
          <h1 className="text-3xl font-semibold mb-4 text-blue-900 dark:text-white">About Us</h1>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Our Legacy</h2>
          <p className="text-gray-700 dark:text-gray-300 text-justify">
          Roy & Sal Associates was established with a singular vision, to provide discerning clients with exceptional legal counsel in areas critical to innovation, enterprise, and growth. What began as a boutique practice focused on intellectual property, has since evolved into a full-service legal advisory firm, offering strategic expertise across IP, commercial, corporate, technology law, competition law, among other fields of law. Our trajectory has been defined by our ability to adapt to complex legal landscapes, and by our ability to provide sophisticated legal solutions in an increasingly complex world.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-justify">
            Throughout our journey, we have worked with a diverse client base that includes emerging businesses, creative professionals, and established companies. The firm’s reputation has been built through a combination of legal precision, commercial awareness, and a client-focused approach. We believe in anticipating challenges, unlocking opportunities, and supporting each client’s long-term vision with clarity and integrity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 text-justify">
            To deliver sophisticated, forward-looking and commercially astute legal solutions that protect innovation, enable enterprise, and elevate client ambitions. We are committed to delivering legal advice that is technically sound, forward-looking, and aligned with the evolving goals of the individuals and businesses we serve. We aspire to build relationships of trust and substance, becoming not only legal advisors, but long-standing partners in the pursuit of progress, influence, and distinction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Founder's Message</h2>
          <blockquote className="italic text-gray-700 dark:text-gray-300 text-justify">
            “The creation of Roy & Sal Associates was guided by a desire to build a practice defined by legal excellence, clarity of thought, and enduring client relationships. From the very beginning, the objective was to create an institution which is dedicated to providing counsel to the clients, that is both technically strong and aligned with the practical needs of innovators, entrepreneurs, and business leaders. I envisioned a firm where legal advice would not only address immediate concerns but also support broader commercial objectives.
            <br /><br />
            I take immense pride in the trust placed in us by our clients. Whether we are protecting intellectual property, advising on complex transactions, or guiding early-stage ventures through regulatory and legal frameworks, our approach remains rooted in diligence, integrity, and strategic foresight.”
            <br /><br />
            <span className="block text-right font-semibold mt-2">- Mr. J. Roy<br />Founding Partner</span>
          </blockquote>
        </section>
      </div>
    </motion.div>
  );
}
