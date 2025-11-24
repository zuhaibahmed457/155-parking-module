import { Logo } from "@/assets";
import { drawerWidth } from "@/constants/constants";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { setMobileDrawer, toggleMobileDrawer } from "@/store/reducer";
import {
  DashboardOutlined,
  HelpOutlineOutlined,
  HistoryOutlined,
  PeopleAltOutlined,
  ShieldOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { navItems } from "./drawer";
import SelectBox from "../select/select-box";
import { useForm } from "react-hook-form";

const MobileDrawer = () => {
  const { mobileDrawerOpen } = useAppSelector((state) => state.appReducer);
  const router = useRouter();
  const { control } = useForm({
    defaultValues: {
      pakringVenue: "mega-mall",
    },
  });
  const pathname = usePathname();

  const dispatch = useAppDispatch();
  const theme = useTheme();

  const handleDrawerClose = () => dispatch(toggleMobileDrawer());

  useEffect(() => {
    dispatch(setMobileDrawer(false));
  }, [pathname]);

  const renderNavList = (data: any) => (
    <>
      {/* {mobileDrawerOpen ? (
        <ListItem>
          <Typography
            variant="caption"
            fontWeight={theme.typography.SemiBold}
            color={theme.palette.text.secondary}
          >
            {title}
          </Typography>
        </ListItem>
      ) : (
        <Stack my={0.7} />
      )} */}

      {data.map((e, index) => {
        const isActive = pathname === e.path;
        return (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => router.push(e.path)}
              sx={{
                minHeight: 48,
                marginX: mobileDrawerOpen ? 1.5 : 1.1,
                borderRadius: 1,
                justifyContent: mobileDrawerOpen ? "initial" : "center",
                backgroundColor: isActive ? "#7BB9FF0D" : "transparent",
                transition: "all 0.2s ease",
                "&:hover": { backgroundColor: "#051d15" },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  mr: mobileDrawerOpen ? 1.5 : "auto",
                  color: isActive
                    ? theme.palette.primary.main
                    : theme.palette.text.disabled,
                  transition: "color 0.2s ease",
                }}
              >
                {e.icon}
              </ListItemIcon>
              <ListItemText
                primary={e.text}
                sx={{
                  opacity: mobileDrawerOpen ? 1 : 0,
                  color: isActive
                    ? theme.palette.primary.main
                    : theme.palette.text.disabled,
                  fontWeight: 400,
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
    <Drawer
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#090E15",
          width: "70%",
          maxWidth: drawerWidth + 20,
        },
      }}
      //   variant="permanent"
      open={mobileDrawerOpen}
      onClose={handleDrawerClose}
    >
      <ListItem sx={{ width: "100%" }}>
        <Stack
          justifyContent={!mobileDrawerOpen ? "center" : "space-between"}
          direction="row"
          width={1}
          alignItems="center"
        >
          <Stack alignItems="center" flexDirection="column" width={1} my={1.5}>
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
      {/* <ListItem sx={{ width: "100% " }}>
        <Stack
          justifyContent={"center"}
          direction="row"
          width={1}
          py={1}
          alignItems="center"
        >
          <Image src={Logo} alt="Logo" />
        </Stack>
      </ListItem> */}
      <List>{renderNavList(navItems)}</List>
    </Drawer>
  );
};

export default MobileDrawer;
