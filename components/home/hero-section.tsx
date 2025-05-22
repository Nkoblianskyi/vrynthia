"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [warningOpen, setWarningOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleStartGame = () => {
    setWarningOpen(true)
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-forest-800 via-forest-700 to-forest-600">
      {/* Enhanced Background Animation */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-forest-900/30 to-forest-800/50"
          animate={{
            background: [
              "linear-gradient(to bottom, rgba(27, 38, 30, 0.3), rgba(22, 31, 24, 0.5))",
              "linear-gradient(to bottom, rgba(32, 46, 36, 0.4), rgba(27, 38, 30, 0.6))",
              "linear-gradient(to bottom, rgba(27, 38, 30, 0.3), rgba(22, 31, 24, 0.5))",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />

        {/* Animated stars/fireflies */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute rounded-full bg-yellow-200"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
                repeatDelay: Math.random() * 7,
              }}
            />
          ))}
        </div>

        {/* Animated fog layers */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`fog-${i}`}
            className="absolute bottom-0 w-full h-[25%]"
            style={{
              bottom: `${i * 10}%`,
              opacity: 0.15 - i * 0.03,
            }}
            initial={{ x: i % 2 === 0 ? "-100%" : "100%" }}
            animate={{ x: i % 2 === 0 ? "100%" : "-100%" }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 120 + i * 40,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <div
              className="w-[200%] h-full bg-white"
              style={{
                maskImage: 'url("/mountain-silhouette.png")',
                maskSize: "cover",
                maskPosition: "center",
                WebkitMaskImage: 'url("/mountain-silhouette.png")',
                WebkitMaskSize: "cover",
                WebkitMaskPosition: "center",
              }}
            />
          </motion.div>
        ))}

        {/* Animated Mountains - Back Layer with parallax */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[40%] bg-gray-900"
          style={{
            maskImage: 'url("/mountain-silhouette.png")',
            maskSize: "cover",
            maskPosition: "bottom",
            WebkitMaskImage: 'url("/mountain-silhouette.png")',
            WebkitMaskSize: "cover",
            WebkitMaskPosition: "bottom",
          }}
          animate={{
            y: scrollY * 0.1,
            filter: ["brightness(0.8)", "brightness(0.9)", "brightness(0.8)"],
          }}
          transition={{
            y: { duration: 0.1, ease: "linear" },
            filter: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          }}
        />

        {/* Animated Trees - Middle Layer with parallax */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[30%] bg-forest-900"
          style={{
            maskImage: 'url("/forest-silhouette.png")',
            maskSize: "cover",
            maskPosition: "bottom",
            WebkitMaskImage: 'url("/forest-silhouette.png")',
            WebkitMaskSize: "cover",
            WebkitMaskPosition: "bottom",
          }}
          animate={{
            y: scrollY * 0.2,
            scale: [1, 1.01, 1],
          }}
          transition={{
            y: { duration: 0.1, ease: "linear" },
            scale: { duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          }}
        />

        {/* Animated Sun/Moon with glow effect */}
        <motion.div
          className="absolute w-20 h-20 rounded-full"
          style={{
            top: "15%",
            right: "15%",
            background:
              "radial-gradient(circle, rgba(253,224,71,1) 0%, rgba(253,224,71,0.7) 50%, rgba(253,224,71,0) 100%)",
            boxShadow: "0 0 40px rgba(253,224,71,0.4)",
          }}
          animate={{
            y: scrollY * 0.05,
            scale: [1, 1.1, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            y: { duration: 0.1, ease: "linear" },
            scale: { duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
            opacity: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          }}
        />

        {/* Animated Clouds with different speeds */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => {
            const size = Math.random() * 100 + 50
            const speed = Math.random() * 200 + 100
            const delay = Math.random() * 10
            const top = Math.random() * 30 + 5

            return (
              <motion.div
                key={`cloud-${i}`}
                className="absolute bg-white rounded-full opacity-70 blur-md"
                style={{
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size * 0.4}px`,
                }}
                initial={{ left: i % 2 === 0 ? "-20%" : "120%" }}
                animate={{ left: i % 2 === 0 ? "120%" : "-20%" }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: speed,
                  delay: delay,
                  ease: "linear",
                  repeatType: "loop",
                }}
              />
            )
          })}
        </div>

        {/* Animated Birds with random flight paths */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => {
            const size = Math.random() * 0.5 + 0.5
            const speed = Math.random() * 30 + 20
            const delay = Math.random() * 15
            const top = Math.random() * 40 + 5

            return (
              <motion.div
                key={`bird-${i}`}
                className="absolute"
                style={{
                  top: `${top}%`,
                }}
                initial={{
                  left: i % 2 === 0 ? "-5%" : "105%",
                  y: 0,
                }}
                animate={{
                  left: i % 2 === 0 ? "105%" : "-5%",
                  y: [0, -20, 10, -15, 0, 15, -10, 0],
                }}
                transition={{
                  left: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: speed,
                    delay: delay,
                    ease: "linear",
                    repeatType: "loop",
                  },
                  y: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 8,
                    ease: "easeInOut",
                    repeatType: "loop",
                  },
                }}
              >
                <svg
                  width={20 * size}
                  height={10 * size}
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M0 5 L10 0 L20 5 L10 10 Z"
                    fill="rgba(0,0,0,0.3)"
                    animate={{
                      d: ["M0 5 L10 0 L20 5 L10 10 Z", "M0 5 L10 3 L20 5 L10 7 Z", "M0 5 L10 0 L20 5 L10 10 Z"],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 h-full items-center">
          {/* Completely New Animation Style */}
          <div className="perspective-[1000px] transform-gpu">
            {/* Title with 3D rotation */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight text-center"
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{
                rotateX: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 1.2,
                },
              }}
            >
              Holz<span className="text-wood-300">unternehmer</span>
            </motion.h1>

            {/* Description with side slide */}
            <motion.div
              className="overflow-hidden mb-8"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              <p className="text-xl text-forest-100 max-w-2xl mx-auto text-center">
                Meistern Sie die Kunst der Forstwirtschaft in dieser aufregenden Soziale Plattform. Fällen Sie Bäume,
                verarbeiten Sie Holz und bauen Sie Ihr Forstimperium auf!
              </p>
            </motion.div>

            {/* Button with bounce effect */}
            <motion.div
              className="flex flex-col items-center justify-center"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  delay: 1.2,
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-wood-500 hover:bg-wood-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all mb-4"
                  onClick={handleStartGame}
                >
                  Jetzt spielen
                </Button>
              </motion.div>

              {/* 18+ notice with fade and slide */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1.5,
                    duration: 0.5,
                  },
                }}
              >
                <motion.p
                  className="text-sm font-medium text-forest-200 bg-forest-800/50 px-4 py-2 rounded-lg inline-block"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(255,255,255,0)",
                      "0 0 10px rgba(255,255,255,0.3)",
                      "0 0 0 rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  Soziale Plattform. Kein Echtgeld. Ab 18 Jahren.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Floating decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 rounded-full bg-wood-500/20"
                  initial={{
                    x: Math.random() * 100 - 50 + "%",
                    y: Math.random() * 100 - 50 + "%",
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: Math.random() * 0.5 + 0.5,
                    opacity: Math.random() * 0.3 + 0.1,
                    x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                    y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                  }}
                  transition={{
                    delay: i * 0.2 + 1.8,
                    duration: Math.random() * 10 + 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* New Scroll Indicator Design */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScrollDown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="flex flex-col items-center">
            <motion.p
              className="text-forest-200 text-sm mb-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Mehr entdecken
            </motion.p>

            <div className="relative">
              {/* Tree-shaped scroll indicator */}
              <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M20 0L0 20H8V32L0 40H40L32 32V20H40L20 0Z"
                  fill="#4d7a5e"
                  animate={{
                    fill: ["#4d7a5e", "#5d8a6e", "#4d7a5e"],
                    filter: [
                      "drop-shadow(0 0 2px rgba(255,255,255,0.2))",
                      "drop-shadow(0 0 8px rgba(255,255,255,0.4))",
                      "drop-shadow(0 0 2px rgba(255,255,255,0.2))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.circle
                  cx="20"
                  cy="24"
                  r="4"
                  fill="#b78057"
                  animate={{
                    cy: [24, 28, 24],
                    fill: ["#b78057", "#c79067", "#b78057"],
                  }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </svg>

              {/* Animated arrow */}
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ChevronDown className="h-6 w-6 text-forest-300" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Warning Modal */}
      <Dialog open={warningOpen} onOpenChange={setWarningOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-forest-500 mr-2" />
              Wichtiger Hinweis
            </DialogTitle>
            <DialogDescription>
              Bitte lesen und bestätigen Sie, bevor Sie Ihr Holzfäller-Abenteuer beginnen.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 py-4">
            <div className="bg-forest-50 p-4 rounded-md text-sm text-forest-700">
              <p className="font-bold mb-2">Dies ist eine kostenlose Soziale Plattform:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Es ist eine Simulation</li>
                <li>Es kann kein echtes Geld gewonnen oder verloren werden</li>
                <li>Es werden keine Preise angeboten</li>
                <li>Nur zu Unterhaltungszwecken</li>
                <li>Für Benutzer ab 18 Jahren bestimmt</li>
              </ul>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
            <Button type="button" variant="outline" onClick={() => setWarningOpen(false)}>
              Abbrechen
            </Button>
            <Button type="button" onClick={handleConfirm} className="bg-forest-500 hover:bg-forest-600 text-white">
              Ich verstehe, Abenteuer starten
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
