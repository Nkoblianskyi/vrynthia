import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-forest-600 to-forest-800 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-wood-400 via-wood-500 to-wood-400"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-forest-900/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
          {/* Company Info */}
          <div className="bg-forest-700/30 p-5 rounded-lg border border-forest-500/20 shadow-lg backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-forest-500/50 rounded-full flex items-center justify-center mr-3 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-forest-100"
                >
                  <path d="m7 22 5-9 5 9z" />
                  <path d="M4 22h16" />
                  <path d="M10 13V8l-3 3" />
                  <path d="M14 13V8l3 3" />
                  <path d="M12 2v6" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-forest-100">Holzunternehmer</h3>
                <p className="text-forest-200/80">Soziale Plattform</p>
              </div>
            </div>
            <p className="text-forest-100/90 mb-6 leading-relaxed">
              Eine Soziale Plattform nur zu Unterhaltungszwecken. Verwalten Sie Ihren eigenen Forstbetrieb in
              wunderschönen Wäldern. Kein Echtgeld. Keine Preise.
            </p>
            <div className="flex items-center bg-forest-800/50 p-2 rounded-md">
              <AlertTriangle className="h-5 w-5 text-amber-300 mr-2" />
              <span className="text-amber-200 font-bold">Nur ab 18+</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-forest-700/30 p-5 rounded-lg border border-forest-500/20 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-forest-100 border-b border-forest-500/30 pb-2">
              Wichtige Links
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="/disclaimer"
                className="text-forest-100/90 hover:text-white transition-colors flex items-center group"
              >
                <span className="w-1.5 h-1.5 bg-wood-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                Haftungsausschluss
              </Link>
              <Link
                href="/privacy-policy"
                className="text-forest-100/90 hover:text-white transition-colors flex items-center group"
              >
                <span className="w-1.5 h-1.5 bg-wood-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                Datenschutz
              </Link>
              <Link
                href="/terms"
                className="text-forest-100/90 hover:text-white transition-colors flex items-center group"
              >
                <span className="w-1.5 h-1.5 bg-wood-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                Nutzungsbedingungen
              </Link>
              <Link
                href="/cookies"
                className="text-forest-100/90 hover:text-white transition-colors flex items-center group"
              >
                <span className="w-1.5 h-1.5 bg-wood-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                Cookie-Richtlinie
              </Link>
              <Link
                href="/contact"
                className="text-forest-100/90 hover:text-white transition-colors flex items-center group"
              >
                <span className="w-1.5 h-1.5 bg-wood-400 rounded-full mr-2 group-hover:w-2 transition-all duration-200"></span>
                Kontakt
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-forest-700/30 p-5 rounded-lg border border-forest-500/20 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-forest-100 border-b border-forest-500/30 pb-2">
              Kontaktinformationen
            </h3>
            <address className="not-italic text-forest-100/90 space-y-4">
              <div className="flex items-start bg-forest-600/30 p-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-forest-200 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <div>
                  <strong className="block text-forest-100 mb-1">Vrynthia GmbH</strong>
                  Schillerstraße 12, Graz, 8010
                </div>
              </div>
              <div className="flex items-center bg-forest-600/30 p-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-forest-200 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="hover:text-white transition-colors">kontakt@vrynthia.com</span>
              </div>
              <div className="flex items-center bg-forest-600/30 p-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-forest-200 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hover:text-white transition-colors">+43 316 555 1642</span>
              </div>
            </address>
          </div>
        </div>

        {/* Disclaimer - Full width on all screens */}
        <div className="bg-forest-800/70 p-6 rounded-xl mb-8 border border-forest-700/50 shadow-lg backdrop-blur-sm">
          <h4 className="text-center text-lg font-semibold mb-3 text-amber-300 flex items-center justify-center">
            <AlertTriangle className="h-4 w-4 mr-2 text-amber-300" />
            Haftungsausschluss
          </h4>
          <div className="text-sm leading-relaxed max-w-3xl mx-auto">
            <p className="mb-2 text-red-300 font-medium">
              Unsere Soziale Plattform richtet sich ausschließlich an Erwachsene ab 18 Jahren. Trotz des fehlenden
              Einsatzes von echtem Geld ist die Nutzung für Minderjährige untersagt.
            </p>
            <p className="mb-2 text-teal-300">
              Wir bieten ein virtuelles Erlebnis ohne finanzielle Risiken oder Gewinne. Die Simulation dient
              ausschließlich der Unterhaltung und spiegelt keine realen Geschäftsergebnisse oder Erfolgsaussichten
              wider.
            </p>
            <p className="text-amber-200">
              Wir fördern einen bewussten Umgang mit unserer Plattform. Sollten Sie jemals Bedenken bezüglich Ihres
              Nutzungsverhaltens haben, empfehlen wir Ihnen, eine Pause einzulegen oder sich bei Bedarf an entsprechende
              Beratungsdienste zu wenden.
            </p>
          </div>
        </div>

        {/* Copyright - Responsive layout */}
        <div className="text-center text-forest-200/80 text-sm bg-forest-900/30 py-4 px-6 rounded-lg border border-forest-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p>&copy; {new Date().getFullYear()} Vrynthia GmbH. Alle Rechte vorbehalten.</p>
            <p className="bg-forest-800/50 px-3 py-1 rounded-full text-forest-100">Soziale Plattform • Kein Echtgeld</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
