"use client"

import { Badge } from "@/components/ui/badge"
import { Mail, Globe } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-accent/30 via-primary/20 to-background py-20 px-4 overflow-hidden">
            <motion.div
                className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-primary/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                        {/* Profile Image */}
                        <motion.div
                            className="relative mx-auto md:mx-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary via-accent to-chart-3 p-1 shadow-xl">
                                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                                    <img
                                        src="/foto.jpeg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Hero Content */}
                        <div className="space-y-6 text-center md:text-left">
                            <motion.div
                                className="space-y-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="space-y-2">
                                    <h1 className="text-4xl md:text-5xl font-bold text-balance">
                                        Hi! I'm <span className="text-primary">Firdasita Laily Shafira</span>
                                    </h1>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-1.5 cursor-pointer">

                                        </Badge>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.p
                                className="text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto md:mx-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                Mahasiswa Sistem Informasi yang tertarik pada pengembangan sistem berbasis teknologi 
                                informasi untuk mendukung kebutuhan bisnis dan organisasi. Memiliki pengalaman dalam 
                                analisis kebutuhan sistem, perancangan database, serta pengembangan aplikasi berbasis web.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
