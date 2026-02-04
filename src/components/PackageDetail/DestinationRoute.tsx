"use client";

import { useState } from "react";
import { ChevronDown, Route } from "lucide-react";

const routes = [
    "Reykjavík → Akureyri",
    "Reykjavík → Akureyri → Reykjavík",
    "Reykjavík → Vik → Höfn",
    "Reykjavík → Golden Circle → Reykjavík",
];

export default function DestinationRoute() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(routes[0]);

    return (
        <div className="w-full max-w-3xl p-5">
            {/* Label */}
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Destination Routes
            </h3>

            {/* Selected Route */}
            <button
                onClick={() => setOpen(!open)}
                className={`group relative w-full flex items-center justify-between rounded-2xl border px-6 py-5 text-left transition-all duration-300 cursor-pointer
        ${open
                        ? "border-orange-500 bg-orange-50 shadow-orange-200 shadow-lg"
                        : "border-gray-200 bg-white hover:border-orange-300"
                    }`}
            >
                {/* Left */}
                <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-md">
                        <Route size={18} />
                    </span>

                    <div>
                        <p className="text-sm text-gray-500">Selected Route</p>
                        <p className="text-base font-semibold text-orange-600">
                            {selected}
                        </p>
                    </div>
                </div>

                {/* Arrow */}
                <ChevronDown
                    className={`h-6 w-6 text-orange-500 transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Dropdown */}
            <div
                className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 mt-4" : "max-h-0"
                    }`}
            >
                <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-3 shadow-inner">
                    {routes.map((route, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setSelected(route);
                                setOpen(false);
                            }}
                            className={`group flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left transition-all cursor-pointer
              ${selected === route
                                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                                    : "hover:bg-orange-100"
                                }`}
                        >
                            {/* Dot */}
                            <span
                                className={`h-3 w-3 rounded-full ${selected === route ? "bg-white" : "bg-orange-400"
                                    }`}
                            />

                            {/* Route */}
                            <span className="font-medium tracking-wide">
                                {route}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
