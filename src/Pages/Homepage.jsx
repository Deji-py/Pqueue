import { Button } from "@mui/material";
import "./homepage.css";
import React from "react";
import { Helmet } from "react-helmet";
import Header from "../GlobalComp/Header/header";
import {} from "@fortawesome/fontawesome-svg-core";
import backimg from "../Asset/Back.jpg";
import imgabt from "../Asset/imgabt.png";
import img1 from "../Asset/img1.jpg";
import img2 from "../Asset/img2.jpg";
import blob from "../Asset/blob.svg";
import StudentLogin from "../GlobalComp/Form/StudentLogin";
import { useState } from "react";
import StaffLogin from "../GlobalComp/Form/StaffLogin";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { ImArrowLeft, ImPrevious, ImPrevious2 } from "react-icons/im";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { UserAuth } from "../Auth-Context";
import { useNavigate } from "react-router-dom";


function Homepage() {
  const slides = [backimg, img1, img2];
  const [studenttoggle, setStudentToggle] = useState(false);
  const [stafftoggle, setStaffToggle] = useState(false);
  const {usertype, user}  = UserAuth()
  const navigate = useNavigate()

  return (
    <div className="home flex__column" style={{ position: "relative" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HomePage</title>
        <meta name="theme-color" content="white" />
      </Helmet>

      <Header page="home" />

      <div className="container" style={{ width: "100%", height:"100%" }}>
        <Slider
          autoplay
          duration={5000}
          infinite
          previousButton={""}
          nextButton={""}
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <img
                src={slide}
                alt="backimg"
                style={{ width: "100%" }}
                className="back"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div
        className="heroSection flex__column"
        style={{
          position: "absolute",
          top: "150px",
          zIndex: "100",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          COURSE ADVISER PRIORITY SYSTEM
        </h1>
        <blockquote
          style={{
            textAlign: "center",
            fontSize: "15px",
            padding: "10px 30px 0px 30px",
          }}
        >
          Get organised with well crafted priority Queue for Plan management
        </blockquote>
        <div
          className="ctas flex__center"
          style={{ width: "90%", paddingTop: "20px" }}
        >
          <Button
            variant="contained"
            disableElevation
            onClick={() => setStudentToggle(true)}
            className="cta"
            style={{
              background: "var(--secondary)",
              color: "black",
              padding:"15px", 
              borderRadius:"10px",
              width:"100%",
              marginTop:"20px"
            }}
          >
          Sign in as Student
          </Button>
          <Button
            variant="contained"
            disableElevation
            onClick={() => setStaffToggle(true)}
            style={{
              background: "var(--primary)",
              color: "white",
              padding:"15px", 
              borderRadius:"10px",
              width:"100%",
              marginTop:"20px"
            }}
          >
           Sign in as Course Adviser
          </Button>

      
        </div>
      </div>

      <div className="about">
        <img src={blob} alt="blob" id="blob" style={{ width: "700px" }} />
        <h1
          className="note"
          style={{ transform: "translateY(-6px)", color: "green" }}
        >
          {" "}
          Prioritize your activity, Focus on what matters on campus
        </h1>
        <h1 className="note">
          {" "}
          Prioritize your activity, Focus on what matters on campus
        </h1>

        <div className="containerabt">
          <img src={imgabt} alt="imgabt" style={{ width: "100%" }} />
        </div>
        <div className="footer">copyright@2022</div>
      </div>
      <StudentLogin toggler={studenttoggle} setToggler={setStudentToggle} />
      <StaffLogin toggler={stafftoggle} setToggler={setStaffToggle} />
    </div>
  );
}

export default Homepage;
