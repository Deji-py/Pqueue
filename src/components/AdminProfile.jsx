import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { AvatarGenerator } from "random-avatar-generator";
import { FaImage } from "react-icons/fa";

const gen= new AvatarGenerator()

const user = {
  avatar: gen.generateRandomAvatar(),
  department: "Computer Science",
  Programme: "ND2",
  School: "Technology",
  ID: "1345786",
  Session: "2019/2020",
};

export const AdminProfile = ({ toggle }) => (
  <Card
    sx={{
      display: toggle ? "block" : "none",
      position:'absolute',
      right:0,
      zIndex:'1000',
      boxShadow: "0 2px 6px rgba(100,100,100, 0.2)",
    }}
  >
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",

          flexDirection: "column",
        }}
      >
        <div
          className="border flex__center"
          style={{
            border: "solid black 5px",
            width: "90px",
            height: "90px",
            borderRadius:'100px'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 64,
              width: 64,
            }}
          />
        </div>
        <Typography color="textPrimary" gutterBottom variant="h5">
          {user.name}
        </Typography>
        <div className="details flex__column">
          <Typography variant="body2">
            <span style={{ color: "black", fontWeight: "500" }}>
              School:
            </span>{" "}
            {user.School}
          </Typography>
          <Typography variant="body2">
            <span style={{ color: "black", fontWeight: "500" }}>
              Department:
            </span>{" "}
            {user.department}
          </Typography>

          <Typography variant="body2">
            <span style={{ color: "black", fontWeight: "500" }}>
              Programme:
            </span>{" "}
            {user.Programme}
          </Typography>
          <Typography variant="body2">
            <span style={{ color: "black", fontWeight: "500" }}>
              Session:
            </span>{" "}
            {user.Session}
          </Typography>
          <Typography variant="body2">
            <span style={{ color: "black", fontWeight: "500" }}>
              ID:
            </span>{" "}
            {user.ID}
          </Typography>
        </div>
        <Typography color="textSecondary" variant="body2">
          {user.timezone}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions sx={{ background: "black"}}>
      <Button
        sx={{color:"white"}}
        fullWidth
        variant="text"
        startIcon={<FaImage />}
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
);
