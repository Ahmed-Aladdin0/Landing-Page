import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

export default function StatisticsSection() {
    const statisticsItems = [
        { id: 1, title: "35", suffix: "+", description: "Cities Using Citio", duration: 2 },
        { id: 2, title: "2.4", suffix: "M+", description: "Active Residents", duration: 2.5 },
        { id: 3, title: "45", suffix: "k+", description: "Service Providers", duration: 2.2 },
        { id: 4, title: "92", suffix: "%", description: "Satisfaction Rate", duration: 2.8 },
    ];

    // Counter component
    function Counter({ value, suffix, duration }) {
        const count = useMotionValue(0);
        const rounded = useTransform(count, (latest) => {
            return value.includes('.') 
                ? latest.toFixed(1) 
                : Math.round(latest);
        });
        const ref = useRef(null);
        const inView = useInView(ref, { once: true });

        useEffect(() => {
            if (inView) {
                const controls = animate(count, parseFloat(value), { 
                    duration,
                    ease: "easeOut"
                });
                return controls.stop;
            }
        }, [inView, value, count, duration]);

        return (
            <span ref={ref}>
                <motion.span>{rounded}</motion.span>{suffix}
            </span>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            style={{
                background: '#2563eb',
                padding: '54px 0 54px 0',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                position: 'relative',
                overflow: 'hidden'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Animated background patterns */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-10%',
                    width: '120%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
                }}
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <motion.div 
                className="container mb-5"
                variants={containerVariants}
            >
                <div className="row justify-content-center">
                    {statisticsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center"
                            variants={itemVariants}
                        >
                            <motion.div 
                                className="text-center position-relative"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Glowing effect */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '100px',
                                        height: '100px',
                                        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                                        borderRadius: '50%',
                                        filter: 'blur(20px)',
                                    }}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.2
                                    }}
                                />

                                <motion.div
                                    style={{
                                        fontSize: '2.3rem',
                                        fontWeight: 800,
                                        letterSpacing: 0.5,
                                        color: '#fff',
                                        marginBottom: 8,
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                >
                                    <Counter 
                                        value={item.title} 
                                        suffix={item.suffix} 
                                        duration={item.duration}
                                    />
                                </motion.div>
                                
                                <motion.div
                                    style={{
                                        fontSize: '1.1rem',
                                        color: '#e3e7f0',
                                        letterSpacing: 0.1,
                                        fontWeight: 500,
                                        minHeight: 33,
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 + 0.5 }}
                                >
                                    {item.description}
                                </motion.div>

                                {/* Decorative line */}
                                <motion.div
                                    style={{
                                        width: '50px',
                                        height: '3px',
                                        background: 'rgba(255,255,255,0.3)',
                                        margin: '15px auto 0',
                                        borderRadius: '2px'
                                    }}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ 
                                        delay: index * 0.2 + 0.8,
                                        duration: 0.5
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Wave decoration at bottom */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 80\'%3E%3Cpath fill=\'rgba(255,255,255,0.1)\' d=\'M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z\'/%3E%3C/svg%3E")',
                    backgroundSize: 'cover'
                }}
                animate={{
                    x: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </motion.div>
    );
}