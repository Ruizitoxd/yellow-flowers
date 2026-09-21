import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import Envelope from "./components/Envelope"
import PasswordModal from "./components/PasswordModal"
import Letter from "./components/Letter"

function App() {
    const [isEnvelopeClicked, setIsEnvelopeClicked] = useState(false)
    const [isUnlocked, setIsUnlocked] = useState(false)

    const handleEnvelopeClick = () => {
        setIsEnvelopeClicked(true)
    }

    const handleUnlock = () => {
        setIsUnlocked(true)
    }

    return (
        <main className="app">
            <div className="background-glow glow-one" />
            <div className="background-glow glow-two" />
            <div className="background-glow glow-three" />

            <AnimatePresence mode="wait">
                {!isUnlocked ? (
                    <motion.div
                        key="envelope-screen"
                        className="envelope-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="intro-text"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <p>Hay algo especial para ti...</p>
                            <span>💛</span>
                        </motion.div>

                        <Envelope
                            isClicked={isEnvelopeClicked}
                            onClick={handleEnvelopeClick}
                        />

                        <AnimatePresence>
                            {isEnvelopeClicked && (
                                <PasswordModal onUnlock={handleUnlock} />
                            )}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div
                        key="letter-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Letter />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}

export default App
