import React from "react";

// Define interface for the Button props
export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large"; // optional, default = medium
  shape?: "rounded-sm" | "rounded-md" | "rounded-full" | "rounded-lg"; // optional, default = rounded-md
  styles?: string; // optional for any extra Tailwind classes
}

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  styles  = "",
}) => {
  // Define Tailwind styles based on size
  let sizeClasses = "";
  if (size === "small") sizeClasses = "px-2 py-1 text-sm";
  else if (size === "medium") sizeClasses = "px-3 py-2 text-base";
  else if (size === "large") sizeClasses = "px-4 py-3 text-lg";

  return (
    <button
      className={`bg-blue-500 text-white font-semibold ${sizeClasses} ${shape} ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
