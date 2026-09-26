import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.cellovistagroupbd.com";
const SITE_NAME = "Cellovista Group BD";
const SITE_DESCRIPTION =
  "Cellovista Group BD is a BAIRA-licensed (RL-2037) international recruitment agency in Dhaka, Bangladesh. We connect skilled Bangladeshi workers with trusted employers across the globe through ethical, transparent manpower services.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cellovista Group BD | Licensed International Recruitment Agency",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Cellovista Group BD",
    "manpower agency Bangladesh",
    "BAIRA licensed recruiting agency",
    "overseas employment Bangladesh",
    "international recruitment Dhaka",
    "Banani manpower agency",
    "foreign employment Bangladesh",
    "skilled workers abroad",
    "RL 2037",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Cellovista Group BD | Trusted International Recruitment Agency",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cellovista Group BD — Licensed International Recruitment Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cellovista Group BD | Trusted International Recruitment Agency",
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Business",
};

export const viewport: Viewport = {
  themeColor: "#0A3D62",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  telephone: "+8801711169244",
  email: "cellovistainternational@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "H-80/1C, 5th Floor, Sainik Club More, Bir Uttam Ziaur Rahman Sarak",
    addressLocality: "Banani, Dhaka",
    postalCode: "1213",
    addressCountry: "BD",
  },
  areaServed: "Worldwide",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "09:00",
    closes: "18:00",
  },
  identifier: "BAIRA RL-2037",
  sameAs: ["https://www.facebook.com/profile.php?id=100063520000931"],
};

const credentialsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "BAIRA Membership",
      credentialCategory: "License",
      identifier: "RL-2037",
      recognizedBy: {
        "@type": "Organization",
        name: "Bangladesh Association of International Recruiting Agencies",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Recruitment License",
      credentialCategory: "Government License",
      identifier: "RL-2037",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Ministry of Expatriates' Welfare & Overseas Employment",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-slate-900 bg-white" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(credentialsJsonLd),
          }}
        />
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
