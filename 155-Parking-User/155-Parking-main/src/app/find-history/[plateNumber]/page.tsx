"use client";

import { BgSmall, Plate } from "@/src/assets";
import { Header, HistoryCard, InputField } from "@/src/components";
import {
  Box,
  Button,
  Container,
  Fab,
  InputAdornment,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

const page = () => {
  return (
    <>
      <Stack minHeight={"100svh"} flexDirection="column">
        <Header showHamburger />

        <Container>
          <Box sx={{ p: 0 }}>
            {/* Header */}
            <Typography variant="h6" color="text.secondary">
              Search Result:
            </Typography>

            <Stack
              mb={2}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4" fontWeight={700}>
                39 Entries Found
              </Typography>
              <Fab sx={{ borderRadius: 2 }} color="primary" size="small">
                <FilterListOutlinedIcon />
              </Fab>
            </Stack>

            {/* List */}
            <Stack spacing={2}>
              {Array.from({ length: 4 }).map((_, i) => (
                <HistoryCard key={i} />
              ))}
            </Stack>
          </Box>
        </Container>
      </Stack>
    </>
  );
};

export default page;
