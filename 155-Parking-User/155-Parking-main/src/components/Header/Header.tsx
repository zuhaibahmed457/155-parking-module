"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ArrowBackOutlined, Menu } from "@mui/icons-material";
import Image from "next/image";
import { Logo } from "@/src/assets";
import { Container, Fab, Grid, IconButton, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import TemporaryDrawer from "../Drawer/Drawer";
import { useState } from "react";

interface HeaderProp {
  showBackBtn?: boolean;
  title?: string;
  duration?: number[];
  showDuration?: boolean;
  showHamburger?: boolean;
  mb?: number;
}

export default function Header({
  showBackBtn = false,
  title = "",
  duration = [1, 0, 0, 0],
  showDuration = false,
  showHamburger = false,
  mb,
}: HeaderProp) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ mb: mb ?? 3 }}>
      <TemporaryDrawer
        open={open}
        setOpen={setOpen}
        toggleDrawer={toggleDrawer}
      />
      <AppBar
        sx={{ bgcolor: "background.paper", zIndex: 1000 }}
        position="static"
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Stack width={1} flexDirection="column">
              <Stack
                width={1}
                py={1.7}
                justifyContent="space-between"
                direction="row"
                alignItems="center"
              >
                {showBackBtn ? (
                  <Fab
                    sx={{ borderRadius: 2, width: "35px", height: "35px" }}
                    size="small"
                    color="primary"
                    onClick={() => router.back()}
                  >
                    <ArrowBackOutlined />
                  </Fab>
                ) : (
                  <Image src={Logo} alt="logo" />
                )}

                {showHamburger && (
                  <IconButton
                    color="primary"
                    onClick={() => toggleDrawer(true)}
                    sx={{ display: { xs: "flex", md: "none" } }}
                  >
                    <Menu />
                  </IconButton>
                )}

                {!!title ? (
                  <>
                    <Typography
                      justifySelf="center"
                      fontWeight={600}
                      variant="h5"
                      alignSelf="center"
                    >
                      {title}
                    </Typography>
                    <Box width={35} />
                  </>
                ) : (
                  <Stack
                    justifyContent="space-between"
                    gap={3}
                    direction="row"
                    alignItems="center"
                    display={{ xs: "none", md: "flex" }}
                  >
                    <Typography>History</Typography>
                    <Typography>How it Works</Typography>
                    <Typography>Help & Support</Typography>
                    <Typography>Contacct Us</Typography>
                  </Stack>
                )}
              </Stack>
              {showDuration && (
                <Grid spacing={1} container sx={{ mt: 0.5, mb: 2 }}>
                  {duration?.map((e) => (
                    <Grid
                      size={{ xs: 3 }}
                      sx={{
                        bgcolor: e ? "primary.main" : "primary.100",
                        p: 0.32,
                        borderRadius: 5,
                      }}
                    />
                  ))}
                </Grid>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
