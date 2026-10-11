import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: ["Anambra Web3", "AW3C"],
        url: SITE_URL,
        logo: absoluteUrl("/logo.png"),
        image: absoluteUrl(DEFAULT_OG_IMAGE),
        description: DEFAULT_DESCRIPTION,
        email: "hello@anambraweb3.com",
        foundingDate: "2023",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Southeast Nigeria",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Awka",
          addressRegion: "Anambra State",
          addressCountry: "NG",
        },
        sameAs: [
          "https://x.com/anambraweb3conf",
          "https://anambraweb3community.xyz",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@anambraweb3.com",
          contactType: "customer support",
          areaServed: "NG",
          availableLanguage: ["English"],
        },
      }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-NG",
      }}
    />
  );
}

export function ConferenceEventJsonLd() {
  return (
    <JsonLd
      data={[
        {
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Anambra Web3 Conference 2026",
          description:
            "The Anambra Web3 Conference 3.0 — Southeast Nigeria's flagship blockchain event with 10,000+ expected attendees, international speakers, and a major hackathon.",
          startDate: "2026-11-01",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode:
            "https://schema.org/MixedEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Anambra State, Nigeria",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Awka",
              addressRegion: "Anambra State",
              addressCountry: "NG",
            },
          },
          image: [absoluteUrl(DEFAULT_OG_IMAGE)],
          organizer: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          url: absoluteUrl("/conference"),
        },
        {
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Anambra Web3 Conference 2025",
          description:
            "Anambra Web3 Conference 2.0 — Limitless Possibilities. 5,000+ attendees across Stanel Dome Awka and Twitter livestream.",
          startDate: "2025-11-01",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode:
            "https://schema.org/MixedEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Stanel Dome",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Awka",
              addressRegion: "Anambra State",
              addressCountry: "NG",
            },
          },
          image: [absoluteUrl(DEFAULT_OG_IMAGE)],
          organizer: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          url: absoluteUrl("/conference"),
        },
      ]}
    />
  );
}
