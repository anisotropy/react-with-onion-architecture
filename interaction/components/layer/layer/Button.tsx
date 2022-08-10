type ButtonProps = {
  children: React.ReactNode;
  border?: boolean;
  round?: boolean;
  text?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  border,
  round,
  text,
  onClick,
}: ButtonProps) {
  return (
    <>
      <button className="button" onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        .button {
          padding: 0.5rem;
          background: ${border || text ? "transparent" : "#333"};
          color: ${border || text ? "inherit" : "white"};
          border: 1px solid ${text ? "transparent" : "#333"};
          border-radius: ${round ? "0.5rem" : 0};
          cursor: pointer;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
