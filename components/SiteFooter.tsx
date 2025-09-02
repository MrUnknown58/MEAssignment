export default function SiteFooter() {
  return (
    <footer className="bg-black text-white border-t border-slate-200 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand + Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">Personal.ai Clone</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 max-w-xs">
              Educational rebuild of the Personal AI marketing site. Not
              affiliated with Human AI Labs, Inc.
            </p>
            <div className="flex flex-wrap gap-3" aria-label="Social links">
              <SocialLink
                href="https://community.personal.ai"
                label="Community"
              />
              <SocialLink
                href="https://twitter.com/personalai_"
                label="Twitter"
              />
              <SocialLink
                href="https://www.linkedin.com/company/personalai"
                label="LinkedIn"
              />
              <SocialLink
                href="https://www.instagram.com/personalai/"
                label="Instagram"
              />
              <SocialLink
                href="https://www.facebook.com/personalai"
                label="Facebook"
              />
              <SocialLink
                href="https://www.youtube.com/channel/UC_h69pwGH3iF3RVPpBag1bw"
                label="YouTube"
              />
            </div>
          </div>

          {/* Company Links */}
          <div className="grid grid-cols-2 gap-12 md:col-span-2 md:grid-cols-4">
            <div>
              <h3 className="text-xs font-semibold tracking-wider text-slate-900 uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <FooterLink href="/team">Team</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="/thesis">Thesis</FooterLink>
                <FooterLink href="/partners">Partners</FooterLink>
                <FooterLink href="/press">Press</FooterLink>
                <FooterLink href="/privacy-notice">Privacy Notice</FooterLink>
                <FooterLink href="/cookie-notice">Cookie Notice</FooterLink>
                <FooterLink href="/terms-of-service">
                  Terms of Service
                </FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wider text-slate-900 uppercase mb-4">
                Our Product
              </h3>
              <ul className="space-y-2">
                <FooterLink href="/pricing">Pricing</FooterLink>
                <FooterLink href="/insights">Insights</FooterLink>
                <FooterLink href="https://trust.personal.ai" external>
                  Trust Center
                </FooterLink>
                <FooterLink href="https://product-docs.personal.ai" external>
                  Help Center
                </FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/community-guidelines">
                  Community Guidelines
                </FooterLink>
                <FooterLink href="mailto:team@personal.ai" external>
                  Contact Us
                </FooterLink>
                <FooterLink
                  href="#consent"
                  onClick={() => {
                    if (
                      typeof window !== "undefined" &&
                      (window as any).Didomi?.preferences
                    ) {
                      (window as any).Didomi.preferences.show();
                    }
                  }}
                >
                  Consent Notice
                </FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wider text-slate-900 uppercase mb-4">
                Explore
              </h3>
              <ul className="space-y-2">
                <FooterLink href="#features">Features</FooterLink>
                <FooterLink href="#personas">Personas</FooterLink>
                <FooterLink href="#privacy">Privacy</FooterLink>
                <FooterLink href="#memory">Memory</FooterLink>
                <FooterLink href="#compliance">Compliance</FooterLink>
                <FooterLink href="#cta">Get Started</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wider text-slate-900 uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                <FooterLink href="/privacy-notice">Privacy</FooterLink>
                <FooterLink href="/cookie-notice">Cookies</FooterLink>
                <FooterLink href="/terms-of-service">Terms</FooterLink>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-slate-500">
          <p>© 2024 Personal AI by Human AI Labs, Inc. (Educational clone)</p>
          <p className="max-w-md leading-relaxed">
            This project is for learning and demonstration purposes only. Some
            links may not function in the clone.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  children,
  href,
  external,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const base = "hover:text-slate-900 transition-colors";
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={base}
      >
        {children}
      </a>
    </li>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-[11px] font-medium text-slate-600 transition-colors"
    >
      {label.substring(0, 2)}
    </a>
  );
}
