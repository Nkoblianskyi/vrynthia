"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Gift, Shield, Info, AlertCircle, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

export default function EducationalPlatformInfo() {
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
    <section className="py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Über unsere Plattform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eine kostenlose Bildungsplattform zum Lernen und Spaß haben
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl p-8 shadow-xl mb-8 border-l-4 border-green-500"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-green-100 p-4 rounded-full">
                <Info className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-green-800">Rein virtuelle Bildungsplattform</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Unsere Plattform ist ausschließlich für Bildungs- und Unterhaltungszwecke konzipiert. Es handelt sich
                  um eine
                  <strong className="text-green-700"> 100% kostenlose soziale Spielumgebung</strong>, die das Lernen
                  über Forstwirtschaft, Holzverarbeitung und Umweltschutz fördert.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="text-amber-800 flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      Diese Plattform beinhaltet <strong>kein Echtgeld</strong>, keine Gewinne und keine Möglichkeit,
                      virtuelle Gegenstände gegen Wertgegenstände einzutauschen. Alle Aktivitäten sind rein virtuell und
                      haben keinen realen Geldwert.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-green-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Bildungsorientiert</h4>
                  <p className="text-gray-600">
                    Unsere Spiele vermitteln wertvolles Wissen über nachhaltige Forstwirtschaft und Umweltschutz in
                    einer unterhaltsamen Umgebung.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-green-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Gift className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Vollständig kostenlos</h4>
                  <p className="text-gray-600">
                    Alle Spiele und Funktionen sind komplett kostenlos zugänglich. Es gibt keine versteckten Kosten oder
                    In-App-Käufe.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-green-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Soziale Plattform</h4>
                  <p className="text-gray-600">
                    Verbinde dich mit anderen Spielern, teile deine Fortschritte und lerne gemeinsam in einer sicheren,
                    unterstützenden Umgebung.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-green-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Sicher und verantwortungsvoll</h4>
                  <p className="text-gray-600">
                    Wir fördern verantwortungsvolles Spielen und stellen sicher, dass alle Inhalte für unsere Nutzer
                    sicher und angemessen sind.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-green-50 rounded-xl p-6 border border-green-100"
          >
            <h3 className="text-xl font-bold mb-4 text-center text-green-800">Unsere Verpflichtung</h3>
            <ul className="space-y-3">
              {[
                "Keine Echtgeld-Transaktionen oder Glücksspiel-Elemente",
                "Alle virtuellen Gegenstände haben keinen realen Geldwert",
                "Fokus auf Bildung und Unterhaltung, nicht auf Gewinn",
                "Transparente und ehrliche Kommunikation mit unseren Nutzern",
                "Kontinuierliche Verbesserung der Bildungsinhalte",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 text-center"
          >
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl"
              onClick={handleStartGame}
            >
              Kostenlos spielen und lernen
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              Keine Registrierung erforderlich. Keine Kreditkarte. Keine versteckten Kosten.
            </p>
          </motion.div>
        </div>
        {/* Warning Modal */}
        <Dialog open={warningOpen} onOpenChange={setWarningOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-green-500 mr-2" />
                Wichtiger Hinweis
              </DialogTitle>
              <DialogDescription>Bitte lesen und bestätigen Sie, bevor Sie Ihr Abenteuer beginnen.</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col space-y-4 py-4">
              <div className="bg-green-50 p-4 rounded-md text-sm text-green-700">
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
              <Button type="button" onClick={handleConfirm} className="bg-green-500 hover:bg-green-600 text-white">
                Ich verstehe, Abenteuer starten
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
