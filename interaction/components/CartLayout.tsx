type CartLayoutProps = {
  list: React.ReactNode;
  purchase: React.ReactNode;
};

export default function CartLayout({ list, purchase }: CartLayoutProps) {
  return (
    <>
      <div className="list">{list}</div>
      <div className="purchase">{purchase}</div>
      <style jsx>{`
        .purchase {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
}
