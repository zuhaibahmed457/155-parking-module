"use client";

import { Card, Box, Typography, Button, Stack, Chip } from "@mui/material";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { BgSmall, DummyPlate } from "@/src/assets";
import { ChevronRight } from "@mui/icons-material";
import Link from "next/link";

export const HistoryCard = () => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundImage: `url(${BgSmall.src})`,
        backgroundSize: "cover",
        backgroundPosition: "100% ",
        backgroundRepeat: "no-repeat",
      }}
      elevation={3}
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
            icon={<CalendarMonthIcon color="primary" fontSize={"small"} />}
          />
          <Chip
            size="small"
            sx={{ bgcolor: "primary.100", color: "white" }}
            label="11:03 AM"
            icon={<AccessTimeIcon color="primary" fontSize={"small"} />}
          />
        </Stack>
      </Stack>

      <Button
        variant="contained"
        fullWidth
        LinkComponent={Link}
        href="/find-history/123/456"
      >
        View Details <ChevronRight />
      </Button>
    </Card>
  );
};
