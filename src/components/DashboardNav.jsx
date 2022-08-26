import PropTypes from "prop-types";
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Card,
  IconButton,
  Menu,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import logo from "../Asset/logoyct.png";
import { Bell as BellIcon } from "../icons/bell";
import {AvatarGenerator} from "random-avatar-generator"
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { Users as UsersIcon } from "../icons/users";
import { FaSearch } from "react-icons/fa";
import random from 'random-profile-generator'
export const DashboardNav = ({setToggle, toggle}) => {
  const gen= new AvatarGenerator()
  return (
    <>
      <Card
        sx={{
          width: "100%",
          boxShadow:"0 2px 6px rgba(100,100,100, 0.2)"
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          
          <div className="adminTitle flex__wrapper" >
          <Tooltip title="Search" >
            <Paper
              component={"img"}
              src={logo}
              alt="logo"
              sx={{
                width: {
                  lg: "50px",
                  xs: "40px",
                  border: "none",
                  boxShadow: "none",
                  
                },
              }}
            />
     
          </Tooltip>
          <h3 class="bigText" style={{marginLeft:"10px", color:"#444444"}}>Admin</h3>
          </div>
       
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge badgeContent={4} color={"error"} variant={"dot"}>
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1,
            }}
            src={gen.generateRandomAvatar()}
            onClick={()=>setToggle(!toggle)}
          >
          </Avatar>
        </Toolbar>
      </Card>
    </>
  );
};

DashboardNav.propTypes = {
  onSidebarOpen: PropTypes.func,
};
