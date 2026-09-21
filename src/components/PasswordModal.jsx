// src/components/PasswordModal.jsx

import { useState } from "react"
import { motion } from "framer-motion"

const PASSWORD = "21/09/2026"

function PasswordModal({ onUnlock }) {
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (password === PASSWORD) {
            setError(false)
            onUnlock()
            return
        }

        setError(true)
        setPassword("")
    }

    return (
        <motion.div
            className="password-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                className="password-card"
                initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 30,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <div className="password-icon">🔐</div>

                <h2>Una pequeña pista...</h2>

                <p>
                    Esta carta solo puede abrirse
                    <br />
                    con una fecha especial.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
                            setError(false)
                        }}
                        placeholder="DD/MM/AAAA"
                        maxLength={10}
                        autoFocus
                    />

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Abrir mi carta 💛
                    </motion.button>
                </form>

                <motion.div
                    className="password-error"
                    animate={{
                        opacity: error ? 1 : 0,
                        y: error ? 0 : -5,
                    }}
                >
                    Esa no es la fecha... intenta otra vez 🌼
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default PasswordModal
