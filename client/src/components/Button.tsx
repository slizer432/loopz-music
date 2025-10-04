import type React from "react";
import { motion } from "motion/react";
import type { ButtonProps } from "../types/button";

const Button: React.FC<ButtonProps> = ({
  // functional component dan props sesuai dengan ButtonProps
  type,
  text = "Button",
  icon,
  className = "",
  onClick,
  disabled = false,
  isAnimated = false,
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center py-2 px-5 gap-2 rounded-lg transition duration-200 cursor-pointer 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
        ${className}`}
      {...(isAnimated
        ? {
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
            },
          }
        : {})}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </motion.button>
  );
};

export default Button;
