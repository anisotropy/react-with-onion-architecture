import React from "react";

type ShoppingLayoutProps = { list: React.ReactNode };

export default function ShoppingLayout({ list }: ShoppingLayoutProps) {
  return (
    <div className="shoppingLayout">
      {list}
      <style jsx>{``}</style>
    </div>
  );
}
