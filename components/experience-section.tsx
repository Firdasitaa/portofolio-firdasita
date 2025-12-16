"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Award, Users, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const experiences = [
  {
    title: "Sekretaris Umum",
    organization: "UKM WAMIKA, Universitas Teknologi Digital Indonesia",
    period: "2024 - 2025",
    description: [
      "Bertanggung jawab atas pengelolaan surat resmi dan notulen rapat kegiatan organisasi.",
      "Membantu koordinasi acara keislaman seperti kajian pelatihan, dan peringatan hari besar Islam.",
      "Menyusun dan menyimpan data kegiatan UKM secara terstruktur."
    ],
    icon: Briefcase,
    color: "bg-blue-500",
  },
 {
    title: "Sekretaris Umum",
    organization: "Organisasi Kepemudaan Sinar Muda, Karanggede Prambanan",
    period: "2022 - Sekarang",
    description: [
      "Mengelola administrasi surat menyurat dan notulensi rapat secara rutin.",
      "Mencatat dan mengarsipkan dokumen kegiatan serta mendukung koordinasi internal organisasi.",
      "Terlibat aktif dalam kegiatan sosial dan budaya seperti senam bersama dan pentas seni HUT RI ke-79."
    ],
    icon: Briefcase,
    color: "bg-orange-500",
  },
  {
    title: "Departemen Informasi & Pers",
    organization: "UKM WAMIKA, Universitas Teknologi Digital Indonesia",
    period: "2025 - Sekarang",
     description: [
      "Merencanakan, mengatur dan melaksanakan kegiatan yang berkaitan dengan informasi dan pers atas pertimbangan Wakil Ketua.",
      "Mengevaluasi serta mengembangkan kegiatan informasi dan pers dalam departemen.",
      "Melaporkan serta bertanggungjawab terhadap hal-hal yang berkaitan dengan bidang informasi dan pers kepada Wakil Ketua."
    ],
    icon: Briefcase,
    color: "bg-green-500",
  },
]

export function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<number | null>(null)

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-foreground">PENGALAMAN</h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex gap-6 items-start">
                {/* Timeline dot */}
                <motion.div
                  className="hidden md:flex relative z-10"
                  whileHover={{ scale: 1.3 }}
                  animate={
                    selectedExp === index
                      ? {
                          scale: [1, 1.3, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(var(--primary-rgb), 0.4)",
                            "0 0 0 10px rgba(var(--primary-rgb), 0)",
                            "0 0 0 0 rgba(var(--primary-rgb), 0)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 0.6, repeat: selectedExp === index ? Infinity : 0 }}
                >
                  <div className={`w-16 h-16 rounded-full ${exp.color} flex items-center justify-center shadow-lg`}>
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedExp(selectedExp === index ? null : index)}
                >
                  <Card
                    className={`border-2 shadow-md cursor-pointer transition-all overflow-hidden ${
                      selectedExp === index
                        ? "border-primary shadow-2xl shadow-primary/30 bg-primary/5"
                        : "border-primary/10 hover:shadow-xl hover:border-primary/30"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1 min-w-[200px]">
                          <motion.h3
                            className="text-xl font-bold text-foreground mb-1"
                            animate={selectedExp === index ? { color: "hsl(var(--primary))" } : {}}
                          >
                            {exp.title}
                          </motion.h3>
                          <p className="text-sm font-medium text-primary mb-1">{exp.organization}</p>
                          <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                        </div>
                        
                        {/* Mobile icon */}
                        <motion.div
                          className={`md:hidden w-12 h-12 rounded-full ${exp.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <exp.icon className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: selectedExp === index ? "auto" : 0,
                          opacity: selectedExp === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-border">
                          {Array.isArray(exp.description) ? (
                            <ul className="space-y-2">
                              {exp.description.map((point, i) => (
                                <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                          )}
                        </div>
                      </motion.div>

                      {selectedExp !== index && (
                        <motion.p
                          className="text-xs text-primary mt-2 font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          Klik untuk detail →
                        </motion.p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
