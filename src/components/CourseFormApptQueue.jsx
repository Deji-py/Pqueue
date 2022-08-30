
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
    name: "David Michael",
    imageUrl: generator.generateRandomAvatar(),
    matric:"p/nd/345/450056"
  },
  {
    id: uuid(),
    name: "allison peter",
    imageUrl: generator.generateRandomAvatar(),
   matric:"p/hnd/19/3210077"
  },
  {
    id: uuid(),
    name: "tobi sikiru",
    imageUrl: generator.generateRandomAvatar(),
    matric:"p/nd/345/0089"
  },
  {
    id: uuid(),
    name: "shobola joshua",
    imageUrl:generator.generateRandomAvatar(),
    matric:"p/nd/345/70056"
  },
  {
    id: uuid(),
    name: "Magret ekwe",
    imageUrl: generator.generateRandomAvatar(),
    matric:"p/nd/345/80078"
  },
];

export const CourseFormAppt = ({title}) => (
   

  <Card sx={{mt:"10px", borderRadius:'20px',background:"whitesmoke", boxShadow:"0px 2px 6px rgba(200,200,200, 0.5)"}}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title={title}
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
            secondary={`Matric: ${product.matric}`}
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
