import React, { useState } from "react";
import "./header.css";
import logo from "../../Asset/logoyct.png";
import { Button, Card, Hidden, IconButton, MenuItem } from "@mui/material";
import { HiLogout, HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaDoorOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header({page, bgcolor}) {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  return (
    <div style={{position:"relative", width:"100%"}}>
    <motion.div className="mobileMenu" animate={{  y:mobileMenuToggle?0:-250}}>
    <Card sx={{width:"100%", paddingTop:"50px"}}>
      <MenuItem sx={{textTranform:"none"}}>Home</MenuItem>
      <MenuItem sx={{textTranform:"none"}}>About</MenuItem>
      <MenuItem sx={{textTranform:"none"}}>Contact</MenuItem>
      <Link to="/staffsignup" style={{textDecoration:'none'}}>
        <Button variant ="outlined" size="small" sx={{borderRadius:"100px", marginLeft:'10px',color:"var(--primary)",border:"solid 2px var(--primary)"}} >
          Admin Signup
        </Button>
    
      </Link>
      <Link to="/" style={{textDecoration:'none'}}>
        <Button variant ="outlined" size="small" sx={{borderRadius:"100px", margin:'10px 0px 10px 10px', color:"black", border:"solid 2px var(--secondary)"}} >
         Student Signup
        </Button>
    
      </Link>

    </Card>
    </motion.div>
    <div className="header flex__wrapper" style={{background:(page ==="home")? "white":bgcolor}}>
    
     
      <div className="left flex__center">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">YABA COLLEGE OF TECHNOLOGY</h1>
      </div>
      <div className="right flex__wrapper ">
      <MenuItem sx={{textTranform:"none"}}>Home</MenuItem>
      <MenuItem sx={{textTranform:"none"}}>About</MenuItem>
      <MenuItem sx={{textTranform:"none"}}>Contact</MenuItem>
      </div>
      
      <IconButton
        variant="contained"
        className="mobileHam"
        onClick={() => setMobileMenuToggle(!mobileMenuToggle)}
        sx={{
          display: (page ==="home")? "flex":"none",
          fontSize: "30px",
          color: "white",
          textTransform: "none",
          background: "var(--primary)",
          boxShadow: "0px 2px 8px rgba(150, 150, 150, 0.5)",
          ":hover": {
            background: "var(--primary)",
          },
        }}
      >

        {mobileMenuToggle?  <HiX size={25}/>:<HiOutlineMenuAlt3 size={25} /> }
       

 
      </IconButton>

      <IconButton
        variant="contained"
        className="mobileHam"
        sx={{
          display: (page ==="home")? "none":"flex",
          fontSize: "30px",
          color: "white",
          textTransform: "none",
          background: "white",
          boxShadow: "0px 2px 8px rgba(150, 150, 150, 0.5)",
          ":hover": {
            background: "white",
          },
        }}
      >

        <FaDoorOpen size={25} color="black"/>
       

 
      </IconButton>
    </div>
   </div>     
  );
}

export default Header;
