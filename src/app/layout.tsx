import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Ahmed Mansour ",
  description: "all yuo need in one place",
  icons: {
    icon: "/favicon.ico",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  // image  in  the shar card
  openGraph: {
    title: " download our app to enjoy the best shopping experience",
    description: "all yuo need in one place",
    url: "https://aoo-ten.vercel.app/",
    siteName: "K-Store ",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/k-store-app.appspot.com/o/WhatsApp%20Image%202024-08-08%20at%2019.04.06_0f5655c2.jpg?alt=media&token=47b277b9-f434-4a97-8643-46740088b304",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ar-EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
