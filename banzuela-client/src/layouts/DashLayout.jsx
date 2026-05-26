import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ArticleIcon from "@mui/icons-material/Article";

const drawerWidth = 240;

const dashboardNavItems = [
  {
    label: "Dashboard",
    title: "Dashboard",
    to: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Reports",
    title: "Reports",
    to: "/dashboard/reports",
    icon: AssessmentIcon,
  },
  {
    label: "Users",
    title: "Users",
    to: "/dashboard/users",
    icon: PeopleIcon,
  },
  {
    label: "Articles",
    title: "Articles",
    to: "/dashboard/articles",
    icon: ArticleIcon,
  },
];

/* ---------------- DRAWER MIXINS ---------------- */

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,

  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

/* ---------------- DRAWER HEADER ---------------- */

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

/* ---------------- APP BAR ---------------- */

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,

  background: "linear-gradient(90deg, #050505 0%, #1A1A1A 100%)",
  color: "#F5F1E8",
  borderBottom: "1px solid #C8A96B",

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

/* ---------------- DRAWER ---------------- */

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  "& .MuiDrawer-paper": {
    backgroundColor: "#0B0B0B",
    color: "#F5F1E8",
    borderRight: "1px solid rgba(200,169,107,0.25)",
  },

  ...(open
    ? {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
}));

/* ---------------- SEARCH ---------------- */

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "#C8A96B",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "999px",

  backgroundColor: "rgba(200,169,107,0.12)",
  border: "1px solid rgba(200,169,107,0.35)",

  "&:hover": {
    backgroundColor: "rgba(200,169,107,0.18)",
  },

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#F5F1E8",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,

    transition: theme.transitions.create("width"),
    width: "100%",

    "&::placeholder": {
      color: "rgba(245,241,232,0.7)",
      opacity: 1,
    },

    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

/* ---------------- PAGE TITLE ---------------- */

const getPageTitle = (pathname) =>
  dashboardNavItems.find(({ to }) =>
    pathname.startsWith(to)
  )?.title ?? "Welcome";

/* ---------------- COMPONENT ---------------- */

const DashLayout = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const pageTitle = getPageTitle(location.pathname);

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);

  const handleLogout = () => navigate("/");

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#F5F1E8",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />

      {/* ---------------- APP BAR ---------------- */}

      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              color: "#C8A96B",
            }}
          >
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: "0.5px",
              color: "#F5F1E8",
            }}
          >
            {pageTitle}
          </Typography>

          {/* ---------------- SEARCH ---------------- */}

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase placeholder="Search…" />
          </Search>

          {/* ---------------- LOGOUT BUTTON ---------------- */}

          <Button
            onClick={handleLogout}
            variant="outlined"
            sx={{
              color: "#C8A96B",
              borderColor: "#C8A96B",

              "&:hover": {
                borderColor: "#E0C48A",
                backgroundColor: "rgba(200,169,107,0.12)",
              },
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* ---------------- DRAWER ---------------- */}

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              color: "#C8A96B",
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider
          sx={{
            borderColor: "rgba(200,169,107,0.2)",
          }}
        />

        <List>
          {dashboardNavItems.map(({ label, to, icon: Icon }) => {
            const isSelected =
              to === "/dashboard"
                ? location.pathname === to
                : location.pathname.startsWith(to);

            return (
              <ListItem
                key={to}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  component={Link}
                  to={to}
                  selected={isSelected}
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    justifyContent: open ? "initial" : "center",

                    borderRadius: "12px",
                    mx: 1,
                    my: 0.5,

                    color: isSelected ? "#0B0B0B" : "#F5F1E8",

                    backgroundColor: isSelected
                      ? "#C8A96B"
                      : "transparent",

                    "&:hover": {
                      backgroundColor: isSelected
                        ? "#C8A96B"
                        : "rgba(200,169,107,0.12)",
                    },

                    transition: "all 0.3s ease",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",

                      color: isSelected ? "#0B0B0B" : "#C8A96B",
                    }}
                  >
                    <Icon />
                  </ListItemIcon>

                  <ListItemText
                    primary={label}
                    sx={{
                      opacity: open ? 1 : 0,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      {/* ---------------- PAGE CONTENT ---------------- */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: "100%",
          minWidth: 0,
          overflowX: "hidden",

          backgroundColor: "#F5F1E8",
          color: "#111111",
        }}
      >
        <DrawerHeader />

        <Outlet />
      </Box>
    </Box>
  );
};

export default DashLayout;