import React from "react";
import { RecoilRoot } from "recoil";
import Footer from "./layer/Footer";
import Navbar from "./layer/Navbar";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <RecoilRoot>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <style jsx>{`
        main {
          margin: 1rem;
          min-height: 200px;
        }
      `}</style>
    </RecoilRoot>
  );
}
