export function Button({ children, className, ...props }) {
  return (
    <button className={`bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-lg ${className}`} {...props}>
      {children}
    </button>
  );
}


