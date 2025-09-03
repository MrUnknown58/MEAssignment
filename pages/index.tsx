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
import TestimonialsSection from "../components/TestimonialsSection";
import ComplianceSection from "../components/ComplianceSection";
import CTASection from "../components/CTASection";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI-Powered Job Search & Career Coaching | Mobius Engine</title>
        <meta
          name="description"
          content="Transform your career with AI-driven job search automation, resume optimization, and expert coaching. Mobius Engine delivers personalized AI solutions for professional success."
        />
      </Head>
      <main className="min-h-screen pt-16">
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
        <TestimonialsSection />
        <CTASection />
        <SiteFooter />
      </main>
    </>
  );
}
