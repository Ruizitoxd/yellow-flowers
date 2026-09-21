// src/components/Envelope.jsx

import { motion } from "framer-motion"

function Envelope({ isClicked, onClick }) {
    return (
        <motion.div
            className={`envelope-wrapper ${isClicked ? "clicked" : ""}`}
            onClick={onClick}
            animate={
                isClicked
                    ? {
                          scale: 1.08,
                          y: -20,
                      }
                    : {
                          scale: 1,
                          y: 0,
                      }
            }
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <motion.div
                className="envelope"
                animate={
                    isClicked
                        ? {
                              rotate: 0,
                          }
                        : {
                              rotate: [0, -1.5, 1.5, -1.5, 0],
                          }
                }
                transition={
                    isClicked
                        ? {
                              duration: 0.5,
                          }
                        : {
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                          }
                }
            >
                <div className="envelope-body" />

                <motion.div
                    className="envelope-flap"
                    animate={
                        isClicked
                            ? {
                                  rotateX: 180,
                              }
                            : {
                                  rotateX: 0,
                              }
                    }
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                <div className="envelope-paper">
                    <span>Para ti 💛</span>
                </div>

                <motion.div
                    className="lock"
                    animate={
                        isClicked
                            ? {
                                  scale: 0.9,
                                  rotate: -10,
                              }
                            : {
                                  scale: 1,
                                  rotate: 0,
                              }
                    }
                >
                    🔒
                </motion.div>
            </motion.div>

            {!isClicked && (
                <motion.p
                    className="envelope-hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    Haz clic en el sobre
                </motion.p>
            )}
        </motion.div>
    )
}

export default Envelope
