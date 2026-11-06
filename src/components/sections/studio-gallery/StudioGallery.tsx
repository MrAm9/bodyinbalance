import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WarmGlows } from "@/components/ui/WarmGlows";
import { homeStudio } from "@/data/home";
import { typograph } from "@/lib/typograph";
import { cn } from "@/lib/utils";

// Layout per photo id keeps the collage asymmetric: one wide shot, one tall shot, two smaller details
const photoLayout = {
  towels: {
    frame: "col-span-2 aspect-4/3 lg:col-span-7",
    sizes: "(min-width: 1024px) 55vw, 100vw",
  },
  room: {
    frame: "col-span-2 aspect-3/4 sm:col-span-1 lg:col-span-4",
    sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw",
  },
  sofa: {
    frame: "aspect-4/3 lg:col-span-5 lg:self-end",
    sizes: "(min-width: 1024px) 40vw, 50vw",
  },
  oil: {
    frame: "aspect-3/4 lg:col-span-3 lg:self-end",
    sizes: "(min-width: 1024px) 22vw, 50vw",
  },
} satisfies Record<
  (typeof homeStudio.photos)[number]["id"],
  { frame: string; sizes: string }
>;

export function StudioGallery() {
  return (
    <section
      aria-labelledby="studio-title"
      className="relative isolate overflow-hidden bg-night py-24 text-cream sm:py-32"
    >
      <WarmGlows />
      <Reveal
        trigger="scroll"
        className="relative z-raised mx-auto grid max-w-7xl grid-cols-2 items-start gap-5 px-5 lg:grid-cols-12 lg:gap-8 lg:px-10"
      >
        <div className="col-span-2 mb-8 lg:col-span-5 lg:mb-0 lg:pr-8">
          <SectionHeading
            id="studio-title"
            eyebrow={homeStudio.eyebrow}
            title={homeStudio.title}
            tone="dark"
          />
          <p
            data-reveal
            className="mt-6 max-w-md leading-relaxed text-cream-muted"
          >
            {typograph(homeStudio.lead)}
          </p>
        </div>

        {homeStudio.photos.map((photo) => {
          const layout = photoLayout[photo.id];
          return (
            <div
              key={photo.id}
              className={cn(
                "relative overflow-hidden rounded-md",
                layout.frame,
              )}
            >
              <Image
                data-reveal="photo"
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes={layout.sizes}
                className="size-full object-cover"
              />
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
