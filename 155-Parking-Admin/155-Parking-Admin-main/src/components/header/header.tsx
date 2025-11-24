"use client";

import { ChevronLeft, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Fab,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import InputField from "../input/input";
import AccountMenu from "./menu";
import { HeaderBg } from "@/assets";
import useAppSelector from "@/hooks/useAppSelector";
import { toggleMobileDrawer } from "@/store/reducer";

interface HeaderProps {
  heading?: string;
  desc?: string;
  action?: React.ReactNode;
  showBackBtn?: boolean;
}

const Header = ({
  heading = "",
  desc = "",
  action,
  showBackBtn = false,
}: HeaderProps) => {
  let { isLogged } = useAppSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDrawerOpen = () => {
    dispatch(toggleMobileDrawer());
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          px: 2,
          backgroundImage: `url(${HeaderBg.src})`,
          backgroundSize: { xs: "cover", md: "100%" },
          bgcolor: "secondary.main",
          backgroundRepeat: "no-repeat",
          // pl: { xs: 0, md: drawerOpen ? drawerWidth + 10 + "px" : 7 },
        }}
      >
        <Stack>
          <Stack sx={{}}>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: { xs: "unset" },
              }}
            >
              {/* Left Side */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <IconButton
                  color="primary"
                  onClick={handleDrawerOpen}
                  sx={{ color: "#00ff9d", display: { xs: "flex", md: "none" } }}
                >
                  <Menu />
                </IconButton>
                <InputField
                  placeholder="Search"
                  name="search"
                  containerSx={{ display: { xs: "none", md: "flex" } }}
                />
              </Box>

              {/* Right Side */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {isLogged ? (
                  <AccountMenu />
                ) : (
                  <Stack direction="row" gap={2} mx={2}>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      LinkComponent={Link}
                      href="/login"
                    >
                      Login
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      sx={{
                        color: "#fff",
                        display: { xs: "none", md: "flex" },
                      }}
                      LinkComponent={Link}
                      href="/register"
                    >
                      Register
                    </Button>
                  </Stack>
                )}
              </Box>
            </Toolbar>
          </Stack>

          {(heading || desc || action) && (
            <>
              <Divider
                variant="middle"
                sx={{ borderColor: "#4D4D4D", mt: { xs: 1, md: 2 } }}
              />
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                my={{ xs: 2, md: 3.5 }}
                alignItems="center"
              >
                <Stack>
                  <Stack flexDirection="row" alignItems="center">
                    {showBackBtn && (
                      <IconButton onClick={() => router.back()}>
                        <Fab
                          size="small"
                          color="primary"
                          sx={{ borderRadius: 2 }}
                        >
                          <ChevronLeft fontSize="medium" />
                        </Fab>
                      </IconButton>
                    )}
                    <Typography fontWeight={600} variant="h5">
                      {heading}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    bgcolor={"rgba(0,0,0,0.3)"}
                    sx={{
                      px: 1.7,
                      py: 1,
                      borderRadius: 2,
                      width: "max-content",
                    }}
                    color="textDisabled"
                  >
                    {desc}
                  </Typography>
                </Stack>
                {action}
              </Stack>
            </>
          )}
        </Stack>
      </AppBar>
    </>
  );
};

export default Header;
