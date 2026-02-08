"use client";

import React from "react";

export type ItineraryItem = {
  id: string;
  day: string;
  title: string;
  description: string;
};

interface CMSItinerarySectionProps {
  itinerary: ItineraryItem[];
  setItinerary: React.Dispatch<React.SetStateAction<ItineraryItem[]>>;
}

const CMSItinerarySection = ({
  itinerary,
  setItinerary,
}: CMSItinerarySectionProps) => {

  /* ADD NEW DAY */
  const addDay = () => {
    setItinerary((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        day: `Day ${prev.length + 1}`,
        title: "",
        description: "",
      },
    ]);
  };

  /* UPDATE FIELD */
  const updateItem = (
    id: string,
    field: keyof Omit<ItineraryItem, "id">,
    value: string
  ) => {
    setItinerary((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  /* REMOVE DAY */
  const removeDay = (id: string) => {
    setItinerary((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">
          📍 Tour Itinerary
        </h3>

        <button
          type="button"
          onClick={addDay}
          className="px-4 py-2 rounded-lg bg-sky-500 text-white
          hover:bg-sky-600 transition"
        >
          + Add Day
        </button>
      </div>

      {/* ITINERARY LIST */}
      {itinerary.map((item, index) => (
        <div
          key={item.id}
          className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-4"
        >
          {/* DAY HEADER */}
          <div className="flex justify-between items-center">
            <h4 className="text-white font-medium">
              {item.day}
            </h4>

            <button
              type="button"
              onClick={() => removeDay(item.id)}
              className="text-red-400 hover:text-red-500 text-sm"
            >
              Remove
            </button>
          </div>

          {/* DAY NAME */}
          <input
            value={item.day}
            onChange={(e) =>
              updateItem(item.id, "day", e.target.value)
            }
            placeholder="Day 1 / Day 2"
            className="w-full px-4 py-2 rounded-lg bg-black/30 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500"
          />

          {/* TITLE */}
          <input
            value={item.title}
            onChange={(e) =>
              updateItem(item.id, "title", e.target.value)
            }
            placeholder="Title (e.g. Arrival in Vrindavan)"
            className="w-full px-4 py-2 rounded-lg bg-black/30 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500"
          />

          {/* DESCRIPTION */}
          <textarea
            rows={4}
            value={item.description}
            onChange={(e) =>
              updateItem(item.id, "description", e.target.value)
            }
            placeholder="Describe the day's activities..."
            className="w-full px-4 py-3 rounded-lg bg-black/30 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 resize-none"
          />
        </div>
      ))}

      {itinerary.length === 0 && (
        <p className="text-white/40 text-sm">
          No itinerary added yet. Click “Add Day”.
        </p>
      )}
    </div>
  );
};

export default CMSItinerarySection;
