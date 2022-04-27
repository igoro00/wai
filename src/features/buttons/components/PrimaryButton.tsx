import React, { useState } from "react";
import "./PrimaryButton.css";
interface Props {
  filled?: boolean;
  onClick?: ()=>void;
}

const PrimaryButton: React.FC<Props> = ({ children, onClick=()=>{}, filled = false }) => {
  const [isShown, setIsShown] = useState(false);
  console.log(isShown)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "6px 12px",
        backgroundColor: filled?"#002ED2":undefined,
        borderRadius: "10px",
      }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={onClick}
    >
      <h2 style={{ margin: 0, color: filled?"#ffffff":undefined }}>{children}</h2>
      <div
        className="PrimaryButtonUnderline"
        style={{ width: isShown ? "100%" : "0%", backgroundColor:filled?"#FFFFFF":undefined }}
      />
    </div>
  );
};

export {PrimaryButton};
