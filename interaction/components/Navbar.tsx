import Link from "next/link";
import Anchor from "./layer/layer/Anchor";

export default function Navbar() {
  return (
    <nav>
      <Link href="/" passHref>
        <Anchor>Home</Anchor>
      </Link>
      <Link href="/shopping" passHref>
        <Anchor>Shopping</Anchor>
      </Link>
      <Link href="/cart" passHref>
        <Anchor>Cart</Anchor>
      </Link>
      <style jsx>{`
        a + a {
          margin-left: 0.5rem;
        }
      `}</style>
    </nav>
  );
}
