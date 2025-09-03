"use client";
import Image from "next/image";

export default function CandidateOrgSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1491596755125-f4327182e33e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhpZXJhcmNoeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Organization persona illustration"
            width={400}
            height={700}
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
