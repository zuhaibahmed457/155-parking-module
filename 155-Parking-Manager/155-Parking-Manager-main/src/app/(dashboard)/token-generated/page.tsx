"use client";

import { Bg, BgSmall, Logo, Stroke } from "@/src/assets";
import { CheckOutlined, InfoOutlined } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Stack
      sx={{
        bgcolor: "background.paper",
        backgroundImage: `url(${Stroke.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100svh",
      }}
    >
      <Container>
        <Stack
          justifyContent="space-between"
          height={"100svh"}
          py={10}
          alignItems="center"
        >
          <Image src={Logo} alt="logo" />

          <Stack>
            <Stack
              justifyContent="center"
              alignItems="center"
              borderRadius={100}
              mx={"auto"}
              my={2}
              width={68}
              height={68}
              bgcolor="primary.main"
            >
              <CheckOutlined sx={{ fontSize: 40, color: "#fff" }} />
            </Stack>
            <Typography
              variant="h6"
              fontWeight={400}
              lineHeight={2}
              textAlign={"center"}
              color="white"
              mx={4}
            >
              <InfoOutlined sx={{ fontSize: 20, mr: 0.4, mb: 0.3 }} />
              Token Generated against the number plate <b>ABC 3456</b>{" "}
            </Typography>
          </Stack>
          <Button
            size="large"
            variant="contained"
            fullWidth
            LinkComponent={Link}
            href="/"
          >
            Back to Home
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default page;
