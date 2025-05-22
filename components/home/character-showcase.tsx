"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Shield, Axe, Eye } from "lucide-react"

const characters = [
  {
    id: "jack",
    name: "Jack Timber",
    type: "Master Lumberjack",
    description:
      "A seasoned lumberjack with decades of experience in the forest. Jack knows every tree species and the best cutting techniques.",
    stats: {
      strength: 85,
      precision: 90,
      knowledge: 95,
      leadership: 80,
    },
    abilities: [
      { name: "Perfect Cut", icon: Axe, description: "Maximize lumber yield with precise cutting techniques" },
      { name: "Tree Whisperer", icon: Eye, description: "Identify the highest quality trees for harvesting" },
    ],
    image: "/characters/jack.png",
  },
  {
    id: "emma",
    name: "Emma Woods",
    type: "Forest Manager",
    description:
      "An environmental scientist turned forest manager who balances timber production with sustainable practices.",
    stats: {
      strength: 65,
      precision: 75,
      knowledge: 95,
      leadership: 90,
    },
    abilities: [
      { name: "Sustainable Planning", icon: Eye, description: "Optimize forest regrowth while maintaining production" },
      { name: "Wildlife Protection", icon: Shield, description: "Preserve animal habitats during logging operations" },
    ],
    image: "/characters/emma.png",
  },
  {
    id: "marcus",
    name: "Marcus Steel",
    type: "Equipment Specialist",
    description: "A mechanical genius who can operate and repair any logging machinery with unmatched efficiency.",
    stats: {
      strength: 80,
      precision: 85,
      knowledge: 90,
      leadership: 70,
    },
    abilities: [
      { name: "Machine Mastery", icon: Star, description: "Operate heavy equipment with maximum efficiency" },
      { name: "Quick Repair", icon: Shield, description: "Fix broken machinery in half the normal time" },
    ],
    image: "/characters/marcus.png",
  },
]

export default function CharacterShowcase() {
  const [currentCharacter, setCurrentCharacter] = useState(0)

  const nextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length)
  }

  const prevCharacter = () => {
    setCurrentCharacter((prev) => (prev - 1 + characters.length) % characters.length)
  }

  const character = characters[currentCharacter]

  return (
    <section className="py-20 bg-gradient-to-r from-forest-900 via-wood-800 to-forest-900 text-white relative overflow-hidden">
      {/* Hintergrundmuster */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 right-0 h-40 bg-repeat-x"
          style={{ backgroundImage: "url('/forest-silhouette.png')" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-40 bg-repeat-x"
          style={{ backgroundImage: "url('/mountain-silhouette.png')" }}
        ></div>
      </div>

      {/* Hauptinhalt */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-amber-300">Wähle Deinen Holzfäller</h2>
          <p className="text-xl text-wood-200 max-w-3xl mx-auto">
            Jeder Charakter hat einzigartige Fähigkeiten, die dir helfen, dein Holzimperium aufzubauen
          </p>
        </motion.div>

        {/* Charakterauswahl-Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-wood-800/50 rounded-full p-1 backdrop-blur-sm">
            {characters.map((char, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentCharacter(idx)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  idx === currentCharacter ? "bg-amber-600 text-white shadow-lg" : "text-wood-300 hover:text-amber-300"
                }`}
              >
                {char.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Hauptinhalt in horizontaler Anordnung */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Charakter-Illustration */}
          <motion.div
            key={`image-${character.id}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative w-full lg:w-1/3 h-[400px] flex items-center justify-center order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-forest-500/20 to-forest-700/20 rounded-full blur-3xl opacity-70" />

            {/* Animierte Holzfäller-Illustrationen */}
            {character.id === "jack" && (
              <div className="relative w-[300px] h-[400px]">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {/* Master Lumberjack - Jack */}
                  <g className="lumberjack">
                    {/* Forest Background */}
                    <rect x="0" y="0" width="400" height="500" fill="#1f2937" opacity="0.3" />

                    {/* Trees */}
                    <path d="M50,450 L100,350 L150,450 Z" fill="#064e3b" opacity="0.5" />
                    <path d="M300,450 L350,320 L400,450 Z" fill="#064e3b" opacity="0.5" />
                    <rect x="70" y="450" width="10" height="30" fill="#7f1d1d" />
                    <rect x="320" y="450" width="10" height="30" fill="#7f1d1d" />

                    {/* Ground */}
                    <rect x="0" y="480" width="400" height="20" fill="#4b5563" />

                    {/* Lumberjack Body */}
                    <rect
                      x="180"
                      y="280"
                      width="40"
                      height="100"
                      fill="#9a3412"
                      className="animate-pulse"
                      style={{ animationDuration: "4s" }}
                    />

                    {/* Arms */}
                    <rect x="150" y="290" width="30" height="15" fill="#9a3412" transform="rotate(-20 150 290)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="-20 150 290"
                        to="-25 150 290"
                        dur="2s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>
                    <rect x="220" y="290" width="60" height="15" fill="#9a3412" transform="rotate(20 220 290)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="20 220 290"
                        to="40 220 290"
                        dur="2s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>

                    {/* Legs */}
                    <rect x="180" y="380" width="15" height="100" fill="#1f2937" />
                    <rect x="205" y="380" width="15" height="100" fill="#1f2937" />

                    {/* Boots */}
                    <rect x="175" y="480" width="25" height="10" fill="#7f1d1d" />
                    <rect x="200" y="480" width="25" height="10" fill="#7f1d1d" />

                    {/* Head */}
                    <circle cx="200" cy="240" r="40" fill="#fed7aa" />

                    {/* Beard */}
                    <path d="M180,250 Q200,280 220,250" fill="#a16207" />

                    {/* Hat */}
                    <path d="M160,220 H240 V200 H160 Z" fill="#991b1b" />
                    <ellipse cx="200" cy="200" rx="40" ry="10" fill="#991b1b" />

                    {/* Eyes */}
                    <circle cx="185" cy="230" r="5" fill="#1f2937" />
                    <circle cx="215" cy="230" r="5" fill="#1f2937" />

                    {/* Axe */}
                    <rect
                      x="270"
                      y="290"
                      width="60"
                      height="8"
                      fill="#7f1d1d"
                      transform="rotate(20 270 290)"
                      className="swing"
                    />
                    <path
                      d="M330,280 L350,270 L360,290 L340,300 Z"
                      fill="#d1d5db"
                      transform="rotate(20 330 290)"
                      className="swing"
                    />

                    {/* Cut Tree Stump */}
                    <rect x="100" y="450" width="40" height="30" fill="#7f1d1d" />
                    <ellipse cx="120" cy="450" rx="20" ry="5" fill="#92400e" />

                    {/* Logs */}
                    <rect x="280" y="460" width="60" height="20" rx="10" fill="#92400e" />
                    <ellipse cx="280" cy="470" rx="10" ry="10" fill="#7f1d1d" />
                    <ellipse cx="340" cy="470" rx="10" ry="10" fill="#7f1d1d" />
                  </g>
                </svg>
              </div>
            )}

            {character.id === "emma" && (
              <div className="relative w-[300px] h-[400px]">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {/* Forest Manager - Emma */}
                  <g className="lumberjack">
                    {/* Forest Background */}
                    <rect x="0" y="0" width="400" height="500" fill="#1f2937" opacity="0.3" />

                    {/* Trees */}
                    <path d="M50,450 L100,350 L150,450 Z" fill="#064e3b" opacity="0.5" />
                    <path d="M300,450 L350,320 L400,450 Z" fill="#064e3b" opacity="0.5" />
                    <rect x="70" y="450" width="10" height="30" fill="#7f1d1d" />
                    <rect x="320" y="450" width="10" height="30" fill="#7f1d1d" />

                    {/* Ground */}
                    <rect x="0" y="480" width="400" height="20" fill="#4b5563" />

                    {/* Emma Body */}
                    <rect
                      x="180"
                      y="280"
                      width="40"
                      height="100"
                      fill="#0c4a6e"
                      className="animate-pulse"
                      style={{ animationDuration: "4s" }}
                    />

                    {/* Arms */}
                    <rect x="150" y="290" width="30" height="15" fill="#0c4a6e" transform="rotate(-20 150 290)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="-20 150 290"
                        to="-25 150 290"
                        dur="2s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>
                    <rect x="220" y="290" width="30" height="15" fill="#0c4a6e" transform="rotate(20 220 290)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="20 220 290"
                        to="25 220 290"
                        dur="2s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>

                    {/* Legs */}
                    <rect x="180" y="380" width="15" height="100" fill="#1f2937" />
                    <rect x="205" y="380" width="15" height="100" fill="#1f2937" />

                    {/* Boots */}
                    <rect x="175" y="480" width="25" height="10" fill="#7f1d1d" />
                    <rect x="200" y="480" width="25" height="10" fill="#7f1d1d" />

                    {/* Head */}
                    <circle cx="200" cy="240" r="40" fill="#fed7aa" />

                    {/* Hair */}
                    <path d="M170,220 Q200,180 230,220" fill="#a16207" />
                    <path d="M160,240 Q160,200 180,200 Q200,200 220,200 Q240,200 240,240" fill="#a16207" />

                    {/* Eyes */}
                    <circle cx="185" cy="230" r="5" fill="#1f2937" />
                    <circle cx="215" cy="230" r="5" fill="#1f2937" />

                    {/* Helmet */}
                    <path d="M160,220 Q200,180 240,220" fill="#0e7490" />
                    <ellipse cx="200" cy="220" rx="40" ry="10" fill="#0e7490" />

                    {/* Clipboard */}
                    <rect
                      x="250"
                      y="300"
                      width="30"
                      height="40"
                      fill="#f1f5f9"
                      transform="rotate(20 250 300)"
                      className="swing"
                    />
                    <rect
                      x="255"
                      y="310"
                      width="20"
                      height="2"
                      fill="#475569"
                      transform="rotate(20 255 310)"
                      className="swing"
                    />
                    <rect
                      x="255"
                      y="320"
                      width="20"
                      height="2"
                      fill="#475569"
                      transform="rotate(20 255 320)"
                      className="swing"
                    />
                    <rect
                      x="255"
                      y="330"
                      width="20"
                      height="2"
                      fill="#475569"
                      transform="rotate(20 255 330)"
                      className="swing"
                    />

                    {/* Saplings */}
                    <path d="M120,460 L130,430 L140,460 Z" fill="#065f46" />
                    <rect x="128" y="460" width="4" height="10" fill="#7f1d1d" />

                    <path d="M320,460 L330,430 L340,460 Z" fill="#065f46" />
                    <rect x="328" y="460" width="4" height="10" fill="#7f1d1d" />
                  </g>
                </svg>
              </div>
            )}

            {character.id === "marcus" && (
              <div className="relative w-[300px] h-[400px]">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {/* Equipment Specialist - Marcus */}
                  <g className="lumberjack">
                    {/* Forest Background */}
                    <rect x="0" y="0" width="400" height="500" fill="#1f2937" opacity="0.3" />

                    {/* Ground */}
                    <rect x="0" y="480" width="400" height="20" fill="#4b5563" />

                    {/* Marcus Body */}
                    <rect
                      x="180"
                      y="280"
                      width="40"
                      height="100"
                      fill="#4b5563"
                      className="animate-pulse"
                      style={{ animationDuration: "4s" }}
                    />

                    {/* Arms */}
                    <rect x="150" y="290" width="30" height="20" fill="#4b5563" transform="rotate(-20 150 290)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="-20 150 290"
                        to="-25 150 290"
                        dur="2s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>
                    <rect x="220" y="290" width="30" height="20" fill="#4b5563" transform="rotate(20 220 290)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="20 220 290"
                        to="25 220 290"
                        dur="2s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>

                    {/* Legs */}
                    <rect x="180" y="380" width="15" height="100" fill="#1f2937" />
                    <rect x="205" y="380" width="15" height="100" fill="#1f2937" />

                    {/* Boots */}
                    <rect x="175" y="480" width="25" height="10" fill="#7f1d1d" />
                    <rect x="200" y="480" width="25" height="10" fill="#7f1d1d" />

                    {/* Head */}
                    <circle cx="200" cy="240" r="40" fill="#fed7aa" />

                    {/* Eyes */}
                    <circle cx="185" cy="230" r="5" fill="#1f2937" />
                    <circle cx="215" cy="230" r="5" fill="#1f2937" />

                    {/* Hard Hat */}
                    <path d="M160,220 Q200,200 240,220" fill="#eab308" />
                    <ellipse cx="200" cy="220" rx="40" ry="10" fill="#eab308" />

                    {/* Chainsaw */}
                    <rect
                      x="240"
                      y="300"
                      width="60"
                      height="20"
                      fill="#4b5563"
                      transform="rotate(20 240 300)"
                      className="swing"
                    />
                    <rect
                      x="290"
                      y="290"
                      width="40"
                      height="10"
                      fill="#d1d5db"
                      transform="rotate(20 290 290)"
                      className="swing"
                    />
                    <path
                      d="M290,285 L330,275 L330,305 L290,295 Z"
                      fill="#9ca3af"
                      transform="rotate(20 290 290)"
                      className="swing"
                    />

                    {/* Harvester Machine */}
                    <rect x="50" y="400" width="100" height="80" fill="#b45309" />
                    <rect x="30" y="450" width="140" height="30" fill="#b45309" />
                    <circle cx="50" cy="480" r="20" fill="#1f2937" />
                    <circle cx="150" cy="480" r="20" fill="#1f2937" />
                    <rect x="100" y="380" width="10" height="20" fill="#b45309" />
                    <rect x="80" y="350" width="50" height="30" fill="#b45309" />
                    <rect x="120" y="340" width="40" height="10" fill="#b45309" />
                  </g>
                </svg>
              </div>
            )}
          </motion.div>

          {/* Charakter-Info */}
          <motion.div
            key={character.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/3 order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-wood-800/80 to-wood-950/80 rounded-2xl p-8 backdrop-blur-sm border border-wood-700/50 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-amber-400">{character.name}</h3>
                  <p className="text-wood-300">{character.type}</p>
                </div>
              </div>

              <p className="text-wood-100 mb-6">{character.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-amber-300">Statistiken</h4>
                  <div className="space-y-3">
                    {Object.entries(character.stats).map(([stat, value]) => (
                      <div key={stat} className="space-y-1">
                        <div className="flex justify-between">
                          <span className="capitalize text-wood-200">{stat}</span>
                          <span className="text-amber-400">{value}/100</span>
                        </div>
                        <div className="w-full bg-wood-950 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-amber-300">Spezialfähigkeiten</h4>
                  <div className="space-y-3">
                    {character.abilities.map((ability, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-wood-900/50 rounded-lg p-3 border border-wood-700/30 hover:border-amber-600/50 transition-all duration-300"
                      >
                        <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-2 rounded-lg mr-3">
                          <ability.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-amber-300">{ability.name}</h5>
                          <p className="text-sm text-wood-200">{ability.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes swing {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }
        
        .swing {
          transform-origin: 0% 50%;
          animation: swing 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  )
}
