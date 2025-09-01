import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Astron Endurance",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated bg-white text-black">
      <body
        className={`${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
