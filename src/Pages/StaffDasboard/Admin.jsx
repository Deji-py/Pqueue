import { Alert, Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./admin.css";
import img2 from "../../Asset/img2.jpg";
import { DashboardNav } from "../../components/DashboardNav";
import { AdminProfile } from "../../components/AdminProfile";
import Header from "../../GlobalComp/Header/header";
import PrioityCard from "../StudentDasboard/PrioityCard";
import { Students } from "../../components/Students";
import { StyledCard } from "../../components/StyledCard";
import {StudentTable} from "../../components/StudentTable"
import { DashboardSidebar } from "../../components/DashboardSidebar";
import { InfoCard } from "../../components/Infocard";

import { CourseFormAppt } from "../../components/CourseFormApptQueue";
import { AdminChart } from "../../components/AdminChart";
import MobileMenu from "../../components/MobileMenu";
import AddtaskForm from "../../GlobalComp/Form/AddtaskForm";
import { UserAuth } from "../../Auth-Context";

//Test data for the algorithm....i want to get a queue

// User defined class
// to store element and its priority

// creating object for queue class

function Admin({ toggle, addDoc }) {
  const [profileToggle, setProfileToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [taskToggle, setTaskToggle] = useState(false)
  const {setUsertype} = UserAuth()
  setUsertype("admin")
  return (
    <div style={{ position: "relative" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin</title>
      </Helmet>
      <DashboardNav setToggle={setProfileToggle} toggle={profileToggle} />
      <AdminProfile toggle={profileToggle} />
      <InfoCard setToggle={setTaskToggle}/>
      <AddtaskForm setToggler={setTaskToggle} toggler={taskToggle}/>

      <div className=" flex__center">
        <StudentTable/>
      </div>

      <div className="box">
        <div className="appt">
          <div className="scroller">
            <CourseFormAppt title={"Course Form"} />

            <CourseFormAppt title={"Result Complaint"} />

            <CourseFormAppt title={"Other Meeting"}/>
          </div>
        </div>
        <AdminChart />
      </div>
      <DashboardSidebar toggle={menuToggle} setToggle={setMenuToggle} />
      <MobileMenu toggle={menuToggle} setToggle={setMenuToggle}/>
    
      {/* <p>Manage Student</p> */}
      <footer
        style={{
          position: "absolute",
          bottom: 0,
          padding: "20px",
          background: "#c5c5c5",
          width: "100%",
          marginTop: "20px",
        }}
      >
        Copywrite@2022
      </footer>
    </div>
  );
}

export default Admin;
