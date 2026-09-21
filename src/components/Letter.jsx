// src/components/Letter.jsx

import { motion } from "framer-motion"

function Letter() {
    return (
        <section className="letter-page">
            <motion.article
                className="letter"
                initial={{
                    opacity: 0,
                    y: 80,
                    scale: 0.95,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <div className="letter-decoration top-left">✿</div>
                <div className="letter-decoration top-right">✿</div>

                <header className="letter-header">
                    <span>21 de septiembre</span>

                    <h1>Para ti, mi amor 💛</h1>

                    <div className="letter-line" />
                </header>

                <div className="letter-content">
                    <p>Hola, mi niña.</p>

                    <p>
                        Si estás leyendo esto significa que lograste abrir la
                        carta... aunque primero tuviste que descubrir la
                        contraseña. 🤭
                    </p>

                    <p>
                        Pero bueno, ahora sí... tengo algo que quiero decirte.
                    </p>

                    <div className="letter-space">↓</div>

                    <p>
                        Esta es solamente una pequeña prueba de lo que vamos a
                        construir juntos en esta página.
                    </p>

                    <p className="letter-final">
                        Y al final habrá algo amarillo esperándote... 🌼
                    </p>
                </div>

                <footer className="letter-footer">
                    <span>Con mucho amor</span>
                    <strong>💛</strong>
                </footer>
            </motion.article>
        </section>
    )
}

export default Letter
