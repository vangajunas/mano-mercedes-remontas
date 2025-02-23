export function Card({ children, className }) {
  return (
    <div className={`shadow-md rounded-2xl bg-gray-800 border border-gray-600 text-center ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`p-6 text-lg font-medium text-gray-100 ${className}`}>{children}</div>;
}



