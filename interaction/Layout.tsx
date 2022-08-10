import React from "react";
import { RecoilRoot } from "recoil";
import Navbar from "./components/Navbar";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <RecoilRoot>
        <div className="wrapper">
          <Navbar />
          <main>{children}</main>
        </div>
      </RecoilRoot>
      <style jsx>{`
        .wrapper {
          padding: 1rem;
        }
        main {
          margin: 1rem;
          min-height: 200px;
        }
      `}</style>
    </>
  );
}
