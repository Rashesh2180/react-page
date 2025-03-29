import React from "react";

const Button = ({
  bgColor = "#4A90E2",
  textColor = "#FFFFFF",
  hoverBgColor = "#357ABD",
  hoverTextColor = "#FFFFFF",
  borderColor = "#4A90E2",
  text = "Click Me",
  onClick,
  borderWidth = "2px",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-[1.375rem] py-3 rounded-full transition duration-300 ease-in-out
                  bg-${bgColor} text-${textColor} 
                  border-${borderWidth} border-${borderColor}
                  hover:bg-${hoverBgColor} hover:text-${hoverTextColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
