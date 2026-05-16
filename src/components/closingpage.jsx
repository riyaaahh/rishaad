import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Scattered doodles around the page ──
const BG_DOODLES = [
  { char: "♡", top: "6%", left: "4%", size: "1.6rem", rot: "-18deg", color: "#b84a4a" },
  { char: "✦", top: "9%", right: "7%", size: "1rem", rot: "12deg", color: "#c9826b" },
  { char: "~", top: "18%", left: "6%", size: "1.2rem", rot: "-8deg", color: "#9a6a50" },
  { char: "♡", top: "22%", right: "5%", size: "1rem", rot: "20deg", color: "#b84a4a" },
  { char: "✿", top: "38%", left: "3%", size: "1.1rem", rot: "-14deg", color: "#c9826b" },
  { char: "★", top: "42%", right: "4%", size: "0.9rem", rot: "8deg", color: "#9a6a50" },
  { char: "♡", top: "60%", left: "5%", size: "1.4rem", rot: "22deg", color: "#b84a4a" },
  { char: "✦", top: "65%", right: "6%", size: "1rem", rot: "-10deg", color: "#c9826b" },
  { char: "~", top: "80%", left: "4%", size: "1.1rem", rot: "5deg", color: "#9a6a50" },
  { char: "✿", top: "85%", right: "5%", size: "1.2rem", rot: "-20deg", color: "#b84a4a" },
];

// ── Falling petals ──
const PETALS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 7.3) % 90}%`,
  delay: (i * 0.93) % 10,
  duration: (i % 7) + 8,
  char: ["🌸", "✿", "❀", "🌷"][i % 4],
  drift: ((i % 5) - 2) * 18,
  size: (i % 8) + 9,
}));

// ── Promise lines ──
const PROMISES = [
  { text: "These six years with you", style: "body" },
  { text: "have honestly been my favorite part", style: "body" },
  { text: "of life so far.", style: "body" },

  { text: "", style: "gap" },

  { text: "Thank you for staying,", style: "body" },
  { text: "for understanding me,", style: "body" },
  { text: "and for being there", style: "body" },
  { text: "even on my difficult days.", style: "body" },

  { text: "", style: "gap" },

  { text: "Life feels calmer with you in it.", style: "body" },
  { text: "And I hope we keep making", style: "body" },
  { text: "more memories together.", style: "body" },

  { text: "", style: "gap" },

  { text: "You really mean a lot to me, noonu. 🤍", style: "bold" },
];

export default function ClosingPage() {
  const [opened, setOpened] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);

  function handleOpen() {
    setOpened(true);
    revealNext(0);
  }

  function revealNext(idx) {
    if (idx >= PROMISES.length) return;
    setTimeout(() => {
      setLineIndex(idx + 1);
      revealNext(idx + 1);
    }, idx === 0 ? 300 : PROMISES[idx].style === "gap" ? 300 : 750);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ede4d4",
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(160,130,100,0.13) 31px, rgba(160,130,100,0.13) 32px),
          repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(160,130,100,0.06) 31px, rgba(160,130,100,0.06) 32px)
        `,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "56px 18px 64px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Caveat', cursive",
        boxSizing: "border-box",
      }}
    >
      {/* ── PAPER TEXTURE ── */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.045,
        mixBlendMode: "multiply", pointerEvents: "none",
        backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
      }} />

      {/* ── BG DOODLES ── */}
      {BG_DOODLES.map((d, i) => (
        <motion.div
          key={i}
          animate={{ rotate: [-6, 6, -6], scale: [1, 1.1, 1] }}
          transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            fontSize: d.size, color: d.color, opacity: 0.35,
            transform: `rotate(${d.rot})`, pointerEvents: "none",
            top: d.top, left: d.left, right: d.right,
          }}
        >
          {d.char}
        </motion.div>
      ))}

      {/* ── FALLING PETALS ── */}
      {PETALS.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute", top: "-4%", left: p.left,
            fontSize: p.size, pointerEvents: "none", opacity: 0, zIndex: 2,
          }}
          animate={{ y: ["0vh", "108vh"], x: [0, p.drift], rotate: [0, 200], opacity: [0, 0.65, 0.5, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeIn", times: [0, 0.08, 0.85, 1] }}
        >
          {p.char}
        </motion.div>
      ))}

      {/* ══════════════════════════════ MAIN CONTENT ══════════════════════════════ */}
      <motion.div
        className="w-full max-w-[360px] md:max-w-[480px] lg:max-w-[560px]"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 10 }}
      >
        {/* ── HEADER SCRAP ── */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "1.4rem" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                letterSpacing: 6,
                marginBottom: 6,
              }}
            >
              🌸 ♡ ✨ ♡ 🌸
            </div>

            <div
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: "0.95rem",
                color: "#9a5a40",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                opacity: 0.85,
                transform: "rotate(-1deg)",
              }}
            >
              happy 6 years of us ♡
            </div>
          </div>
          <div style={{
            fontFamily: "'Caveat', cursive", fontWeight: 700,
            fontSize: "3rem", color: "#5a2a1a", lineHeight: 1,
            letterSpacing: "0.02em", transform: "rotate(-1.5deg)",
            display: "inline-block", textShadow: "2px 2px 0 rgba(180,100,80,0.12)",
          }}>
            always & forever,
          </div>
          <div style={{
            fontFamily: "'Patrick Hand', cursive", fontSize: "1.1rem",
            color: "#9a5a40", marginTop: 6, transform: "rotate(0.8deg)", letterSpacing: "0.04em",
          }}>
            just for you 🤍
          </div>
          <svg style={{ display: "block", margin: "10px auto 0", width: 160, height: 12 }} viewBox="0 0 160 12" fill="none">
            <path d="M2 8 Q20 2 40 8 Q60 14 80 8 Q100 2 120 8 Q140 14 158 8"
              stroke="#c9826b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* ── WAX SEAL TRIGGER ── */}
        <AnimatePresence>
          {!opened && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 15 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: "1.8rem" }}
            >
              <div style={{
                width: 200, position: "relative",
                background: "#f5ede0", border: "1.5px solid #d4b896",
                borderRadius: "2px 2px 6px 6px", padding: "14px 16px 18px",
                boxShadow: "3px 5px 0 rgba(160,120,80,0.18), 0 8px 24px rgba(0,0,0,0.1)",
              }}>
                {/* Envelope V flap */}
                <div style={{ position: "absolute", top: -1, left: 0, right: 0, height: 52, overflow: "hidden" }}>
                  <svg width="200" height="52" viewBox="0 0 200 52">
                    <path d="M0 0 L100 46 L200 0 Z" fill="#ede0cc" stroke="#d4b896" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Wax seal */}
                <motion.button
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleOpen}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(160,40,40,0.3)",
                      "0 0 20px rgba(160,40,40,0.55)",
                      "0 0 0px rgba(160,40,40,0.3)",
                    ],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  style={{
                    position: "absolute", top: 22, left: "50%",
                    transform: "translateX(-50%)",
                    width: 52, height: 52, borderRadius: "50%",
                    background: "radial-gradient(circle at 36% 34%, #d44, #7a1414)",
                    border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    zIndex: 5,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,200,200,0.2)",
                  }}
                >
                  <div style={{
                    position: "absolute", top: "16%", left: "22%",
                    width: "26%", height: "18%",
                    background: "rgba(255,255,255,0.22)",
                    borderRadius: "50%", filter: "blur(2px)",
                  }} />
                  <span style={{ fontSize: "1.4rem", position: "relative", zIndex: 1, lineHeight: 1 }}>♡</span>
                </motion.button>

                <div style={{ height: 52 }} />
                <p style={{
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: "0.88rem", color: "#9a6a50",
                  textAlign: "center", lineHeight: 1.5, margin: 0,
                }}>
                  tap the seal<br />for the final message ♡
                </p>
              </div>

              <motion.p
                animate={{ opacity: [0.45, 0.9, 0.45] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  fontFamily: "'Caveat', cursive", fontSize: "0.82rem",
                  color: "#9a6a50", letterSpacing: "0.2em",
                  textTransform: "uppercase", textAlign: "center", margin: 0,
                }}
              >

              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PROMISE LETTER CARD ── */}
        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{ marginBottom: "1.4rem", position: "relative" }}
            >
              {/* Washi tape top */}
              <div style={{
                position: "absolute", top: -10, left: "50%",
                transform: "translateX(-50%) rotate(-1.5deg)",
                width: 80, height: 18,
                background: "rgba(255,200,180,0.65)",
                border: "1px solid rgba(220,150,130,0.3)",
                borderRadius: 3, zIndex: 5,
              }} />

              {/* Stickers */}
              {[
                { char: "🌸", top: -14, left: -10, rot: "-18deg" },
                { char: "💗", bottom: -10, right: -10, rot: "14deg" },
                { char: "✨", top: -10, right: -14, rot: "8deg" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.2, type: "spring", bounce: 0.6 }}
                  style={{
                    position: "absolute", fontSize: "1.3rem", zIndex: 6,
                    transform: `rotate(${s.rot})`,
                    top: s.top, left: s.left, right: s.right, bottom: s.bottom,
                  }}
                >
                  {s.char}
                </motion.div>
              ))}

              {/* Paper card */}
              <motion.div
                animate={{ rotate: [-0.4, 0.4, -0.4] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(160deg, #faf4ea 0%, #f0e6d2 100%)",
                  borderRadius: 4, padding: "36px 26px 32px",
                  border: "1px solid rgba(200,170,130,0.3)",
                  boxShadow: "3px 5px 0 rgba(160,120,80,0.15), 0 12px 36px rgba(0,0,0,0.12)",
                  position: "relative", overflow: "hidden",
                }}
              >
                {/* Ruled lines */}
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} style={{
                    position: "absolute", left: 0, right: 0,
                    top: `${48 + i * 32}px`, height: 1,
                    background: "rgba(180,150,110,0.13)",
                  }} />
                ))}

                {/* Red margin line */}
                <div style={{
                  position: "absolute", top: 0, bottom: 0, left: 36,
                  width: 1, background: "rgba(180,60,60,0.2)",
                }} />

                {/* Salutation */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.8 }}
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1.55rem", fontWeight: 700,
                    color: "#5a2a1a", marginBottom: "1rem", marginTop: 0, paddingLeft: 10,
                  }}
                >
                  To my noonu,
                </motion.p>

                {/* Promise lines */}
                <div style={{ paddingLeft: 10, marginBottom: "1rem" }}>
                  {PROMISES.slice(0, lineIndex).map((line, i) => {
                    if (line.style === "gap") return <div key={i} style={{ height: 10 }} />;
                    return (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                          fontFamily: line.style === "bold" ? "'Caveat', cursive" : "'Patrick Hand', cursive",
                          fontSize: line.style === "bold" ? "1.22rem" : "1.05rem",
                          fontWeight: line.style === "bold" ? 700 : 400,
                          color: line.style === "bold" ? "#7a1a1a" : "#5a3a28",
                          lineHeight: 1.7, margin: 0, marginBottom: "0.05rem",
                        }}
                      >
                        {line.text}
                      </motion.p>
                    );
                  })}

                  {/* Blinking cursor while writing */}
                  {lineIndex < PROMISES.length && opened && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      style={{
                        display: "inline-block", width: 2, height: "1.1rem",
                        background: "#9a5a40", verticalAlign: "middle",
                        marginLeft: 2, borderRadius: 1,
                      }}
                    />
                  )}
                </div>

                {/* Signature — after all lines reveal */}
                <AnimatePresence>
                  {lineIndex >= PROMISES.length && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      style={{ paddingLeft: 10 }}
                    >
                      <div style={{
                        height: 1, marginBottom: 14,
                        background: "repeating-linear-gradient(90deg, #c9826b 0, #c9826b 5px, transparent 5px, transparent 10px)",
                        opacity: 0.4,
                      }} />
                      <div style={{ textAlign: "right", paddingRight: 6 }}>
                        <span style={{
                          fontFamily: "'Caveat', cursive",
                          fontSize: "1.1rem", color: "#7a4a30",
                          display: "block", marginBottom: 2,
                        }}>
                          yours, now & always —
                        </span>
                        <span style={{
                          fontFamily: "'Caveat', cursive",
                          fontSize: "1.65rem", fontWeight: 700, color: "#7a1a1a",
                        }}>
                          ichu ♡
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


      </motion.div>
    </div>
  );
}
