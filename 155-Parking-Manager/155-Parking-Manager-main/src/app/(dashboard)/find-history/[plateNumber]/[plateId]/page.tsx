"use client";

import { Bg, BgSmall, DummyPlate, Plate } from "@/src/assets";
import { Header, InputField } from "@/src/components";
import { AccessTime, CalendarMonth } from "@mui/icons-material";
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
import Link from "next/link";

const page = () => {
  return (
    <>
      <Stack minHeight={"100svh"} flexDirection="column">
        <Header title="Plate Detail" showBackBtn />
        <Container>
          <Stack height={"calc(100svh - 150px)"}>
            <Stack
              p={2}
              sx={{
                borderRadius: "10px",
                backgroundImage: `url(${Bg.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              bgcolor="#1d272f"
              gap={2}
            >
              <Stack flexDirection="row" justifyContent="space-between" my={1}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={DummyPlate}
                    alt="license"
                    width={140}
                    height={120}
                    style={{ objectFit: "contain" }}
                  />
                </Box>

                {/* Top Row */}
                <Stack
                  direction="column"
                  // justifyContent="space-between"
                  alignItems="end"
                  gap={2}
                >
                  <Chip
                    size="small"
                    sx={{ bgcolor: "primary.100", color: "white" }}
                    label="10 Oct 2025"
                    icon={<CalendarMonth color="primary" fontSize={"small"} />}
                  />
                  <Chip
                    size="small"
                    sx={{ bgcolor: "primary.100", color: "white" }}
                    label="11:03 AM"
                    icon={<AccessTime color="primary" fontSize={"small"} />}
                  />
                </Stack>
              </Stack>
              <Stack flexDirection="row" gap={2}>
                <Chip
                  size="small"
                  sx={{ bgcolor: "primary.100", color: "white" }}
                  label="Bill Paid"
                />
                <Chip
                  size="small"
                  color="error"
                  sx={{ color: "white" }}
                  label="Exceeded 15 mins"
                  icon={
                    <AccessTime
                      color="red"
                      sx={{ fontSize: 8, color: "red" }}
                    />
                  }
                />
              </Stack>

              <Typography color="white" variant="h5" fontWeight={600}>
                User Info:
              </Typography>
              <InputField name="number" label="Plate Number" />
              <InputField name="name" label="Full Name" />
              <InputField name="email" label="Email" />
              <InputField name="phone" label="Phone" />
            </Stack>
            <Button
              size="large"
              sx={{ mt: "auto" }}
              variant="contained"
              fullWidth
              LinkComponent={Link}
              href="/invoice"
            >
              View Invoice
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default page;
