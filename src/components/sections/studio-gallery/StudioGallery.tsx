import { PhotoGallery } from "@/components/ui/PhotoGallery";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WarmGlows } from "@/components/ui/WarmGlows";
import { homeStudio } from "@/data/home";
import { ru } from "@/i18n/ru";
import { typograph } from "@/lib/typograph";

export function StudioGallery() {
  return (
    <section
      aria-labelledby="studio-title"
      className="relative isolate overflow-hidden bg-night py-24 text-cream sm:py-32"
    >
      <WarmGlows />
      <Reveal
        trigger="scroll"
        className="relative z-raised mx-auto max-w-6xl px-5 lg:px-10"
      >
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            id="studio-title"
            eyebrow={homeStudio.eyebrow}
            title={homeStudio.title}
            tone="dark"
          />
          <p data-reveal className="max-w-md leading-relaxed text-cream-muted">
            {typograph(homeStudio.lead)}
          </p>
        </div>
        <PhotoGallery photos={homeStudio.photos} labels={ru.gallery} />
      </Reveal>
    </section>
  );
}
