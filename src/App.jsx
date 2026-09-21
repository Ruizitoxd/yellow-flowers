import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import Envelope from "./components/Envelope"
import PasswordModal from "./components/PasswordModal"
import Letter from "./components/Letter"

function App() {
    const [stage, setStage] = useState("envelope")

    const handleEnvelopeClick = () => {
        setStage("password")
    }

    const handleUnlock = () => {
        setStage("opening")

        // Tiempo para disfrutar la animación
        // antes de mostrar la carta.
        setTimeout(() => {
            setStage("letter")
        }, 2400)
    }

    return (
        <main className={`app stage-${stage}`}>
            <div className="background-glow glow-one" />
            <div className="background-glow glow-two" />
            <div className="background-glow glow-three" />

            <AnimatePresence mode="wait">
                {stage === "envelope" && (
                    <motion.div
                        key="envelope"
                        className="envelope-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="intro-text"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.8,
                            }}
                        >
                            <p>Hay algo especial para ti...</p>
                            <span>💛</span>
                        </motion.div>

                        <Envelope onClick={handleEnvelopeClick} />
                    </motion.div>
                )}

                {stage === "password" && (
                    <motion.div
                        key="password"
                        className="envelope-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Envelope isOpening onClick={() => {}} />

                        <PasswordModal onUnlock={handleUnlock} />
                    </motion.div>
                )}

                {stage === "opening" && (
                    <motion.div
                        key="opening"
                        className="envelope-screen opening-screen"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                    >
                        <Envelope isUnlocked />
                    </motion.div>
                )}

                {stage === "letter" && (
                    <motion.div
                        key="letter"
                        initial={{
                            opacity: 0,
                            scale: 0.97,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <Letter />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}

export default App
