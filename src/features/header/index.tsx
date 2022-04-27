import React, { useEffect, useState } from "react";
import { scrollToId } from "../../utils/scrollToId";
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
    handleScroll()
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
        <PrimaryButton onClick={()=>{scrollToId("o-nas")}}>O Nas</PrimaryButton>
        <PrimaryButton onClick={()=>{scrollToId("cennik")}}>Cennik</PrimaryButton>
        <PrimaryButton onClick={()=>{scrollToId("kontakt")}}>Kontakt</PrimaryButton>
        <PrimaryButton filled>Zaloguj się</PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
