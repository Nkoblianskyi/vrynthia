import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <ShieldCheck className="h-6 w-6 text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold">Datenschutzerklärung</h1>
          </div>

          <div className="prose max-w-none">
            <p>Zuletzt aktualisiert: 21. Mai 2025</p>

            <h2>Einleitung</h2>
            <p>
              Vrynthia GmbH ("wir", "unser" oder "uns") verpflichtet sich, Ihre Privatsphäre zu schützen. Diese
              Datenschutzerklärung erläutert, wie wir Ihre Informationen sammeln, verwenden, offenlegen und schützen,
              wenn Sie unser soziales Spiel "Rescue Hero in the Canadian Rockies" nutzen.
            </p>

            <h2>Informationen, die wir sammeln</h2>
            <p>Wir können folgende Arten von Informationen sammeln:</p>
            <ul>
              <li>
                <strong>Persönliche Informationen:</strong> Name, E-Mail-Adresse und Altersverifikationsstatus, wenn Sie
                uns kontaktieren oder ein Konto erstellen.
              </li>
              <li>
                <strong>Nutzungsdaten:</strong> Informationen darüber, wie Sie mit unserem Spiel interagieren,
                einschließlich Spielergebnissen, Fortschritt und Präferenzen.
              </li>
              <li>
                <strong>Geräteinformationen:</strong> Informationen über Ihr Gerät, einschließlich IP-Adresse,
                Browsertyp und Betriebssystem.
              </li>
            </ul>

            <h2>Wie wir Ihre Informationen verwenden</h2>
            <p>Wir können die gesammelten Informationen für verschiedene Zwecke verwenden, darunter:</p>
            <ul>
              <li>Um unser Spiel bereitzustellen und zu warten</li>
              <li>Um Sie über Änderungen an unserem Spiel zu informieren</li>
              <li>Um Ihnen die Teilnahme an interaktiven Funktionen zu ermöglichen</li>
              <li>Um Kundensupport zu bieten</li>
              <li>Um Analysen oder wertvolle Informationen zu sammeln, um unser Spiel zu verbessern</li>
              <li>Um die Nutzung unseres Spiels zu überwachen</li>
              <li>Um technische Probleme zu erkennen, zu verhindern und zu beheben</li>
            </ul>

            <h2>Offenlegung Ihrer Informationen</h2>
            <p>Wir können Ihre Informationen teilen mit:</p>
            <ul>
              <li>Dienstleistern, die uns bei der Betreibung unseres Spiels unterstützen</li>
              <li>Rechtlichen Behörden, wenn gesetzlich vorgeschrieben</li>
              <li>Geschäftspartnern mit Ihrer Zustimmung</li>
            </ul>

            <h2>Datensicherheit</h2>
            <p>
              Wir implementieren angemessene Sicherheitsmaßnahmen zum Schutz Ihrer persönlichen Informationen. Jedoch
              ist keine Methode der Übertragung über das Internet oder der elektronischen Speicherung zu 100% sicher,
              und wir können keine absolute Sicherheit garantieren.
            </p>

            <h2>Ihre Rechte</h2>
            <p>
              Je nach Ihrem Standort haben Sie möglicherweise bestimmte Rechte bezüglich Ihrer persönlichen
              Informationen, darunter:
            </p>
            <ul>
              <li>Das Recht auf Zugang zu Ihren persönlichen Informationen</li>
              <li>Das Recht auf Berichtigung ungenauer Informationen</li>
              <li>Das Recht auf Löschung Ihrer persönlichen Informationen</li>
              <li>Das Recht auf Einschränkung der Verarbeitung Ihrer persönlichen Informationen</li>
              <li>Das Recht auf Datenübertragbarkeit</li>
              <li>Das Recht, der Verarbeitung Ihrer persönlichen Informationen zu widersprechen</li>
            </ul>

            <h2>Kontaktieren Sie uns</h2>
            <p>Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter:</p>
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
