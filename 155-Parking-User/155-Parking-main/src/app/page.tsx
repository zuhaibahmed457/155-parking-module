"use client";

import { FAQ, Header, TestimonialSlider } from "../components";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Banner, Plate } from "../assets";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header showHamburger />
      <Container>
        <Typography variant="h4" fontWeight="bold">
          Book Your Parking
        </Typography>
        <Typography variant="h6" fontWeight="Regular">
          Safe and Secure
        </Typography>
        <Paper sx={{ p: 2, mt: 2, borderRadius: "10px" }}>
          <Stack
            p={2}
            sx={{ borderRadius: "10px" }}
            justifyContent="center"
            alignItems="center"
            bgcolor="#1d272f"
            gap={3}
          >
            <Image src={Plate} alt="" />
            <Typography
              variant="h6"
              fontWeight="Regular"
              color="white"
              textAlign="center"
            >
              Take a picture of your vehicle’s number plate
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

        {/* Faq  */}

        <FAQ />

        {/* Become a Manager  */}

        <Stack
          mt={4}
          mb={4}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={{ xs: "initial", md: "center" }}
          justifyContent="space-between"
        >
          <Stack>
            <Typography variant="body2" color="primary" fontWeight="bold">
              BECOME A MANAGER{" "}
            </Typography>
            <Typography variant="h4" fontWeight="bold" my={0.7}>
              Managed Parked Vehicles
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight="Regular"
              my={1}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              velit similique
            </Typography>
          </Stack>

          <Button variant="contained" sx={{ mt: 1 }}>
            Contact Now
          </Button>
        </Stack>
        <Image src={Banner} alt="banner" />
      </Container>

      <Stack bgcolor="#E8EFF3">
        <Container>
          <Stack
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography
              textAlign="center"
              variant="h5"
              maxWidth={"md"}
              mx={{ xs: 5, md: "auto" }}
              mt={5}
              mb={2}
              fontWeight={600}
            >
              Journeys become easier and we become more connected, the more
              accessible our parking options are.
            </Typography>
            <Box
              sx={{
                bgcolor: "primary.main",
                width: 100,
                p: "2px",
                borderRadius: 8,
              }}
            />
            <Typography
              textAlign="center"
              variant="body1"
              mx={"auto"}
              my={1.2}
              fontWeight={400}
            >
              Taylor Swift | CEO
            </Typography>
          </Stack>
        </Container>

        <TestimonialSlider />
      </Stack>
    </>
  );
};

export default page;
