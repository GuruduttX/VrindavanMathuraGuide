"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    title: "VIP Darshan & Puja",
    points: ["Priority Temple Access", "Guided Worship", "Personalized Rituals"],
  },
  {
    id: 2,
    title: "Luxury Transport",
    points: ["Chauffeur-driven Comfort", "Local Tours", "Airport Transfers", "Sedan / SUV / MUV / Urbania"],
  },
  {
    id: 3,
    title: "Certified Spiritual Guides",
    points: ["Expert Knowledge of Local History", "Mythology & Sacred Sites", "Personalised Narration"],
  },
  {
    id: 4,
    title: "Traditional Artists & Bhajans",
    points: ["Live Music", "Local Art", "Devotional Experience"],
  },
  {
    id: 5,
    title: "Yamuna Boating",
    points: ["Serene Boat Rides", "Sunset Views", "Yamuna Aarti Experience"],
  },
  {
    id: 6,
    title: "Seva Arrangements",
    points: ["Organise Offerings", "Gau Daan", "Personalised Temple Contribution"],
  },
  {
    id: 7,
    title: "Photo & Videography Services",
    points: ["Hire Professional Photographer", "Videographer for Content Creation / Events"],
  },
];

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s`,
        background: "#fff",
        border: "1px solid rgba(249,115,22,0.15)",
        borderRadius: 16,
        padding: "20px 20px 20px 20px",
        boxShadow: "0 2px 16px rgba(249,115,22,0.07)",
        display: "flex",
        alignItems: "center",
        gap: 20,
      }}
    >
      {/* Left: text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "0.82rem",
          fontWeight: 600,
          color: "#7c2d12",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: 10,
          lineHeight: 1.4,
        }}>
          {s.title}
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 5 }}>
          {s.points.map((pt, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <span style={{
                width: 5, height: 5, borderRadius: "50%",
                background: "#f97316",
                flexShrink: 0, marginTop: 5,
              }} />
              <span style={{
                fontFamily: "'Crimson Pro', Georgia, serif",
                fontSize: "0.9rem",
                color: "#4a3728",
                lineHeight: 1.5,
              }}>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: image placeholder */}
      <div style={{
        width: 90,
        height: 90,
        borderRadius: "50%",
        flexShrink: 0,
        background: "linear-gradient(135deg, #fff0e6, #ffe0cc)",
        border: "2px dashed rgba(249,115,22,0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Replace this div's contents with your <img> tag */}
        {/* 
          REPLACE WITH:
          <img src="/your-image.jpg" alt={s.title}
            style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%" }} />
        */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span style={{
          fontFamily: "sans-serif",
          fontSize: "0.55rem",
          color: "rgba(249,115,22,0.45)",
          letterSpacing: "0.05em",
          textAlign: "center",
          lineHeight: 1.3,
        }}>Add Image</span>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeaderVisible(true); }, { threshold: 0.2 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&display=swap');
        .sv-fade { opacity:0; transform:translateY(18px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .sv-fade.vis { opacity:1; transform:translateY(0); }
        .sv-fade.d1 { transition-delay:0.08s; }
        .sv-fade.d2 { transition-delay:0.18s; }
        .sv-fade.d3 { transition-delay:0.28s; }
        .sv-fade.d4 { transition-delay:0.38s; }
      `}</style>

      <section style={{
        background: "#fff7f0",
        padding: "80px 0 90px",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Soft glow */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 700, height: 350,
          background: "radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Faint OM watermark */}
        <div style={{
          position: "absolute", bottom: "2%", right: "2%",
          fontFamily: "serif", fontSize: "clamp(100px, 16vw, 200px)",
          color: "rgba(249,115,22,0.04)", lineHeight: 1,
          pointerEvents: "none", userSelect: "none", fontWeight: 700,
        }}>ॐ</div>

        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>

          {/* Header */}
          <div ref={headerRef} style={{ textAlign: "center", marginBottom: 52 }}>

            <div className={`sv-fade d1${headerVisible ? " vis" : ""}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 30, height: 1, background: "rgba(249,115,22,0.5)" }} />
              <span style={{
                fontFamily: "'Crimson Pro', serif", fontStyle: "italic",
                fontSize: "0.82rem", letterSpacing: "0.2em",
                color: "#f97316", textTransform: "uppercase",
              }}>What We Offer</span>
              <div style={{ width: 30, height: 1, background: "rgba(249,115,22,0.5)" }} />
            </div>

            <h2 className={`sv-fade d2${headerVisible ? " vis" : ""}`}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 600, color: "#c2440a",
                letterSpacing: "0.06em", lineHeight: 1.2, marginBottom: 10,
              }}>
              Vrindavan Guest Services
            </h2>

            <p className={`sv-fade d3${headerVisible ? " vis" : ""}`}
              style={{
                fontFamily: "'Crimson Pro', serif", fontStyle: "italic",
                fontSize: "1rem", color: "rgba(194,68,10,0.5)",
                letterSpacing: "0.1em", marginBottom: 20,
              }}>
              हर सेवा, श्रद्धा के साथ
            </p>

            {/* Underline */}
            <div className={`sv-fade d4${headerVisible ? " vis" : ""}`}
              style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
              <div style={{
                height: 2, borderRadius: 2,
                background: "linear-gradient(90deg, transparent, #f97316)",
                width: headerVisible ? 52 : 0,
                transition: "width 1s cubic-bezier(0.22,1,0.36,1) 0.4s",
              }} />
              <div style={{ width: 7, height: 7, borderRadius: 1, background: "#f97316", transform: "rotate(45deg)", opacity: 0.8 }} />
              <div style={{
                height: 2, borderRadius: 2,
                background: "linear-gradient(90deg, #f97316, transparent)",
                width: headerVisible ? 52 : 0,
                transition: "width 1s cubic-bezier(0.22,1,0.36,1) 0.4s",
              }} />
            </div>
          </div>

          {/* Cards — single column, full width like the original */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {services.map((s, i) => (
              <ServiceCard key={s.id} s={s} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}