"use client";

import { useState } from "react";
import {
    Flame,
    Landmark,
    TowerControlIcon,
    Building2,
    Palmtree,
    Mountain,
    Sailboat,
    Castle,
    Trees,
    Snowflake,
    ChevronRight,
} from "lucide-react";

const categories = [
    { id: "explore", label: "Explore", icon: Flame },
    { id: "europe", label: "Europe", icon: Landmark },
    { id: "japan", label: "Japan", icon: TowerControlIcon },
    { id: "singapore", label: "Singapore", icon: Building2, trending: true },
    { id: "maldives", label: "Maldives", icon: Palmtree },
    { id: "north-east", label: "North East India", icon: Mountain, trending: true },
    { id: "dubai", label: "Dubai", icon: Sailboat },
    { id: "thailand", label: "Thailand", icon: Castle },
    { id: "vietnam", label: "Vietnam", icon: Trees },
    { id: "norway", label: "Norway", icon: Snowflake },
];

export default function DestinationFilter() {
    const [active, setActive] = useState("explore");

    return (
        <div className="relative w-full border-b bg-white">
            <div className="flex items-center gap-6 overflow-x-auto px-4 py-3 scrollbar-hide">
                {categories.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className="relative flex min-w-[90px] flex-col items-center gap-1 text-sm transition"
                        >
                            {/* Trending Badge */}
                            {item.trending && (
                                <span className="absolute -top-2 right-0 rounded bg-orange-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                                    Trending
                                </span>
                            )}

                            <Icon
                                className={`h-6 w-6 ${isActive ? "text-orange-500" : "text-gray-500"
                                    }`}
                            />

                            <span
                                className={`whitespace-nowrap font-medium ${isActive ? "text-orange-500" : "text-gray-600"
                                    }`}
                            >
                                {item.label}
                            </span>

                            {/* Active underline */}
                            {isActive && (
                                <span className="mt-1 h-0.5 w-8 rounded bg-orange-500" />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Right Arrow */}
            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-orange-50">
                <ChevronRight className="h-5 w-5 text-orange-500" />
            </button>
        </div>
    );
}
