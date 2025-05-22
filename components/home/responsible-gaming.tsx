"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function ResponsibleGaming() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
            <h2 className="text-2xl font-bold">Soziale Plattform</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <p className="text-center mb-6 font-medium">
              Holzunternehmer ist eine Soziale Plattform nur zu Unterhaltungszwecken. Kein Echtgeld ist involviert, und
              keine Preise werden vergeben.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <div className="font-bold text-amber-700 mb-1">Kein Echtgeld</div>
                <p className="text-sm text-gray-600">Alle Punkte und Belohnungen sind virtuell ohne Geldwert</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <div className="font-bold text-amber-700 mb-1">Soziale Plattform</div>
                <p className="text-sm text-gray-600">Konzipiert für soziale Interaktion und Unterhaltung</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <div className="font-bold text-amber-700 mb-1">Ab 18 Jahren</div>
                <p className="text-sm text-gray-600">Inhalte sind für erwachsenes Publikum bestimmt</p>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>
              <Link href="/privacy-policy" className="hover:underline">
                Datenschutzerklärung
              </Link>{" "}
              |
              <Link href="/terms" className="hover:underline ml-2">
                Nutzungsbedingungen
              </Link>{" "}
              |
              <Link href="/cookies" className="hover:underline ml-2">
                Cookie-Richtlinie
              </Link>{" "}
              |
              <Link href="/disclaimer" className="hover:underline ml-2">
                Haftungsausschluss
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
