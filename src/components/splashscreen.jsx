import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";
import { useNavigate } from "react-router-dom";

import him from "./../assets/him.png";
import her from "./../assets/her.png";

const topLetters = ["h", "a", "p", "p", "y"];

const bottomLetters = [
  "a",
  "n",
  "n",
  "i",
  "v",
  "e",
  "r",
  "s",
  "a",
  "r",
  "y",
];

export default function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center

        bg-gradient-to-b
        from-[#f3f1ef]
        via-[#ece8e4]
        to-[#e7e2dd]
      "
    >
      {/* PAPER TEXTURE */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          mix-blend-multiply
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        }}
      />

      {/* DREAMY GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[700px]
          h-[700px]
          rounded-full
          bg-white/40
          blur-3xl
        "
      />

      {/* FLOATING BLOBS */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[12%]
          left-[10%]
          w-[220px]
          h-[220px]
          rounded-full
          bg-[#f1d6d6]/30
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[18%]
          right-[10%]
          w-[260px]
          h-[260px]
          rounded-full
          bg-[#fff7ef]/40
          blur-3xl
        "
      />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.08)_100%)]" />

      {/* HEARTS */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-6, 6, -6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[14%]
          left-[12%]
          text-[#d84c4c]/30
          text-2xl
        "
      >
        ♥
      </motion.div>

      <motion.div
        animate={{
          y: [8, -8, 8],
          rotate: [6, -6, 6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[20%]
          right-[12%]
          text-[#d84c4c]/25
          text-3xl
        "
      >
        ♥
      </motion.div>

      {/* DREAMY DUST */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="
            absolute
            rounded-full
            bg-white/40
            blur-[2px]
          "
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* MAIN */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          relative
          w-full
          px-4
          flex
          flex-col
          items-center
          pt-20
          pb-[430px]
          md:pb-[760px]
        "
      >
        {/* GLOW */}
        <div
          className="
            absolute
            top-[10%]
            md:top-[8%]
            w-[300px]
            md:w-[700px]
            h-[140px]
            md:h-[240px]
            bg-[#ffffff]/30
            blur-3xl
            rounded-full
          "
        />

        {/* HAPPY */}
        <motion.div
          className="flex items-end justify-center flex-nowrap z-10"
          transition={{
            staggerChildren: 0.08,
          }}
        >
          {topLetters.map((letter, index) => (
            <Letter
              key={index}
              letter={letter}
              rotate={topRotate[index]}
              y={topY[index]}
              delay={index * 0.08}
            />
          ))}
        </motion.div>

        <div className="h-14 md:h-24" />

        {/* ANNIVERSARY */}
        <motion.div
          className="flex items-start justify-center flex-nowrap z-10"
          transition={{
            staggerChildren: 0.06,
          }}
        >
          {bottomLetters.map((letter, index) => (
            <Letter
              key={index}
              letter={letter}
              rotate={bottomRotate[index]}
              y={bottomY[index]}
              delay={0.35 + index * 0.06}
            />
          ))}
        </motion.div>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{
            delay: 1.3,
            duration: 0.8,
          }}
          className="
            mt-24
            md:mt-32
            text-[15px]
            md:text-[20px]
            text-[#8d746d]
            italic
            tracking-[0.12em]
            text-center
            relative
            z-20
          "
          style={{
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          to my favourite nunu
        </motion.p>

        {/* PHOTO GLOW */}
        <div
          className="
            absolute
            bottom-[150px]
            md:bottom-[250px]
            left-1/2
            -translate-x-1/2
            w-[320px]
            h-[140px]
            md:w-[760px]
            md:h-[260px]
            bg-[#d8b7b7]/20
            blur-3xl
            rounded-full
          "
        />

        {/* PHOTOS */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            bottom-[170px]
            md:bottom-[280px]
            flex
            items-end
            justify-center
            gap-4
            md:gap-12
            z-20
          "
        >
          {/* HER */}
          <PhotoCard
            image={her}
            rotate="-7deg"
            initialRotate={-12}
            floatY={[0, -6, 0]}
          />

          {/* HIM */}
          <PhotoCard
            image={him}
            rotate="7deg"
            initialRotate={12}
            floatY={[18, 10, 18]}
          />
        </div>

        {/* BUTTON */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.8,
            duration: 1,
          }}
          className="
            absolute
            bottom-[30px]
            md:bottom-[60px]
            left-1/2
            -translate-x-1/2
            flex
            flex-col
            items-center
            z-30
          "
        >
          <div className="absolute w-[130px] h-[130px] rounded-full bg-[#c43b3b]/10 blur-2xl" />

          <motion.button
            whileTap={{
              scale: 0.92,
            }}
            whileHover={{
              scale: 1.05,
            }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(196,59,59,0.2)",
                "0 0 60px rgba(196,59,59,0.4)",
                "0 0 0px rgba(196,59,59,0.2)",
              ],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            onClick={() => navigate("/intro")}
            className="
              relative
              w-[82px]
              h-[82px]
              md:w-[100px]
              md:h-[100px]
              rounded-full
              bg-white/70
              backdrop-blur-md
              border
              border-white/40
              flex
              items-center
              justify-center
            "
          >
            <Fingerprint
              size={42}
              className="text-[#c43b3b]"
              strokeWidth={1.4}
            />
          </motion.button>

          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              mt-5
              text-[11px]
              md:text-sm
              tracking-[0.28em]
              uppercase
              text-[#9d9188]
              text-center
              leading-relaxed
            "
          >
            put your finger here
            <br />
            to see what else I have got for you
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* PHOTO CARD */

function PhotoCard({
  image,
  rotate,
  initialRotate,
  floatY,
}) {
  return (
    <motion.div
      initial={{
        y: 260,
        rotate: initialRotate,
        opacity: 0,
      }}
      animate={{
        y: floatY,
        rotate:
          rotate === "-7deg"
            ? [-7, -8, -7]
            : [7, 8, 7],
        opacity: 1,
      }}
      transition={{
        delay: 1.8,
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -14,
        scale: 1.04,
        filter: "brightness(1.05)",
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={`
        relative

        w-[145px]
        h-[200px]

        md:w-[340px]
        md:h-[450px]

        bg-white
        p-[7px]
        md:p-3

        shadow-[0_25px_60px_rgba(0,0,0,0.16)]

        rotate-[${rotate}]
      `}
    >
      {/* SHIMMER */}
      <motion.div
        animate={{
          x: ["-120%", "220%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-0
          left-0
          w-[40%]
          h-full
          bg-white/20
          skew-x-12
          blur-md
          z-10
        "
      />

      <motion.img
        src={image}
        alt=""
        animate={{
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full object-cover"
      />

      <div className="h-[18px] md:h-[32px] bg-white" />
    </motion.div>
  );
}

/* LETTER */

function Letter({ letter, rotate, y, delay }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
        rotate: rotate * 1.5,
        scale: 0.7,
      }}
      animate={{
        opacity: 1,
        y: [y, y - 3, y],
        rotate: [rotate, rotate + 1.5, rotate],
        scale: 1,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        y: y - 10,
        rotate: rotate + 3,
        scale: 1.03,
      }}
      className="relative mx-[4px] md:mx-[5px]"
    >
      {/* TAPE */}
      <motion.div
        animate={{
          rotate: [-6, -2, -6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-2
          left-1/2
          -translate-x-1/2
          w-6
          h-3
          bg-white/30
          rotate-[-6deg]
          blur-[1px]
        "
      />

      <div
        className="
          relative
          px-4
          py-2
          md:px-6
          md:py-3

          bg-[#f4efe4]

          border
          border-[#ddd6c9]

          shadow-[0_8px_18px_rgba(0,0,0,0.06)]

          overflow-hidden
          backdrop-blur-sm
        "
        style={{
          clipPath:
            "polygon(4% 0%, 96% 2%, 100% 18%, 98% 100%, 5% 98%, 0% 20%)",
        }}
      >
        {/* NOTEBOOK LINES */}
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-full border-t border-[#c8c1b5]"
              style={{
                marginTop: `${i * 9}px`,
              }}
            />
          ))}
        </div>

        {/* GRAIN */}
        <div className="absolute inset-0 opacity-[0.03] bg-black" />

        {/* LETTER */}
        <span
          className="
            relative
            lowercase
            text-[#c43b3b]
            text-[50px]
            md:text-[110px]
            leading-none
            select-none
          "
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            textShadow: `
              1px 1px 0 rgba(0,0,0,0.08),
              -1px -1px 0 rgba(255,255,255,0.2),
              0 6px 12px rgba(201,31,31,0.08)
            `,
          }}
        >
          {letter}
        </span>
      </div>
    </motion.div>
  );
}

/* HAPPY */

const topRotate = [-18, -8, 0, 8, 18];

const topY = [10, -2, -10, -2, 10];

/* ANNIVERSARY */

const bottomRotate = [
  -18,
  -14,
  -10,
  -6,
  -2,
  2,
  6,
  10,
  14,
  18,
  22,
];

const bottomY = [34, 24, 16, 10, 6, 4, 6, 10, 16, 24, 34];