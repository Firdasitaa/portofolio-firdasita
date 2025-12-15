"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"

const education = [
  {
    school: "SMA Negeri 1 Prambanan",
    years: "2019 - 2022",
    degree: "Ilmu Pengetahuan Alam",
  },
  {
    school: "Universitas Teknologi Digital Indonesia",
    years: "2023 - Sekarang",
    degree: "Sistem Informasi",
  },
]

export function EducationSection() {
  const [selectedEdu, setSelectedEdu] = useState<number | null>(null)

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-foreground">PENDIDIKAN</h2>
      </div>

      <div className="relative space-y-6">
        {/* Timeline dots */}
        <motion.div
          className="absolute left-4 top-0 bottom-0 w-px bg-primary/30 hidden md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="relative pl-0 md:pl-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {/* Timeline dot */}
            <motion.div
              className="hidden md:block absolute left-2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 200 }}
              animate={
                selectedEdu === index
                  ? {
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 0 0 hsl(var(--primary) / 0.4)",
                        "0 0 0 8px hsl(var(--primary) / 0)",
                        "0 0 0 0 hsl(var(--primary) / 0)",
                      ],
                      transition: { duration: 0.6, repeat: Number.POSITIVE_INFINITY },
                    }
                  : {}
              }
            />

            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedEdu(selectedEdu === index ? null : index)}
            >
              <Card
                className={`border-2 shadow-md cursor-pointer transition-all ${
                  selectedEdu === index
                    ? "border-primary shadow-xl shadow-primary/20"
                    : "border-primary/10 hover:shadow-lg"
                }`}
              >
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-1">{edu.school}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{edu.years}</p>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
