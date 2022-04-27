import React from "react";
import { FaBuilding,FaPhoneAlt } from "react-icons/fa";

type Props = {};

const lineStyle:React.CSSProperties = {
  margin:0,
  fontSize:20,
  marginBottom:6,
}

const ContactContainer: React.FC<Props> = ({}) => {
  return (
    <footer>
      <div
        style={{ width: "100%", height: 150, overflow: "hidden" }}
        id="kontakt"
      >
        <div
          style={{
            width: 0,
            backgroundColor: "transparent",
            height: "0",
            borderBottom: "150px solid black",
            borderRight: "100vw solid transparent",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          paddingLeft: 60,
          paddingRight: 60,
        }}
      >
        <h1>Kontakt</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            paddingTop: 20,
            paddingBottom:40,
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
            <FaBuilding color="white" size={25}/>
            <div style={{marginLeft:10}}>
              <p style={lineStyle}>ul. Legionów 66</p>
              <p style={lineStyle}>05-200 Wołomin</p>
              <p style={lineStyle}>pn-nd 04:20-21:37</p>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
            <FaPhoneAlt color="white" size={25}/>
            <div style={{marginLeft:10}}>
              <p style={lineStyle}>22 787 83 27</p>
              <p style={lineStyle}>05-200 Wołomin</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { ContactContainer };
