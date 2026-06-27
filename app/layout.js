import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Urban Cafe & Restaurant — Abbottabad",
  description:
    "Where Every Bite Tells a Story. Fast Food · Continental · Pizza · Pasta · Drinks · Desserts. Jadoon Plaza Phase 2, Jinnahabad, Abbottabad. Open daily till 12 AM.",
  keywords: "Urban Cafe, Abbottabad, restaurant, pizza, fast food, continental",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
