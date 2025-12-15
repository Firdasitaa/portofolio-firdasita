"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section className="pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.01, y: -4 }}>
        <Card className="bg-primary/5 border-2 border-primary/20 hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:+6285726287647"
                  className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors cursor-pointer block"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">0857-2628-7647</p>
                  </div>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="mailto:firdasitalailyshafiraa@gmail.com"
                  className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors cursor-pointer block"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">firdasitalailyshafiraa@gmail.com</p>
                  </div>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://www.linkedin.com/in/firdasita-laily-shafira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors cursor-pointer block"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Linkedin className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">Firdasita Laily Shafira</p>
                  </div>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://github.com/Firdasitaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors cursor-pointer block"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Github className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">GitHub</h3>
                    <p className="text-sm text-muted-foreground">Firdasitaa</p>
                  </div>
                </a>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
