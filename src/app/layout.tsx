import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "StuImpact ClubSync | Revolutionizing Student Leadership Across Washington",
  description:
    "ClubSync connects Washington students, clubs, and ASB through a secure platform for collaboration, leadership, and community impact.",
};

// Applied before first paint to prevent a theme flash on load.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('clubsync-theme');
    var theme = (stored === 'light' || stored === 'dark') ? stored : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <AuthProvider>
          {children}
          <ThemeToggle />
        </AuthProvider>
      </body>
    </html>
  );
}
