import React from "react";
import classNames from "classnames";

const Button = ({
  text,
  icon,
  iconPosition,
  color,
  textColor,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={classNames(
        "flex items-center cursor-pointer justify-center w-full h-12 text-white font-medium rounded-full shadow-md hover:opacity-80 border border-black text-sm md:text-base",
        color,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {iconPosition === "before" && icon && (
        <span className="mr-2">{icon}</span>
      )}
      <span className={classNames("mr-2", textColor)}>{text}</span>
      {iconPosition === "after" && icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
