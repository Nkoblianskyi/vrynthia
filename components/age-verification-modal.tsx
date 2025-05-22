"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Check, X } from "lucide-react"

export default function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()

  const handleVerify = () => {
    setIsOpen(false)
  }

  const handleClose = () => {
    router.push("/denied")
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-800 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold">Altersüberprüfung</h2>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-green-100">Holzunternehmer ist für Erwachsene ab 18 Jahren bestimmt</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Wichtiger Hinweis</h3>
                  <p className="text-gray-600 text-sm">
                    Dies ist eine Soziale Plattform über Forstwirtschaft und Holzmanagement. Es enthält keine
                    Echtgeldtransaktionen.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <p className="text-sm text-red-600 font-medium">
                    Indem Sie auf "Bestätigen" klicken, bestätigen Sie, dass Sie über 18 Jahre alt sind.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-100">
                <p className="text-sm text-green-800">
                  Durch das Fortfahren bestätigen Sie, dass Sie mindestens 18 Jahre alt sind und unseren
                  <a href="/terms" className="font-bold underline ml-1">
                    Nutzungsbedingungen
                  </a>
                  zustimmen.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-6 flex flex-col sm:flex-row gap-3 sm:justify-between">
              <Button
                variant="outline"
                onClick={handleClose}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <X className="h-4 w-4 mr-2" />
                Beenden
              </Button>
              <Button onClick={handleVerify} className="bg-green-700 hover:bg-green-800 text-white">
                <Check className="h-4 w-4 mr-2" />
                Alter bestätigen
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
