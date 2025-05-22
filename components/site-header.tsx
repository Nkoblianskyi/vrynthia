"use client"

import { useState } from "react"
import Link from "next/link"
import { Axe, Menu, AlertTriangle } from "lucide-react" // Changed to Axe for lumberjack theme
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [warningOpen, setWarningOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { href: "/", label: "Startseite" },
    { href: "/disclaimer", label: "Haftungsausschluss" },
    { href: "/privacy-policy", label: "Datenschutz" },
    { href: "/terms", label: "Nutzungsbedingungen" },
    { href: "/cookies", label: "Cookie-Richtlinie" },
    { href: "/contact", label: "Kontakt" },
    { href: "/game", label: "Spiel starten" },
  ]

  const handleGameLinkClick = (e, href) => {
    if (href === "/game") {
      e.preventDefault()
      setWarningOpen(true)
    }
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 mr-2 bg-forest-600 rounded-md flex items-center justify-center">
                <Axe className="h-7 w-7 text-white" />
              </div>
              <span className="font-bold text-xl text-forest-600">Vrynthia</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-forest-700 hover:text-forest-900 font-medium">
              Startseite
            </Link>
            <Link href="/disclaimer" className="text-forest-700 hover:text-forest-900 font-medium">
              Haftungsausschluss
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">18+</div>
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center text-forest-600 hover:bg-forest-100">
                    <Menu className="h-5 w-5 mr-1" />
                    <span>Menü</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[320px] bg-gradient-to-b from-forest-50 to-forest-100 border-l border-forest-200"
                >
                  <SheetHeader className="border-b border-forest-200 pb-4 mb-6">
                    <SheetTitle className="flex items-center">
                      <div className="w-10 h-10 mr-3 bg-forest-600 rounded-full flex items-center justify-center">
                        <Axe className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xl font-bold text-forest-700">Vrynthia</span>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-1">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="flex py-3 px-4 text-forest-800 hover:bg-forest-200/50 rounded-lg transition-colors"
                          onClick={(e) => {
                            handleGameLinkClick(e, link.href)
                            if (link.href !== "/game") {
                              setIsOpen(false)
                            }
                          }}
                        >
                          {link.label === "Spiel starten" ? (
                            <div className="flex items-center">
                              {link.label}
                              <span className="ml-2 bg-forest-700 text-forest-100 text-xs px-2 py-1 rounded-full">
                                18+
                              </span>
                            </div>
                          ) : (
                            link.label
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-8 pt-4 border-t border-forest-200">
                    <div className="bg-forest-200/50 p-4 rounded-lg">
                      <p className="text-sm text-forest-800 font-medium">
                        Nur zu Unterhaltungszwecken. Kein Echtgeld. Keine Preise. Ab 18 Jahren.
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      {/* Warning Modal */}
      <Dialog open={warningOpen} onOpenChange={setWarningOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-forest-500 mr-2" />
              Wichtiger Hinweis
            </DialogTitle>
            <DialogDescription>
              Bitte lesen und bestätigen Sie, bevor Sie Ihr Holzfäller-Abenteuer beginnen.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 py-4">
            <div className="bg-forest-50 p-4 rounded-md text-sm text-forest-700">
              <p className="font-bold mb-2">Dies ist ein kostenloses Sozialspiel:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Es kann kein echtes Geld gewonnen oder verloren werden</li>
                <li>Es werden keine Preise angeboten</li>
                <li>Nur zu Unterhaltungszwecken</li>
                <li>Für Benutzer ab 18 Jahren bestimmt</li>
              </ul>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
            <Button type="button" variant="outline" onClick={() => setWarningOpen(false)}>
              Abbrechen
            </Button>
            <Button type="button" onClick={handleConfirm} className="bg-forest-500 hover:bg-forest-600 text-white">
              Ich verstehe, Abenteuer starten
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  )
}
