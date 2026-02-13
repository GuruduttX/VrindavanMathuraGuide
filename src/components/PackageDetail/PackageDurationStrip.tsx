interface DurationItem {
  id : string
  days: number;
  place: string;
}

interface PackageDurationStripProps {
  duration: string; 
  breakdown: DurationItem[];
}

export default function PackageDurationStrip({
  duration,
  breakdown,
}: PackageDurationStripProps) {
  return (
    <section className=" px-6">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">

          {/* LEFT DURATION PILL */}
          <span
            className="
              inline-flex items-center rounded-full
              bg-orange-600 text-white
              px-5 py-2 text-sm font-semibold
              shrink-0
            "
          >
            {duration}
          </span>

          {/* RIGHT BREAKDOWN */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {breakdown.map((item, index) => (
              <div key={index} className="flex items-center gap-3 md:gap-4">

                {/* Divider */}
                {index !== 0 && (
                  <>
                    {/* Desktop divider (unchanged) */}
                    <span className="hidden md:block h-8 w-px bg-gray-300" />

                    {/* Mobile divider (dot) */}
                    <span className="md:hidden w-1.5 h-1.5 rounded-full bg-gray-300" />
                  </>
                )}

                {/* Day Count */}
                <span
                  className="
                    text-2xl md:text-3xl lg:text-4xl
                    font-bold text-gray-300
                    leading-none
                  "
                >
                  {item?.days}
                </span>

                {/* Text */}
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] md:text-xs text-gray-500">
                    Days in
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {item.place}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
