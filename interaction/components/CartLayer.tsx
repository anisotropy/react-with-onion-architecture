type CartLayerProps = {
  children: React.ReactNode;
};

export default function CartLayer({ children }: CartLayerProps) {
  return <div>{children}</div>;
}
