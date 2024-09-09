// Use client-side rendering
"use client"; // Add this line to mark the component as a client-side component

import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "@/app/footer/Footer";
import Head from "next/head";
import { useState, useEffect } from "react";
import PageLoading from "./PageLoading/pixelTransition/index"; // Import your page loading component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/stellusai-high-resolution-logo.ico"
          type="image/x-icon"
        />
        <title>Stellus AI | Crypto Degen</title>
      </Head>
      <body className="mb-6 scroll-smooth">
        {isLoading ? (
          <PageLoading />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
