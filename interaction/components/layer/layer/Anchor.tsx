import { useRouter } from "next/router";
import { forwardRef, ReactNode } from "react";

type AnchorProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
};

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(function Anchor(
  { href, onClick, children },
  ref
) {
  const { asPath } = useRouter();
  return (
    <>
      <a className="anchor" ref={ref} href={href} onClick={onClick}>
        {children}
      </a>
      <style jsx>{`
        .anchor {
          display: inline-flex;
          padding: 0.5rem;
          background: transparent;
          color: inherit;
          border: 1px solid ${href === asPath ? "#333" : "transparent"};
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
});

export default Anchor;
