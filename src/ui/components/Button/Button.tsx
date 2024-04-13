import "./Button.css";

export default function Button({
  children,
  onClick,
}: {
  children: string;
  onClick: () => unknown;
}) {
  return (
    <div className="button-89" onClick={onClick}>
      {children}
    </div>
  );
}
