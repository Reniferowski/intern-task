import React, { useState } from "react";
import "./Dot.css";

function randomColor() {
  return Math.floor(Math.random() * 1000000);
}

const Dot = (props) => {
  const [color, setColor] = useState(null);

  const handleClick = () => {
    props.setIsActive(props.value);
    setColor("#" + randomColor());
  };

  return (
    <div
      className="dot"
      onClick={handleClick}
      style={{
        backgroundColor: props.isActive === props.value && color,
      }}
    >
      {props.isActive === props.value && props.value + 1}
    </div>
  );
};

export default Dot;
