"use client"

import { HeroSection } from "@/components/hero-section"
import { ProjectSection } from "@/components/project-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { motion } from "framer-motion"

export default function PortfolioPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <motion.div
        className="container mx-auto px-4 py-12 space-y-16 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
          <ProjectSection />
        </motion.div>
        <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
          <SkillsSection />
        </motion.div>
        <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
          <EducationSection />
        </motion.div>
        <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
          <ExperienceSection />
        </motion.div>
        <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
          <AchievementsSection />
        </motion.div>
        <motion.div variants={itemVariants} transition={{ duration: 0.6 }}>
          <ContactSection />
        </motion.div>
      </motion.div>
    </main>
  )
}
