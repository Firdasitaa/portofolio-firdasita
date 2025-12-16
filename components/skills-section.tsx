"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"

const skillTags = ["Komunikatif", "Kerja Sama Tim", "Adaptif", "Teliti", "Tanggung Jawab", "Manajemen Waktu", "Inisiatif Belajar Tinggi"]

const hardSkills = {
  webDevelopment: [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "phpMyAdmin", icon: "https://www.phpmyadmin.net/static/images/logo.png" },
    { name: "XAMPP", icon: "https://cdn.simpleicons.org/xampp/FB7A24" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
  ],
  organization: [
    { name: "Word", icon: "https://img.icons8.com/color/96/microsoft-word-2019--v2.png" },
    { name: "Excel", icon: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png" },
    { name: "Google Drive", icon: "https://img.icons8.com/color/96/google-drive--v1.png" },
    { name: "PowerPoint", icon: "https://img.icons8.com/color/96/microsoft-powerpoint-2019--v1.png" }
  ],
  design: [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
  ]
}

export function SkillsSection() {
  const [clickedBadges, setClickedBadges] = useState<Set<string>>(new Set())

  const handleBadgeClick = (tag: string) => {
    setClickedBadges((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(tag)) {
        newSet.delete(tag)
      } else {
        newSet.add(tag)
      }
      return newSet
    })
  }

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-foreground">KEAHLIAN</h2>
      </div>

      <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
        <Card className="border-2 border-primary/10 shadow-md hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Soft Skill</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {skillTags.map((tag) => (
                <motion.div
                  key={tag}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.9, rotate: -3 }}
                  animate={
                    clickedBadges.has(tag)
                      ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 0.3 }}
                >
                  <Badge
                    className={`cursor-pointer px-4 py-2 transition-all ${
                      clickedBadges.has(tag)
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                    onClick={() => handleBadgeClick(tag)}
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Hard Skill Section */}
      <motion.div 
        className="mt-8"
        whileHover={{ scale: 1.01 }} 
        transition={{ duration: 0.2 }}
      >
        <Card className="border-2 border-primary/10 shadow-md hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Hard Skill</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Pengembangan Web & CRUD */}
            <div>
              <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">•</span>
                Pengembangan Web & CRUD
              </h3>
              <div className="flex flex-wrap gap-4">
                {hardSkills.webDevelopment.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors cursor-pointer min-w-[80px]"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                    <span className="text-xs text-center text-muted-foreground font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Organisasi */}
            <div>
              <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">•</span>
                Organisasi
              </h3>
              <div className="flex flex-wrap gap-4">
                {hardSkills.organization.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors cursor-pointer min-w-[80px]"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                    <span className="text-xs text-center text-muted-foreground font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desain UI/UX */}
            <div>
              <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">•</span>
                Desain UI/UX
              </h3>
              <div className="flex flex-wrap gap-4">
                {hardSkills.design.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors cursor-pointer min-w-[80px]"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                    <span className="text-xs text-center text-muted-foreground font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
