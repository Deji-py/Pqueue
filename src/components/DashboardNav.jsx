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
import { AvatarGenerator } from "random-avatar-generator";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { Users as UsersIcon } from "../icons/users";
import { FaDoorOpen, FaSearch } from "react-icons/fa";
import random from "random-profile-generator";
import { UserAuth } from "../Auth-Context";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

export const DashboardNav = ({ setToggle, toggle }) => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    const Userlogout = () => {
      signOut(auth);
    };
    Userlogout()
    console.log(user);
    navigate("/");
  };
 

  const gen = new AvatarGenerator();
  return (
    <>
      <Card
        sx={{
          width: "100%",
          boxShadow: "0 2px 6px rgba(100,100,100, 0.2)",
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
          <div className="adminTitle flex__wrapper">
            <Tooltip title="Search">
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
            <h3
              class="bigText"
              style={{ marginLeft: "10px", color: "#444444" }}
            >
              Admin
            </h3>
          </div>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            variant="contained"
            className="mobileHam"
            sx={{
              display: "flex",
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
            <FaDoorOpen
              size={25}
              color="black"
              onClick={() => {
                handleLogout();
              }}
            />
          </IconButton>
        </Toolbar>
      </Card>
    </>
  );
};

DashboardNav.propTypes = {
  onSidebarOpen: PropTypes.func,
};
