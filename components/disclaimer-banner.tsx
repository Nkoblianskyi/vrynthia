"use client"

import { useState } from "react"
import { AlertTriangle, X } from "lucide-react"

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-amber-50 border-b border-amber-200 py-2 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-amber-800 text-sm">
            <AlertTriangle className="h-4 w-4 mr-2 text-amber-600" />
            <p>
              <span className="font-medium">Hinweis:</span> Dieses Spiel ist nur zu Bildungs- und Unterhaltungszwecken.
              Eine soziale, kostenlose Plattform. Kein Echtgeld, nur Simulation, ab 18 Jahren.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-amber-600 hover:text-amber-800"
            aria-label="Hinweis schließen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
