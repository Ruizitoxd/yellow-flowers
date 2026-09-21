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

    const handleDateChange = (e) => {
        // 1. Eliminar todo lo que no sea un dígito numérico (esto maneja si el usuario teclea "2106..." o "21/06...")
        let rawValue = e.target.value.replace(/\D/g, "")

        // 2. Limitar la longitud máxima a 8 dígitos (DDMMYYYY)
        rawValue = rawValue.substring(0, 8)

        // 3. Aplicar las barras "/" automáticamente usando Regex mientras se escribe
        let formattedValue = rawValue

        if (rawValue.length > 4) {
            // Formato para cuando ya hay más de 4 números: DD/MM/YYYY
            formattedValue = rawValue.replace(
                /^(\d{2})(\d{2})(\d{1,4})/,
                "$1/$2/$3",
            )
        } else if (rawValue.length > 2) {
            // Formato para cuando hay entre 3 y 4 números: DD/MM
            formattedValue = rawValue.replace(/^(\d{2})(\d{1,2})/, "$1/$2")
        }

        // 4. Actualizar el estado
        setPassword(formattedValue)
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
                            handleDateChange(event)
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
