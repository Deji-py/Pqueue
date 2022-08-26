import { v4 as uuid } from "uuid";
import { AvatarGenerator } from "random-avatar-generator";
import randomColor from "random-color";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase-config";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TableHead,
  Typography,
} from "@mui/material";
import {
  BsArrowRight,
  BsCheck,
  BsClock,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { BiBox, BiRectangle } from "react-icons/bi";
import { TiMediaPause } from "react-icons/ti";
import { useEffect, useState } from "react";
const generator = new AvatarGenerator();

const randomcolor = randomColor();
const newColors = randomcolor.hexString();
const taskcollection = collection(db, "StudentTasks");

export const Activities = ({}) => {
  const [status, setStatus] = useState("Active");
  const [studentTask, setStudentTask] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const data = await getDocs(taskcollection);
      setStudentTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTask();
  }, [studentTask]);

  return (
    <Card
      sx={{
        mt: "10px",
        borderRadius: "20px",
        background: "whitesmoke",
        boxShadow: "0px 2px 6px rgba(200,200,200, 0.5)",
      }}
    >
      <CardHeader
        subtitle={studentTask.length + "in total"}
        title=" MY STUDENT ACTIVITIES"
      />

      <List>
        {studentTask.map((task, i) => (
          <ListItem
            divider={i < studentTask.length - 1}
            key={task.id}
            sx={{ border: "none" }}
          >
            <BiRectangle
              style={{
                background: newColors,
                color: newColors,
                margin: "10px",
              }}
            />
            <LinearProgress variant="determinate" value={30} />
            <ListItemText
              sx={{ fontSize: "20px" }}
              primary={task.task}
              secondary={
                i === 0 ? (
                  <Chip
                    label={"Active"}
                    size="small"
                    sx={{ background: "orangered", color: "white" }}
                    // onClick={handleClick}
                    // onDelete={handleDelete}
                    deleteIcon={<TiMediaPause />}
                  />
                ) : (
                  <Chip
                    label={"In Active"}
                    size="small"
                    sx={{ background: "#c5c5c5", color: "black" }}
                    // onClick={handleClick}
                    // onDelete={handleDelete}
                    deleteIcon={<TiMediaPause />}
                  />
                )
              }
            />
            {i === 0 ? (
              <Button
                variant="contained"
                size="small"
                disableElevation
                sx={{
                  fontSize: "12px",
                  background: "var(--blue)",
                }}
              >
                start
              </Button>
            ) : (
              <Typography
                variant="body"
                size="small"
                sx={{
                  fontSize: "12px",
                  color: "gray",

                }}
              >
                ...pending
                
              </Typography>
            )}

            <IconButton edge="end" size="small">
              <BsThreeDotsVertical />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          sx={{ color: "#707070" }}
          endIcon={<BsArrowRight />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};
