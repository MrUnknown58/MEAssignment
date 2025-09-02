interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
