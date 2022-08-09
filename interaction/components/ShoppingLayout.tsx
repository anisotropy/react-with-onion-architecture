import React from "react";

type ShoppingLayoutProps = { filter: React.ReactNode; list: React.ReactNode };

export default function ShoppingLayout({ filter, list }: ShoppingLayoutProps) {
  return (
    <div className="shoppingLayout">
      <div className="wrapper">{filter}</div>
      <div className="wrapper">{list}</div>
      <style jsx>{`
        .wrapper + .wrapper {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
