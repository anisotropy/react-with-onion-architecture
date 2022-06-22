import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/cart">
        <a>Cart</a>
      </Link>
      <style jsx>{`
        a + a {
          margin-left: 0.5rem;
        }
      `}</style>
    </nav>
  );
}
