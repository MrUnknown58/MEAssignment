import Head from "next/head";
import Hero from "../components/Hero";
import ClientLogosSection from "../components/ClientLogosSection";
import Features from "../components/Features";
import WhyMobius from "../components/WhyMobius";
import Founder2 from "../components/Founder2";
import CandidateOrgSection from "../components/CandidateOrgSection";
import PrivacySection from "../components/PrivacySection";
import MemorySection from "../components/MemorySection";
import CollaborationSection from "../components/CollaborationSection";
import MetricsSection from "../components/MetricsSection";
import FeaturesSuiteSection from "../components/FeaturesSuiteSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ComplianceSection from "../components/ComplianceSection";
import CTASection from "../components/CTASection";
import SiteFooter from "../components/SiteFooter";
import Founder1 from "../components/Founder1";
import VideoTestimonialsSection from "../components/VideoTestimonialsSection";

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
        <WhyMobius />
        <Founder1 />
        <VideoTestimonialsSection />
        <Founder2 />
        <CandidateOrgSection />
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
