import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Theme Speed Optimizer – Auto-fix Store Performance",
  description: "Scan your Shopify store, identify speed bottlenecks, and apply one-click fixes for unused CSS, unoptimized images, and render-blocking resources."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7537620c-3311-40bb-8c64-f3e10a5ff229"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
