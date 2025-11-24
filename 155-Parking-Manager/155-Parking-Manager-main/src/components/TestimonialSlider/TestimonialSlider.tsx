"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { Trustpilot } from "@/src/assets";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function TestimonialSlider() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: !matches ? "20px" : "50px",
    slidesToShow: !matches ? 1 : 3,
    speed: 500,
  };

  return (
    <Container>
      <Box>
        <Slider {...settings}>
          {Array(10)
            .fill("")
            .map(() => (
              <Stack
                sx={{
                  width: "300px",
                  height: "300px",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  borderRadius: 2,
                  py: 4,
                  px: 3,
                  bgcolor: "white",
                }}
              >
                <Image src={Trustpilot} alt="trustpilot" />
                <Typography
                  color="text.secondary"
                  mt={3}
                  variant="body2"
                  textAlign={"justify"}
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor. Thank you.“
                </Typography>

                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={3}
                  gap={2}
                >
                  <Box
                    sx={{
                      bgcolor: "primary.main",
                      width: 30,
                      p: "2px",
                      borderRadius: 8,
                    }}
                  />
                  <Typography fontWeight="bold" variant="body2">
                    Donna, Heathrow
                  </Typography>
                </Stack>
              </Stack>
            ))}
        </Slider>
      </Box>
    </Container>
  );
}

export default TestimonialSlider;
