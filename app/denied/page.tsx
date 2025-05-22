import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function AccessDenied() {
  return (
    <div className="flex items-center justify-center py-16 bg-gray-100 min-h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Zugriff verweigert</h1>
        <p className="mb-6 text-gray-700">Sie müssen mindestens 18 Jahre alt sein, um diese Seite zu betreten.</p>
        <Link href="/">
          <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">Zurück zur Startseite</Button>
        </Link>
      </div>
    </div>
  )
}
