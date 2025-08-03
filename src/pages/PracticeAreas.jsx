import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ChevronDown,
  Award,
  Copyright,
  PenTool,
  Shield,
  Radio,
  ClipboardList,
  FlaskConical,
  Gavel,
  Banknote,
  BarChart3,
} from 'lucide-react';

export default function PracticeAreas() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const areas = [
    {
      title: 'Patents',
      icon: <Award size={20} className="text-blue-700 dark:text-white" />,
      content:
        'We advise leading enterprises and emerging innovators on the full spectrum of patent law. Our capabilities span the identification, prosecution, enforcement, and monetization of patent rights across jurisdictions. From drafting technically intricate patent specifications to managing contentious opposition and infringement proceedings, we bring legal acumen and scientific fluency to every matter. We have particular expertise in life sciences, pharmaceuticals, information technology, engineering, and clean technologies.'
    },
    {
      title: 'Trademarks',
      icon: <Copyright size={20} className="text-blue-700 dark:text-white" />,
      content:
        'Our trademark practice is designed to protect and elevate brand value in today’s competitive and interconnected markets. We counsel clients on global clearance, registration, enforcement, portfolio management, and anti-counterfeiting strategy. Whether defending a well-established house mark or launching a nascent brand. Strategic registration and enforcement frameworks are tailored to each mark’s commercial footprint and long-term growth trajectory.'
    },
    {
      title: 'Copyright',
      icon: <Copyright size={20} className="text-blue-700 dark:text-white" />,
      content:
        'We offer high-level advisory and enforcement services across all forms of creative, literary, artistic, software-based, and digital works. Our offerings include registration, licensing, rights structuring, fair use analysis, litigation, and dispute resolution. We are particularly adept at addressing complexities arising in the context of digital content, licensing ecosystems, and cross-border use.'
    },
    {
      title: 'Design',
      icon: <PenTool size={20} className="text-blue-700 dark:text-white" />,
      content:
        'The protection of industrial and aesthetic design is delivered through a dedicated, process-driven approach. Our services include design registration, prosecution, cancellation actions, infringement proceedings, and strategic advisory on overlaps with other IP rights. Multi-jurisdictional coordination is offered for cohesive design protection globally.'
    },
    {
      title: 'Other IP',
      icon: <Shield size={20} className="text-blue-700 dark:text-white" />,
      content:
        'We provide robust legal frameworks for the protection of emerging and non-traditional forms of intellectual property. This includes trade secrets, confidential information, geographical indications, traditional knowledge, and plant varieties. Our services extend to documentation, advisory, enforcement, and integration into broader IP portfolios.'
    },
    {
      title: 'Telecom & Broadcasting',
      icon: <Radio size={20} className="text-blue-700 dark:text-white" />,
      content:
        'We deliver comprehensive legal support across regulatory, transactional, and dispute-related aspects of telecom and broadcasting law. Services include licensing and compliance under telecom statutes, spectrum policy, content regulation, digital distribution frameworks, and regulatory interface with authorities. Strategic advisory is provided in line with the evolving legal architecture of digital communications and media delivery.'
    },
    {
      title: 'Compliance & Regulatory',
      icon: <ClipboardList size={20} className="text-blue-700 dark:text-white" />,
      content:
        'We provide precision-led compliance strategies across corporate, financial, operational, and sector-specific legal regimes. This includes advisory on legal risk exposure, regulatory audit preparedness, corporate governance, statutory filings, and internal policy frameworks. Our services are structured to support sustainable, long-term compliance infrastructure.'
    },
    {
      title: 'Drug Regulatory',
      icon: <FlaskConical size={20} className="text-blue-700 dark:text-white" />,
      content:
        'Our regulatory advisory covers all stages of pharmaceutical, medical device, and biotechnology law. We provide end-to-end support on clinical trial approvals, marketing authorizations, product classification, labelling, compliance audits, and regulatory responses. Advice is grounded in both legal analysis and technical fluency with national and international norms.'
    },
    {
      title: 'Arbitration',
      icon: <Gavel size={20} className="text-blue-700 dark:text-white" />,
      content:
        'We handle high-value domestic and international arbitration matters under major institutional and ad hoc frameworks. Services include drafting and vetting arbitration clauses, procedural strategy, interim relief, and award enforcement. Our dispute resolution practice extends to structured conciliation, mediation, and bespoke pre-litigation negotiation frameworks.'
    },
    {
      title: 'DRT',
      icon: <Banknote size={20} className="text-blue-700 dark:text-white" />,
      content:
        'We offer structured, outcome-driven litigation support for debt recovery, enforcement of secured assets, and creditor rights. Services cover proceedings under DRT, DRAT, SARFAESI Act, and related frameworks. Legal strategy is built for speed, precision, and enforceability in complex credit enforcement matters.'
    },
    {
      title: 'Competition',
      icon: <BarChart3 size={20} className="text-blue-700 dark:text-white" />,
      content:
        'Our competition law practice delivers legal solutions aligned with market behavior and regulatory expectations. We advise on anti-competitive conduct, dominance issues, merger notifications, and internal risk frameworks. Regulatory representation, transactional structuring, and competition compliance audits are core pillars of this service offering.'
    }
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 space-y-8 bg-white dark:bg-[#121212] transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-semibold text-blue-900 dark:text-white mb-4">Practice Areas</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        At Roy & Sal Associates, we are trusted counsel to innovators, market leaders, and institutions navigating high-stakes legal challenges. Our practice is grounded in technical mastery, strategic foresight, and an unwavering commitment to professional excellence. We offer nuanced, solutions-oriented advice across an array of legal domains.
      </p>

      {areas.map((area, index) => (
        <motion.section key={index} className="border-b pb-4">
          <button
            onClick={() => toggleSection(index)}
            className="w-full flex justify-between items-center text-left py-3 focus:outline-none"
          >
            <div className="flex items-center gap-2">
              {area.icon}
              <span className="text-xl font-bold text-blue-800 dark:text-white">{area.title}</span>
            </div>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-blue-700 dark:text-white" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.p
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="text-gray-700 dark:text-gray-300 text-sm overflow-hidden pl-7 pr-1"
              >
                {area.content}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.section>
      ))}
    </motion.div>
  );
}
