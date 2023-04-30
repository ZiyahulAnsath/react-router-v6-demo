import * as React from "react";
import { FolderCopyOutlined } from "@mui/icons-material";
import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";


const Details=[
  {
    id:1,
    name:"Dashboard",
  }, {
    id:2,
    name:"Leads",
  }, {
    id:3,
    name:"Settings",
  },
]

const Root = () => {
  const navigate = useNavigate();

  const onClickItem = (name) => {
    console.log("clicked");
    navigate(`/${name}`);


  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item md={3}>
          <List>
           {Details.map((detail)=>(
              <ListItem
                onClick={() => {
                  onClickItem(detail.name.toLowerCase());
                }}
                key={detail.id}
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderCopyOutlined />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>{detail.name}</ListItemText>
              </ListItem>
        ))}
          </List>
        </Grid>
        <Grid item md={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Root;
