import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold">Nutzungsbedingungen</h1>
          </div>

          <div className="prose max-w-none">
            <p>Zuletzt aktualisiert: 21. Mai 2025</p>

            <h2>1. Einleitung</h2>
            <p>
              Willkommen bei "Rescue Hero in the Canadian Rockies" ("Soziale Plattform"). Diese Nutzungsbedingungen
              ("Bedingungen") regeln Ihre Nutzung unserer Sozialen Plattform und Website, die von Vrynthia GmbH ("wir",
              "uns" oder "unser") betrieben wird. Durch den Zugriff auf oder die Nutzung unserer Sozialen Plattform
              stimmen Sie zu, an diese Bedingungen gebunden zu sein. Wenn Sie mit einem Teil der Bedingungen nicht
              einverstanden sind, dürfen Sie nicht auf die Soziale Plattform zugreifen.
            </p>

            <h2>2. Altersbeschränkung</h2>
            <p>
              Das Spiel ist für Benutzer bestimmt, die 18 Jahre oder älter sind. Durch den Zugriff auf oder die Nutzung
              des Spiels versichern und garantieren Sie, dass Sie mindestens 18 Jahre alt sind. Wenn wir entdecken oder
              Grund zu der Annahme haben, dass Sie nicht mindestens 18 Jahre alt sind, behalten wir uns das Recht vor,
              Ihren Zugang zum Spiel sofort auszusetzen oder zu beenden.
            </p>

            <h2>3. Nur zu Unterhaltungszwecken</h2>
            <p>
              "Rescue Hero in the Canadian Rockies" ist eine Soziale Plattform, die ausschließlich zu
              Unterhaltungszwecken entwickelt wurde. Wir erklären ausdrücklich, dass:
            </p>
            <ul>
              <li>Dies keine Simulation mit echtem Geld ist</li>
              <li>Kein echtes Geld gewonnen oder verloren werden kann</li>
              <li>Keine Preise angeboten werden</li>
              <li>Keine Käufe zum Spielen erforderlich sind</li>
              <li>Spielpunkte keinen monetären Wert haben</li>
            </ul>

            <h2>4. Benutzerkonten</h2>
            <p>
              Wenn Sie ein Konto bei uns erstellen, müssen Sie Informationen angeben, die zu jeder Zeit genau,
              vollständig und aktuell sind. Ein Verstoß dagegen stellt einen Verstoß gegen die Bedingungen dar, was zur
              sofortigen Kündigung Ihres Kontos führen kann.
            </p>
            <p>
              Sie sind verantwortlich für die Sicherung des Passworts, das Sie für den Zugriff auf das Spiel verwenden,
              und für alle Aktivitäten oder Aktionen unter Ihrem Passwort. Sie stimmen zu, Ihr Passwort keinem Dritten
              mitzuteilen. Sie müssen uns sofort benachrichtigen, wenn Sie von einer Sicherheitsverletzung oder
              unbefugten Nutzung Ihres Kontos erfahren.
            </p>

            <h2>5. Geistiges Eigentum</h2>
            <p>
              Das Spiel und seine originalen Inhalte, Funktionen und Funktionalität sind und bleiben das ausschließliche
              Eigentum von Vrynthia GmbH und ihren Lizenzgebern. Das Spiel ist durch Urheberrecht, Markenrecht und
              andere Gesetze sowohl Österreichs als auch anderer Länder geschützt. Unsere Marken und Handelsaufmachung
              dürfen nicht in Verbindung mit einem Produkt oder einer Dienstleistung ohne vorherige schriftliche
              Zustimmung von Vrynthia GmbH verwendet werden.
            </p>

            <h2>6. Benutzerverhalten</h2>
            <p>Sie stimmen zu, das Spiel nicht zu verwenden:</p>
            <ul>
              <li>
                In einer Weise, die gegen geltende nationale oder internationale Gesetze oder Vorschriften verstößt
              </li>
              <li>
                Um Werbung oder Werbematerial zu übermitteln oder zu veranlassen, einschließlich "Junk-Mail",
                "Kettenbrief", "Spam" oder ähnliche Aufforderungen
              </li>
              <li>
                Um sich als das Unternehmen, einen Mitarbeiter des Unternehmens, einen anderen Benutzer oder eine andere
                Person oder Einheit auszugeben oder dies zu versuchen
              </li>
              <li>
                In einer Weise, die die Website deaktivieren, überlasten, beschädigen oder beeinträchtigen könnte oder
                die Nutzung des Spiels durch eine andere Partei stören könnte
              </li>
            </ul>

            <h2>7. Haftungsbeschränkung</h2>
            <p>
              In keinem Fall haften Vrynthia GmbH oder ihre Direktoren, Mitarbeiter, Partner, Agenten, Lieferanten oder
              verbundenen Unternehmen für indirekte, zufällige, besondere, Folge- oder Strafschäden, einschließlich,
              aber nicht beschränkt auf Verlust von Gewinnen, Daten, Nutzung, Goodwill oder anderen immateriellen
              Verlusten, die sich ergeben aus:
            </p>
            <ul>
              <li>
                Ihrem Zugriff auf oder Ihrer Nutzung des Spiels oder Ihrer Unfähigkeit, auf das Spiel zuzugreifen oder
                es zu nutzen
              </li>
              <li>Jeglichem Verhalten oder Inhalt eines Dritten im Spiel</li>
              <li>Jeglichem Inhalt, der vom Spiel erhalten wird</li>
              <li>Unbefugtem Zugriff, Nutzung oder Änderung Ihrer Übertragungen oder Inhalte</li>
            </ul>

            <h2>8. Änderungen der Bedingungen</h2>
            <p>
              Wir behalten uns das Recht vor, diese Bedingungen nach eigenem Ermessen jederzeit zu ändern oder zu
              ersetzen. Wenn eine Änderung wesentlich ist, werden wir versuchen, mindestens 30 Tage vor Inkrafttreten
              neuer Bedingungen zu informieren. Was eine wesentliche Änderung darstellt, wird nach unserem alleinigen
              Ermessen bestimmt.
            </p>

            <h2>9. Geltendes Recht</h2>
            <p>
              Diese Bedingungen unterliegen den Gesetzen Österreichs und werden in Übereinstimmung mit diesen ausgelegt,
              ohne Rücksicht auf Kollisionsnormen. Unser Versäumnis, ein Recht oder eine Bestimmung dieser Bedingungen
              durchzusetzen, wird nicht als Verzicht auf diese Rechte angesehen.
            </p>

            <h2>10. Kontaktieren Sie uns</h2>
            <p>Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte unter:</p>
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
