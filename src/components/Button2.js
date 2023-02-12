import React from "react";

const Button2 = ({ className, text, onClick }) => {
  return (
    <button className={className} type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button2;
