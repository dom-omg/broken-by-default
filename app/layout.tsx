import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BROKEN BY DEFAULT — AI Code Security Audit 2026",
  description: "We tested 5 major AI coding assistants with 50 security-critical prompts and Z3 formal proofs. 4 out of 5 received Grade F.",
  openGraph: {
    title: "BROKEN BY DEFAULT — AI Code Security Audit 2026",
    description: "4 out of 5 AI coding assistants failed our security benchmark. Z3-proven vulnerabilities. Grade F.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#050508", color: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
