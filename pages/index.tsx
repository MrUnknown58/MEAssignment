import Head from "next/head";
import Hero from "../components/Hero";
import ClientLogosSection from "../components/ClientLogosSection";
import Features from "../components/Features";
import WhyPersonalAI from "../components/WhyPersonalAI";
import PersonasSection from "../components/PersonasSection";
import PersonaOrgSection from "../components/PersonaOrgSection";
import PrivacySection from "../components/PrivacySection";
import MemorySection from "../components/MemorySection";
import CollaborationSection from "../components/CollaborationSection";
import MetricsSection from "../components/MetricsSection";
import FeaturesSuiteSection from "../components/FeaturesSuiteSection";
import ComplianceSection from "../components/ComplianceSection";
import CTASection from "../components/CTASection";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Enterprise AI Personas for Secure Workforce Scaling | Personal AI
        </title>
        <meta
          name="description"
          content="Train and deploy AI teammates for 10x performance at 10% of the cost. Personal AI creates an evolving AI workforce trained on proprietary knowledge."
        />
      </Head>
      <main className="min-h-screen">
        <Hero />
        <ClientLogosSection />
        <Features />
        <WhyPersonalAI />
        <PersonasSection />
        <PersonaOrgSection />
        <PrivacySection />
        <MemorySection />
        <CollaborationSection />
        <MetricsSection />
        <FeaturesSuiteSection />
        <ComplianceSection />
        <CTASection />
        <SiteFooter />
      </main>
    </>
  );
}
