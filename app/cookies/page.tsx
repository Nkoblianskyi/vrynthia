import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <Cookie className="h-6 w-6 text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold">Cookie-Richtlinie</h1>
          </div>

          <div className="prose max-w-none">
            <p>Zuletzt aktualisiert: 21. Mai 2025</p>

            <h2>Was sind Cookies</h2>
            <p>
              Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät platziert werden, wenn Sie eine
              Website besuchen. Sie werden weithin verwendet, um Websites effizienter zu machen und den
              Website-Betreibern Informationen zu liefern. Cookies helfen, eine bessere und personalisiertere
              Benutzererfahrung zu bieten.
            </p>

            <h2>Wie wir Cookies verwenden</h2>
            <p>
              "Rescue Hero in the Canadian Rockies" verwendet Cookies für verschiedene Zwecke, darunter, aber nicht
              beschränkt auf:
            </p>
            <ul>
              <li>
                <strong>Wesentliche Cookies:</strong> Diese Cookies sind notwendig, damit die Website ordnungsgemäß
                funktioniert. Sie ermöglichen Kernfunktionalitäten wie Sicherheit, Netzwerkmanagement und Kontozugriff.
                Sie können diese deaktivieren, indem Sie Ihre Browsereinstellungen ändern, aber dies kann die
                Funktionsweise der Website beeinträchtigen.
              </li>
              <li>
                <strong>Analytische/Leistungs-Cookies:</strong> Diese Cookies ermöglichen es uns, die Anzahl der
                Besucher zu erkennen und zu zählen und zu sehen, wie Besucher sich auf unserer Website bewegen, wenn sie
                sie benutzen. Dies hilft uns, die Art und Weise zu verbessern, wie unsere Website funktioniert, zum
                Beispiel, indem sichergestellt wird, dass Benutzer leicht finden, wonach sie suchen.
              </li>
              <li>
                <strong>Funktionalitäts-Cookies:</strong> Diese Cookies werden verwendet, um Sie zu erkennen, wenn Sie
                zu unserer Website zurückkehren. Dies ermöglicht es uns, unsere Inhalte für Sie zu personalisieren, Sie
                mit Namen zu begrüßen und Ihre Präferenzen zu speichern (zum Beispiel Ihre Wahl der Sprache oder
                Region).
              </li>
              <li>
                <strong>Altersverifikations-Cookies:</strong> Wir verwenden Cookies, um zu speichern, dass Sie Ihr Alter
                verifiziert haben, um auf unser Spiel zuzugreifen, das für Benutzer ab 18 Jahren bestimmt ist.
              </li>
              <li>
                <strong>Spielfortschritts-Cookies:</strong> Diese Cookies helfen uns, Ihren Spielfortschritt und Ihre
                Präferenzen zu speichern, damit Sie dort weitermachen können, wo Sie aufgehört haben, wenn Sie zum Spiel
                zurückkehren.
              </li>
            </ul>

            <h2>Arten von Cookies, die wir verwenden</h2>
            <p>Unsere Website verwendet die folgenden Arten von Cookies:</p>

            <h3>Sitzungs-Cookies</h3>
            <p>
              Sitzungs-Cookies sind temporäre Cookies, die gelöscht werden, wenn Sie Ihren Browser schließen. Diese
              Cookies sammeln keine Informationen von Ihrem Computer. Sie speichern typischerweise Informationen in Form
              einer Sitzungsidentifikation, die Sie nicht persönlich identifiziert.
            </p>

            <h3>Persistente Cookies</h3>
            <p>
              Persistente Cookies bleiben auf Ihrer Festplatte, bis Sie sie löschen oder sie ablaufen. Diese Cookies
              können verwendet werden, um Ihre Präferenzen und Entscheidungen auf unserer Website zu speichern oder um
              Ihr Nutzungsverhalten zu verfolgen.
            </p>

            <h2>Cookies von Drittanbietern</h2>
            <p>
              Zusätzlich zu unseren eigenen Cookies können wir auch verschiedene Cookies von Drittanbietern verwenden,
              um Nutzungsstatistiken des Spiels zu melden, Werbung zu liefern und so weiter. Diese Cookies können
              umfassen:
            </p>
            <ul>
              <li>
                <strong>Analyse-Cookies:</strong> Wir verwenden Google Analytics, um zu verstehen, wie Benutzer mit
                unserem Spiel interagieren. Diese Cookies sammeln Informationen über Ihre Nutzung des Spiels,
                einschließlich welche Seiten Sie besuchen und wie Sie durch die Website navigieren.
              </li>
              <li>
                <strong>Social-Media-Cookies:</strong> Diese Cookies ermöglichen es Ihnen, Ihre Erfahrung auf unserer
                Website mit Social-Media-Plattformen wie Facebook, Twitter und Instagram zu teilen. Diese Cookies liegen
                nicht in unserer Kontrolle. Bitte beziehen Sie sich auf die jeweiligen Datenschutzrichtlinien dieser
                Plattformen, um zu erfahren, wie ihre Cookies funktionieren.
              </li>
            </ul>

            <h2>Verwaltung von Cookies</h2>
            <p>
              Die meisten Webbrowser ermöglichen es Ihnen, Ihre Cookie-Präferenzen zu verwalten. Sie können Ihren
              Browser so einstellen, dass er Cookies ablehnt oder Sie benachrichtigt, wenn Cookies gesendet werden. Die
              Methoden dafür variieren von Browser zu Browser und von Version zu Version.
            </p>
            <p>
              Bitte beachten Sie, dass, wenn Sie sich entscheiden, Cookies zu deaktivieren, Sie möglicherweise nicht auf
              bestimmte Teile unseres Spiels zugreifen können, und einige Funktionen funktionieren möglicherweise nicht
              ordnungsgemäß.
            </p>

            <h2>Änderungen an unserer Cookie-Richtlinie</h2>
            <p>
              Wir können unsere Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen
              informieren, indem wir die neue Cookie-Richtlinie auf dieser Seite veröffentlichen und das Datum "Zuletzt
              aktualisiert" am Anfang dieser Richtlinie aktualisieren.
            </p>
            <p>
              Es wird empfohlen, diese Cookie-Richtlinie regelmäßig auf Änderungen zu überprüfen. Änderungen an dieser
              Cookie-Richtlinie sind wirksam, wenn sie auf dieser Seite veröffentlicht werden.
            </p>

            <h2>Kontaktieren Sie uns</h2>
            <p>Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter:</p>
            <p>
              Vrynthia GmbH
              <br />
              Schillerstraße 12, Graz, 8010
              <br />
              E-Mail: contact@vrynthia.com
              <br />
              Telefon: +43 316 555 1642
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
