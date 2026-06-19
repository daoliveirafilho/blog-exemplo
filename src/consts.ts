// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Rekall";
export const SITE_DESCRIPTION =
  "Log all data.";

export const GITHUB_URL =
  "https://github.com/daoliveirafilho";

export const SITE_METADATA = {
  title: {
    default: "Rekall",
    template: "%s | Rekall",
  },
  description:
    "Log all data.",
  keywords: [
    "Astro",
    "astro template",
    "astro theme",
    "astro starter",
    "shadcn template",
    "shadcn theme",
    "shadcn starter",
    "tailwind template",
    "tailwind theme",
    "tailwind starter",
    "mdx template",
    "mdx theme",
    "mdx starter",
  ],
  authors: [{ name: "rekall.log.br" }],
  creator: "rekall.log.br",
  publisher: "rekall.log.br",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Rekall",
    description:
      "Log all data.",
    siteName: "Rekall",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rekall - Log all data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekall",
    description:
      "Log all data.",
    images: ["/og-image.jpg"],
    creator: "@rekall",
  },
};
