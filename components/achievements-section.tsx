"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const certificates = [
  {
    title: "Professional Web Developer Certificate",
    issuer: "Tech Institute",
    year: "2023",
  },
  {
    title: "UI/UX Design Certification",
    issuer: "Design Academy",
    year: "2022",
  },
]

export function AchievementsSection() {
  const [clickedCerts, setClickedCerts] = useState<Set<number>>(new Set())

  const handleCertClick = (index: number) => {
    setClickedCerts((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-foreground">SERTIFIKAT</h2>
      </div>

      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
        <Card className="border-2 border-primary/10 shadow-md hover:shadow-xl transition-shadow">
          <CardContent className="p-6 space-y-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 pb-4 border-b border-border last:border-0 last:pb-0 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 8, backgroundColor: "hsl(var(--primary) / 0.05)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCertClick(index)}
                style={{ borderRadius: "8px", padding: "12px", margin: "-12px" }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    clickedCerts.has(index) ? "bg-primary" : "bg-primary/20"
                  }`}
                  animate={
                    clickedCerts.has(index)
                      ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 360],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <Award
                    className={`w-6 h-6 ${clickedCerts.has(index) ? "text-primary-foreground" : "text-primary"}`}
                  />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center gap-4 flex-wrap">
                    <div className="min-w-0">
                      <h3 className="font-bold text-foreground text-base">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{cert.issuer}</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground whitespace-nowrap">
                        {cert.year}
                      </Badge>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
