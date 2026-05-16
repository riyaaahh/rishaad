import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import her from "./../assets/her.png";
import hercute from "./../assets/hercute.jpg";

export default function LoveLetter() {
    const navigate = useNavigate();
    const [showRest, setShowRest] = useState(false);

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "70px 20px 60px",
                backgroundImage: `
                    repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 39px,
                        #c0392b44 39px,
                        #c0392b44 41px
                    ),
                    repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 39px,
                        #c0392b44 39px,
                        #c0392b44 41px
                    )
                `,
                backgroundColor: "#e8d5c4",
                backgroundSize: "40px 40px",
                boxSizing: "border-box",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "360px",
                }}
            >

                {/* ── TOP ROW: two polaroids + heart above the card ── */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginBottom: "-18px",
                    paddingLeft: "6px",
                    paddingRight: "6px",
                    position: "relative",
                    zIndex: 20,
                }}>

                    {/* her.png — left, tilted left */}
                    <motion.div
                        initial={{ opacity: 0, y: -30, rotate: -12 }}
                        animate={{ opacity: 1, y: 0, rotate: -5 }}
                        transition={{ delay: 0.7, duration: 0.9, type: "spring", bounce: 0.4 }}
                        whileHover={{ rotate: -2, scale: 1.05, y: -4 }}
                        style={{
                            background: "#fffdf8",
                            padding: "5px 5px 24px 5px",
                            borderRadius: 2,
                            boxShadow: "3px 5px 0 rgba(160,130,100,0.2), 0 10px 24px rgba(0,0,0,0.13)",
                            border: "1px solid #e0d5c0",
                            width: "42%",
                            position: "relative",
                            flexShrink: 0,
                        }}
                    >
                        <div style={{
                            position: "absolute", top: -9, left: "50%",
                            transform: "translateX(-50%) rotate(-2deg)",
                            width: 44, height: 13,
                            background: "rgba(255,230,130,0.75)",
                            border: "1px solid rgba(210,185,100,0.3)",
                            borderRadius: 3, zIndex: 5,
                        }} />
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.1, type: "spring", bounce: 0.7 }}
                            style={{ position: "absolute", top: -13, right: -8, fontSize: "1rem", zIndex: 6 }}
                        >
                            💛
                        </motion.div>
                        <img src={her} alt="her" style={{
                            width: "100%", height: 110,
                            objectFit: "cover", objectPosition: "center top", display: "block",
                        }} />
                        <div style={{
                            textAlign: "center", fontFamily: "'Caveat', cursive",
                            fontSize: "0.7rem", color: "#7a5040", marginTop: 5,
                        }}>
                            my sunshine ☀️
                        </div>
                    </motion.div>
                </div>

                {/* ── MAIN CARD ── */}
                <motion.div
                    animate={{ rotate: [-0.5, 0.5, -0.5] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        background: "linear-gradient(160deg, #f5ede0 0%, #ede0cc 100%)",
                        borderRadius: "4px",
                        padding: "36px 26px 40px",
                        boxShadow: "0 8px 40px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.12)",
                        position: "relative",
                        overflow: "hidden",
                        zIndex: 10,
                    }}
                >
                    {Array.from({ length: 22 }).map((_, i) => (
                        <div key={i} style={{
                            position: "absolute", left: 0, right: 0,
                            top: `${50 + i * 34}px`, height: "1px",
                            background: "rgba(180,160,130,0.15)",
                        }} />
                    ))}

                    <p style={{
                        fontFamily: "'Caveat', 'Patrick Hand', cursive",
                        fontSize: "26px", color: "#3d2a1a",
                        marginBottom: "20px", marginTop: "6px",
                        letterSpacing: "0.5px", lineHeight: 1.3,
                    }}>
                        Hey love,
                    </p>

                    <div style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: "19px", color: "#3d2a1a",
                        lineHeight: 1.65, letterSpacing: "0.3px",
                    }}>
                        <p style={{ marginBottom: "22px", textAlign: "center" }}>
                            It's been six years since we met and it's been a
                            lovely journey with you. You are the best one I had
                            met in my life ever. I wish your presence always
                            with me.
                        </p>

                        {!showRest && (
                            <div style={{ display: "flex", justifyContent: "center", marginBottom: "8px" }}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowRest(true)}
                                    style={{
                                        background: "linear-gradient(135deg, #8b5e3c, #b07a52)",
                                        color: "#fff8f0", border: "none",
                                        padding: "10px 22px", borderRadius: "999px",
                                        fontFamily: "'Caveat', cursive", fontSize: "19px",
                                        cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                        letterSpacing: "0.5px",
                                    }}
                                >
                                    Tap to see the rest 💌
                                </motion.button>
                            </div>
                        )}

                        <AnimatePresence>
                            {showRest && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    style={{ overflow: "hidden" }}
                                >
                                    <p style={{ marginBottom: "18px", textAlign: "center" }}>
                                        You had been there for me in all my ups
                                        and downs, happiness and sorrow... You
                                        had seen all my faces without any
                                        hesitation. It's really very sweet to
                                        recount the moments we spend together.
                                    </p>

                                    <p style={{ marginBottom: "18px", textAlign: "center" }}>
                                        I want to see your smiling face always.
                                        I will be always there for you as I am
                                        there for you now. I want you to be
                                        there always beside me forever as a good
                                        partner and we can make memories
                                        together.
                                    </p>

                                    <p style={{ marginBottom: "22px", textAlign: "center" }}>
                                        I don't know how to express my love to
                                        you in words, but to be frank, I love
                                        you soo muchhh. You are a milestone I
                                        have ever achieved in my life. 💖
                                    </p>

                                    <div style={{
                                        textAlign: "right", fontFamily: "'Caveat', cursive",
                                        fontSize: "21px", color: "#3d2a1a",
                                        marginTop: "10px", letterSpacing: "0.5px",
                                    }}>
                                        with love <br />your ichu&lt;3
                                    </div>

                                    <div style={{ display: "flex", justifyContent: "center", marginTop: "28px" }}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => navigate("/photos-page")}
                                            style={{
                                                background: "linear-gradient(135deg, #8b5e3c, #b07a52)",
                                                color: "#fff8f0", border: "none",
                                                padding: "12px 26px", borderRadius: "999px",
                                                fontFamily: "'Caveat', cursive", fontSize: "21px",
                                                cursor: "pointer",
                                                boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
                                                letterSpacing: "0.6px",
                                            }}
                                        >
                                            wanna see more of us? ✨
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}