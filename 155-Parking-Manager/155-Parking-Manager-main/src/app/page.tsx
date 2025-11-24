"use client";

import { Header } from "../components";
import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { BgSmall, HomeSection3, HomeSectionBg, Plate } from "../assets";
import Link from "next/link";
import { LocalParking, LocationOn } from "@mui/icons-material";

const page = () => {
  return (
    <>
      <Header showHamburger />
      <Container>
        {/* 1st Section  */}
        <Paper
          elevation={3}
          sx={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundImage: `url(${HomeSectionBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            p: { xs: 1.8, md: 3 },
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            color: "#fff",
          }}
        >
          <Typography variant="h4" fontWeight={300} sx={{ mb: 1, mt: 0.2 }}>
            Hello,{" "}
            <Typography variant="h4" component="span" fontWeight={700}>
              Mark
            </Typography>
          </Typography>

          <Box
            sx={{
              bgcolor: "background.paper",
              p: 2,
              borderRadius: "15px",
              width: "100%",
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <LocalParking
                sx={{
                  color: "#000",
                  borderRadius: 10,
                  p: 0.2,
                  bgcolor: "#5CE68A",
                }}
              />
              <Typography variant="body1">Assigned Space</Typography>
            </Stack>

            <Box
              sx={{
                background: "rgba(255,255,255,0.1)",
                p: 1.5,
                borderRadius: "10px",
                mt: 1.5,
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOn />
                <Typography variant="body1">
                  Supermarket Parking, New York
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Paper>

        {/* 2nd Section */}
        <Paper
          sx={{
            p: 2,
            mt: 2,
            borderRadius: "10px",
            backgroundImage: `url(${BgSmall.src})`,
            backgroundSize: "cover",
            backgroundPosition: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography color="white" variant="h5" fontWeight="bold">
            Check Status of Parked Cars
          </Typography>
          <Stack flexDirection="row" flexWrap="wrap" gap={1} my={1.5}>
            <Chip
              size="small"
              sx={{ bgcolor: "#0E3F2B", color: "white" }}
              label="50 Purchased Parking"
              icon={
                <Typography mt={0.1} fontFamily={"sans-serif"} color="primary">
                  •
                </Typography>
              }
            />
            <Chip
              size="small"
              sx={{ bgcolor: "#0E3F2B", color: "white" }}
              label="50 Parking Checked"
              icon={
                <Typography mt={0.1} fontFamily={"sans-serif"} color="primary">
                  •
                </Typography>
              }
            />
          </Stack>
          {/* <Typography variant="h6" fontWeight="Regular">
          Safe and Secure
        </Typography> */}
          <Stack
            p={2}
            sx={{ borderRadius: "10px" }}
            justifyContent="center"
            alignItems="center"
            bgcolor="rgba(29, 39, 47, 0.7)"
            gap={3}
          >
            <Image src={Plate} alt="" />
            <Typography
              variant="h6"
              fontWeight="Regular"
              color="white"
              textAlign="center"
            >
              Take a picture of the parked vehicle’s number plate{" "}
            </Typography>
            <Stack gap={2} width={{ xs: 1, md: 280 }}>
              <Button
                variant="contained"
                fullWidth
                LinkComponent={Link}
                href="/take-picture"
              >
                Take a Picture
              </Button>
              <Button
                variant="contained"
                fullWidth
                LinkComponent={Link}
                href="/enter-number"
              >
                Enter a Number Manually
              </Button>
            </Stack>
          </Stack>
        </Paper>

        {/* 3rd Section  */}
        <Paper
          elevation={3}
          sx={{
            my: 2,
            borderRadius: "10px",
            overflow: "hidden",
            backgroundImage: `url(${HomeSection3.src})`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            minHeight: 128,
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            p: 2,
            color: "#fff",
          }}
        >
          <Stack
            sx={{
              borderColor: "#49D69D",
              borderWidth: "1px",
              bgcolor: "rgba(73, 214, 157, 0.3)",
              borderRadius: 2,
              p: 1,
              width: "70%",
              gap: 0.5,
            }}
          >
            <Typography variant="h6">Check Counter</Typography>
            <Typography variant="body2" fontWeight={400}>
              Total parking checked today:
            </Typography>
            <Typography variant="h6" fontFamily="sans-serif">
              15/50
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default page;
