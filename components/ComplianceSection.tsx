import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Third-party security audit for service controls",
  },
  {
    name: "GDPR & CCPA",
    description: "Personal data protection and compliance practices",
  },
  {
    name: "Encrypted Communications",
    description: "TLS and secure email for candidate data",
  },
  {
    name: "Access Controls",
    description: "Role-based access for HR analysts and reviewers",
  },
  {
    name: "Audit Trails",
    description: "Comprehensive logging of applications and changes",
  },
  {
    name: "Data Minimization",
    description: "PII minimization and safe data handling",
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
          title="Privacy-first, human-delivered services"
          subtitle="We follow best-practice controls, secure communication, and audit trails for candidate data."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Job Search & Curation",
              desc: "Daily search across 1M+ jobs and curated lists tailored to your experience.",
            },
            {
              name: "Resume Rebuild & Coaching",
              desc: "Executive resume rebuilds and coaching sessions for senior roles.",
            },
            {
              name: "Application Management",
              desc: "Human-delivered applications to company websites with tracking and daily updates.",
            },
            {
              name: "Analyst Support",
              desc: "Dedicated HR analysts (PST hours) with SLA-backed responses.",
            },
            {
              name: "Privacy & Controls",
              desc: "Encrypted communications, audit trails, and data minimization practices.",
            },
            {
              name: "Custom Resumes & ATS",
              desc: "Per-application resume customization and ATS reformatting.",
            },
          ].map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 80}
              className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-md transition-colors transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-50 border border-indigo-100">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{c.name}</h3>
                <p className="text-sm text-slate-600">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
