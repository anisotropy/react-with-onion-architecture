import React from "react";
import Footer from "./layer/Footer";
import Navbar from "./layer/Navbar";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <style jsx>{`
        main {
          min-height: 200px;
        }
      `}</style>
    </>
  );
}
