"use client";

import { BgSmall, Plate } from "@/src/assets";
import { Header, InputField } from "@/src/components";
import {
  Button,
  Container,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Stack bgcolor="#2b353d" minHeight={"100svh"} flexDirection="column">
        <Header title="Enter Manually" showBackBtn />
        <Container>
          <Stack justifyContent="center" height={"calc(100vh - 250px)"}>
            {/* Centered Section  */}
            <Stack
              p={2}
              sx={{
                borderRadius: "10px",
                backgroundImage: `url(${BgSmall.src})`,
                backgroundSize: "cover",
                backgroundPosition: "100% ",
                backgroundRepeat: "no-repeat",
              }}
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
                Wanna take a picture instead?{" "}
              </Typography>
              <Stack gap={2} width={220}>
                <Button
                  variant="contained"
                  fullWidth
                  LinkComponent={Link}
                  href="/take-picture"
                >
                  Take a Picture
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Stack
          sx={{
            position: "fixed",
            bottom: 0,
            bgcolor: "background.paper",
            width: 1,
            zIndex: 2,
            minHeight: 100,
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            overflow: "hidden",
            py: 3,
            px: 2,
          }}
          gap={2}
        >
          <InputField
            endAdornment={
              <InputAdornment position="end">
                <Typography color="#939393">#</Typography>
              </InputAdornment>
            }
            showBorder={false}
            value={"ABC457"}
            name="number"
          />

          <Button
            variant="contained"
            fullWidth
            LinkComponent={Link}
            href="/enter-detail"
            size="large"
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default page;
