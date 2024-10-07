// src/components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"; // You can add more variants as needed
}

const Button: React.FC<ButtonProps> = ({ variant = "default", className, children, ...props }) => {
  const baseStyles = "py-2 px-4 rounded-md focus:outline-none transition duration-150";
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
