import { motion } from "framer-motion"

function Envelope({ onClick, isOpening = false, isUnlocked = false }) {
    const isAnimated = isOpening || isUnlocked

    return (
        <motion.div
            className={`envelope-wrapper ${
                isUnlocked ? "envelope-unlocked" : ""
            }`}
            onClick={onClick}
            initial={{
                opacity: 1,
                scale: 1,
            }}
            animate={
                isUnlocked
                    ? {
                          x: "120vw",
                          opacity: 0,
                          rotate: 8,
                      }
                    : isOpening
                      ? {
                            scale: 1.06,
                            y: -10,
                        }
                      : {
                            scale: 1,
                            y: 0,
                        }
            }
            transition={
                isUnlocked
                    ? {
                          duration: 1.2,
                          ease: [0.65, 0, 0.35, 1],
                          delay: 1.2,
                      }
                    : {
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                      }
            }
        >
            <motion.div
                className="envelope"
                animate={
                    isOpening
                        ? {
                              y: -10,
                          }
                        : {
                              y: 0,
                          }
                }
                transition={{
                    duration: 0.5,
                }}
            >
                {/* CUERPO */}
                <div className="envelope-body" />

                {/* PAPEL */}
                <motion.div
                    className="envelope-paper"
                    animate={
                        isUnlocked
                            ? {
                                  y: -150,
                                  scaleY: 1.08,
                                  scaleX: 0.9,
                              }
                            : isOpening
                              ? {
                                    y: -45,
                                }
                              : {
                                    y: 0,
                                }
                    }
                    transition={{
                        duration: isUnlocked ? 1.2 : 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <span>Para ti 💛</span>
                </motion.div>

                {/* SOLAPA */}
                <motion.div
                    className="envelope-flap"
                    animate={
                        isAnimated
                            ? {
                                  rotateX: 180,
                              }
                            : {
                                  rotateX: 0,
                              }
                    }
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                {/* CANDADO */}
                <motion.div
                    className="lock"
                    animate={
                        isOpening
                            ? {
                                  scale: 0,
                                  opacity: 0,
                                  rotate: -30,
                              }
                            : {
                                  scale: 1,
                                  opacity: 1,
                                  rotate: 0,
                              }
                    }
                    transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {isOpening ? "🔓" : "🔒"}
                </motion.div>
            </motion.div>

            {!isAnimated && (
                <motion.p
                    className="envelope-hint"
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.8,
                    }}
                >
                    Haz clic en el sobre
                </motion.p>
            )}
        </motion.div>
    )
}

export default Envelope
