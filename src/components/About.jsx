// src/components/WhoAreWeSection.jsx

function GalleryCard({
  img,
  title,
  subtitle,
  large = false,
  grayscale = false,
  className = "",
}) {
  return (
    <div className={className}>
      <div
        className={[
          "w-full overflow-hidden bg-neutral-200",
          // large ? "aspect-[4/5] md:aspect-[4/5]" : "aspect-[16/9]",
          grayscale ? "grayscale" : "",
        ].join(" ")}
      >
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="">
        <div className="text-[#3B4421] uppercase tracking-wide leading-none subtitle mt-3">
          {title}
        </div>
        <div className="mt-0 text-black uppercase tracking-wide text-[14px] text">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export default function WhoAreWeSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-10">
        {/* Title (top-right) */}
        <h2 className="title text-right text-[#3B4421] font-extrabold uppercase leading-[0.95] tracking-wide text-[30px] md:text-[20px] lg:text-[50px]">
          WHO ARE WE
        </h2>

        {/* Paragraph */}
        <p className="mx-auto mt-3.5 lg:ml-52 text-black text-[20px] md:text-[10px] lg:text-[20px] leading-relaxed text ">
          Hack4Brahma is Northeast India's biggest hackathon. Season 1 took
          place in Guwahati, Assam, in October 2025. It was the region's first
          hackathon recognized by Major League Hacking (MLH). The event received
          support from DPIIT Startup India and Sayuj (STPI). Over 4,000+
          developers registered from across India. It earned widespread praise
          and marked a major success. Season 2 returns even bigger on September
          26-27, 2026. This edition will further boost Northeast India's tech
          ecosystem. Northeast Rising!
        </p>

        {/* Gallery layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-10 md:gap-y-14 items-start">
          {/* Left */}
          <GalleryCard
            className="md:col-span-4 md:row-start-1"
            img="../Aboutl.png"
            title="HACK DAYS NAGPUR"
            subtitle="EVENT"
          />

          {/* Middle (large, taller, spans 2 rows) */}
          <GalleryCard
            className="md:col-span-4 md:col-start-5 md:row-start-1 md:row-span-2"
            img="../Aboutm.png"
            title="HACK 4 BRAHMA."
            subtitle="HACKATHON"
            large
            grayscale
          />

          {/* Right */}
          <GalleryCard
            className="md:col-span-4 md:col-start-9 md:row-start-1"
            img="../Aboutr.png"
            title="WORKSHOP"
            subtitle="HACKATHON"
          />

          {/* Button (bottom-right on desktop, centered on mobile) */}
          <div className="md:col-span-4 md:col-start-9 md:row-start-2 md:self-end flex justify-center md:justify-end">
            <a
              href="#gallery"
              className="bg-[#3B4421] text-white uppercase tracking-wider text
                 px-6 sm:px-8 lg:px-10 
                 py-4 sm:py-5 
                 text-[14px] sm:text-[15px] lg:text-[16px] 
                 inline-flex items-center justify-center
                 [clip-path:polygon(18px_0,100%_0,100%_100%,0_100%,0_18px)]"
            >
              VIEW&nbsp;&nbsp;OUR&nbsp;GALLERY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
