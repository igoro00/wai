import React from "react";

const Curve2: React.FC = ({ children }) => {
  return (
    <>
      <div style={{ backgroundColor: "#2F80ED", height:"24vw",position:"relative" }}>{children}</div>
      <div
        style={{
          backgroundColor: "#2F80ED",
          width: "100%",
          height: "25vw",
          borderBottomLeftRadius: "100% 200%",
          borderBottomRightRadius: "100% 200%",
        }}
      />
    </>
  );
};

export { Curve2 };
