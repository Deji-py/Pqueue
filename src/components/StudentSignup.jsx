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

import StudentRegister from "./StudentRegister";

function StudentSignup() {
  return (

      <StudentRegister />
    
  );
}

export default StudentSignup;
