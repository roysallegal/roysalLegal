import { motion } from 'framer-motion';

export default function PracticeAreas() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 space-y-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-semibold mb-6 text-blue-900">Practice Areas</h1>
      <p className="text-gray-700 mb-8">
        At Roy & Sal Associates, we are trusted counsel to innovators, market leaders, and institutions navigating high-stakes legal challenges. Our practice is grounded in technical mastery, strategic foresight, and an unwavering commitment to professional excellence. We offer nuanced, solutions-oriented advice across an array of legal domains.
      </p>
      {[
        {
          title: "Patents",
          content:
            "We advise leading enterprises and emerging innovators on the full spectrum of patent law. Our capabilities span the identification, prosecution, enforcement, and monetization of patent rights across jurisdictions..."
        },
        {
          title: "Trademarks",
          content:
            "Our trademark practice is designed to protect and elevate brand value. We counsel clients on global clearance, registration, enforcement, portfolio management, and anti-counterfeiting strategy..."
        },
        {
          title: "Copyright",
          content:
            "We offer high-level advisory and enforcement services across creative, literary, software, and digital works. This includes registration, licensing, rights structuring, litigation, and fair use analysis..."
        },
        {
          title: "Design",
          content:
            "Our design protection includes registration, prosecution, cancellation actions, infringement proceedings, and strategic overlaps with other IP rights..."
        },
        {
          title: "Other IP",
          content:
            "We provide legal frameworks for trade secrets, confidential info, geographical indications, traditional knowledge, and plant varieties, including documentation and enforcement..."
        },
        {
          title: "Telecom & Broadcasting",
          content:
            "We support licensing, compliance, spectrum policy, content regulation, and interface with authorities under telecom and media laws..."
        },
        {
          title: "Compliance & Regulatory",
          content:
            "We advise on legal risk exposure, audit preparedness, governance, filings, and internal policy for sustainable compliance systems..."
        },
        {
          title: "Drug Regulatory",
          content:
            "Our advisory spans clinical trials, authorizations, product classification, labeling, audits, and compliance in pharma, medtech, and biotech sectors..."
        },
        {
          title: "Arbitration",
          content:
            "We handle domestic and international arbitration, including clauses, strategy, interim relief, and award enforcement. We also offer mediation and pre-litigation services..."
        },
        {
          title: "DRT",
          content:
            "We support litigation for debt recovery, secured asset enforcement, and creditor rights under DRT, DRAT, and SARFAESI frameworks..."
        },
        {
          title: "Competition",
          content:
            "We advise on anti-competitive conduct, dominance, merger filings, and regulatory representation under competition law..."
        }
      ].map((area, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2 className="text-xl font-bold text-blue-800 mb-2">{area.title}</h2>
          <p className="text-gray-700 text-sm">{area.content}</p>
        </motion.section>
      ))}
    </motion.div>
  );
}
