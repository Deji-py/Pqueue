import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { FaArrowAltCircleDown, FaMoneyBill, FaPlus } from "react-icons/fa";

export const InfoCard = ({setToggle}) => {
  
  return (
    <Card
      sx={{ height: "100%", margin: "10px", background: "var(--blue-dim)" }}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "space-between", color: "white" }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
              sx={{ color: "white" }}
            >
              STUDENTS Registered
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
              sx={{ color: "white" }}
            >
              20,000
            </Typography>
          </Grid>
          <Grid item sx={{ mt: "30px" }}>
            <Button
              variant="contained"
              disableElevation
              onClick={()=>setToggle(true)}
              endIcon={<FaPlus size={15} />}
              sx={{
                color: "black",
                background: "white",
                ":hover": {
                  background: "white",
                },
              }}
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaPlus color="yellow" size={10} />
          <Typography
            sx={{
              mr: 1,
              color: "yellow",
            }}
            variant="body2"
          >
            12%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
            sx={{ color: "white" }}
          >
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
