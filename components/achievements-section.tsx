"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const certificates = [
  {
    title: "Webinar Sistem Terdistribusi dan Sistem Terdesentralisasi",
    issuer: "Fakultas Teknologi Informasi, Universitas Teknologi Digital Indonesia",
    year: "2024",
    description: "Webinar yang membahas konsep dan penerapan sistem terdistribusi serta sistem terdesentralisasi dalam teknologi informasi. Materi meliputi blockchain, IPFS (InterPlanetary File System), NFT (Non-Fungible Token), serta implementasi automation testing framework dalam konteks enterprise.",
    image: "/certificates/webinar-sistem-terdistribusi-2024.png",
    link: "/certificates/webinar-sistem-terdistribusi-2024.pdf",
    skills: [
      "Distributed Systems",
      "Decentralized Systems",
      "Blockchain",
      "IPFS",
      "NFT",
      "Automation Testing"
    ],
  },
  {
    title: "Seminar Keamanan Siber di Era Digital: Peluang dan Tantangan",
    issuer: "CyberHub & Universitas Teknologi Digital Indonesia",
    year: "2024",
    description: "Seminar yang membahas isu keamanan siber di era digital, termasuk peluang dan tantangan dalam melindungi sistem informasi. Kegiatan ini bertujuan meningkatkan pemahaman peserta mengenai pentingnya keamanan data, risiko siber, serta peran keamanan informasi dalam lingkungan akademik dan organisasi.",
    image: "/certificates/keamanan-siber-2024.png",
    link: "/certificates/keamanan-siber-2024.pdf",
    skills: [
      "Cyber Security",
      "Information Security",
      "Digital Risk Awareness",
      "Data Protection",
      "IT Security Awareness"
    ],
  },
]

export function AchievementsSection() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-foreground">SERTIFIKAT & KEGIATAN</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <Card className="h-full bg-gradient-to-br from-card/80 to-card border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all backdrop-blur-sm group overflow-hidden flex flex-col">
              {/* Certificate Image */}
              <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Year Badge Overlay */}
                <motion.div
                  className="absolute top-4 right-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge className="bg-primary text-primary-foreground shadow-lg px-3 py-1 text-sm font-bold">
                    {cert.year}
                  </Badge>
                </motion.div>

                {/* Award Icon */}
                <motion.div
                  className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="w-6 h-6 text-primary-foreground" />
                </motion.div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground font-medium">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between">
                {/* Collapsible Description */}
                <div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: selectedCert === index ? "auto" : 0,
                      opacity: selectedCert === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Badge variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Toggle Button */}
                  <motion.button
                    onClick={() => setSelectedCert(selectedCert === index ? null : index)}
                    className="text-xs text-primary font-medium hover:underline mb-4 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    {selectedCert === index ? "Sembunyikan detail ↑" : "Lihat detail →"}
                  </motion.button>
                </div>

                {/* View Certificate Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group/btn bg-transparent"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Lihat Sertifikat
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
