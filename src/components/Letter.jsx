import { motion } from "framer-motion"

const letterSections = [
    {
        type: "intro",
        text: "Hola, querida 💛",
    },
    {
        type: "text",
        text: "Oye, sé que has tenido un día bastante largo y complicado, y que probablemente estés cansada y con ganas de descansar.",
    },
    {
        type: "text",
        text: "Y quizás hoy no pude expresarme muy bien contigo en la mañana. Quiero que sepas igual que si te escuché y estuve pensando en ti todo el día y en que podría hacer para animarte un poco.",
    },
    {
        type: "text",
        text: "Solo quiero que sepas, que a pesar de todas las cosas que puedan pasar en tu día a día, siempre estaré para ti, porque te mereces respeto, te mereces cariño, te mereces comprensión, amor y muchisimas mil cosas más. Por eso quise aprovechar la fecha para darte un pequeño detalle que espero te haga sonreír.",
    },
    {
        type: "highlight",
        text: "Porque tú eres alguien demasiado especial para mí.",
    },
    {
        type: "text",
        text: "Hay muchisimas cosas que quisiera decirte, muchas cosas que me gustan de ti y muchos momentos que guardo con muchísimo cariño que me recuerdan lo afortunado que soy de tenerte en mi vida.",
    },
    {
        type: "text",
        text: "Pero hoy solamente quería recordarte una cosa...",
    },
    {
        type: "special",
        text: "Me haces muy feliz. 💛",
    },
    {
        type: "text",
        text: "Y espero poder seguir compartiendo contigo muchísimos momentos, risas, aventuras y recuerdos que algún día podamos mirar hacia atrás y recordar con una sopa de sonrisas.",
    },
    {
        type: "ending",
        text: "Y bueno... Espero te guste esta sorpresa.",
    },
]

function Flower({ className, delay = 0 }) {
    return (
        <motion.div
            className={`flower ${className}`}
            variants={{
                hidden: {
                    opacity: 0,
                    scaleY: 0,
                },
                visible: {
                    opacity: 1,
                    scaleY: 1,
                    transition: {
                        duration: 1.4,
                        delay,
                        ease: [0.22, 1, 0.36, 1],
                    },
                },
            }}
        >
            <div className="stem">
                <div className="leaf leaf-left" />
                <div className="leaf leaf-right" />
            </div>

            <motion.div
                className="flower-head"
                initial={{
                    scale: 0,
                    rotate: -15,
                }}
                variants={{
                    hidden: {
                        scale: 0,
                    },
                    visible: {
                        scale: 1,
                        rotate: 0,
                        transition: {
                            delay: delay + 0.9,
                            duration: 0.7,
                            type: "spring",
                            stiffness: 180,
                            damping: 10,
                        },
                    },
                }}
            >
                <span className="petal petal-1" />
                <span className="petal petal-2" />
                <span className="petal petal-3" />
                <span className="petal petal-4" />
                <span className="petal petal-5" />
                <span className="petal petal-6" />
                <span className="petal petal-7" />
                <span className="petal petal-8" />

                <span className="flower-center" />
            </motion.div>
        </motion.div>
    )
}

function AnimatedSection({ children, className = "" }) {
    return (
        <motion.div
            className={`letter-section ${className}`}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.35,
            }}
            transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    )
}

function Letter() {
    return (
        <div className="letter-experience">
            {/* =====================================
          INTRO
      ===================================== */}

            <section className="letter-cover">
                <motion.div
                    className="cover-decoration"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    ✿
                </motion.div>

                <motion.span
                    className="cover-date"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    21 de septiembre
                </motion.span>

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.7,
                        duration: 0.9,
                    }}
                >
                    Para mi niña
                </motion.h1>

                <motion.div
                    className="cover-heart"
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        delay: 1,
                        duration: 0.8,
                    }}
                >
                    💛
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    animate={{
                        y: [0, 8, 0],
                    }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <span>Hay algo que quiero decirte</span>
                    <span className="scroll-arrow">↓</span>
                </motion.div>
            </section>

            {/* =====================================
                    CARTA
                ===================================== */}

            <section className="letter-content-page">
                <div className="letter-paper">
                    <div className="letter-paper-decoration top">✿</div>

                    <header className="letter-header">
                        <span>21 de septiembre</span>

                        <h2>Para ti, mi amor</h2>

                        <div className="letter-line" />
                    </header>

                    <div className="letter-body">
                        {letterSections.map((section, index) => {
                            if (section.type === "intro") {
                                return (
                                    <AnimatedSection
                                        key={index}
                                        className="section-intro"
                                    >
                                        <p>{section.text}</p>
                                    </AnimatedSection>
                                )
                            }

                            if (section.type === "highlight") {
                                return (
                                    <AnimatedSection
                                        key={index}
                                        className="section-highlight"
                                    >
                                        <div className="highlight-box">
                                            <span>✦</span>

                                            <p>{section.text}</p>

                                            <span>✦</span>
                                        </div>
                                    </AnimatedSection>
                                )
                            }

                            if (section.type === "special") {
                                return (
                                    <AnimatedSection
                                        key={index}
                                        className="section-special"
                                    >
                                        <span className="special-flower">
                                            ─── ⋆⋅☆⋅⋆ ───
                                        </span>

                                        <p>{section.text}</p>

                                        <span className="special-flower">
                                            ─── ⋆⋅☆⋅⋆ ───
                                        </span>
                                    </AnimatedSection>
                                )
                            }

                            if (section.type === "ending") {
                                return (
                                    <AnimatedSection
                                        key={index}
                                        className="section-ending"
                                    >
                                        <p>{section.text}</p>

                                        <div className="ending-arrow">↓</div>
                                    </AnimatedSection>
                                )
                            }

                            return (
                                <AnimatedSection key={index}>
                                    <p>{section.text}</p>
                                </AnimatedSection>
                            )
                        })}

                        {/* =================================
                                FIRMA
                            ================================= */}

                        <AnimatedSection className="letter-signature">
                            <p>Con mucho amor,</p>

                            <span>💛</span>

                            <strong>Alguien que te quiere</strong>
                        </AnimatedSection>
                    </div>

                    <div className="letter-paper-decoration bottom">✿</div>
                </div>
            </section>

            {/* =====================================
                    TRANSICIÓN A LAS FLORES
                ===================================== */}

            <section className="flower-transition">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <h2>Hay algo que quiero regalarte.</h2>

                    <div className="transition-heart">💛</div>
                </motion.div>
            </section>

            {/* =====================================
                    FLORES
                ===================================== */}

            <section className="flowers-section">
                <motion.div
                    className="flower-message"
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.4,
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <p>Con mucho cariño...</p>

                    <h2>Para ti, mi niña 💛</h2>

                    <span>
                        Porque si una flor te saca una sonrisa te mereces todas las flores bonitas del mundo.
                    </span>
                </motion.div>

                <motion.div
                    className="flowers-field"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                >
                    <div className="ground" />

                    <Flower className="flower-1" delay={0.1} />
                    <Flower className="flower-2" delay={0.35} />
                    <Flower className="flower-3" delay={0.6} />
                    <Flower className="flower-4" delay={0.25} />
                    <Flower className="flower-5" delay={0.8} />
                    <Flower className="flower-6" delay={0.45} />
                    <Flower className="flower-7" delay={1} />
                    <Flower className="flower-8" delay={0.7} />

                    <div className="grass grass-1" />
                    <div className="grass grass-2" />
                    <div className="grass grass-3" />
                </motion.div>
            </section>
        </div>
    )
}

export default Letter
