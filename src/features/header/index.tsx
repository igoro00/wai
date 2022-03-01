import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../buttons";
import Logo from "./components/Logo";
import "./header.css";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${scrollPosition>10?"sticky-header":"solid-header"}`}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Logo />
      <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <PrimaryButton>O Nas</PrimaryButton>
        <PrimaryButton>Cennik</PrimaryButton>
        <PrimaryButton>Kontakt</PrimaryButton>
        <PrimaryButton filled>Zaloguj się</PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
