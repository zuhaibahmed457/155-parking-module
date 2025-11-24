"use client";

import { BgSmall, Plate } from "@/src/assets";
import { Header, InputField } from "@/src/components";
import {
  Button,
  Container,
  InputAdornment,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Stack bgcolor="#2b353d" minHeight={"100svh"} flexDirection="column">
        <Header showHamburger />

        <Container>
          <Stack justifyContent="center" height={"calc(100vh - 250px)"}>
            {/* Centered Section  */}
            <Typography
              textAlign="center"
              color="white"
              variant="h3"
              fontWeight={700}
              my={2}
            >
              View Your Vehicle’s Parking History
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
                <Typography variant="h6" fontWeight={500} color="white">
                  Enter your vehicle’s number plate to search history{" "}
                </Typography>
                <InputField
                  name="plate"
                  label="Plate Number"
                  icon={<Typography color="#939393">#</Typography>}
                />
                <Button
                  variant="contained"
                  fullWidth
                  LinkComponent={Link}
                  href="/find-history/123"
                >
                  Search
                </Button>
              </Stack>
            </Paper>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default page;
