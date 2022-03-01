import React, { useState } from "react";
import "./PrimaryButton.css";
interface Props {
  filled?: boolean;
}

const PrimaryButton: React.FC<Props> = ({ children, filled = false }) => {
  const [isShown, setIsShown] = useState(false);
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
    >
      <h2 style={{ margin: 0, color: filled?"#ffffff":undefined }}>{children}</h2>
      <div
        className="headerButtonUnderline"
        style={{ width: isShown ? "100%" : "0%", backgroundColor:filled?"#FFFFFF":undefined }}
      />
    </div>
  );
};

export {PrimaryButton};
