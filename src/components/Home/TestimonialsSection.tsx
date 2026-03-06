"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  { name: "Rahul Khanna",         city: "Delhi",       initials: "RK", text: "We booked a Mathura Vrindavan tour package for our family and the experience was very smooth. The pickup was on time, temple visits were well planned, and we never felt rushed. Everything felt organised from start to finish." },
  { name: "Lakshmi Narayanan",    city: "Bengaluru",   initials: "LN", text: "Travelling from South India, we were worried about managing temple queues and local transport. The team handled everything properly and guided us on darshan timing. The journey felt comfortable and peaceful." },
  { name: "Pooja Verma",          city: "Lucknow",     initials: "PV", text: "The itinerary was practical and not overloaded. We could visit the temples calmly and still have enough rest during the day. For families travelling with elders, the planning made a big difference." },
  { name: "Amitabh Sengupta",     city: "Kolkata",     initials: "AS", text: "Our driver knew the local routes very well, which helped us avoid unnecessary traffic and delays. Temple darshan was arranged during manageable hours. Overall, the trip felt smooth and well coordinated." },
  { name: "Karthik Subramanian",  city: "Chennai",     initials: "KS", text: "This was my first visit to Braj, and I was unsure how to cover all the important places. The itinerary helped us visit Mathura, Vrindavan, and nearby temples in a comfortable way without confusion." },
  { name: "Neha Arora",           city: "Chandigarh",  initials: "NA", text: "The best part of the tour was the timing of the temple visits. We reached major temples early and avoided heavy queues. That small planning detail made the experience much more peaceful." },
  { name: "Harsh Vardhan Singh",  city: "Patna",       initials: "HV", text: "I travelled with my parents, so comfort was important. The schedule was balanced and we never felt physically exhausted. The driver was patient and helpful throughout the journey." },
  { name: "Meenakshi Iyer",       city: "Coimbatore",  initials: "MI", text: "The tour felt structured but not rushed. We had enough time at each temple to experience the atmosphere. The evening visit to Prem Mandir was especially memorable." },
  { name: "Ritesh Jain",          city: "Indore",      initials: "RJ", text: "Everything from hotel coordination to temple visits was handled smoothly. Instead of worrying about logistics, we could simply focus on the spiritual experience." },
  { name: "Ananya Banerjee",      city: "Durgapur",    initials: "AB", text: "I appreciated how calmly the entire trip was managed. Even during crowded temple hours, the guidance helped us move smoothly. It made our first Braj trip very comfortable." },
  { name: "Sandeep Rao",          city: "Hyderabad",   initials: "SR", text: "Covering multiple temples in one trip can easily become chaotic, but the planning kept the journey organised. Travel routes and darshan timing were handled thoughtfully." },
  { name: "Kavya Sharma",         city: "Jaipur",      initials: "KS", text: "The overall experience felt personal rather than commercial. The team understood what travellers actually need during a pilgrimage trip. It made our Mathura Vrindavan visit peaceful and memorable." },
];

// Split into two rows for the marquee
const row1 = testimonials.slice(0, 6);
const row2 = testimonials.slice(6, 12);

function Avatar({ initials, size = 44 }: { initials: string; size?: number }) {
  const hues = [16, 24, 32, 20, 28, 36];
  const idx = (initials.charCodeAt(0) + initials.charCodeAt(1)) % hues.length;
  const hue = hues[idx];
  return (
    <div
      style={{
        width: size, height: size,
        borderRadius: "50%",
        background: `linear-gradient(135deg, hsl(${hue},90%,60%), hsl(${hue + 14},85%,50%))`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        boxShadow: `0 2px 10px hsla(${hue},80%,50%,0.35)`,
        fontSize: size * 0.36,
        fontWeight: 600,
        color: "#fff",
        fontFamily: "'Cinzel', serif",
        letterSpacing: "0.04em",
        userSelect: "none",
      }}
    >
      {initials}
    </div>
  );
}

function StarRow() {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f97316" stroke="none">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div style={{
      width: 300,
      flexShrink: 0,
      background: "#fff",
      borderRadius: 16,
      padding: "22px 22px 20px",
      border: "1px solid rgba(249,115,22,0.12)",
      boxShadow: "0 2px 20px rgba(249,115,22,0.07), 0 1px 4px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column" as const,
      gap: 0,
      transition: "box-shadow 0.2s",
      position: "relative" as const,
      overflow: "hidden",
    }}>
      {/* Top-right quote mark */}
      <span style={{
        position: "absolute", top: 14, right: 18,
        fontSize: 52, lineHeight: 1,
        color: "rgba(249,115,22,0.08)",
        fontFamily: "Georgia, serif",
        fontWeight: 700,
        pointerEvents: "none",
        userSelect: "none",
      }}>"</span>

      <StarRow />

      <p style={{
        fontFamily: "'Crimson Pro', Georgia, serif",
        fontSize: "0.97rem",
        lineHeight: 1.72,
        color: "#4a3728",
        marginBottom: 18,
        flex: 1,
      }}>
        {t.text}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <Avatar initials={t.initials} />
        <div>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.78rem",
            fontWeight: 500,
            color: "#c2440a",
            letterSpacing: "0.04em",
            lineHeight: 1.3,
          }}>{t.name}</div>
          <div style={{
            fontFamily: "'Crimson Pro', serif",
            fontStyle: "italic",
            fontSize: "0.78rem",
            color: "rgba(194,68,10,0.5)",
            marginTop: 1,
          }}>{t.city}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof testimonials; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      {/* Fade masks */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
        background: "linear-gradient(to right, #fff7f0, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
        background: "linear-gradient(to left, #fff7f0, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      <div style={{
        display: "flex",
        gap: 20,
        width: "max-content",
        animation: `marquee${reverse ? "R" : "L"} 40s linear infinite`,
        paddingBottom: 4,
      }}>
        {doubled.map((t, i) => <Card key={i} t={t} />)}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        @keyframes marqueeL {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeR {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ts-fadeup {
          opacity: 0; transform: translateY(22px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ts-fadeup.visible {
          opacity: 1; transform: translateY(0);
        }
        .ts-fadeup.d1 { transition-delay: 0.1s; }
        .ts-fadeup.d2 { transition-delay: 0.2s; }
        .ts-fadeup.d3 { transition-delay: 0.32s; }
        .ts-fadeup.d4 { transition-delay: 0.44s; }
      `}</style>

      <section
        ref={ref}
        style={{
          background: "#fff7f0",
          padding: "80px 0 90px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Soft bg glow */}
        <div style={{
          position: "absolute", top: "10%", left: "50%",
          transform: "translateX(-50%)",
          width: 700, height: 300,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52, padding: "0 20px" }}>

          {/* Eyebrow */}
          <div
            className={`ts-fadeup d1${visible ? " visible" : ""}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 14,
            }}
          >
            <div style={{ width: 28, height: 1, background: "rgba(249,115,22,0.4)" }} />
            <span style={{
              fontFamily: "'Crimson Pro', serif",
              fontStyle: "italic",
              fontSize: "0.85rem",
              letterSpacing: "0.18em",
              color: "#f97316",
              textTransform: "uppercase" as const,
            }}>Pilgrim Experiences</span>
            <div style={{ width: 28, height: 1, background: "rgba(249,115,22,0.4)" }} />
          </div>

          <h2
            className={`ts-fadeup d2${visible ? " visible" : ""}`}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 500,
              color: "#c2440a",
              letterSpacing: "0.06em",
              marginBottom: 10,
              lineHeight: 1.2,
            }}
          >
            What Our Devotees Say
          </h2>

          <p
            className={`ts-fadeup d3${visible ? " visible" : ""}`}
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontStyle: "italic",
              fontSize: "1.05rem",
              color: "rgba(74,55,40,0.55)",
              letterSpacing: "0.06em",
            }}
          >
            श्री कृष्ण की कृपा से हर यात्रा यादगार बनती है
          </p>

          {/* Animated underline */}
          <div
            className={`ts-fadeup d4${visible ? " visible" : ""}`}
            style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 18 }}
          >
            <div style={{
              height: 2, borderRadius: 2,
              background: "linear-gradient(90deg, transparent, #f97316)",
              width: visible ? 48 : 0,
              transition: "width 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s",
            }} />
            <div style={{
              width: 7, height: 7, borderRadius: 1,
              background: "#f97316",
              transform: "rotate(45deg)",
              opacity: 0.7,
            }} />
            <div style={{
              height: 2, borderRadius: 2,
              background: "linear-gradient(90deg, #f97316, transparent)",
              width: visible ? 48 : 0,
              transition: "width 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s",
            }} />
          </div>
        </div>

        {/* Marquee rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <MarqueeRow items={row1} reverse={false} />
          <MarqueeRow items={row2} reverse={true} />
        </div>

        {/* Bottom count strip */}
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          gap: 32, marginTop: 52, padding: "0 20px",
          flexWrap: "wrap" as const,
        }}>
          {[
            { num: "1200+", label: "Happy Pilgrims" },
            { num: "4.9★",  label: "Average Rating"  },
            { num: "100%",  label: "Organised Trips"  },
          ].map((s, i) => (
            <div
              key={i}
              className={`ts-fadeup${visible ? " visible" : ""}`}
              style={{ textAlign: "center", transitionDelay: `${0.5 + i * 0.12}s` }}
            >
              <div style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1.65rem",
                fontWeight: 600,
                color: "#f97316",
                lineHeight: 1,
                marginBottom: 5,
              }}>{s.num}</div>
              <div style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: "rgba(74,55,40,0.45)",
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}