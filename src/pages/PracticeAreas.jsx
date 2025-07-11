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
            "We advise leading enterprises and emerging innovators on the full spectrum of patent law. Our capabilities span the identification, prosecution, enforcement, and monetization of patent rights across jurisdictions. From drafting technically intricate patent specifications to managing contentious opposition and infringement proceedings, we bring legal acumen and scientific fluency to every matter. We also guide clients through prior art searches and patentability assessments to ensure strategic filings. Our team collaborates closely with inventors, R&D departments, and in-house legal teams to align patent strategy with business goals. Where required, we assist in international filings and coordinate with foreign associates for cohesive global protection..."
        },
        {
          title: "Trademarks",
          content:
            "Our trade mark practice is designed to protect and elevate brand value in today’s competitive and interconnected markets. We counsel clients on global clearance, registration, enforcement, portfolio management, and anti-counterfeiting strategy. Whether defending a well-established house mark or launching a nascent brand, strategic registration and enforcement frameworks are tailored to each mark’s commercial footprint and long-term growth trajectory. We also support clients in managing large-scale trade mark portfolios and addressing brand-related disputes at administrative and judicial levels. Our advisory extends to brand licensing, franchising, and domain name protection. With increasing brand exposure in online marketplaces, we help develop and execute brand protection strategies tailored to digital ecosystems...."
        },
        {
          title: "Copyright",
          content:
            "We offer high-level advisory and enforcement services across all forms of creative, literary, artistic, software-based, and digital works. Our offerings include registration, licensing, rights structuring, fair use analysis, litigation, and dispute resolution. We are particularly adept at addressing complexities arising in the context of digital content, licensing ecosystems, and cross-border use. We work with creators, developers, content platforms, and publishers to navigate evolving copyright frameworks. Our services also include drafting of content licensing, work-for-hire, and collaborative creation agreements. Clients rely on us for strategic guidance in protecting proprietary content and enforcing rights across jurisdictions..."
        },
        {
          title: "Design",
          content:
            "The protection of industrial and aesthetic design is delivered through a dedicated, process-driven approach. Our services include design registration, prosecution, cancellation actions, infringement proceedings, and strategic advisory on overlaps with other IP rights. Multi-jurisdictional coordination is offered for cohesive design protection globally. We assist clients in sectors such as consumer goods, fashion, electronics, and automotive design. Our support also includes advising on copyright and trade dress implications where designs intersect with other forms of intellectual property. We help ensure that aesthetic innovation translates into enforceable legal rights in key markets..."
        },
        {
          title: "Other IP",
          content:
            "We provide robust legal frameworks for the protection of emerging and non-traditional forms of intellectual property. This includes trade secrets, confidential information, geographical indications, traditional knowledge, and plant varieties. Our services extend to documentation, advisory, enforcement, and integration into broader IP portfolios. We work closely with clients to identify protectable subject matter and implement practical confidentiality safeguards. Our team also engages with public institutions and stakeholders in managing community rights and benefit-sharing under applicable laws. We are equipped to handle both institutional and grassroots-level IP challenges in regulated sectors..."
        },
        {
          title: "Telecom & Broadcasting",
          content:
            "We deliver comprehensive legal support across regulatory, transactional, and dispute-related aspects of telecom and broadcasting law. Services include licensing and compliance under telecom statutes, spectrum policy, content regulation, digital distribution frameworks, and regulatory interface with authorities. Strategic advisory is provided in line with the evolving legal architecture of digital communications and media delivery. Our support includes reviewing commercial contracts such as interconnection agreements, carriage deals, and infrastructure sharing arrangements. We advise content and platform providers on applicable advertising, censorship, and licensing regulations. Our understanding of the regulatory landscape allows clients to manage compliance risks while scaling operations..."
        },
        {
          title: "Compliance & Regulatory",
          content:
            "We provide precision-led compliance strategies across corporate, financial, operational, and sector-specific legal regimes. This includes advisory on legal risk exposure, regulatory audit preparedness, corporate governance, statutory filings, and internal policy frameworks. Our services are structured to support sustainable, long-term compliance infrastructure. We assist clients in setting up compliance protocols tailored to their specific industry and operational structure. Our services include regular legal updates, training sessions, and risk mapping to ensure proactive compliance. Clients turn to us for independent reviews and legal audits in response to internal or external scrutiny..."
        },
        {
          title: "Drug Regulatory",
          content:
            "Our regulatory advisory covers all stages of pharmaceutical, medical device, and biotechnology law. We provide end-to-end support on clinical trial approvals, marketing authorizations, product classification, labelling, compliance audits, and regulatory responses. Advice is grounded in both legal analysis and technical fluency with national and international norms. We assist in preparing and reviewing submissions to regulatory authorities such as CDSCO and state drug controllers. Our team also provides guidance on Schedule Y compliance, GMP obligations, and product recalls. We work with clients on structuring regulatory strategy for new product introductions and global market entry..."
        },
        {
          title: "Arbitration",
          content:
            "We handle high-value domestic and international arbitration matters under major institutional and ad hoc frameworks. Services include drafting and vetting arbitration clauses, procedural strategy, interim relief, and award enforcement. Our dispute resolution practice extends to structured conciliation, mediation, and bespoke pre-litigation negotiation frameworks. We support clients through the entire arbitration lifecycle, that is, from initiation to final enforcement of awards. Our arbitration-related litigation experience includes challenges to arbitral awards and interim measures before courts. We also assist in selecting arbitrators and advising on jurisdictional issues in cross-border disputes..."
        },
        {
          title: "DRT",
          content:
            "We offer structured, outcome-driven litigation support for debt recovery, enforcement of secured assets, and creditor rights. Services cover proceedings under DRT, DRAT, SARFAESI Act, and related frameworks. Legal strategy is built for speed, precision, and enforceability in complex credit enforcement matters. We also advise on documentation review and pre-litigation risk assessments in lending transactions. Our team works with financial institutions, ARCs, and corporate creditors in structuring recovery strategy and enforcement timelines. When needed, we coordinate with forensic experts and valuers to support asset tracing and realisation..."
        },
        {
          title: "Competition",
          content:
            "Our competition law practice delivers legal solutions aligned with market behaviour and regulatory expectations. We advise on anti-competitive conduct, dominance issues, merger notifications, and internal risk frameworks. Regulatory representation, transactional structuring, and competition compliance audits are core pillars of this service offering. We assist clients in evaluating distribution and pricing models from a compliance perspective. Our team represents clients before the Competition Commission of India and appellate forums. In M&A transactions, we manage the entire process of merger control filings and competition risk assessment..."
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
