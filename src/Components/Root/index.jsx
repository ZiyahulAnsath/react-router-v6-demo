import * as React from "react";
import {
  Dashboard,
  Details,
  Person,
  Report,
  Settings,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import "./sideNav.css";

const sideNavigation = [
  {
    id: 1,
    name: "Dashboard",
    icon: <Dashboard />,
  },
  {
    id: 2,
    name: "Leads",
    icon: <Person />,
  },
  {
    id: 3,
    name: "Reports",
    icon: <Report />,
  },
  {
    id: 4,
    name: "Currentstocks",
    icon: <Details />,
  },
  {
    id: 5,
    name: "Settings",
    icon: <Settings />,
  },
];

const Root = () => {
  const navigate = useNavigate();

  const onClickItem = (name) => {
    console.log("clicked");
    navigate(`/${name}`);
  };

  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <Container>
      <Grid container spacing={4} mt={2}>
        <Grid item md={3} className="sideMenu">
          <Typography variant="h4" mb={4} onClick={() => onClickLogo()}>
            Excuseme
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={9}>
              <TextField
                variant="outlined"
                label="Search"
                fullWidth
                className="searchBox"
              />
            </Grid>
            <Grid item md={3}>
              <Button variant="contained">New</Button>
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: "1rem" }} />
          <List>
            {sideNavigation.map((detail) => (
              <ListItem
                onClick={() => {
                  onClickItem(detail.name.toLowerCase());
                }}
                key={detail.id}
                className="listItem"
              >
                <ListItemAvatar>
                  <Avatar>{detail.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText>{detail.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ paddingLeft: "1rem" }} />
        <Grid item md={8.8}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Root;
