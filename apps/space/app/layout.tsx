import { Metadata } from "next";
// helpers
import { SPACE_BASE_PATH } from "@plane/constants";
// styles
import "@/styles/globals.css";
// components
import { AppProvider } from "./provider";

export const metadata: Metadata = {
  title: "NWERP | Feito com NWERP, uma plataforma de gerenciamento de trabalhos com capacidades de publicação.",
  description: "Feito com NWERP, uma plataforma de gerenciamento de trabalhos com capacidades de publicação.",
  openGraph: {
    title: "NWERP | Feito com NWERP, uma plataforma de gerenciamento de trabalhos com capacidades de publicação.",
    description: "Feito com NWERP, uma plataforma de gerenciamento de trabalhos com capacidades de publicação.",
    url: "https://app.nwerp.ai/",
  },
  keywords:
    "Software development, customer feedback, software, accelerate, code management, release management, project management, work item tracking, agile, scrum, kanban, collaboration, nwerp, nwerp.ai",
  twitter: {
    site: "@nwerp.ai",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href={`${SPACE_BASE_PATH}/favicon/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${SPACE_BASE_PATH}/favicon/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${SPACE_BASE_PATH}/favicon/favicon-16x16.png`} />
        <link rel="manifest" href={`${SPACE_BASE_PATH}/site.webmanifest.json`} />
        <link rel="shortcut icon" href={`${SPACE_BASE_PATH}/favicon/favicon.ico`} />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        <div id="editor-portal" />
        <AppProvider>
          <>{children}</>
        </AppProvider>
      </body>
    </html>
  );
}
