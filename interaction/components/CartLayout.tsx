type CartLayoutProps = {
  list: React.ReactNode;
};

export default function CartLayout({ list }: CartLayoutProps) {
  return <div>{list}</div>;
}
