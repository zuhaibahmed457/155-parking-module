"use client";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Drawer as MuiDrawer,
  Typography,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  useMediaQuery,
  Box,
} from "@mui/material";
import {
  AttachMoney,
  Bookmark,
  DashboardOutlined,
  HelpOutlineOutlined,
  HistoryOutlined,
  LocalParking,
  MenuOpen,
  PeopleAltOutlined,
  PeopleOutline,
  ShieldOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import { drawerWidth } from "@/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import MobileDrawer from "./mobile-drawer";
import { Logo } from "@/assets";
import SelectBox from "../select/select-box";
import { useForm } from "react-hook-form";
import useAppSelector from "@/hooks/useAppSelector";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create(["width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create(["width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MainDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pathname = usePathname();
  const router = useRouter();
  const { control } = useForm({
    defaultValues: {
      pakringVenue: "mega-mall",
    },
  });
  const { drawerOpen } = useAppSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  const renderNavList = (data: any) => (
    <>
      {drawerOpen ? (
        // <ListItem>
        //   <Typography
        //     variant="caption"
        //     fontWeight={theme.typography.SemiBold}
        //     color={"text.seccondary"}
        //   >
        //     {title}
        //   </Typography>
        // </ListItem>
        <></>
      ) : (
        <Stack my={0.7} />
      )}

      {data.map((e: any, index: number) => {
        const isActive = pathname === e.path;
        return (
          <ListItem
            key={index}
            disableGutters
            sx={{ display: "block", py: 0.5 }}
          >
            <ListItemButton
              onClick={() => router.push(e.path)}
              sx={{
                minHeight: 48,
                marginX: drawerOpen ? 1.5 : 1.1,
                borderRadius: 1.5,
                justifyContent: drawerOpen ? "initial" : "center",
                backgroundColor: isActive ? "primary.main" : "transparent",
                transition: "all 0.2s ease",
                "&:hover": { bgcolor: !isActive ? "#051d15" : "#1c9564" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  mr: drawerOpen ? 1 : "auto",
                  color: isActive ? "white" : theme.palette.text.disabled,
                  transition: "color 0.2s ease",
                }}
              >
                {e.icon}
              </ListItemIcon>
              <ListItemText
                primary={e.text}
                primaryTypographyProps={{
                  fontWeight: 450,
                }}
                sx={{
                  opacity: drawerOpen ? 1 : 0,
                  color: isActive ? "white" : theme.palette.text.disabled,
                  fontSize: "1rem",
                  transition: "opacity 0.2s ease, color 0.2s ease",
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );

  return (
    <>
      <MobileDrawer />
      {/* <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileDrawer />
      </Box> */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          // bgcolor: "#090E15",
        }}
      >
        <Drawer
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#090E15",
              border: "none",
            },
            width: drawerWidth - 5,
          }}
          variant="permanent"
          open={drawerOpen}
        >
          <DrawerHeader sx={{ border: "none" }}>
            <ListItem disablePadding sx={{ width: "100%" }}>
              <Stack
                justifyContent={!drawerOpen ? "center" : "space-between"}
                direction="row"
                width={1}
                alignItems="center"
              >
                <Stack
                  alignItems="center"
                  flexDirection="column"
                  width={1}
                  my={1.5}
                >
                  <Image
                    src={Logo}
                    alt="Logo"
                    onClick={() => router.push("/")}
                    width={255}
                  />
                  <Box
                    sx={{
                      mx: "auto",
                      mt: 2.5,
                      mb: 1.8,
                      height: 1.3,
                      width: "100%",
                      bgcolor: "primary.main",
                      opacity: 0.9,
                      borderRadius: 5,
                    }}
                  />
                  <SelectBox
                    control={control}
                    name="pakringVenue"
                    options={[
                      { label: "Mega Mall Parking", value: "mega-mall" },
                      { label: "Mega Mall Parking", value: "mmm" },
                    ]}
                    label="Selected Parking Space"
                    labelProps={{
                      color: "textDisabled",
                    }}
                  />
                  <Box
                    sx={{
                      mx: "auto",
                      mt: 2.5,
                      height: 1.1,
                      borderRadius: 5,
                      width: "100%",
                      bgcolor: "primary.main",
                      opacity: 0.9,
                    }}
                  />
                </Stack>
                {/* {drawerOpen && (
                  <IconButton onClick={handleDrawerClose}>
                    <MenuOpen />
                  </IconButton>
                )} */}
              </Stack>
            </ListItem>
          </DrawerHeader>
          {/* <Divider sx={{ bgcolor: 'blue', height: 2 }} /> */}

          <List disablePadding>{renderNavList(navItems)}</List>
        </Drawer>
      </Box>
    </>
  );
}

export const navItems = [
  { icon: <DashboardOutlined />, text: "Dashboard", path: "/dashboard" },
  {
    icon: <LocalParking />,
    text: "Parking Allotment",
    path: "/parking-allotment",
  },
  // { icon: <Bookmark />, text: "Whitelist", path: "/whitelist" },
  {
    icon: <PeopleOutline />,
    text: "Staff Management",
    path: "/staff-management",
  },
  { icon: <AttachMoney />, text: "Revenue", path: "/revenue" },
];
