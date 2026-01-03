export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amit Roy",
    "jobTitle": "FullStack Developer",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://amitroy.tech",
    "sameAs": [
      "https://github.com/amitroy-thedev",
      "https://linkedin.com/in/amitroy-thedev"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "knowsAbout": [
      "FullStack Development",
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

