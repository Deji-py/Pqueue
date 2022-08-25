import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CircularProgress,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";

import { SeverityPill } from "../severity-pill";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection as table, getDocs } from "@firebase/firestore";
import { FaSkating } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export const StudentTable = () => {
  const [studentTasks, setStudentTasks] = useState([]);
  const taskCollectionRef = table(db, "StudentTasks");

  useEffect(() => {
    const getTasks = async () => {
      const taskdata = await getDocs(taskCollectionRef);
      setStudentTasks(
        taskdata.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getTasks();
    console.log(studentTasks);
  }, []);

  const totalStudents = 1000;
  const submitted = 700;

  const percentageProgress = (submitted / totalStudents) * 100;

  return (
    <Card sx={{ width: "100%", overflowX: "scroll" }}>
      <CardHeader title="Latest Tasks" />

      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Priority</TableCell>
              <TableCell>Task</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>Submitted</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentTasks.map((task) => (
              <TableRow hover>
                <TableCell>{task.priority}</TableCell>
                <TableCell>{task.task}</TableCell>
                <TableCell>{task.date}</TableCell>
                <TableCell>
                  {/* <SeverityPill
                  color={
                    (order.status === "delivered" && "success") ||
                    (order.status === "refunded" && "error") ||
                    "warning"<
                  }
                >
                  {order.status}
                </SeverityPill>  */}

                  <LinearProgress
                    variant="determinate"
                    size="small"
                    value={percentageProgress}
                    sx={{ width: "100px" }}
                  />

                  {percentageProgress + "%"}
                </TableCell>
                <TableCell>{task.deadline}</TableCell>
                <TableCell>
                  <Button variant="contained" disableElevation size="small">
                    Extend
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    disableElevation
                    size="small"
                    endIcon={<TiDelete />}
                    sx={{ background: "red", ":hover":{
                      background:"darkred"
                    } }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};
