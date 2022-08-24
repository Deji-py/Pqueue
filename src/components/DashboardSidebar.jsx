import { useEffect } from "react";

import PropTypes from "prop-types";
import {
  Box,
  Button,
  Divider,
  Drawer,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Lock as LockIcon } from "../icons/lock";
import { Selector as SelectorIcon } from "../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { UserAdd as UserAddIcon } from "../icons/user-add";
import { Users as UsersIcon } from "../icons/users";
import { XCircle as XCircleIcon } from "../icons/x-circle";
import { Link } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";



export const DashboardSidebar = ({toggle, setToggle}) => {

  return (
    <>
      <Box
        sx={{
          display: toggle? "flex":"none",
          flexDirection: "column",
          height: "100vh",
          bottom:'80px',
          right:"0px",
          
          padding:'10px 0px 10p 10px',
          height:"120px",
          zIndex:"7000",
          background:"white",
          position:"fixed",
        }}
      >
    
      
        <Box sx={{ flexGrow: 1 , px: 2,  display: "flex",
                flexDirection:"column", borderRight:"solid 2px #c5c5c5", boxShadow:"0px 2px 8px rgba(100,100,100, 0.3)"}}>
          
           <Link to={'/admin'} style={{textDecoration:"none"}} onClick={()=>setToggle(false)}><Button endIcon={<BiHome/>} style={{color:"black"}}>Home</Button></Link> 
           <Link to={'/managestudents'} style={{textDecoration:"none"}}  onClick={()=>setToggle(false)}><Button endIcon={<BsPeople/>} style={{color:"black"}}>Students</Button></Link> 
           <Link to={'/managestudents'} style={{textDecoration:"none"}}  onClick={()=>setToggle(false)}><Button endIcon={<HiTrendingUp/>} style={{color:"black"}}>About</Button></Link> 
            
          
          
          
        </Box>
       
      
      </Box>
    </>
    )
}

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
