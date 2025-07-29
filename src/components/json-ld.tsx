export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zaid Shabbir',
    givenName: 'Zaid',
    familyName: 'Shabbir',
    url: 'https://portfolio2-opal-five-74.vercel.app/',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Self-Employed'
    },
    sameAs: [
      
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Full Stack Development'
    ],
    description: 'Zaid Shabbir is a Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Creating modern web applications with clean, efficient code.'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
