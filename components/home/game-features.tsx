"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { TreePine, Axe, Truck, Leaf, Users, Award, Clock, Map, AlertTriangle, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GameFeatures() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleStartGame = () => {
    setIsModalOpen(true)
  }

  const handleConfirm = () => {
    setIsModalOpen(false)
    router.push("/game")
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-forest-800 to-forest-900 text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entdecken Sie die <span className="text-wood-400">Holzunternehmer</span> Erfahrung
          </h2>
          <p className="text-forest-100 text-lg">
            Tauchen Sie ein in die Welt der nachhaltigen Forstwirtschaft mit unserer Sozialen Plattform, die konzipiert
            wurde, um zu unterhalten und zu verbinden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FeatureCard
            icon={TreePine}
            title="Waldmanagement"
            description="Lernen Sie nachhaltige Forstwirtschaftspraktiken, während Sie Ihr eigenes Waldökosystem verwalten"
            color="bg-forest-700"
            hoverColor="hover:bg-forest-600"
            iconColor="text-forest-300"
          />

          <FeatureCard
            icon={Axe}
            title="Holzfällarbeiten"
            description="Beherrschen Sie verschiedene Holzfälltechniken und Ausrüstungen, um Holz effizient zu ernten"
            color="bg-wood-700"
            hoverColor="hover:bg-wood-600"
            iconColor="text-wood-300"
          />

          <FeatureCard
            icon={Truck}
            title="Holzverarbeitung"
            description="Verarbeiten Sie Rohholz zu wertvollen Holzprodukten in Ihrem Sägewerk"
            color="bg-amber-800"
            hoverColor="hover:bg-amber-700"
            iconColor="text-amber-300"
          />

          <FeatureCard
            icon={Leaf}
            title="Naturschutzbemühungen"
            description="Balancieren Sie wirtschaftliche Bedürfnisse mit Umweltschutzzielen"
            color="bg-green-800"
            hoverColor="hover:bg-green-700"
            iconColor="text-green-300"
          />

          <FeatureCard
            icon={Users}
            title="Team-Management"
            description="Stellen Sie spezialisierte Forstarbeiter ein und bilden Sie sie aus, um den Betrieb zu verbessern"
            color="bg-blue-800"
            hoverColor="hover:bg-blue-700"
            iconColor="text-blue-300"
          />

          <FeatureCard
            icon={Award}
            title="Erfolgssystem"
            description="Schalten Sie Erfolge frei, während Sie verschiedene Forstwirtschaftskompetenzen meistern"
            color="bg-purple-800"
            hoverColor="hover:bg-purple-700"
            iconColor="text-purple-300"
          />

          <FeatureCard
            icon={Clock}
            title="Saisonale Herausforderungen"
            description="Passen Sie sich an wechselnde Jahreszeiten und Wetterbedingungen an, die den Betrieb beeinflussen"
            color="bg-red-800"
            hoverColor="hover:bg-red-700"
            iconColor="text-red-300"
          />

          <FeatureCard
            icon={Map}
            title="Verschiedene Umgebungen"
            description="Erkunden Sie verschiedene Waldbiome mit einzigartigen Baumarten und Herausforderungen"
            color="bg-teal-800"
            hoverColor="hover:bg-teal-700"
            iconColor="text-teal-300"
          />
        </div>

        <div className="text-center">
          <Button
            className="bg-wood-600 hover:bg-wood-700 text-white px-8 py-6 text-lg rounded-xl"
            onClick={handleStartGame}
          >
            Starten Sie Ihr Forstliches Abenteuer
          </Button>

          <p className="mt-4 text-sm text-forest-200 max-w-2xl mx-auto">
            Holzunternehmer ist eine Soziale Plattform, die nur zu Unterhaltungszwecken entwickelt wurde. Kein Echtgeld
            oder Preise involviert. Nur für Personen ab 18 Jahren.
          </p>
        </div>
      </div>

      {/* Altersüberprüfungs-Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
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
              <Button onClick={handleConfirm} className="bg-green-700 hover:bg-green-800 text-white">
                <Check className="h-4 w-4 mr-2" />
                Alter bestätigen
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function FeatureCard({ icon: Icon, title, description, color, hoverColor, iconColor }) {
  return (
    <div
      className={`${color} ${hoverColor} rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  )
}
