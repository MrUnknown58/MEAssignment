import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Independent security audit and certification",
  },
  {
    name: "HIPAA Compliant",
    description: "Healthcare data protection standards",
  },
  {
    name: "GDPR Ready",
    description: "European data privacy regulation compliance",
  },
  { name: "ISO 27001", description: "Information security management systems" },
  {
    name: "PCI DSS",
    description: "Payment card industry data security standards",
  },
  {
    name: "FedRAMP",
    description: "Federal risk and authorization management program",
  },
];

export default function ComplianceSection() {
  return (
    <section
      id="compliance"
      className="py-24 px-6 bg-white border-t border-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Security & Compliance"
          title="Built for Privacy, Security, & Compliance"
          subtitle="Enterprise-grade security and compliance certifications you can trust."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.name}
              delay={i * 80}
              className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-200"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 border border-green-200">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-slate-600">{cert.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
