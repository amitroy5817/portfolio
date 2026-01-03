export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amit Roy",
    "jobTitle": "Frontend Developer",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://amitroy.tech",
    "sameAs": [
      // Add your social media profiles here
      // "https://github.com/amitroy",
      // "https://linkedin.com/in/amitroy",
      // "https://twitter.com/amitroy"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "knowsAbout": [
      "Frontend Development",
      "React",
      "Next.js",
      "JavaScript",
      "Web Development",
      "UI/UX Design"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

