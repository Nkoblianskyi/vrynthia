"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Mail, Phone, MapPin, Building, TreesIcon as Tree, Shield } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacy: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Validate form
    if (!formData.name || !formData.email || !formData.message || !formData.privacy) {
      setError("Bitte füllen Sie alle erforderlichen Felder aus und akzeptieren Sie die Datenschutzrichtlinie.")
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitted(true)
      setShowConfirmation(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: false,
      })
    } catch (err) {
      setError("Bei der Übermittlung des Formulars ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Kontakt</h1>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Haben Sie Fragen zu Timber Tycoon oder benötigen Sie Hilfe? Unser Team steht Ihnen zur Verfügung. Füllen Sie
            das Formular aus oder nutzen Sie unsere Kontaktdaten, um uns zu erreichen.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Information */}
            <div>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mr-4">
                      <Building className="h-6 w-6 text-wood-700" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Vrynthia GmbH</h2>
                      <p className="text-gray-600">Bildungsspiele & Unterhaltung</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-8">
                    Vrynthia entwickelt soziale Plattformen, die vollständig kostenlos zu nutzen sind. Unser
                    Flaggschiff-Spiel, Timber Tycoon, bietet Spielern ein spannendes Abenteuererlebnis mit Fokus auf
                    nachhaltige Forstwirtschaft. Alle Spielelemente sind virtuell und haben keinerlei realen Wert. Wir
                    erstellen verantwortungsvolle Spielplattformen für Erwachsene, die absolut kostenlos genutzt werden
                    können.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-wood-700 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">E-Mail</h3>
                        <span className="text-wood-600">contact@vrynthia.com</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-wood-700 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Adresse</h3>
                        <address className="not-italic text-gray-700">
                          Schillerstraße 12
                          <br />
                          Graz, 8010
                          <br />
                          Österreich
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-wood-700 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Telefon</h3>
                        <span className="text-wood-600">+43 316 555 1642</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust Signals Section */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-forest-700 mr-2" />
                      <h3 className="font-semibold">Unsere Verpflichtungen</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Bildungsunterhaltung ohne Echtgeld</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Strenge Altersverifikation für verantwortungsvolles Spielen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Datenschutz gemäß den Datenschutzbestimmungen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Transparente Geschäftspraktiken</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold mb-3">Webseite</h3>
                    <p className="text-gray-700">vrynthia.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mr-4">
                      <Tree className="h-6 w-6 text-forest-700" />
                    </div>
                    <h2 className="text-2xl font-bold">Nachricht senden</h2>
                  </div>

                  {error && (
                    <div className="bg-red-50 p-4 rounded-md flex items-start mb-6">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ihr Name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        E-Mail <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ihre.email@beispiel.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Betreff</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Worum geht es?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Nachricht <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Ihre Nachricht..."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacy}
                        onCheckedChange={handleCheckboxChange}
                        required
                      />
                      <Label htmlFor="privacy" className="text-sm leading-tight">
                        Ich stimme der{" "}
                        <Link href="/privacy-policy" className="text-forest-600 hover:underline">
                          Datenschutzrichtlinie
                        </Link>{" "}
                        zu und willige in die Verarbeitung meiner personenbezogenen Daten ein.
                        <span className="text-red-500">*</span>
                      </Label>
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Ihre Informationen werden an contact@vrynthia.com gesendet
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Educational Purpose Section */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-center">Soziale Plattform</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-forest-700"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Kein Echtgeld</h3>
                <p className="text-gray-600">
                  Unser Spiel beinhaltet keine Echtgeld-Transaktionen. Alle Punkte und Belohnungen sind virtuell und
                  haben keinen monetären Wert.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-forest-700"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Bildungszweck</h3>
                <p className="text-gray-600">
                  Timber Tycoon vermittelt Wissen über nachhaltige Forstwirtschaft, Holzfällerbetriebe und
                  Umweltmanagement.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-forest-700"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Soziales Spielen</h3>
                <p className="text-gray-600">
                  Unser Fokus liegt darauf, ein unterhaltsames, soziales Erlebnis zu schaffen, das Menschen durch
                  Forstwirtschaftsszenarien zusammenbringt.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Häufig gestellte Fragen</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold mb-2">Warum gibt es eine Altersverifikation?</h3>
                <p className="text-gray-700">
                  Obwohl unser Spiel keine Glücksspielelemente enthält, verlangen wir eine Altersverifikation (18+), da
                  das Spiel Holzfällerbetriebe simuliert, die für jüngere Zielgruppen möglicherweise nicht geeignet
                  sind.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold mb-2">Was ist der Bildungswert von Timber Tycoon?</h3>
                <p className="text-gray-700">
                  Timber Tycoon vermittelt Spielern Wissen über nachhaltige Forstwirtschaftspraktiken,
                  Holzfällerbetriebe, Umweltmanagement und die Wirtschaft der Holzindustrie, alles in einem
                  unterhaltsamen Format.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold mb-2">Kann ich In-Game-Käufe tätigen?</h3>
                <p className="text-gray-700">
                  Nein, Timber Tycoon unterstützt oder erfordert keine Echtgeld-Käufe. Alle Spielfunktionen sind
                  kostenlos verfügbar, und In-Game-Punkte haben keinen monetären Wert.
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Unser Standort</h2>
            <div className="bg-gray-200 rounded-lg p-8 text-center">
              <p className="text-lg font-medium">Vrynthia GmbH</p>
              <p>Schillerstraße 12, Graz, 8010, Österreich</p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
              Nachricht erfolgreich gesendet
            </DialogTitle>
            <DialogDescription>Vielen Dank für Ihre Kontaktaufnahme mit Vrynthia GmbH.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-700">
              Wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden, in der Regel
              innerhalb von 1-2 Werktagen.
            </p>
            <p className="mt-2 text-gray-700">
              Wenn Ihr Anliegen dringend ist, kontaktieren Sie uns bitte direkt unter{" "}
              <span className="text-forest-600">+43 316 555 1642</span>.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowConfirmation(false)}>Schließen</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
