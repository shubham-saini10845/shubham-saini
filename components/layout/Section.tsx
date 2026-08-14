import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 sm:mb-16">
      <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">
        <span className="font-mono text-[11px] text-muted-foreground">
          {index}
        </span>
        <span className="h-px w-8 bg-primary/50" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
