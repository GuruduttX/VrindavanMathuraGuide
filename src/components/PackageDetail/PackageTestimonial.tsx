"use client";

import { useRef } from "react";
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";

/* ------------------ DATA ------------------ */
const testimonials = [
    {
        id: 1,
        name: "Priya Mehta",
        initials: "P",
        location: "Mumbai",
        source: "Trip",
        verified: true,
        rating: 5,
        date: "Dec 2026",
        title: "Vrindavan Darshan",
        review:
            "My parents are senior citizens and support was excellent. Smooth driving, clear timing plan, and very helpful at temple parking points. Felt safe throughout.",
    },
    {
        id: 2,
        name: "Santiago R.",
        initials: "S",
        location: "Spain",
        source: "Google",
        verified: true,
        rating: 5,
        date: "Mar 2026",
        title: "Braj Holi Tour",
        review:
            "Holi planning was spot on — Barsana and Nandgaon handled with safer movement and smart timing. Great guidance for first-time visitors.",
    },
    {
        id: 3,
        name: "Ankit Sharma",
        initials: "A",
        location: "Delhi",
        source: "Trip",
        verified: true,
        rating: 4,
        date: "Jan 2026",
        title: "Mathura Local Tour",
        review:
            "Driver was knowledgeable and darshan planning saved us a lot of time. Overall a smooth and peaceful experience.",
    },
];

/* ------------------ COMPONENT ------------------ */
export default function PackageTestimonials({PackageData} : any) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "left" | "right") => {
        if (!sliderRef.current) return;
        const cardWidth = 440;
        sliderRef.current.scrollBy({
            left: dir === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">

                {/* LEFT – TRUST PANEL */}
                <div className="rounded-3xl bg-white p-6 shadow-xl border border-orange-100">
                    <p className="text-sm font-semibold text-orange-600">Guest Reviews</p>
                    <h3 className="text-4xl font-bold mt-2">4.8</h3>
                    <p className="text-sm text-gray-500">Based on 180+ trips</p>

                    <div className="mt-6 space-y-3">
                        {[84, 12, 3, 1, 0].map((v, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs">
                                <span className="w-4">{5 - i}</span>
                                <div className="h-2 flex-1 rounded-full bg-gray-200">
                                    <div
                                        className="h-2 rounded-full bg-orange-500"
                                        style={{ width: `${v}%` }}
                                    />
                                </div>
                                <span className="w-8 text-right">{v}%</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <span className="rounded-full border px-4 py-2 text-xs font-medium text-orange-700">
                            ✔ Verified Trips
                        </span>
                        <span className="rounded-full border px-4 py-2 text-xs font-medium text-orange-700">
                            ✔ Private Tours
                        </span>
                        <span className="rounded-full border px-4 py-2 text-xs font-medium text-orange-700">
                            ✔ Local Drivers
                        </span>
                    </div>
                </div>

                {/* RIGHT – CAROUSEL */}
                <div className="lg:col-span-2">
                    <p className="text-sm font-semibold text-orange-600 tracking-wider">
                        CLIENT REVIEWS
                    </p>
                    <h2 className="text-3xl font-bold mt-2 mb-6">
                        Real feedback from guests
                    </h2>

                    <div className="relative">
                        {/* Slider */}
                        <div
                            ref={sliderRef}
                            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                        >
                            {PackageData.testimonials.map((t : any) => (
                                <div
                                    key={t.id}
                                    className="snap-start shrink-0 w-[420px] rounded-2xl bg-white/90 border border-orange-100 shadow-lg p-6"
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex gap-3">
                                            <div className="h-12 w-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold">
                                                {/* {t.initials} */}
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <p className="font-semibold text-gray-900">
                                                        {t.name}
                                                    </p>
                                                    {t.verified && (
                                                        <span className="flex items-center gap-1 text-xs text-orange-600">
                                                            <BadgeCheck className="h-4 w-4" />
                                                            Verified
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    {/* {t.location} • {t.title} • {t.date} */}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
                                            {/* {t.source} */}
                                        </span>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-1 mt-4">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Review */}
                                    <p className="mt-4 text-sm leading-relaxed text-gray-700">
                                        “{t.description}”
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Controls */}
                        <button
                            onClick={() => scroll("left")}
                            className="absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md border flex items-center justify-center hover:bg-orange-50"
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md border flex items-center justify-center hover:bg-orange-50"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
