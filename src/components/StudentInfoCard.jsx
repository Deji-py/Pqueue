import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import profilepic from "../Asset/img1.jpg";
import { FaArrowAltCircleDown, FaMoneyBill, FaPlus } from "react-icons/fa";

export const StudentInfocard = (props) => (
  <Card
    sx={{
      margin: "10px",
      position: "relative",
      background: "white",
      maxWidth: "800px",
      width:"100%",
      background: "var(--secondary)",
      padding: "10px",
    }}
  >
    <div style={{}}>
      <p>
        <h4>Name:</h4> Ayodeji Alakija
      </p>
      <p>
        <h4>Matric:</h4> p/nd/19/321/556
      </p>
      <p>
        <h4>Department:</h4> Computer Science
      </p>
      <p>
        <h4>Programme:</h4> ND2
      </p>
      <p>
        <h4>Course Adviser:</h4> Mr Ogundele
      </p>
    </div>
    <img
      src={profilepic}
      alt="profile"
      style={{  position: "absolute", top:"0", right:"0", height:'100%' }}
    />
  </Card>
);
