"use client";
import Image from "next/image";

export default function PersonaOrgSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden flex justify-center">
          <Image
            src="/persona-org.png"
            alt="Organization persona illustration"
            width={600}
            height={700}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
