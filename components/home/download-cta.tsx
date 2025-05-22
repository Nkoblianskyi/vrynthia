"use client"

import { DialogFooter } from "@/components/ui/dialog"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { AlertTriangle } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

export default function DownloadCta() {
  const [warningOpen, setWarningOpen] = useState(false)
  const router = useRouter()

  const handleStartGame = () => {
    setWarningOpen(true)
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center">Warum mit uns spielen?</h2>
              <p className="text-brand-100 text-center mb-10 max-w-3xl mx-auto">
                Urban Raccoon bietet eine unterhaltsame Soziale Plattform, die sich vollständig von
                Echtgeld-Simulationen unterscheidet
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Benefit 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-start">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-700"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12h8" />
                        <path d="M12 16V8" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">100% Kostenlos — Keine Einzahlungen</h3>
                      <p className="text-brand-100">
                        Unser Spiel ist völlig kostenlos. Kein echtes Geld ist involviert, keine Einzahlungen
                        erforderlich und keine versteckten Gebühren.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Benefit 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-start">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-700"
                      >
                        <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Verbessern Sie Ihre Fähigkeiten</h3>
                      <p className="text-brand-100">
                        Entwickeln Sie strategisches Denken und verbessern Sie Ihre Entscheidungsfähigkeiten durch
                        unterhaltsame Spielherausforderungen.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Benefit 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-start">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-700"
                      >
                        <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Individuelle Spielerfahrung</h3>
                      <p className="text-brand-100">
                        Genießen Sie ein persönliches Spielerlebnis mit individuellen Herausforderungen und Zielen in
                        Ihrem eigenen Tempo.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Benefit 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-start">
                    <div className="bg-brand-100 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-700"
                      >
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Verdienen Sie Abzeichen und Erfolge</h3>
                      <p className="text-brand-100">
                        Schließen Sie Herausforderungen und Missionen ab, um besondere Belohnungen und Erfolgsabzeichen
                        freizuschalten.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-10 text-center">
                <Button
                  size="lg"
                  className="bg-accent-500 hover:bg-accent-600 text-black text-xl px-8 py-6"
                  onClick={handleStartGame}
                >
                  Starten Sie Ihr Abenteuer
                </Button>
                <p className="mt-4 text-sm text-brand-200/80">Soziale Plattform. Kein Echtgeld. Ab 18 Jahren.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Warning Modal */}
      <Dialog open={warningOpen} onOpenChange={setWarningOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              Wichtiger Hinweis
            </DialogTitle>
            <DialogDescription>Bitte lesen und bestätigen Sie, bevor Sie Ihr Abenteuer beginnen.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 py-4">
            <div className="bg-amber-50 p-4 rounded-md text-sm text-amber-700">
              <p className="font-bold mb-2">Dies ist eine kostenlose Soziale Plattform:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Es ist keine Echtgeld-Simulation</li>
                <li>Kein echtes Geld kann gewonnen oder verloren werden</li>
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
            <Button type="button" onClick={handleConfirm} className="bg-amber-500 hover:bg-amber-600 text-black">
              Ich verstehe, Abenteuer starten
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
