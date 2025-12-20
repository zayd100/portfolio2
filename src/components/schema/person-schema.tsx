import { DATA } from "@/data/resume";

export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Zaid Shabbir",
          alternateName: ["Zaid", "zayd100"],
          description: DATA.description,
          
          url: DATA.url,
          sameAs: [
            DATA.contact.social.GitHub.url,
        
            DATA.contact.social.X.url,
            DATA.contact.social.wikipedia.url
          ],
          jobTitle: "Full Stack Developer",
          worksFor: {
            "@type": "Organization",
            name: "Freelance"
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: ""
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Odisha",
            addressCountry: "India"
          },
          email: DATA.contact.email,
          knowsAbout: DATA.skills
        })
      }}
    />
  );
}
