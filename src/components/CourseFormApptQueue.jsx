
import { v4 as uuid } from "uuid";
import { AvatarGenerator } from 'random-avatar-generator';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import {
  BsArrowRight,
  BsCheck,
  BsClock,
  BsThreeDotsVertical,
} from "react-icons/bs";
const generator = new AvatarGenerator();
const products = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: generator.generateRandomAvatar(),
    updatedAt: Date.now()
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: generator.generateRandomAvatar(),
    updatedAt: Date.now()
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: generator.generateRandomAvatar(),
    updatedAt: Date.now()
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl:generator.generateRandomAvatar(),
    updatedAt: Date.now()
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: generator.generateRandomAvatar(),
    updatedAt: Date.now()
  },
];

export const CourseFormAppt = (props) => (
   

  <Card {...props} sx={{mt:"10px", borderRadius:'20px',background:"whitesmoke", boxShadow:"0px 2px 6px rgba(200,200,200, 0.5)"}}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="CourseForm Meeting"
    />
    <Box className="flex__wrapper" sx={{width:"100%", padding:"10px"}}>
      <Button
        variant="contained"
        sx={{ textTransform: "none", background: "var(--primary)","hover":{
            background: "var(--primary)"
        } }}
        endIcon={<BsCheck />}
        size={"small"}
        disableElevation
      >
        Approve
      </Button>
      <Button
        variant="contained"
        sx={{ textTransform: "none", background: "#0081E3",":hover":{
            background: "#0081E3" }}}
        endIcon={<BsClock />}
        size={"small"}
        disableElevation
      >
        ReSchedule
      </Button>
    </Box>
 
    <List>
      {products.map((product, i) => (
        <ListItem divider={i < products.length - 1} key={product.id} sx={{border:"none"}}>
          <ListItemAvatar>
            <Avatar src={product.imageUrl}/>
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={product.updatedAt}
          />
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
      sx={{ color:"#707070"}}
       
        endIcon={<BsArrowRight />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
