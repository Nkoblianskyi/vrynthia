"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RotateCcw, Minus, Plus, Maximize, RefreshCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Waldressourcen (Forest resources)
const RESOURCES = [
  { id: 1, symbol: "🌲", name: "Kiefer", value: 10 }, // Pine
  { id: 2, symbol: "🌳", name: "Eiche", value: 15 }, // Oak
  { id: 3, symbol: "🪓", name: "Axt", value: 20 }, // Axe
  { id: 4, symbol: "🪚", name: "Säge", value: 25 }, // Saw
  { id: 5, symbol: "🧤", name: "Handschuhe", value: 5 }, // Gloves
  { id: 6, symbol: "🪵", name: "Holzstamm", value: 15 }, // Log
  { id: 7, symbol: "🌱", name: "Setzling", value: -5 }, // Sapling (negative value)
  { id: 8, symbol: "🍄", name: "Pilz", value: 5 }, // Mushroom
  { id: 9, symbol: "🦊", name: "Fuchs", value: -10 }, // Fox (negative value)
  { id: 10, symbol: "🦌", name: "Hirsch", value: -15 }, // Deer (negative value)
  { id: 11, symbol: "🌿", name: "Farn", value: 5 }, // Fern
  { id: 12, symbol: "🌧️", name: "Regen", value: -5 }, // Rain (negative value)
]

// Kombinationen (Combinations)
const COMBINATIONS = [
  {
    name: "Holzfäller-Ausrüstung",
    description: "Axt + Handschuhe + Säge",
    items: ["🪓", "🧤", "🪚"],
    bonus: 50,
  },
  {
    name: "Waldpflege",
    description: "Setzling + Regen + Farn",
    items: ["🌱", "🌧️", "🌿"],
    bonus: 30,
  },
  {
    name: "Waldtiere",
    description: "Fuchs + Hirsch + Pilz",
    items: ["🦊", "🦌", "🍄"],
    bonus: 40,
  },
  {
    name: "Baumvielfalt",
    description: "Kiefer + Eiche + Setzling",
    items: ["🌲", "🌳", "🌱"],
    bonus: 35,
  },
]

// Schwierigkeitsgrade (Difficulty levels)
const DIFFICULTY_LEVELS = [
  { name: "Anfänger", multiplier: 1.0, energyCost: 10 },
  { name: "Fortgeschritten", multiplier: 1.5, energyCost: 15 },
  { name: "Experte", multiplier: 2.0, energyCost: 20 },
  { name: "Meister", multiplier: 3.0, energyCost: 30 },
]

export default function GamePage() {
  // Spielzustand (Game state)
  const [resources, setResources] = useState(1000)
  const [energy, setEnergy] = useState(100)
  const [gridItems, setGridItems] = useState<Array<Array<string>>>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [level, setLevel] = useState(1)
  const [experience, setExperience] = useState(0)
  const [experienceToNextLevel, setExperienceToNextLevel] = useState(1000)
  const [gameHistory, setGameHistory] = useState<Array<{ message: string; timestamp: string }>>([])
  const [difficultyLevel, setDifficultyLevel] = useState(DIFFICULTY_LEVELS[0])
  const [foundCombinations, setFoundCombinations] = useState<Array<string>>([])
  const [showTutorial, setShowTutorial] = useState(true)
  const [autoRefillEnergy, setAutoRefillEnergy] = useState(false)
  const [gridSize, setGridSize] = useState({ rows: 4, cols: 6 })
  const [lastResult, setLastResult] = useState<{ points: number; combinations: string[] } | null>(null)

  const historyRef = useRef<HTMLDivElement>(null)

  // Initialisiere das Spielraster (Initialize game grid)
  useEffect(() => {
    initializeGrid()
    addToHistory("Willkommen zum Holzfäller-Abenteuer!")
  }, [])

  // Scrolle zum Ende des Verlaufs, wenn er aktualisiert wird
  // (Scroll to bottom of history when updated)
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight
    }
  }, [gameHistory])

  // Automatisches Auffüllen der Energie, wenn aktiviert
  // (Auto refill energy when enabled)
  useEffect(() => {
    if (!autoRefillEnergy) return

    const interval = setInterval(() => {
      if (energy < 100) {
        setEnergy((prev) => Math.min(prev + 5, 100))
      }
    }, 10000) // Alle 10 Sekunden

    return () => clearInterval(interval)
  }, [autoRefillEnergy, energy])

  // Initialisiere das Spielraster (Initialize game grid)
  const initializeGrid = () => {
    const newGrid: string[][] = []

    for (let row = 0; row < gridSize.rows; row++) {
      const newRow: string[] = []
      for (let col = 0; col < gridSize.cols; col++) {
        const randomResource = RESOURCES[Math.floor(Math.random() * RESOURCES.length)]
        newRow.push(randomResource.symbol)
      }
      newGrid.push(newRow)
    }

    setGridItems(newGrid)
  }

  // Füge einen Eintrag zum Spielverlauf hinzu (Add entry to game history)
  const addToHistory = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setGameHistory((prev) => [...prev, { message, timestamp }])
  }

  // Erhöhe die Energie (Increase energy)
  const increaseEnergy = () => {
    if (energy < 100) setEnergy(energy + 10)
  }

  // Verringere die Energie (Decrease energy)
  const decreaseEnergy = () => {
    if (energy > 10) setEnergy(energy - 10)
  }

  // Maximiere die Energie (Maximize energy)
  const maxEnergy = () => {
    setEnergy(100)
  }

  // Ändere den Schwierigkeitsgrad (Change difficulty level)
  const changeDifficulty = (difficulty: (typeof DIFFICULTY_LEVELS)[0]) => {
    setDifficultyLevel(difficulty)
    addToHistory(`Schwierigkeitsgrad auf ${difficulty.name} geändert`)
  }

  // Füge Erfahrungspunkte hinzu und steige auf, wenn nötig
  // (Add experience points and level up if needed)
  const addExperience = (amount: number) => {
    const newExperience = experience + amount

    if (newExperience >= experienceToNextLevel) {
      // Stufenaufstieg (Level up)
      const newLevel = level + 1
      setLevel(newLevel)
      setExperience(newExperience - experienceToNextLevel)
      setExperienceToNextLevel(Math.floor(experienceToNextLevel * 1.5))

      // Belohnung für Stufenaufstieg (Reward for level up)
      const levelUpReward = newLevel * 100
      setResources((resources) => resources + levelUpReward)

      addToHistory(`Stufenaufstieg! Du bist jetzt Stufe ${newLevel}. ${levelUpReward} Ressourcen erhalten.`)
    } else {
      setExperience(newExperience)
    }
  }

  // Überprüfe auf Kombinationen im Raster (Check for combinations in the grid)
  const checkForCombinations = () => {
    const foundCombos: string[] = []
    let totalPoints = 0
    const resourceCounts: Record<string, number> = {}

    // Zähle alle Ressourcen im Raster (Count all resources in the grid)
    gridItems.forEach((row) => {
      row.forEach((item) => {
        resourceCounts[item] = (resourceCounts[item] || 0) + 1
      })
    })

    // Berechne Punkte für einzelne Ressourcen (Calculate points for individual resources)
    Object.entries(resourceCounts).forEach(([symbol, count]) => {
      const resource = RESOURCES.find((r) => r.symbol === symbol)
      if (resource) {
        const points = resource.value * count
        totalPoints += points

        if (count >= 3) {
          addToHistory(`${count}x ${resource.name} gefunden: ${points} Punkte`)
        }
      }
    })

    // Überprüfe auf spezielle Kombinationen (Check for special combinations)
    COMBINATIONS.forEach((combo) => {
      const hasAllItems = combo.items.every((item) => resourceCounts[item] && resourceCounts[item] >= 3)

      if (hasAllItems) {
        foundCombos.push(combo.name)
        totalPoints += combo.bonus
        addToHistory(`Kombination "${combo.name}" gefunden: +${combo.bonus} Bonus!`)
      }
    })

    // Wende Schwierigkeitsmultiplikator an (Apply difficulty multiplier)
    totalPoints = Math.floor(totalPoints * difficultyLevel.multiplier)

    return { points: totalPoints, combinations: foundCombos }
  }

  // Hauptspiellogik für die Holzverarbeitung (Main game logic for timber processing)
  const processForest = () => {
    if (isProcessing) return

    // Überprüfe, ob der Spieler genügend Energie hat
    // (Check if player has enough energy)
    if (energy < difficultyLevel.energyCost) {
      addToHistory("Nicht genug Energie für diese Operation!")
      return
    }

    setIsProcessing(true)
    setEnergy(energy - difficultyLevel.energyCost)

    // Füge zum Verlauf hinzu (Add to history)
    addToHistory(`Waldverarbeitung mit ${difficultyLevel.energyCost} Energie gestartet`)

    // Simuliere die Rotation des Rasters (Simulate grid rotation)
    let rotationCount = 0
    const maxRotations = 10

    const rotationInterval = setInterval(() => {
      rotationCount++

      if (rotationCount >= maxRotations) {
        clearInterval(rotationInterval)
        finishProcessing()
      } else {
        // Aktualisiere das Raster mit zufälligen Elementen während der Rotation
        // (Update grid with random elements during rotation)
        setGridItems((prevGrid) => {
          return prevGrid.map((row) =>
            row.map(() => {
              const randomResource = RESOURCES[Math.floor(Math.random() * RESOURCES.length)]
              return randomResource.symbol
            }),
          )
        })
      }
    }, 100)
  }

  // Beende die Verarbeitung und berechne das Ergebnis
  // (Finish processing and calculate result)
  const finishProcessing = () => {
    // Generiere das endgültige Raster (Generate final grid)
    const finalGrid: string[][] = []

    for (let row = 0; row < gridSize.rows; row++) {
      const newRow: string[] = []
      for (let col = 0; col < gridSize.cols; col++) {
        const randomResource = RESOURCES[Math.floor(Math.random() * RESOURCES.length)]
        newRow.push(randomResource.symbol)
      }
      finalGrid.push(newRow)
    }

    setGridItems(finalGrid)

    // Überprüfe auf Kombinationen und berechne Belohnungen
    // (Check for combinations and calculate rewards)
    const result = checkForCombinations()
    setLastResult(result)

    // Aktualisiere die Ressourcen mit den Ergebnissen
    // (Update resources with findings)
    if (result.points !== 0) {
      setResources((resources) => resources + result.points)

      // Füge Erfahrung hinzu (Add experience)
      addExperience(Math.abs(result.points) / 10)

      // Protokolliere das Gesamtergebnis (Log total result)
      addToHistory(`Ergebnis: ${result.points > 0 ? "+" : ""}${result.points} Ressourcen`)
    } else {
      addToHistory("Keine Übereinstimmungen gefunden.")
    }

    setFoundCombinations(result.combinations)
    setIsProcessing(false)
  }

  return (
    <div className="py-4 md:py-8 bg-gradient-to-b from-forest-50 to-forest-100 min-h-screen">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex justify-between items-center mb-4 md:mb-8">
          <div className="flex items-center">
            <div className="bg-forest-600 text-white px-2 py-1 rounded-lg mr-2">
              <span className="text-xs font-bold">STUFE {level}</span>
            </div>
            <div className="w-20 md:w-32 bg-gray-200 rounded-full h-2.5 mr-2">
              <div
                className="bg-forest-500 h-2.5 rounded-full"
                style={{ width: `${(experience / experienceToNextLevel) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600">
              {experience}/{experienceToNextLevel}
            </span>
          </div>
          <div className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">18+</div>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 md:gap-6">
          {/* Hauptspielbereich (Main Game Area) */}
          <div className="lg:col-span-3">
            <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="p-3 md:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-xl md:text-2xl font-bold text-forest-800">Holzfäller-Abenteuer</h1>
                  <div className="flex items-center">
                    <Badge variant="outline" className="bg-forest-100 text-forest-700 border-forest-300">
                      {difficultyLevel.name}
                    </Badge>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <p className="text-xs md:text-sm text-gray-500">
                    Nur zu Bildungs- und Unterhaltungszwecken. Kein Echtgeld. Keine Preise. Ab 18 Jahren.
                  </p>
                </div>

                <div className="flex justify-between items-center mb-4 md:mb-6 flex-wrap gap-2">
                  <div className="bg-forest-600 text-white px-3 py-2 rounded-lg">
                    <p className="text-xs md:text-sm">Ressourcen</p>
                    <p className="text-lg md:text-2xl font-bold">{resources}</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={decreaseEnergy}
                        disabled={energy <= 10 || isProcessing}
                        className="h-7 w-7 border-forest-300 text-forest-700"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>

                      <div className="bg-gray-100 px-3 py-1 rounded-lg">
                        <p className="text-xs text-forest-700">Energie</p>
                        <p className="text-sm md:text-base font-bold text-forest-800">{energy}</p>
                      </div>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={increaseEnergy}
                        disabled={energy >= 100 || isProcessing}
                        className="h-7 w-7 border-forest-300 text-forest-700"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>

                      <Button
                        variant="outline"
                        onClick={maxEnergy}
                        disabled={energy >= 100 || isProcessing}
                        className="h-7 border-forest-300 text-forest-700 text-xs"
                      >
                        <Maximize className="h-3 w-3 mr-1" />
                        Max
                      </Button>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="autoRefill"
                        checked={autoRefillEnergy}
                        onChange={() => setAutoRefillEnergy(!autoRefillEnergy)}
                        className="mr-2"
                      />
                      <label htmlFor="autoRefill" className="text-xs text-forest-700">
                        Auto-Auffüllen
                      </label>
                    </div>
                  </div>
                </div>

                {/* Schwierigkeitsgrad-Auswahl (Difficulty Selection) */}
                <div className="mb-4 md:mb-6">
                  <h3 className="text-sm md:text-lg font-bold mb-2 text-forest-800">Schwierigkeitsgrad</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {DIFFICULTY_LEVELS.map((difficulty) => (
                      <Button
                        key={difficulty.name}
                        variant={difficultyLevel.name === difficulty.name ? "default" : "outline"}
                        className={`h-auto py-2 text-xs md:text-sm ${
                          difficultyLevel.name === difficulty.name
                            ? "bg-forest-600 text-white"
                            : "border-forest-300 text-forest-700"
                        }`}
                        onClick={() => changeDifficulty(difficulty)}
                        disabled={isProcessing}
                      >
                        <div className="flex flex-col items-center">
                          <span>{difficulty.name}</span>
                          <span className="text-xs opacity-80">x{difficulty.multiplier}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Hauptspielraster (Main Game Grid) */}
                <div className="bg-gradient-to-b from-forest-600 to-forest-800 p-2 md:p-4 rounded-xl mb-4 md:mb-6">
                  <div className="flex justify-between items-center mb-3 md:mb-4">
                    <h3 className="text-base md:text-xl font-bold text-white">Waldverarbeitung</h3>
                    <Badge className="bg-forest-200 text-forest-800">{difficultyLevel.name}</Badge>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-4 mb-4 md:mb-6">
                    <div
                      className={cn(
                        "grid gap-1 md:gap-2",
                        `grid-cols-${gridSize.cols}`,
                        isProcessing ? "opacity-75" : "",
                      )}
                      style={{
                        gridTemplateColumns: `repeat(${gridSize.cols}, minmax(0, 1fr))`,
                      }}
                    >
                      {gridItems.map((row, rowIndex) =>
                        row.map((item, colIndex) => (
                          <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`
                              flex items-center justify-center 
                              aspect-square text-3xl md:text-5xl 
                              bg-white/20 rounded-md
                              ${isProcessing ? "animate-pulse" : ""}
                            `}
                          >
                            {item}
                          </div>
                        )),
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-wood-500 hover:bg-wood-600 text-white text-base md:text-xl py-3 md:py-6"
                    onClick={processForest}
                    disabled={isProcessing || energy < difficultyLevel.energyCost}
                  >
                    {isProcessing ? (
                      <div className="flex items-center">
                        <RotateCcw className="h-4 w-4 md:h-5 md:w-5 mr-2 animate-spin" />
                        Verarbeitung...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <RefreshCw className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                        Wald verarbeiten ({difficultyLevel.energyCost} Energie)
                      </div>
                    )}
                  </Button>
                </div>

                {/* Letztes Ergebnis (Last Result) */}
                {lastResult && (
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-sm md:text-lg font-bold mb-2 text-forest-800">Letztes Ergebnis</h3>
                    <div className="bg-forest-50 rounded-lg p-3 border border-forest-100">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm md:text-base">Gesammelte Punkte:</span>
                        <span
                          className={`font-bold text-base md:text-lg ${lastResult.points >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {lastResult.points >= 0 ? "+" : ""}
                          {lastResult.points}
                        </span>
                      </div>

                      {lastResult.combinations.length > 0 && (
                        <div className="mt-2">
                          <span className="font-medium text-sm">Gefundene Kombinationen:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {lastResult.combinations.map((combo, index) => (
                              <Badge key={index} className="bg-forest-100 text-forest-700">
                                {combo}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Bildungsinformationen (Educational Information) */}
                <div className="bg-forest-50 p-3 md:p-4 rounded-lg border border-forest-100">
                  <h3 className="font-bold mb-2 text-forest-800 text-sm md:text-base">Bildungsinformationen:</h3>
                  <ul className="text-xs md:text-sm space-y-1 text-forest-700">
                    <li>
                      • Nachhaltige Forstwirtschaft beinhaltet die Ernte von Bäumen bei gleichzeitiger Erhaltung der
                      Waldgesundheit
                    </li>
                    <li>• Verschiedene Baumarten haben unterschiedliche Wachstumsraten und Holzeigenschaften</li>
                    <li>• Eine ordnungsgemäße Waldbewirtschaftung hilft, Waldbrände und Krankheiten zu verhindern</li>
                    <li>• Die Holzernte schafft Lebensräume für bestimmte Wildtierarten</li>
                    <li>
                      • Moderne Forstwirtschaftspraktiken zielen darauf ab, wirtschaftliche und ökologische Bedürfnisse
                      in Einklang zu bringen
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Seitenleiste (Sidebar) */}
          <div className="lg:col-span-1">
            <Card className="border-forest-200 mb-4">
              <div className="p-3 md:p-4">
                <h3 className="text-base md:text-lg font-bold mb-2 text-forest-800">Ressourcenwerte</h3>
                <div className="grid grid-cols-2 gap-1">
                  {RESOURCES.map((resource) => (
                    <div
                      key={resource.id}
                      className="flex items-center p-1 bg-forest-50 rounded border border-forest-100"
                    >
                      <div className="text-xl md:text-2xl mr-2">{resource.symbol}</div>
                      <div>
                        <div className="text-xs font-medium text-forest-700">{resource.name}</div>
                        <div className={`text-xs ${resource.value >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {resource.value >= 0 ? "+" : ""}
                          {resource.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Tutorial-Overlay */}
        {showTutorial && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <Card className="max-w-md w-full">
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-forest-800">
                  Willkommen zum Holzfäller-Abenteuer!
                </h2>
                <div className="space-y-3 text-sm md:text-base">
                  <p>In diesem Bildungsspiel lernst du über nachhaltige Forstwirtschaft und Ressourcenmanagement.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Verarbeite den Wald, um verschiedene Ressourcen zu sammeln</li>
                    <li>Finde spezielle Kombinationen für Bonuspunkte</li>
                    <li>Achte auf deine Energie - verschiedene Schwierigkeitsgrade verbrauchen unterschiedlich viel</li>
                    <li>Sammle Erfahrung und steige im Level auf</li>
                  </ul>
                  <p className="font-medium">
                    Dieses Spiel dient nur Bildungs- und Unterhaltungszwecken. Es werden keine echten Werte
                    ausgetauscht.
                  </p>
                </div>
                <Button className="w-full mt-4 bg-forest-600" onClick={() => setShowTutorial(false)}>
                  Verstanden, Abenteuer starten!
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
