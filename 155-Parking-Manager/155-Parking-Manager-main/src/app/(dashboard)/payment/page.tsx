"use client";

import { Bg, BgSmall, Plate } from "@/src/assets";
import { Header, InputField } from "@/src/components";
import {
  Box,
  Button,
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
        <Header
          title="Payment Method"
          duration={[1, 1, 1, 0]}
          showBackBtn
          showDuration
        />
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
                Select Payment Method
              </Typography>
              <Typography color="white" variant="caption" fontWeight={400}>
                Set a default payment method to book trips. You’ll only be
                charged once you make a booking
              </Typography>
              <Box
                sx={{
                  background: "#49545D",
                  borderRadius: "10px",
                  border: "1px solid",
                  borderColor: "primary.main",
                  height: "40px",
                  px: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Stack flexDirection="row" gap={1}>
                  <Image
                    src={
                      "https://www.mastercard.com/content/dam/brandcenter/assets/images/logos/mclogo-for-footer.svg"
                    }
                    alt=""
                    width={25}
                    height={25}
                  />
                  <Typography
                    variant="body2"
                    fontFamily="sans-serif"
                    color="white"
                  >
                    Mastercard **** 4435
                  </Typography>
                </Stack>
                <Typography color="primary.main" variant="body2">
                  Selected
                </Typography>
              </Box>
              <Button
                // size="large"
                sx={{
                  mt: "auto",
                  bgcolor: "primary.100",
                  fontFamily: "sans-serif",
                }}
                variant="contained"
                fullWidth
              >
                + Add another payment method
              </Button>
            </Stack>
            <Button
              size="large"
              sx={{ mt: "auto" }}
              variant="contained"
              fullWidth
              LinkComponent={Link}
              href="/checkout"
            >
              Proceed To Check Out
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default page;
