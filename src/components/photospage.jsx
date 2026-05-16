import { motion } from "framer-motion";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "./../assets/img 1.JPG";
import img2 from "./../assets/img 2.JPG";
import img4 from "./../assets/img 4.JPG";
import img6 from "./../assets/img 6.JPG";
import img7 from "./../assets/img 7.JPG";
import img8 from "./../assets/img 8.JPG";
import img9 from "./../assets/Img 9.JPG";
import img10 from "./../assets/Img 10.JPG";
import img11 from "./../assets/Img 11.JPG";
import img12 from "./../assets/Img 12.JPG";
import img13 from "./../assets/Img 13.JPG";
import img20 from "./../assets/img 20.JPG";
import img14 from "./../assets/Img 14.JPG";
import img15 from "./../assets/Img 15.JPG";
import img16 from "./../assets/Img 16.JPG";
import img17 from "./../assets/Img 17.JPG";
import img18 from "./../assets/Img 18.JPG";
import img19 from "./../assets/Img 19.JPG";

import widePhoto from "./../assets/nunurishad.JPG";

/* ─── photo pool ─────────────────────────────────────────────────────── */
const photoPool = [
    { src: img1, caption: "still choosing you 🤍", sub: "every single day" },

    { src: img2, caption: "always been you 🌷", sub: "always will be" },

    { src: img4, caption: "my favourite place 🌅", sub: "next to you" },

    { src: img6, caption: "just us 💗", sub: "that's enough" },

    { src: img7, caption: "my happy place ✨", sub: "where you are" },

    { src: img8, caption: "little memories 📸", sub: "big feelings" },

    { src: img9, caption: "that smile 🌸", sub: "my weakness" },

    { src: img10, caption: "you and me 🤍", sub: "always us" },

    { src: img11, caption: "my person 🌷", sub: "my forever" },

    { src: img12, caption: "my favourite days ✨", sub: "with you" },

    { src: img13, caption: "loving you 💗", sub: "comes easy" },

    { src: img20, caption: "u remember all this? 📖", sub: "its been 6 years!!" },

    { src: img14, caption: "holding onto this 🤍", sub: "forever" },

    { src: img15, caption: "look at us ✨", sub: "we were so young" },

    { src: img16, caption: "still falling 💗", sub: "for you" },

    { src: img17, caption: "looking at you 🌸", sub: "feels like home" },

    { src: img18, caption: "those little sneak peaks 🙈", sub: "i love them" },

    { src: img19, caption: "still my favourite 🤍", sub: "after all this time" },

];

/* pools to pick from randomly */
const tapeColors = [
    "rgba(255,228,168,0.72)",
    "rgba(255,200,200,0.68)",
    "rgba(200,240,220,0.65)",
    "rgba(230,210,255,0.68)",
    "rgba(255,218,185,0.72)",
    "rgba(210,240,255,0.65)",
];
const stickers = ["🌸", "💗", "✨", "🌼", "💫", "🌷", "💝", "🎀", "🫧", "🌺"];
const rotations = ["-3.5deg", "-2.8deg", "-1.6deg", "-0.8deg", "0.6deg", "1.4deg", "2.2deg", "3.0deg", "3.8deg"];

/* Fisher-Yates shuffle */
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

/* ─── bg doodles ─────────────────────────────────────────────────────── */
const bgDoodles = [
    { char: "♡", style: { top: "4%", left: "4%" }, delay: 0, size: "1.4rem" },
    { char: "✦", style: { top: "12%", right: "5%" }, delay: 0.8, size: "1rem" },
    { char: "✿", style: { top: "28%", left: "3%" }, delay: 1.6, size: "1.2rem" },
    { char: "♡", style: { top: "46%", right: "4%" }, delay: 2.2, size: "1.5rem" },
    { char: "~", style: { top: "62%", left: "2%" }, delay: 1.2, size: "1.6rem" },
    { char: "✦", style: { top: "76%", right: "3%" }, delay: 3.0, size: "1rem" },
    { char: "✿", style: { bottom: "15%", left: "5%" }, delay: 2.0, size: "1.3rem" },
    { char: "♡", style: { bottom: "6%", right: "5%" }, delay: 0.4, size: "1.1rem" },
];

/* drifting hearts */
const floatingHearts = [
    { char: "♡", left: "7%", delay: 0, dur: 8 },
    { char: "✦", left: "83%", delay: 2.5, dur: 10 },
    { char: "♡", left: "50%", delay: 5, dur: 9 },
    { char: "✿", left: "30%", delay: 7, dur: 11 },
    { char: "♡", left: "70%", delay: 1, dur: 8.5 },
];

/* slow floaty spring */
const slowSpring = { type: "spring", stiffness: 50, damping: 13, mass: 1.2 };

/* ─── WashiTape ─────────────────────────────────────────────────────── */
function WashiTape({ color }) {
    return (
        <div style={{
            position: "absolute", top: -14, left: "50%",
            transform: "translateX(-50%) rotate(-1.5deg)",
            width: 70, height: 22, zIndex: 5,
            background: color,
            border: "1px solid rgba(200,170,110,0.28)",
            borderRadius: 3,
        }} />
    );
}

/* ─── Polaroid (always wide / single column) ─────────────────────────── */
function Polaroid({ src, caption, sub, rotate, tape, sticker, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.86, rotate: "0deg" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate }}
            viewport={{ once: true, margin: "-24px" }}
            transition={{ ...slowSpring, delay }}
            whileHover={{ scale: 1.025, rotate: "0deg", transition: { duration: 0.4 } }}
            style={{ position: "relative", display: "inline-block", width: "100%" }}
        >
            <WashiTape color={tape} />

            {/* pop sticker */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.45, type: "spring", bounce: 0.68 }}
                style={{
                    position: "absolute", top: -18, right: -14,
                    fontSize: "1.7rem", zIndex: 6,
                    filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.12))",
                }}
            >
                {sticker}
            </motion.div>

            {/* corner chars */}
            {[
                { char: "♡", s: { bottom: 15, left: 11, transform: "rotate(-15deg)" } },
                { char: "✦", s: { bottom: 15, right: 11, transform: "rotate(20deg)" } },
            ].map((c, i) => (
                <div key={i} style={{
                    position: "absolute", fontSize: "0.75rem",
                    opacity: 0.22, color: "#c9826b", ...c.s,
                }}>{c.char}</div>
            ))}

            {/* card */}
            <div style={{
                background: "#fffef9",
                padding: "11px 11px 46px 11px",
                border: "1px solid #e4d7c5",
                boxShadow: [
                    "0 2px 0 #e5d3be",
                    "0 4px 0 #d9cab3",
                    "0 7px 0 rgba(190,155,115,0.32)",
                    "0 18px 34px rgba(0,0,0,0.1)",
                ].join(", "),
                borderRadius: 2,
                width: "100%",
                position: "relative",
                boxSizing: "border-box",
            }}>
                {/* photo — slow zoom-out on entry */}
                <div style={{
                    width: "100%",
                    aspectRatio: "4/5",
                    overflow: "hidden",
                    borderRadius: 1,
                    background: "#d8cfc4",
                }}>
                    <motion.img
                        src={src}
                        alt={caption}
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, ease: [0.22, 0.44, 0.42, 0.96], delay: delay + 0.08 }}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                </div>

                {/* caption */}
                <div style={{ textAlign: "center", marginTop: 11 }}>
                    <div style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#7a5040",
                        lineHeight: 1.2,
                    }}>{caption}</div>
                    <div style={{
                        fontFamily: "'Patrick Hand', cursive",
                        fontSize: "0.82rem",
                        color: "#b09070",
                        marginTop: 4,
                    }}>{sub}</div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── PAGE ───────────────────────────────────────────────────────────── */
export default function PhotosPage() {
    const navigate = useNavigate();

    /* shuffle once per mount → new random order every page load */
    const shuffled = useMemo(() => {
        return shuffle(photoPool).map(p => ({
            ...p,
            rotate: pick(rotations),
            tape: pick(tapeColors),
            sticker: pick(stickers),
        }));
    }, []);

    return (
        <div style={{
            minHeight: "100vh",
            background: "#f7f0e8",
            backgroundImage: `
                radial-gradient(ellipse at 18% 8%,  rgba(255,215,195,0.38) 0%, transparent 52%),
                radial-gradient(ellipse at 82% 85%, rgba(255,195,215,0.28) 0%, transparent 52%),
                repeating-linear-gradient(0deg,  transparent, transparent 27px, rgba(180,155,130,0.1)  27px, rgba(180,155,130,0.1)  28px),
                repeating-linear-gradient(90deg, transparent, transparent 27px, rgba(180,155,130,0.05) 27px, rgba(180,155,130,0.05) 28px)
            `,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2.5rem 1.2rem 5rem",
            position: "relative",
            overflow: "hidden",
            fontFamily: "'Caveat', cursive",
        }}>

            {/* ambient bg doodles */}
            {bgDoodles.map((d, i) => (
                <motion.div key={i}
                    style={{ position: "absolute", fontSize: d.size, opacity: 0.17, color: "#c9826b", zIndex: 0, ...d.style }}
                    animate={{ rotate: [-10, 10, -10], scale: [1, 1.14, 1], y: [0, -7, 0] }}
                    transition={{ duration: 5 + d.delay * 0.5, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
                >{d.char}</motion.div>
            ))}

            {/* drifting hearts */}
            {floatingHearts.map((h, i) => (
                <motion.div key={`fh-${i}`}
                    style={{
                        position: "fixed", bottom: -30, left: h.left,
                        fontSize: "1rem", color: "#e8a090", zIndex: 0, pointerEvents: "none",
                    }}
                    animate={{ y: [0, -900], opacity: [0, 0.5, 0.5, 0] }}
                    transition={{ duration: h.dur, delay: h.delay, repeat: Infinity, ease: "easeOut" }}
                >{h.char}</motion.div>
            ))}

            {/* ── header ── */}
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.34, 1.2, 0.64, 1] }}
                style={{ textAlign: "center", marginBottom: "2.4rem", zIndex: 1 }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35, duration: 0.9, type: "spring", bounce: 0.55 }}
                    style={{ fontSize: "0.9rem", letterSpacing: 7, color: "#d4956a", marginBottom: 8 }}
                >
                    ♡ ✦ ♡ ✦ ♡
                </motion.div>

                <div style={{
                    fontFamily: "'Reenie Beanie', cursive",
                    fontSize: "2.6rem",
                    color: "#7a5040",
                    lineHeight: 1.05,
                    textShadow: "1px 2px 0 rgba(180,130,100,0.12)",
                }}>
                    six years of us 💗
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    style={{
                        fontFamily: "'Patrick Hand', cursive",
                        fontSize: "0.9rem",
                        color: "#b09070",
                        marginTop: 5,
                        letterSpacing: "0.02em",
                    }}
                >
                    all the pictures here have a story to tell right ?? 🌸
                </motion.div>

                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: 8, marginTop: 12, color: "#c9826b", fontSize: "0.85rem", opacity: 0.5,
                }}>
                    <span style={{ flex: 1, height: 1, maxWidth: 55, background: "repeating-linear-gradient(90deg,#c9826b 0,#c9826b 4px,transparent 4px,transparent 8px)" }} />
                    ♡ ✦ ♡
                    <span style={{ flex: 1, height: 1, maxWidth: 55, background: "repeating-linear-gradient(90deg,#c9826b 0,#c9826b 4px,transparent 4px,transparent 8px)" }} />
                </div>
            </motion.div>

            {/* ── single-column polaroid feed on mobile, grid on desktop (randomised) ── */}
            <div className="gallery-col" style={{ zIndex: 1, width: "100%" }}>
                {shuffled.map((p, i) => (
                    <Polaroid
                        key={i}
                        src={p.src}
                        caption={p.caption}
                        sub={p.sub}
                        rotate={p.rotate}
                        tape={p.tape}
                        sticker={p.sticker}
                        delay={0}   /* no stagger — each animates when it scrolls into view */
                    />
                ))}
            </div>

            {/* ── closing note card ── */}
            <motion.div
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...slowSpring, delay: 0.1 }}
                style={{
                    background: "#fffef9",
                    border: "1px solid rgba(200,168,128,0.28)",
                    borderRadius: 5,
                    padding: "1.3rem 1.5rem",
                    maxWidth: 310,
                    width: "100%",
                    textAlign: "center",
                    boxShadow: [
                        "0 2px 0 #e6d3bc",
                        "0 4px 0 rgba(210,168,128,0.28)",
                        "0 12px 30px rgba(0,0,0,0.08)",
                    ].join(", "),
                    zIndex: 1,
                    position: "relative",
                    transform: "rotate(-0.7deg)",
                    marginTop: "3.5rem",
                }}
            >
                {/* tape on note */}
                <div style={{
                    position: "absolute", top: -11, left: "50%",
                    transform: "translateX(-50%) rotate(0.5deg)",
                    width: 52, height: 18,
                    background: "rgba(255,222,178,0.68)",
                    border: "1px solid rgba(200,162,112,0.28)",
                    borderRadius: 2,
                }} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.38, type: "spring", bounce: 0.55 }}
                    style={{ fontSize: "1.7rem", marginBottom: 8 }}
                >
                    🌷
                </motion.div>

                <p style={{
                    fontFamily: "'Patrick Hand', cursive",
                    fontSize: "1rem",
                    color: "#6b5040",
                    lineHeight: 1.78,
                    marginBottom: "0.7rem",
                }}>
                    in every photo, i see home.<br />
                    that home is you.
                </p>

                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: 6, margin: "0.5rem 0", color: "#c9826b", fontSize: "0.85rem", opacity: 0.58,
                }}>
                    <span style={{ flex: 1, height: 1, maxWidth: 36, background: "repeating-linear-gradient(90deg,#c9826b 0,#c9826b 4px,transparent 4px,transparent 8px)" }} />
                    ♡ ✦ ♡
                    <span style={{ flex: 1, height: 1, maxWidth: 36, background: "repeating-linear-gradient(90deg,#c9826b 0,#c9826b 4px,transparent 4px,transparent 8px)" }} />
                </div>

                <span style={{
                    fontFamily: "'Reenie Beanie', cursive",
                    fontSize: "1.2rem",
                    color: "#a07050",
                    opacity: 0.85,
                }}>
                    — forever yours ~
                </span>
            </motion.div>

            {/* Next page button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/memory-page")}
                style={{
                    marginTop: "2.5rem",
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
                click once more. ✨
            </motion.button>
        </div>
    );
}