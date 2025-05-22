"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, User, Mail, MessageSquare, Phone, MapPin, Clock, CheckCircle2, TreePine } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate form
    if (!formState.name || !formState.email || !formState.message) {
      setError("All fields are required")
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formState.email)) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 rounded-full bg-amber-100/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
                <div className="bg-green-800 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <TreePine className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Vrynthia GmbH</h2>
                      <p className="text-green-100">Timber Baron Game Studio</p>
                    </div>
                  </div>
                  <p className="text-green-100 mb-6">
                    Have questions about our forestry simulation game? We'd love to hear from you!
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Visit Us</h3>
                        <p className="text-green-100">Schillerstraße 12, Graz, 8010</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email Us</h3>
                        <p className="text-green-100">contact@vrynthia.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Call Us</h3>
                        <p className="text-green-100">+43 316 555 1642</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Business Hours</h3>
                        <p className="text-green-100">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                    <h3 className="font-bold text-amber-800 mb-2">About Our Game</h3>
                    <p className="text-amber-700 text-sm mb-4">
                      Timber Baron is an educational forestry simulation game designed for entertainment purposes only.
                      It does not involve real money, gambling, or any form of monetary reward.
                    </p>
                    <div className="flex items-center justify-between text-xs text-amber-600">
                      <span>Educational Content</span>
                      <span>•</span>
                      <span>No Real Money</span>
                      <span>•</span>
                      <span>Adults 18+</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Get In Touch</h2>
                  <p className="text-green-700 mb-6">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-green-50 p-6 rounded-xl border border-green-100 text-center"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                      <p className="text-green-700 mb-4">
                        Thank you for contacting us. We'll respond to your message shortly.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                        >
                          <User className="h-4 w-4 mr-1" />
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
                        >
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Your Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          rows={5}
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>

                      {error && (
                        <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                          <p className="text-sm text-red-600">{error}</p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg font-bold"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </div>
                        )}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our
                        <a href="/privacy-policy" className="text-green-600 hover:underline mx-1">
                          Privacy Policy
                        </a>
                        and
                        <a href="/terms" className="text-green-600 hover:underline ml-1">
                          Terms of Service
                        </a>
                        .
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
