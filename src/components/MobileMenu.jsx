import React, { useState } from 'react'
import { BiMenuAltLeft } from "react-icons/bi";

function MobileMenu({toggle, setToggle, home}) {

  return (
    <div style={{display:home?"block":"hidden"}}>
        <button
        className="mobileNavDrawer flex__center"
        style={{

          position: "fixed",
          bottom: "30px",
          right: "10px",
          zIndex: "9999",
          width: "60px",
          borderRadius: "100%",
          height: "60px",
          padding: "10px",
          color: "white",
          border: "none",
          boxShadow: "0px 2px 8px whitesmoke",
          background: "black",
        }}
      >
        <BiMenuAltLeft
          size={50}
          onClick={() => setToggle(!toggle)}
          style={{
            transform: toggle ? "rotateZ(360deg)" : "rotateZ(270deg)",
            transition: "0.3s ease",
          }}
        />
      </button>
    </div>
  )
}

export default MobileMenu
