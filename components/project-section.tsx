"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Figma } from "lucide-react"

const projects = [
  {
    title: "Desain UI Pemesanan Kamar Hotel",
    description: "Merancang antarmuka pengguna untuk aplikasi pemesanan kamar hotel, mulai dari halaman depan hingga logout.",
    image: "/projects/project1.png", 
    link: "https://www.figma.com/proto/RHzYA0pXjSQuZxmQ8H8HEC/UI-UX-PERHOTELAN?node-id=8-3&t=bk8n4u5DLVJqKF4K-1",
    icon: "figma",
  },
  {
    title: "Aplikasi Web CRUD Sederhana - Pemesanan Kamar Hotel",
    description: "Aplikasi web CRUD (Create, Read, Update, Delete) yang memungkinkan pengguna atau admin mengelola data pemesanan kamar hotel secara digital. Teknologi yang Digunakan : HTML, CSS, PHP, MySQL, XAMPP",
    image: "/projects/project2.png", 
    link: "https://github.com/Firdasitaa/Pemesanan-Kamar",
    icon: "github",
  },
  {
    title: "Web Portofolio",
    description: "Website portofolio pribadi yang menampilkan profil, proyek, dan keahlian sebagai media personal branding.",
    image: "/projects/project3.png", 
    link: "https://github.com/Firdasitaa/portofolio-firdasita",
    icon: "github",
  },
  {
    title: "QR Code - Testing",
    description: "Implementasi awal fitur QR Code reader pada aplikasi web untuk membaca dan menampilkan isi QR Code sebagai dasar pengembangan fitur lanjutan.",
    image: "/projects/project4.png",
    link: "https://github.com/Firdasitaa/qrcode-testing",
    icon: "github",
  },
]

export function ProjectSection() {
  return (
    <section>
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Proyek yang pernah <span className="text-primary">dikerjakan</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <Card className="h-full bg-gradient-to-b from-card/50 to-card border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all backdrop-blur-sm group overflow-hidden flex flex-col">
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between">
                <CardDescription className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </CardDescription>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group/btn bg-transparent"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.icon === "figma" ? (
                        <Figma className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      ) : (
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      )}
                      Link Project
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
