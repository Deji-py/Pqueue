import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import "./studentdash.css";
import { BsCircleFill } from "react-icons/bs";

import {} from "react-icons/fa";

function PrioityCard({ title, staffincharge, priority, active, progress }) {
  const d = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    " Apr",
    "May",
    "Jun",
    "Jul",
    " Aug",
    " Sept",
    "Oct",
    " Nov",
    "Dec",
  ];

 
  return (
    <Card
      sx={{
        minWidth: 275,
        padding: "20px",
        width: "100%",
        background: "whitesmoke",
      }}
    >
      <Typography
        className="flex__wrapper"
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
      >
        <Typography variant="body1">
          {d.getUTCDate() +
            " - " +
            months[d.getMonth()] +
            " - " +
            d.getFullYear()}
        </Typography>
      </Typography>

      <div className="flex__wrapper">
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: "bolder" }}
          >
            {title.text}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <h6>Staff Incharge:</h6> {staffincharge}
          </Typography>
        </CardContent>

        <div className="flex__center">
          <CircularProgress
            sx={{
              width: "70%",
              position: "relative",
              color: "var(--secondary)",
            }}
            variant="determinate"
            value={progress}
            size={80}
          />
          <h3 style={{ position: "absolute" }}>
            {progress != null ? progress + "%" : <></>}
          </h3>
        </div>
      </div>
      <CardActions className="flex__wrapper" style={{ padding: "20px" }}>
        <div>
          <Typography variant="body2" className="flex__wrapper">
            <IconButton size="small">
              <BsCircleFill
                size={12}
                style={{ color: active ? "orangered" : "#c5c5c5" }}
              />
            </IconButton>
            <Typography
              variant="body1"
              style={{ color: active ? "orangered" : "#c5c5c5" }}
            >
              {active ? "Active" : "InActive"}
            </Typography>
          </Typography>
        </div>
        {progress >= 100 ? (
          <Button variant="contained">Next</Button>
        ) : (
          <p>
            <LinearProgress />
            Processing
          </p>
        )}
      </CardActions>
    </Card>
  );
}

export default PrioityCard;
