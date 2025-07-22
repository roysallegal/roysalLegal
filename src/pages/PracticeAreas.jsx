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
      icon: <Award size={20} className="text-blue-700" />,
      content:
        'We advise leading enterprises and emerging innovators on the full spectrum of patent law...'
    },
    {
      title: 'Trademarks',
      icon: <Copyright size={20} className="text-blue-700" />,
      content:
        'Our trademark practice is designed to protect and elevate brand value...'
    },
    {
      title: 'Copyright',
      icon: <Copyright size={20} className="text-blue-700" />,
      content:
        'We offer high-level advisory and enforcement services across all forms of creative works...'
    },
    {
      title: 'Design',
      icon: <PenTool size={20} className="text-blue-700" />,
      content:
        'The protection of industrial and aesthetic design is delivered through a dedicated approach...'
    },
    {
      title: 'Other IP',
      icon: <Shield size={20} className="text-blue-700" />,
      content:
        'We provide robust legal frameworks for the protection of emerging and non-traditional IP...'
    },
    {
      title: 'Telecom & Broadcasting',
      icon: <Radio size={20} className="text-blue-700" />,
      content:
        'We deliver comprehensive legal support across regulatory, transactional, and dispute matters...'
    },
    {
      title: 'Compliance & Regulatory',
      icon: <ClipboardList size={20} className="text-blue-700" />,
      content:
        'We provide precision-led compliance strategies across corporate and sector-specific regimes...'
    },
    {
      title: 'Drug Regulatory',
      icon: <FlaskConical size={20} className="text-blue-700" />,
      content:
        'Our regulatory advisory covers all stages of pharmaceutical and biotechnology law...'
    },
    {
      title: 'Arbitration',
      icon: <Gavel size={20} className="text-blue-700" />,
      content:
        'We handle high-value arbitration matters under major institutional and ad hoc frameworks...'
    },
    {
      title: 'DRT',
      icon: <Banknote size={20} className="text-blue-700" />,
      content:
        'We offer structured litigation support for debt recovery and enforcement of secured assets...'
    },
    {
      title: 'Competition',
      icon: <BarChart3 size={20} className="text-blue-700" />,
      content:
        'Our competition law practice delivers legal solutions aligned with market behaviour...'
    }
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-12 space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-semibold text-blue-900 mb-4">Practice Areas</h1>
      <p className="text-gray-700 mb-8">
        At Roy & Sal Associates, we are trusted counsel to innovators, market leaders, and institutions navigating high-stakes legal challenges...
      </p>

      {areas.map((area, index) => (
        <motion.section key={index} className="border-b pb-4">
          <button
            onClick={() => toggleSection(index)}
            className="w-full flex justify-between items-center text-left py-3 focus:outline-none"
          >
            <div className="flex items-center gap-2">
              {area.icon}
              <span className="text-xl font-bold text-blue-800">{area.title}</span>
            </div>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-blue-700" />
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
                className="text-gray-700 text-sm overflow-hidden pl-7 pr-1"
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
