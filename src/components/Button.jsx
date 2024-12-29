import React from "react";

const Button = ({ title, rightIcon, leftIcon, containerClass, id }) => {
  return (
    <button
      id={id}
      className={`group relative px-7 py-3 z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 text-black ${containerClass}`}
    >
      {leftIcon}

      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
