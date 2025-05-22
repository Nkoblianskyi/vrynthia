import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
            <h1 className="text-3xl font-bold">Haftungsausschluss</h1>
          </div>

          <div className="prose max-w-none">
            <h2>Nur zu Unterhaltungszwecken</h2>
            <p>
              "Rescue Hero in the Canadian Rockies" ist eine soziale Plattform, die ausschließlich zu
              Unterhaltungszwecken entwickelt wurde. Dieses Spiel beinhaltet keine Transaktionen mit echtem Geld, bietet
              keine Geldpreise an und unterstützt keine Form von Wetten oder Glücksspiel.
            </p>

            <h2>Altersbeschränkung</h2>
            <p>
              Dieses Spiel ist für Personen ab 18 Jahren bestimmt. Durch den Zugriff auf und das Spielen dieses Spiels
              bestätigen Sie, dass Sie mindestens 18 Jahre alt sind.
            </p>

            <h2>Kein echtes Geld involviert</h2>
            <p>Wir erklären ausdrücklich, dass:</p>
            <ul>
              <li>Dies keine Simulation mit echtem Geld ist</li>
              <li>Kein echtes Geld gewonnen oder verloren werden kann</li>
              <li>Keine Preise angeboten werden</li>
              <li>Keine Käufe zum Spielen erforderlich sind</li>
              <li>Spielpunkte keinen monetären Wert haben</li>
            </ul>

            <h2>Verantwortungsvolles Spielen</h2>
            <p>
              Wir fördern verantwortungsvolles Spielverhalten. Wenn Sie oder jemand, den Sie kennen, Probleme mit
              süchtigem Verhalten hat, empfehlen wir, Hilfe bei professionellen Organisationen zu suchen, wie zum
              Beispiel:
            </p>

            <div className="my-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold mb-4">Unterstützungsressourcen</h3>
              <p className="mb-4">
                Obwohl unsere soziale Plattform kein echtes Geld beinhaltet, unterstützen wir das Bewusstsein für
                verantwortungsvolles Verhalten. Wenn Sie oder jemand, den Sie kennen, Unterstützung bei
                Verhaltensproblemen benötigt, wenden Sie sich bitte an diese Organisationen:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="mb-3">
                    <span className="font-medium">Spielen mit Verantwortung</span>
                  </div>
                  <span className="text-sm text-gray-600">Kostenlose Beratung und Unterstützung</span>
                </div>

                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="mb-3">
                    <span className="font-medium">Beratungsstelle</span>
                  </div>
                  <span className="text-sm text-gray-600">Unterstützung und Beratung</span>
                </div>

                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="mb-3">
                    <span className="font-medium">Therapiezentrum</span>
                  </div>
                  <span className="text-sm text-gray-600">Therapie für Spielsucht</span>
                </div>
              </div>
            </div>

            <h2>Haftungsbeschränkung</h2>
            <p>
              Vrynthia GmbH haftet nicht für Schäden oder Verluste, die durch die Nutzung dieses Spiels entstehen
              können. Durch die Nutzung dieses Spiels stimmen Sie diesen Bedingungen zu.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/">
              <Button>Zurück zur Startseite</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
