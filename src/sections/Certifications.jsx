import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Award, Calendar, Building2, ZoomIn } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { RevealGroup, RevealItem } from "../components/shared/Reveal";

// ── Certificate Card ──────────────────────────────────────────────
function CertCard({ cert, index, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.52,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 3) * 0.09,
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => onClick(cert)}
      className="glow-card noise-overlay overflow-hidden cursor-pointer group"
      role="button"
      tabIndex={0}
      aria-label={`View certificate: ${cert.title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick(cert)}
    >
      {/* ── Image ── */}
      <div className="relative overflow-hidden" style={{ height: "158px" }}>
        <img
          src={cert.image}
          alt={`${cert.title} certificate preview`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        {/* Issuer chip */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="term-chip"
            style={{ fontSize: "0.57rem", padding: "0.18rem 0.5rem" }}
          >
            <span className="prompt">$</span>{" "}
            <span className="val">{cert.issuer}</span>
          </span>
        </div>

        {/* Hover zoom hint */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.18 }}
        >
          <div
            className="flex items-center gap-1.5 t-mono py-1.5 px-3 rounded-lg"
            style={{
              fontSize: "0.65rem",
              backgroundColor: "rgba(0,0,0,0.78)",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}
          >
            <ZoomIn size={11} /> preview
          </div>
        </motion.div>
      </div>

      {/* ── Card body ── */}
      <div className="p-4">
        <div className="flex items-start gap-2 mb-3">
          <Award
            size={13}
            style={{ color: "var(--text-muted)", marginTop: "2px", flexShrink: 0 }}
          />
          <h3
            className="t-small font-semibold leading-snug"
            style={{ color: "var(--text)" }}
          >
            {cert.title}
          </h3>
        </div>

        <div
          className="flex items-center gap-1.5 t-mono"
          style={{ fontSize: "0.6rem", color: "var(--text-subtle)" }}
        >
          <Calendar size={10} />
          <span>{cert.date}</span>
        </div>
      </div>
    </motion.article>
  );
}

// ── Lightbox Modal ────────────────────────────────────────────────
function CertModal({ cert, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!cert) return;
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [cert, onClose]);

  return createPortal(
    <AnimatePresence>
      {cert && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cert-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200]"
            style={{
              backgroundColor: "rgba(0,0,0,0.9)",
              backdropFilter: "blur(8px)",
            }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog panel */}
          <motion.div
            key="cert-modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.27, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={cert.title}
          >
            <div
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                id="cert-modal-close"
                onClick={onClose}
                className="absolute top-3 right-3 z-10 p-2 rounded-lg transition-opacity hover:opacity-60 cursor-pointer"
                style={{
                  backgroundColor: "rgba(0,0,0,0.65)",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                }}
                aria-label="Close certificate preview"
              >
                <X size={14} />
              </button>

              {/* Full certificate image */}
              <div
                className="w-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--surface)",
                  maxHeight: "62vh",
                  overflow: "hidden",
                }}
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} full certificate`}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "62vh" }}
                />
              </div>

              {/* Meta details */}
              <div className="p-5">
                <h2
                  className="t-title mb-3 leading-snug"
                  style={{ color: "var(--text)" }}
                >
                  {cert.title}
                </h2>

                <div className="flex flex-wrap gap-5">
                  <div
                    className="flex items-center gap-2 t-mono"
                    style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}
                  >
                    <Building2 size={12} />
                    <span>{cert.issuer}</span>
                  </div>
                  <div
                    className="flex items-center gap-2 t-mono"
                    style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}
                  >
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

// ── Certifications Section ────────────────────────────────────────
export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        id="certifications"
        className="py-28 px-6"
        style={{ backgroundColor: "var(--surface-2)" }}
        aria-labelledby="certifications-heading"
      >
        <div className="max-w-5xl mx-auto">
          <RevealGroup className="mb-12">
            <RevealItem>
              <p className="section-label mb-3">05 / Certifications</p>
            </RevealItem>
            <RevealItem>
              <h2
                id="certifications-heading"
                className="t-headline mb-2"
                style={{ color: "var(--text)" }}
              >
                $ ls -la certs/
              </h2>
            </RevealItem>
            <RevealItem>
              <p
                className="t-small t-mono"
                style={{ color: "var(--text-subtle)" }}
              >
                // Click any card to preview the full certificate.
              </p>
            </RevealItem>
          </RevealGroup>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.certifications.map((cert, i) => (
              <CertCard
                key={cert.title}
                cert={cert}
                index={i}
                onClick={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      <CertModal cert={selected} onClose={() => setSelected(null)} />
    </>
  );
}
