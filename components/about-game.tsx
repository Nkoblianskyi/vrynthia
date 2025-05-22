import { TreePine, Axe, Truck, Leaf, Shield, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutGame() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-forest-50 to-forest-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-forest-800/5 -skew-y-6 transform origin-top-left"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-48 bg-wood-300/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Game description */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-forest-800">
              Holzunternehmer: <span className="text-wood-600">Beherrschen Sie den Wald</span>
            </h2>

            <p className="text-forest-700 mb-6 text-lg">
              Holzunternehmer ist eine Soziale Plattform, in der Sie nachhaltige Holzfällpraktiken erleben können,
              während Sie Ihr Holzimperium aufbauen. Ernten Sie Bäume, verarbeiten Sie Holz und verwalten Sie
              Waldressourcen verantwortungsvoll.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-forest-50 p-4 rounded-lg border-l-4 border-forest-500">
                <div className="flex items-center mb-2">
                  <TreePine className="h-5 w-5 text-forest-600 mr-2" />
                  <h3 className="font-bold text-forest-700">Soziale Plattform</h3>
                </div>
                <p className="text-sm text-forest-600">
                  Erleben Sie eine soziale Umgebung und interagieren Sie mit anderen Spielern
                </p>
              </div>

              <div className="bg-wood-50 p-4 rounded-lg border-l-4 border-wood-500">
                <div className="flex items-center mb-2">
                  <Axe className="h-5 w-5 text-wood-600 mr-2" />
                  <h3 className="font-bold text-wood-700">Holzfällarbeiten</h3>
                </div>
                <p className="text-sm text-wood-600">Beherrschen Sie verschiedene Holzfälltechniken und Ausrüstungen</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <div className="flex items-center mb-2">
                  <Truck className="h-5 w-5 text-amber-600 mr-2" />
                  <h3 className="font-bold text-amber-700">Holzverarbeitung</h3>
                </div>
                <p className="text-sm text-amber-600">Verarbeiten Sie Rohholz zu wertvollen Holzprodukten</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-green-700">Waldmanagement</h3>
                </div>
                <p className="text-sm text-green-600">Balancieren Sie wirtschaftliche Bedürfnisse mit Umweltschutz</p>
              </div>
            </div>

            <Button className="bg-forest-600 hover:bg-forest-700 text-white">
              Starten Sie Ihr Forstlichen Abenteuer
            </Button>
          </div>

          {/* Right column - Visual elements */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-forest-700 text-white p-4">
                <h3 className="text-xl font-bold flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Holzunternehmer Funktionen
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-forest-100 p-2 rounded-full mr-3 mt-1">
                      <TreePine className="h-4 w-4 text-forest-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-800">Lehrreiches Gameplay</h4>
                      <p className="text-sm text-gray-600">
                        Lernen Sie echte Forstwirtschaftskonzepte und haben Sie Spaß dabei
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-wood-100 p-2 rounded-full mr-3 mt-1">
                      <Award className="h-4 w-4 text-wood-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-wood-800">Erfolgssystem</h4>
                      <p className="text-sm text-gray-600">
                        Schalten Sie Erfolge frei, während Sie forstwirtschaftliche Fähigkeiten meistern
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                      <Clock className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800">Saisonale Herausforderungen</h4>
                      <p className="text-sm text-gray-600">
                        Passen Sie sich an wechselnde Jahreszeiten und Wetterbedingungen an
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Entwickelt von</p>
                      <p className="font-bold text-forest-800">Vrynthia GmbH</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Kontakt</p>
                      <p className="text-forest-700">kontakt@vrynthia.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-wood-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
