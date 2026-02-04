import {
  Bus,
  Hotel,
  Coffee,
  MapPin
} from "lucide-react";

interface InclusionItem {
  label: string;
  icon: React.ReactNode;
}

export default function PackageInclusionsStrip() {
  const inclusions: InclusionItem[] = [
    {
      label: "Transfer Included",
      icon: <Bus className="w-5 h-5 text-gray-500" />,
    },
    {
      label: "Stay Included",
      icon: <Hotel className="w-5 h-5 text-gray-500" />,
    },
    {
      label: "Breakfast Included",
      icon: <Coffee className="w-5 h-5 text-gray-500" />,
    },
    {
      label: "Sightseeing Included",
      icon: <MapPin className="w-5 h-5 text-gray-500" />,
    },
  ];

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP BORDER */}
        <div className="border-t border-gray-200 pt-6">

          <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">

            {inclusions.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </div>
            ))}

          </div>

        </div>

        {/* BOTTOM BORDER */}
        <div className="border-b border-gray-200 mt-6" />

      </div>
    </section>
  );
}
