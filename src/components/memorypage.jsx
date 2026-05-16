import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import them from "./../assets/them.mov"
// 🎵 Sitaare - Arijit Singh YouTube video ID
// The song "Sitaare" plays globally from App.jsx

const bgDoodles = [
    { char: "♡", style: { top: "8%", left: "5%" }, delay: 0 },
    { char: "✦", style: { top: "15%", right: "6%" }, delay: 1 },
    { char: "✿", style: { bottom: "12%", left: "7%" }, delay: 2 },
    { char: "♡", style: { bottom: "18%", right: "5%" }, delay: 3 },
    { char: "~", style: { top: "45%", left: "3%" }, delay: 1.5 },
    { char: "~", style: { top: "50%", right: "3%" }, delay: 2.5 },
];

const stickers = [
    { char: "🌸", cls: { top: -16, left: -14, rotate: "-20deg", fontSize: "1.4rem" }, delay: 1.2 },
    { char: "💗", cls: { bottom: -10, right: -12, rotate: "15deg", fontSize: "1.4rem" }, delay: 1.5 },
    { char: "✨", cls: { top: -10, right: -16, rotate: "10deg", fontSize: "1rem" }, delay: 1.8 },
];

export default function MemoryPage() {
    const videoRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; // Slowmo effect
        }
    }, []);
    // For the couple video, we use a separate iframe below the polaroid

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f5efe6",
                backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(180,160,140,0.12) 27px, rgba(180,160,140,0.12) 28px),
          repeating-linear-gradient(90deg, transparent, transparent 27px, rgba(180,160,140,0.06) 27px, rgba(180,160,140,0.06) 28px)
        `,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem 1rem 3rem",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Caveat', cursive",
            }}
        >


            {/* Background floating doodles */}
            {bgDoodles.map((d, i) => (
                <motion.div
                    key={i}
                    style={{ position: "absolute", fontSize: "1.3rem", opacity: 0.25, ...d.style }}
                    animate={{ rotate: [-10, 10, -10], scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, delay: d.delay, repeat: Infinity }}
                >
                    {d.char}
                </motion.div>
            ))}

            {/* Song pill */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{
                    background: "#fffdf8",
                    border: "1px solid rgba(180,160,130,0.3)",
                    borderRadius: 999,
                    padding: "0.5rem 1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: "1.6rem",
                    boxShadow: "2px 2px 0 rgba(180,150,120,0.2)",
                }}
            >
                <motion.span
                    style={{ fontSize: "1.2rem" }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    🎵
                </motion.span>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontFamily: "'Caveat', cursive", fontSize: "1.1rem", fontWeight: 700, color: "#5a3a28", lineHeight: 1.1 }}>
                        Sitaare — Arijit Singh
                    </span>
                    <span style={{ fontFamily: "'Patrick Hand', cursive", fontSize: "0.8rem", color: "#9a7a62" }}>
                        White Noise Collective · Amitabh Bhattacharya
                    </span>
                </div>

                {/* Animated playing bars */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 18 }}>
                    {[6, 14, 10, 16, 8].map((h, i) => (
                        <motion.div
                            key={i}
                            style={{ width: 3, background: "#c9826b", borderRadius: 2 }}
                            animate={{ scaleY: [0.4, 1, 0.4] }}
                            transition={{ duration: 0.8, delay: i * 0.12, repeat: Infinity }}
                            initial={{ height: h, transformOrigin: "bottom" }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Polaroid with their video */}
            <motion.div
                initial={{ scale: 0.7, rotate: -5, opacity: 0 }}
                animate={{ scale: 1, rotate: -2, opacity: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.3 }}
                style={{ position: "relative", marginBottom: "1.4rem" }}
            >
                {/* Washi tape */}
                <div style={{
                    position: "absolute", top: -11, left: "50%",
                    transform: "translateX(-50%) rotate(-1deg)",
                    width: 70, height: 20, zIndex: 5,
                    background: "rgba(255,228,168,0.6)",
                    border: "1px solid rgba(200,170,110,0.35)", borderRadius: 3,
                }} />

                {/* Pop stickers */}
                {stickers.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: s.delay, type: "spring", bounce: 0.6 }}
                        style={{ position: "absolute", fontSize: s.cls.fontSize, zIndex: 6, ...s.cls }}
                    >
                        {s.char}
                    </motion.div>
                ))}

                {/* Polaroid card */}
                <div
                    className="w-full max-w-[300px] md:max-w-[420px]"
                    style={{
                        background: "#fffdf8",
                        padding: "10px 10px 40px 10px",
                        border: "1px solid #e0d5c0",
                        boxShadow: "4px 6px 0 rgba(160,130,100,0.2), 0 12px 30px rgba(0,0,0,0.1)",
                        borderRadius: 2,
                        position: "relative",
                    }}
                >
                    {/* Tiny corner doodles */}
                    {[
                        { char: "♡", s: { top: 7, left: 9, transform: "rotate(-15deg)" } },
                        { char: "✦", s: { top: 7, right: 9, transform: "rotate(20deg)" } },
                        { char: "✿", s: { bottom: 12, left: 9, transform: "rotate(10deg)" } },
                        { char: "♡", s: { bottom: 12, right: 9, transform: "rotate(-12deg)" } },
                    ].map((c, i) => (
                        <div key={i} style={{ position: "absolute", fontSize: "0.85rem", opacity: 0.3, color: "#c9826b", ...c.s }}>
                            {c.char}
                        </div>
                    ))}

                    {/* Video inside polaroid */}
                    <div style={{ width: "100%", aspectRatio: "9/16", background: "#1a1412", overflow: "hidden", borderRadius: 1 }}>
                        <video
                            ref={videoRef}
                            src={them}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                    </div>

                    {/* Caption */}
                    <div style={{ textAlign: "center", marginTop: 8 }}>
                        <div style={{ fontFamily: "'Caveat', cursive", fontSize: "1.1rem", color: "#7a5040", lineHeight: 1.3 }}>
                            us, always 🤍
                        </div>
                        <div style={{ fontFamily: "'Patrick Hand', cursive", fontSize: "0.82rem", color: "#b09070", marginTop: 2 }}>
                            our little memory ♡
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Note card below */}
            <motion.div
                className="w-full max-w-[300px] md:max-w-[420px]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{
                    background: "#fffdf8",
                    border: "1px solid rgba(180,160,130,0.25)",
                    borderRadius: 4,
                    padding: "1rem 1.2rem",
                    textAlign: "center",
                    boxShadow: "2px 3px 0 rgba(180,150,120,0.15)",
                    transform: "rotate(0.8deg)",
                }}
            >
                <p style={{ fontFamily: "'Patrick Hand', cursive", fontSize: "1rem", color: "#6b5040", lineHeight: 1.7, marginBottom: "0.6rem" }}>
                    every song reminds me of you,<br />
                    but this one is just ours 🌷
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, margin: "0.4rem 0", color: "#c9826b", fontSize: "0.85rem", opacity: 0.65 }}>
                    <span style={{ flex: 1, height: 1, maxWidth: 40, background: "repeating-linear-gradient(90deg,#c9826b 0,#c9826b 4px,transparent 4px,transparent 8px)" }} />
                    ♡ ✦ ♡
                    <span style={{ flex: 1, height: 1, maxWidth: 40, background: "repeating-linear-gradient(90deg,#c9826b 0,#c9826b 4px,transparent 4px,transparent 8px)" }} />
                </div>

                <span style={{ fontFamily: "'Reenie Beanie', cursive", fontSize: "1.15rem", color: "#a07050", opacity: 0.8 }}>
                    — forever yours ~
                </span>
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/closing-page")}
                style={{
                    marginTop: "2rem",
                    background: "linear-gradient(135deg, #c9826b, #b07a52)",
                    color: "#fff8f0",
                    border: "none",
                    padding: "10px 24px",
                    borderRadius: "999px",
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
                    letterSpacing: "0.5px",
                    zIndex: 10,
                }}
            >
                one last thing 💌
            </motion.button>
        </div>
    );
}