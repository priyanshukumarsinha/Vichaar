import React from "react";

interface NavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const NavButton = ({ onClick, children, className }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`1cursor-pointer text-sm opacity-90 hover:opacity-100 bg-black px-5 py-3 text-white rounded-full font-medium ${className}`}
      aria-label={children?.toString()}
    >
      {children}
    </button>
  );
};

export default NavButton;
