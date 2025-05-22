"use client"
import { motion } from "framer-motion"
import { TreePine, Axe, Truck, Leaf, Wind, Sun } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function GameplayPreview() {
  return (
    <section className="py-16 bg-gradient-to-b from-wood-50 to-wood-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
              <div className="bg-forest-700 text-white p-4">
                <h3 className="text-xl font-bold">Spielbereiche</h3>
                <p className="text-sm text-forest-100">Erkunden Sie verschiedene Gameplay-Aspekte</p>
              </div>

              <Tabs defaultValue="forest" orientation="vertical" className="w-full">
                <TabsList className="grid grid-cols-1 h-auto bg-transparent p-0">
                  <TabsTrigger
                    value="forest"
                    className="flex items-center justify-start p-4 border-l-4 border-transparent data-[state=active]:border-forest-600 data-[state=active]:bg-forest-50 data-[state=active]:text-forest-800"
                  >
                    <TreePine className="h-5 w-5 mr-2 text-forest-600" />
                    <span>Waldmanagement</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="logging"
                    className="flex items-center justify-start p-4 border-l-4 border-transparent data-[state=active]:border-wood-600 data-[state=active]:bg-wood-50 data-[state=active]:text-wood-800"
                  >
                    <Axe className="h-5 w-5 mr-2 text-wood-600" />
                    <span>Holzfällarbeiten</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="sawmill"
                    className="flex items-center justify-start p-4 border-l-4 border-transparent data-[state=active]:border-amber-600 data-[state=active]:bg-amber-50 data-[state=active]:text-amber-800"
                  >
                    <Truck className="h-5 w-5 mr-2 text-amber-600" />
                    <span>Sägewerkverarbeitung</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <h4 className="font-medium text-gray-700 mb-2">Spielfunktionen</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-forest-700">
                    <Leaf className="h-4 w-4 mr-2 text-forest-500" />
                    Lehrreiches Gameplay
                  </li>
                  <li className="flex items-center text-forest-700">
                    <Leaf className="h-4 w-4 mr-2 text-forest-500" />
                    Kein Echtgeld involviert
                  </li>
                  <li className="flex items-center text-forest-700">
                    <Leaf className="h-4 w-4 mr-2 text-forest-500" />
                    Nur zur Unterhaltung
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-bold mb-6 text-forest-800">
              Gameplay <span className="text-wood-600">Vorschau</span>
            </h2>

            <Tabs defaultValue="forest" className="w-full">
              <TabsContent value="forest" className="mt-0">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Animated Forest Scene with Lumberjack - No Images */}
                  <div className="relative aspect-video bg-gradient-to-b from-forest-700 to-forest-900 overflow-hidden">
                    {/* Animated Sky */}
                    <div className="absolute inset-0 opacity-20">
                      <motion.div
                        className="absolute top-5 right-10 text-yellow-200"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 4,
                        }}
                      >
                        <Sun size={60} />
                      </motion.div>

                      {/* Animated Clouds */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute bg-white/30 rounded-full"
                          style={{
                            top: `${10 + i * 10}%`,
                            left: `-20%`,
                            width: `${80 + i * 20}px`,
                            height: `${40 + i * 10}px`,
                          }}
                          animate={{
                            x: ["0%", "120%"],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 20 + i * 5,
                            ease: "linear",
                            delay: i * 2,
                          }}
                        />
                      ))}
                    </div>

                    {/* Animated Mountains */}
                    <div className="absolute bottom-0 w-full h-1/2">
                      <motion.div
                        className="absolute bottom-0 w-full h-full"
                        style={{
                          background: "linear-gradient(to top, #2d3b2d, transparent)",
                          clipPath:
                            "polygon(0% 100%, 20% 80%, 30% 90%, 40% 70%, 50% 85%, 60% 75%, 70% 90%, 80% 80%, 90% 85%, 100% 70%, 100% 100%)",
                        }}
                      />
                    </div>

                    {/* Animated Trees */}
                    <div className="absolute bottom-0 w-full">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute bottom-0"
                          style={{
                            left: `${i * 8}%`,
                            height: `${100 + Math.sin(i) * 30}px`,
                          }}
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 2 + (i % 3),
                            delay: i * 0.2,
                          }}
                        >
                          <TreePine size={50 + (i % 3) * 20} className="text-forest-600" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated Wind */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `-10%`,
                        }}
                        animate={{
                          x: ["0%", "110%"],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 8,
                          delay: i * 1.5,
                        }}
                      >
                        <Wind className="text-white/20" size={30} />
                      </motion.div>
                    ))}

                    {/* Animated Lumberjack Character */}
                    <div className="absolute bottom-0 left-[30%]">
                      {/* Lumberjack Body */}
                      <motion.div
                        className="relative"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 2,
                        }}
                      >
                        {/* Head */}
                        <div className="relative w-12 h-12 bg-amber-700 rounded-full mb-1">
                          {/* Face */}
                          <div className="absolute top-3 left-2 w-2 h-1 bg-black rounded-full"></div>
                          <div className="absolute top-3 right-2 w-2 h-1 bg-black rounded-full"></div>
                          <div className="absolute top-6 left-4 w-4 h-1 bg-black rounded-full"></div>

                          {/* Beard */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-4 bg-amber-900 rounded-b-full"></div>

                          {/* Hat */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-red-700 rounded"></div>
                        </div>

                        {/* Body */}
                        <div className="w-16 h-20 bg-red-800 rounded-lg relative">
                          {/* Arms */}
                          <motion.div
                            className="absolute -left-6 top-2 w-6 h-10 bg-red-800 rounded-l-lg"
                            animate={{
                              rotate: [0, -15, 0],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 2,
                              delay: 0.5,
                            }}
                          ></motion.div>

                          <motion.div
                            className="absolute -right-10 top-2 w-10 h-10 bg-red-800 rounded-r-lg"
                            animate={{
                              rotate: [0, 30, 0, -10, 0],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 3,
                            }}
                          >
                            {/* Axe */}
                            <motion.div
                              className="absolute top-0 right-0"
                              animate={{
                                rotate: [0, -10, 0, 10, 0],
                              }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 3,
                              }}
                            >
                              <div className="w-2 h-16 bg-amber-950 rounded"></div>
                              <div className="absolute -top-2 -right-6 w-8 h-6 bg-gray-400 rounded-r"></div>
                            </motion.div>
                          </motion.div>

                          {/* Belt */}
                          <div className="absolute top-1/2 left-0 w-full h-3 bg-amber-900"></div>
                        </div>

                        {/* Legs */}
                        <div className="flex justify-center space-x-1">
                          <motion.div
                            className="w-6 h-12 bg-blue-900 rounded-b-lg"
                            animate={{
                              height: [12, 14, 12],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 2,
                            }}
                          ></motion.div>
                          <motion.div
                            className="w-6 h-12 bg-blue-900 rounded-b-lg"
                            animate={{
                              height: [12, 10, 12],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 2,
                            }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Animated Tree Being Cut */}
                    <div className="absolute bottom-0 left-[60%]">
                      <motion.div
                        className="relative"
                        animate={{
                          rotate: [0, 0, 0, 5, 0, -5, 0],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 3,
                          times: [0, 0.7, 0.8, 0.85, 0.9, 0.95, 1],
                        }}
                      >
                        <TreePine size={100} className="text-forest-700" />

                        {/* Chopping Effect */}
                        <motion.div
                          className="absolute bottom-10 left-1/2 -translate-x-1/2"
                          animate={{
                            opacity: [0, 1, 0],
                            x: [0, 10, 0],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 3,
                            times: [0.7, 0.8, 0.9],
                          }}
                        >
                          <div className="w-6 h-2 bg-amber-200 rounded"></div>
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Holzfäller im Wald</h3>
                        <p className="text-white/80">
                          Erleben Sie das Leben eines Holzfällers: Bäume fällen, Ressourcen verwalten und die Natur
                          respektieren
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-forest-100 text-forest-700 hover:bg-forest-200">Nachhaltig</Badge>
                      <Badge className="bg-forest-100 text-forest-700 hover:bg-forest-200">Ökosystem</Badge>
                      <Badge className="bg-forest-100 text-forest-700 hover:bg-forest-200">Baumwachstum</Badge>
                      <Badge className="bg-forest-100 text-forest-700 hover:bg-forest-200">Tierwelt</Badge>
                    </div>

                    <h4 className="text-lg font-bold mb-3 text-forest-800">Waldmanagement-Funktionen</h4>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <div className="bg-forest-100 p-2 rounded-full mr-3 mt-1">
                          <TreePine className="h-4 w-4 text-forest-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-forest-700">Baumpflanzung</h5>
                          <p className="text-sm text-gray-600">
                            Pflanzen Sie verschiedene Baumarten, um die Waldvielfalt zu erhalten
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-forest-100 p-2 rounded-full mr-3 mt-1">
                          <Leaf className="h-4 w-4 text-forest-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-forest-700">Ökosystemüberwachung</h5>
                          <p className="text-sm text-gray-600">Verfolgen Sie die Waldgesundheit und Tierpopulationen</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-forest-100 p-2 rounded-full mr-3 mt-1">
                          <TreePine className="h-4 w-4 text-forest-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-forest-700">Krankheitsbekämpfung</h5>
                          <p className="text-sm text-gray-600">
                            Identifizieren und behandeln Sie Waldkrankheiten und Schädlinge
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-forest-100 p-2 rounded-full mr-3 mt-1">
                          <Leaf className="h-4 w-4 text-forest-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-forest-700">Wachstumsüberwachung</h5>
                          <p className="text-sm text-gray-600">
                            Überwachen Sie das Baumwachstum und die Waldentwicklung im Laufe der Zeit
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-forest-50 p-4 rounded-lg border border-forest-100">
                      <h5 className="font-bold text-forest-800 mb-2">Lehrwert</h5>
                      <p className="text-sm text-forest-700">
                        Lernen Sie über nachhaltige Forstwirtschaftspraktiken, Ökosystemmanagement und die Bedeutung der
                        Biodiversität für die Erhaltung gesunder Wälder.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="logging" className="mt-0">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Animated Logging Scene - No Images */}
                  <div className="relative aspect-video bg-gradient-to-b from-wood-700 to-wood-900 overflow-hidden">
                    {/* Animated Sky */}
                    <div className="absolute inset-0 opacity-20">
                      <motion.div
                        className="absolute top-5 right-10 text-yellow-200"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 4,
                        }}
                      >
                        <Sun size={60} />
                      </motion.div>
                    </div>

                    {/* Animated Mountains */}
                    <div className="absolute bottom-0 w-full h-1/2">
                      <motion.div
                        className="absolute bottom-0 w-full h-full"
                        style={{
                          background: "linear-gradient(to top, #3d2c1f, transparent)",
                          clipPath:
                            "polygon(0% 100%, 15% 85%, 25% 95%, 35% 80%, 45% 90%, 55% 75%, 65% 85%, 75% 75%, 85% 90%, 100% 80%, 100% 100%)",
                        }}
                      />
                    </div>

                    {/* Animated Trees and Stumps */}
                    <div className="absolute bottom-0 w-full">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute bottom-0"
                          style={{
                            left: `${10 + i * 10}%`,
                          }}
                        >
                          {i % 3 === 0 ? (
                            // Tree stump
                            <div className="h-10 w-10 bg-wood-500 rounded-sm" />
                          ) : (
                            // Tree
                            <TreePine size={50 + (i % 3) * 15} className="text-forest-600" />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated Axe */}
                    <motion.div
                      className="absolute bottom-20 left-[30%]"
                      animate={{
                        rotate: [0, -45, 0],
                        y: [0, -10, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.5,
                        ease: "easeInOut",
                        repeatDelay: 0.5,
                      }}
                    >
                      <Axe size={40} className="text-gray-300" />
                    </motion.div>

                    {/* Animated Truck */}
                    <motion.div
                      className="absolute bottom-10 left-[-10%]"
                      animate={{
                        x: ["0%", "120%"],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 10,
                        repeatDelay: 2,
                      }}
                    >
                      <Truck size={50} className="text-gray-300" />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Holzfällarbeiten</h3>
                        <p className="text-white/80">
                          Beherrschen Sie verschiedene Holzfälltechniken und Ausrüstungen, um Holz effizient zu ernten
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-wood-100 text-wood-700 hover:bg-wood-200">Ausrüstung</Badge>
                      <Badge className="bg-wood-100 text-wood-700 hover:bg-wood-200">Techniken</Badge>
                      <Badge className="bg-wood-100 text-wood-700 hover:bg-wood-200">Sicherheit</Badge>
                      <Badge className="bg-wood-100 text-wood-700 hover:bg-wood-200">Effizienz</Badge>
                    </div>

                    <h4 className="text-lg font-bold mb-3 text-wood-800">Holzfällarbeiten-Funktionen</h4>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <div className="bg-wood-100 p-2 rounded-full mr-3 mt-1">
                          <Axe className="h-4 w-4 text-wood-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-wood-700">Ausrüstungsauswahl</h5>
                          <p className="text-sm text-gray-600">
                            Wählen Sie die richtigen Werkzeuge für verschiedene Holzfällaufgaben
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-wood-100 p-2 rounded-full mr-3 mt-1">
                          <Truck className="h-4 w-4 text-wood-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-wood-700">Transportplanung</h5>
                          <p className="text-sm text-gray-600">
                            Planen Sie effiziente Routen für den Transport von geerntetem Holz
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-wood-100 p-2 rounded-full mr-3 mt-1">
                          <Axe className="h-4 w-4 text-wood-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-wood-700">Schnitttechniken</h5>
                          <p className="text-sm text-gray-600">
                            Erlernen Sie richtige Schnittmethoden für verschiedene Baumarten
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-wood-100 p-2 rounded-full mr-3 mt-1">
                          <Truck className="h-4 w-4 text-wood-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-wood-700">Sicherheitsprotokolle</h5>
                          <p className="text-sm text-gray-600">
                            Befolgen Sie Sicherheitsrichtlinien, um Unfälle zu vermeiden
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-wood-50 p-4 rounded-lg border border-wood-100">
                      <h5 className="font-bold text-wood-800 mb-2">Lehrwert</h5>
                      <p className="text-sm text-wood-700">
                        Lernen Sie über moderne Holzfälltechniken, Gerätehandhabung, Sicherheitsverfahren und wie man
                        die Umweltauswirkungen während der Erntearbeiten minimiert.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sawmill" className="mt-0">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Animated Sawmill Scene - No Images */}
                  <div className="relative aspect-video bg-gradient-to-b from-amber-700 to-amber-900 overflow-hidden">
                    {/* Animated Building */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2">
                      <div className="relative w-full h-full">
                        {/* Sawmill building */}
                        <div className="absolute bottom-0 w-full h-full bg-amber-800 rounded-t-lg">
                          {/* Windows */}
                          <div className="absolute top-1/4 left-1/4 w-10 h-6 bg-yellow-300/70 rounded"></div>
                          <div className="absolute top-1/4 right-1/4 w-10 h-6 bg-yellow-300/70 rounded"></div>

                          {/* Door */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-16 bg-amber-950 rounded-t"></div>

                          {/* Roof */}
                          <div
                            className="absolute -top-10 left-0 w-full h-10"
                            style={{
                              background: "#8B4513",
                              clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                            }}
                          ></div>
                        </div>

                        {/* Chimney with smoke */}
                        <div className="absolute bottom-1/2 right-1/4 w-8 h-20 bg-gray-700">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute -top-10 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-300/30 rounded-full"
                              animate={{
                                y: [0, -50],
                                x: [0, i % 2 === 0 ? 10 : -10],
                                scale: [1, 2],
                                opacity: [0.7, 0],
                              }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 3,
                                delay: i * 0.5,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Animated Logs */}
                    <div className="absolute bottom-10 left-10">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute"
                          style={{
                            bottom: `${i * 8}px`,
                            left: `${i * 5}px`,
                            width: "60px",
                            height: "15px",
                            background: "#8B4513",
                            borderRadius: "7.5px",
                          }}
                        />
                      ))}
                    </div>

                    {/* Animated Saw */}
                    <motion.div
                      className="absolute bottom-20 right-20"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "linear-gradient(45deg, #d1d5db, #9ca3af)",
                        boxShadow: "0 0 0 2px #6b7280",
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                        ease: "linear",
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute bg-gray-300 w-1 h-4"
                          style={{
                            left: "50%",
                            top: "50%",
                            transformOrigin: "0 0",
                            transform: `rotate(${i * 45}deg) translate(-50%, -50%)`,
                          }}
                        />
                      ))}
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Sägewerkverarbeitung</h3>
                        <p className="text-white/80">
                          Verarbeiten Sie Rohholz zu wertvollen Holzprodukten in Ihrem Sägewerk
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">Verarbeitung</Badge>
                      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">Produkte</Badge>
                      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">Effizienz</Badge>
                      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">Qualität</Badge>
                    </div>

                    <h4 className="text-lg font-bold mb-3 text-amber-800">Sägewerkverarbeitungs-Funktionen</h4>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                          <Truck className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-amber-700">Holzsortierung</h5>
                          <p className="text-sm text-gray-600">Sortieren Sie Holz nach Art, Qualität und Größe</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                          <Axe className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-amber-700">Schnittmuster</h5>
                          <p className="text-sm text-gray-600">
                            Optimieren Sie Schnittmuster, um den Ertrag zu maximieren
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                          <Truck className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-amber-700">Produkterstellung</h5>
                          <p className="text-sm text-gray-600">Verarbeiten Sie Holz zu verschiedenen Holzprodukten</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                          <Axe className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-amber-700">Qualitätskontrolle</h5>
                          <p className="text-sm text-gray-600">Stellen Sie hochwertige Holzendprodukte sicher</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                      <h5 className="font-bold text-amber-800 mb-2">Lehrwert</h5>
                      <p className="text-sm text-amber-700">
                        Lernen Sie über Holzverarbeitung, Sägewerksbetrieb, Holzproduktherstellung und wie man den Wert
                        aus geernteten Holzressourcen maximiert.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="text-lg font-bold text-red-800 mb-2">Wichtiger Hinweis</h4>
              <p className="text-sm text-red-700">
                Holzunternehmer ist eine Soziale Plattform, die nur zu Unterhaltungszwecken entwickelt wurde. Es sind
                keine Echtgelder oder Preise involviert. Diese Plattform ist für Benutzer ab 18 Jahren bestimmt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
