"use client";

import { Bg, BgSmall, Plate } from "@/src/assets";
import { Header, InputField } from "@/src/components";
import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Stack minHeight={"100svh"} flexDirection="column">
        <Header title="User Detail" showBackBtn showDuration />
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
              <Typography color="white" variant="h5" fontWeight={600}>
                Fill Your Info:
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
              href="/select-duration"
            >
              Continue
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default page;
