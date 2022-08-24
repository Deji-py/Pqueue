import { v4 as uuid } from "uuid";
import { AvatarGenerator } from "random-avatar-generator";
import randomColor from "random-color";

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
} from "@mui/material";
import {
  BsArrowRight,
  BsCheck,
  BsClock,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { BiBox, BiRectangle } from "react-icons/bi";
import { TiMediaPause } from "react-icons/ti";
const generator = new AvatarGenerator();
const products = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: generator.generateRandomAvatar(),
    updatedAt: "pending",
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: generator.generateRandomAvatar(),
    updatedAt: "pending",
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: generator.generateRandomAvatar(),
    updatedAt: "pending",
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: generator.generateRandomAvatar(),
    updatedAt: "pending",
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: generator.generateRandomAvatar(),
    updatedAt: "pending",
  },
];

const randomcolor = randomColor();
const newColors = randomcolor.hexString();

export const Activities = ({}) => (
  <Card
    sx={{
      mt: "10px",
      borderRadius: "20px",
      background: "whitesmoke",
      boxShadow: "0px 2px 6px rgba(200,200,200, 0.5)",
    }}
  >
    <CardHeader
      subtitle={`${products.length} in total`}
      title=" MY STUDENT ACTIVITIES"
    />

    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
          sx={{ border: "none" }}
        >
          <BiRectangle
            style={{ background: newColors, color: newColors, margin: "10px" }}
          />

          <ListItemText
            primary={product.name}
            secondary={
              <Chip
                label={product.updatedAt}
                size="small"
                // onClick={handleClick}
                // onDelete={handleDelete}
                deleteIcon={<TiMediaPause />}
              />
            }
          />
          <Button
            variant="contained"
            size="small"
            disableElevation
            sx={{
              borderRadius: "100px",
              fontSize: "12px",
              background: "var(--primary)",
            }}
          >
            Proceed
          </Button>
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
