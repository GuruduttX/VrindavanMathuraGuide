interface DurationItem {
  days: number;
  location: string;
}

interface PackageDurationStripProps {
  duration: string; // e.g. "2D/1N"
  breakdown: DurationItem[];
}

export default function PackageDurationStrip({
  duration,
  breakdown,
}: PackageDurationStripProps) {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-6">

          {/* LEFT DURATION PILL */}
          <span className="inline-flex items-center rounded-full
            bg-orange-600 text-white
            px-4 py-1.5 text-sm font-semibold">
            {duration}
          </span>

          {/* RIGHT BREAKDOWN */}
          <div className="flex items-center gap-6">
            {breakdown.map((item, index) => (
              <div key={index} className="flex items-center gap-4">

                {/* Divider */}
                {index !== 0 && (
                  <span className="h-8 w-px bg-gray-300" />
                )}

                {/* Day Count */}
                <span className="text-3xl font-bold text-gray-300 leading-none">
                  {item.days}
                </span>

                {/* Text */}
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-gray-500">
                    Days in
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {item.location}
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
