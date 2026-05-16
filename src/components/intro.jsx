import { motion } from "framer-motion";
import couplePhoto from "./../assets/couple.png";

const doodleHearts = [
    { char: "♡", style: { left: "6%", top: "20%" }, delay: 0 },
    { char: "✦", style: { right: "5%", top: "35%" }, delay: 1.2 },
    { char: "♡", style: { left: "10%", bottom: "28%" }, delay: 2.5 },
    { char: "✦", style: { right: "8%", bottom: "22%" }, delay: 0.8 },
];

const riseHearts = [
    { char: "💗", style: { left: "22%", top: 30 }, delay: 0.5 },
    { char: "✨", style: { left: "65%", top: 20 }, delay: 0.9 },
    { char: "💕", style: { left: "45%", top: 10 }, delay: 1.3 },
];

// Corner deco items with staggered reveal delays (mirrors splash letter stagger)
const cornerDecos = [
    { char: "✦", style: { top: 18, left: 22, color: "#c9826b", fontSize: "2rem", transform: "rotate(-15deg)" }, delay: 1.6 },
    { char: "★", style: { top: 30, right: 40, color: "#d4a0c0", fontSize: "1.4rem", transform: "rotate(20deg)" }, delay: 1.8 },
    { char: "✿", style: { bottom: 30, left: 30, color: "#a8c4a0", fontSize: "1.2rem", transform: "rotate(-8deg)" }, delay: 2.0 },
    { char: "✦", style: { bottom: 20, right: 20, color: "#c9826b", fontSize: "1.8rem", transform: "rotate(12deg)" }, delay: 2.2 },
];

export default function Intro({ setShowLetter }) {
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
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem 1rem",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Caveat', cursive",
            }}
        >
            {/* ── PAPER TEXTURE (mirrors splash) ── */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.04,
                    mixBlendMode: "multiply",
                    pointerEvents: "none",
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
                }}
            />

            {/* ── DREAMY GLOW (mirrors splash central glow, duration 10) ── */}
            <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    width: 600,
                    height: 600,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.35)",
                    filter: "blur(80px)",
                    pointerEvents: "none",
                }}
            />

            {/* ── FLOATING BLOBS (mirrors splash blob timings 10 & 12) ── */}
            <motion.div
                animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    top: "12%",
                    left: "10%",
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    background: "rgba(241,214,214,0.25)",
                    filter: "blur(60px)",
                    pointerEvents: "none",
                }}
            />
            <motion.div
                animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    bottom: "18%",
                    right: "10%",
                    width: 260,
                    height: 260,
                    borderRadius: "50%",
                    background: "rgba(255,247,239,0.35)",
                    filter: "blur(70px)",
                    pointerEvents: "none",
                }}
            />

            {/* ── VIGNETTE ── */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle, transparent 45%, rgba(0,0,0,0.07) 100%)",
                    pointerEvents: "none",
                }}
            />

            {/* ── DREAMY DUST (mirrors splash 20 particles) ── */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.2 }}
                    style={{
                        position: "absolute",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.4)",
                        filter: "blur(2px)",
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        pointerEvents: "none",
                    }}
                />
            ))}

            {/* ── FLOATING HEARTS (mirrors splash hearts, duration 5 & 4) ── */}
            <motion.div
                animate={{ y: [-8, 8, -8], rotate: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    top: "14%",
                    left: "12%",
                    color: "rgba(216,76,76,0.25)",
                    fontSize: "1.5rem",
                    pointerEvents: "none",
                }}
            >
                ♥
            </motion.div>
            <motion.div
                animate={{ y: [8, -8, 8], rotate: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    bottom: "20%",
                    right: "12%",
                    color: "rgba(216,76,76,0.2)",
                    fontSize: "1.8rem",
                    pointerEvents: "none",
                }}
            >
                ♥
            </motion.div>

            {/* ── CORNER DECOS — staggered reveal (mirrors letter delays 1.6–2.2) ── */}
            {cornerDecos.map((d, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ delay: d.delay, duration: 0.8, ease: "easeOut" }}
                    style={{ position: "absolute", ...d.style }}
                >
                    {d.char}
                </motion.div>
            ))}

            {/* ── FLOATING DOODLE HEARTS BG ── */}
            {doodleHearts.map((d, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.35, rotate: [-10, 10, -10], scale: [1, 1.1, 1] }}
                    transition={{
                        opacity: { delay: 1.4 + d.delay * 0.3, duration: 0.8 },
                        rotate: { duration: 4, delay: d.delay, repeat: Infinity },
                        scale: { duration: 4, delay: d.delay, repeat: Infinity },
                    }}
                    style={{ position: "absolute", fontSize: "1.1rem", ...d.style }}
                >
                    {d.char}
                </motion.div>
            ))}

            {/* ══════════════════════════════════════════
          MAIN CARD — mirrors splash wrapper:
          initial opacity 0, scale 0.92 → 1
          duration 1.2, ease "easeOut"
         ══════════════════════════════════════════ */}
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                    background: "#fffdf8",
                    borderRadius: 6,
                    padding: "1.6rem 1.5rem 1.8rem",
                    maxWidth: 340,
                    width: "100%",
                    textAlign: "center",
                    position: "relative",
                    border: "1px solid rgba(180,160,130,0.25)",
                    boxShadow:
                        "3px 4px 0px rgba(180,150,120,0.18), 6px 8px 20px rgba(160,130,100,0.12)",
                    transform: "rotate(-0.5deg)",
                }}
            >
                {/* Tape strip top */}
                <div
                    style={{
                        position: "absolute",
                        width: 80,
                        height: 22,
                        top: -10,
                        left: "50%",
                        transform: "translateX(-50%) rotate(-2deg)",
                        background: "rgba(255,230,180,0.55)",
                        border: "1px solid rgba(200,170,120,0.3)",
                        borderRadius: 3,
                    }}
                />

                {/* Corner micro-doodles on card */}
                {[
                    { char: "♡", s: { top: 7, left: 9, transform: "rotate(-20deg)" } },
                    { char: "✦", s: { top: 7, right: 9, transform: "rotate(20deg)" } },
                    { char: "✿", s: { bottom: 7, left: 9, transform: "rotate(15deg)" } },
                    { char: "♡", s: { bottom: 7, right: 9, transform: "rotate(-15deg)" } },
                ].map((c, i) => (
                    <div
                        key={i}
                        style={{ position: "absolute", fontSize: "0.9rem", opacity: 0.4, ...c.s }}
                    >
                        {c.char}
                    </div>
                ))}

                {/* ── STICKER ROW — delay 0.6, mirrors subtitle reveal timing ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 6,
                        marginBottom: "0.5rem",
                        fontSize: "1.2rem",
                    }}
                >
                    🌸 ✨ 🌷 💌 🌸
                </motion.div>

                {/* ── PHOTO + ENVELOPE SCENE — delay 1.8, mirrors photo card timing ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 1.0, ease: "easeOut" }}
                    style={{
                        position: "relative",
                        display: "inline-block",
                        width: 190,
                        height: 160,
                        margin: "0.4rem auto 0.6rem",
                    }}
                >
                    {/* Rising hearts */}
                    {riseHearts.map((h, i) => (
                        <motion.div
                            key={i}
                            style={{ position: "absolute", fontSize: "0.85rem", zIndex: 4, ...h.style }}
                            animate={{ y: [0, -48], opacity: [0, 1, 0] }}
                            transition={{
                                duration: 3.8,
                                delay: 1.8 + h.delay,
                                repeat: Infinity,
                                times: [0, 0.2, 1],
                            }}
                        >
                            {h.char}
                        </motion.div>
                    ))}

                    {/* Polaroid popping from envelope */}
                    <motion.div
                        initial={{ top: 90, opacity: 0 }}
                        animate={{
                            top: [90, 18, 14, 80, 90],
                            opacity: [0, 1, 1, 0.3, 0],
                            rotate: [2, -1.5, 1, 3, 2],
                        }}
                        transition={{
                            delay: 2.2,
                            duration: 3.8,
                            repeat: Infinity,
                            times: [0, 0.15, 0.6, 0.82, 1],
                        }}
                        style={{
                            position: "absolute",
                            left: "50%",
                            zIndex: 3,
                            background: "#fff",
                            padding: "6px 6px 20px 6px",
                            border: "1px solid #e0d8cc",
                            boxShadow: "2px 3px 8px rgba(0,0,0,0.12)",
                            width: 116,
                            borderRadius: 2,
                            x: "-50%",
                            transform: "translateX(-50%)",
                        }}
                    >
                        <img
                            src={couplePhoto}
                            alt="us"
                            style={{
                                width: "100%",
                                height: 100,
                                objectFit: "cover",
                                objectPosition: "center top",
                                display: "block",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "'Caveat', cursive",
                                fontSize: "0.78rem",
                                color: "#8b6f5e",
                                textAlign: "center",
                                display: "block",
                                marginTop: 4,
                            }}
                        >
                            us 🤍
                        </span>
                    </motion.div>

                    {/* Envelope SVG */}
                    <svg
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 2,
                        }}
                        width="160"
                        height="90"
                        viewBox="0 0 160 90"
                        fill="none"
                    >
                        <rect x="1" y="1" width="158" height="88" rx="5" fill="#fde8d0" stroke="#d4a88a" strokeWidth="1.5" />
                        <path d="M1 15 L80 55 L159 15" stroke="#d4a88a" strokeWidth="1.5" fill="none" />
                        <path d="M1 89 L58 48" stroke="#d4a88a" strokeWidth="1" fill="none" opacity="0.5" />
                        <path d="M159 89 L102 48" stroke="#d4a88a" strokeWidth="1" fill="none" opacity="0.5" />
                        <path d="M72 56 Q80 42 88 56" stroke="#e8a090" strokeWidth="1.5" fill="#f5c0b0" opacity="0.8" />
                    </svg>
                </motion.div>

                {/* ── TITLE — delay 1.3, mirrors splash subtitle timing exactly ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
                >
                    <span
                        style={{
                            fontFamily: "'Caveat', cursive",
                            fontSize: "2.6rem",
                            fontWeight: 700,
                            color: "#7a4a3a",
                            lineHeight: 1,
                            margin: "0.2rem 0 0.4rem",
                            display: "block",
                        }}
                    >
                        hey, nunu 🌷
                    </span>

                    {/* Squiggle underline */}
                    <svg
                        style={{ display: "block", margin: "0 auto 0.7rem", width: 120, height: 10 }}
                        viewBox="0 0 120 10"
                        fill="none"
                    >
                        <path
                            d="M2 6 Q15 2 30 6 Q45 10 60 6 Q75 2 90 6 Q105 10 118 6"
                            stroke="#c9826b"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </motion.div>

                {/* ── DIVIDER — delay 1.6 ── */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.7, scaleX: 1 }}
                    transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        margin: "0.3rem 0 0.8rem",
                        fontFamily: "'Caveat', cursive",
                        fontSize: "1rem",
                        color: "#c9826b",
                    }}
                >
                    <span
                        style={{
                            flex: 1,
                            height: 1,
                            maxWidth: 55,
                            background:
                                "repeating-linear-gradient(90deg, #c9826b 0, #c9826b 5px, transparent 5px, transparent 10px)",
                        }}
                    />
                    ♡ ✦ ♡
                    <span
                        style={{
                            flex: 1,
                            height: 1,
                            maxWidth: 55,
                            background:
                                "repeating-linear-gradient(90deg, #c9826b 0, #c9826b 5px, transparent 5px, transparent 10px)",
                        }}
                    />
                </motion.div>

                {/* ── NOTE TEXT — delay 2.0, mirrors splash "dreamy dust" stagger ── */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
                    style={{
                        fontFamily: "'Patrick Hand', cursive",
                        fontSize: "1.05rem",
                        color: "#6b5040",
                        lineHeight: 1.75,
                        marginBottom: "1.3rem",
                    }}
                >
                    hey i know i'm not a man of letters
                    <br />
                    but i really wanted to make you happy so i wrote one only for you? 💌
                </motion.p>

                {/* ── BUTTON — delay 2.8, mirrors splash fingerprint button exactly ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8, duration: 1.0, ease: "easeOut" }}
                >
                    <motion.button
                        whileHover={{ rotate: 0.5, y: -2 }}
                        whileTap={{ y: 1, scale: 0.97 }}
                        animate={{
                            boxShadow: [
                                "2px 3px 0 #c07060",
                                "2px 3px 16px rgba(196,100,80,0.45)",
                                "2px 3px 0 #c07060",
                            ],
                            scale: [1, 1.03, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        onClick={() => setShowLetter(true)}
                        style={{
                            background: "#e8a090",
                            border: "none",
                            borderRadius: 4,
                            padding: "0.65rem 2rem",
                            color: "#fff",
                            fontFamily: "'Caveat', cursive",
                            fontSize: "1.3rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            letterSpacing: "0.5px",
                            transform: "rotate(-0.5deg)",
                        }}
                    >
                        open it ♡
                    </motion.button>
                </motion.div>

                {/* ── FOOTER TAG — delay 3.2, last item like splash button label ── */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.75 }}
                    transition={{ delay: 3.2, duration: 1.0, ease: "easeOut" }}
                    style={{
                        fontFamily: "'Reenie Beanie', cursive",
                        fontSize: "1rem",
                        color: "#b09070",
                        marginTop: "0.9rem",
                        display: "block",
                    }}
                >
                    made with love, only for you ~
                </motion.span>
            </motion.div>
        </div>
    );
}