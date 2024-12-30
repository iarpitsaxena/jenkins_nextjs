import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Kanit } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const font = Kanit({ weight: ["400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feebo",
  description: "Feebo make you collect feedbacks easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" >
      <body
        className={cn(font.className, "antialiased")}
      >
        <SessionProvider>
          {children}
        </SessionProvider>
        <SpeedInsights />
        <script src="https://feebo.vercel.app/embed.js" data-board-id="676cefd7863d55bccf80d889" data-btn-bg="#333333" data-btn-color="#ffffff" data-btn-radius="50" data-btn-text="💡 Feedback?"></script>
      </body>
    </html>
  );
}
