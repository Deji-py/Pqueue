import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  ListItemSecondaryAction,
  Typography,
} from "@mui/material";
import { AvatarGenerator } from "random-avatar-generator";
import { FaImage } from "react-icons/fa";
import { db } from "../firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { ImInsertTemplate } from "react-icons/im";

const gen = new AvatarGenerator();


const user = {
  avatar: gen.generateRandomAvatar(),
};

export const AdminProfile = ({ toggle }) => {
  const [profile, setProfile] = useState([]);
  const staffRef = collection(db, "staffs");
  const [userDetails, setUserDetails] = useState('')
 
  useEffect(() => {
    // db.collection('staffs').doc(id).get()
    // .then(snapshot => setProfile(snapshot.data()))
  }, [])

  return (
    <>
      {profile.map((item) => (
        <Card
          sx={{
            display: toggle ? "block" : "none",
            position: "absolute",
            right: 0,
            zIndex: "1000",
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
                  borderRadius: "100px",
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
                {item.name}
              </Typography>
              <div className="details flex__column">
                <Typography variant="body2">
                  <span style={{ color: "black", fontWeight: "500" }}>
                    programme
                  </span>{" "}
                  {item.programme}
                </Typography>
                <Typography variant="body2">
                  <span style={{ color: "black", fontWeight: "500" }}>
                    Department:
                  </span>{" "}
                  {item.department}
                </Typography>

                <Typography variant="body2">
                  <span style={{ color: "black", fontWeight: "500" }}>
                    Programme:
                  </span>{" "}
                  {user.Programme}
                </Typography>
                {/* <Typography variant="body2">
                  <span style={{ color: "black", fontWeight: "500" }}>ID:</span>{" "}
                  {item.import { second } from 'first'}
                </Typography> */}
              </div>
              <Typography color="textSecondary" variant="body2">
                {user.id}
              </Typography>
            </Box>
          </CardContent>
          <Divider />
          <CardActions sx={{ background: "black" }}>
            <Button
              sx={{ color: "white" }}
              fullWidth
              variant="text"
              startIcon={<FaImage />}
            >
              Upload picture
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
