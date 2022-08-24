import React, { useState } from "react";
import {
  Button,
  Card,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { ImCancelCircle } from "react-icons/im";

import "../GlobalComp/Form/form.css";
import { Link } from "react-router-dom";
import Register from "../components/Ragister";

function StaffSignup({ toggler, setToggler }) {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="modal flex__column">
      <Card sx={{ padding: "30px" }} className="formcard">
        <Register />
      </Card>
    </div>
  );
}

export default StaffSignup;
