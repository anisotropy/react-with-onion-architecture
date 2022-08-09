type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          padding: 0.5rem;
          background: #333;
          color: white;
          border: 0;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
