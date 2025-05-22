export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Timber Tycoon",
    description:
      "An educational social game about managing a logging operation in beautiful forests. For entertainment purposes only with no real money gambling.",
    genre: ["Educational Game", "Simulation Game", "Adventure Game"],
    gamePlatform: "Web Browser",
    applicationCategory: "Game",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    contentRating: "18+",
    audience: {
      "@type": "Audience",
      audienceType: "Adults",
    },
    publisher: {
      "@type": "Organization",
      name: "Vrynthia GmbH",
      url: "https://vrynthia.com",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
