import "./globals.css";

export const metadata = {
  title: "AP Devotion - Websites built with purpose, crafted to last",
  description: "AP Devotion builds beautiful, high-performance websites tailored to your brand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
