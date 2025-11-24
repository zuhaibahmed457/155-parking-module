"use client";

import { Bg, BgSmall, Plate } from "@/src/assets";
import { Header, InputField } from "@/src/components";
import {
  CheckCircle,
  CheckCircleOutline,
  CheckOutlined,
  ContentCopy,
  ReceiptLong,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Stack minHeight={"100vh"} flexDirection="column">
        <Header
          title="Invoice"
          // duration={[1, 1, 1, 0]}
          showBackBtn
          // showDuration
        />
        <Container>
          <Stack mb={3} gap={3}>
            <Stack
              p={2}
              sx={{
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                backgroundImage: `url(${Bg.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              bgcolor="#1d272f"
              gap={3}
              position={"relative"}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "16px",
                  background: `
            linear-gradient(135deg, transparent 75%, #101921 75%) 0 0,
            linear-gradient(225deg, transparent 75%, #101921 75%) 0 0
          `,
                  backgroundSize: "16px 16px",
                  backgroundRepeat: "repeat-x",
                  transform: "translateY(-100%)",
                }}
              />
              {/* Top Icon */}
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

              {/* Title */}
              <Stack alignItems="center" gap={1}>
                <Typography variant="h4" fontWeight={600} color="white">
                  Purchase Successful
                </Typography>

                <Typography
                  variant="caption"
                  color="#D4D4D4"
                  textAlign="center"
                >
                  Subscription will expire on Nov 24, 09:42 AM
                </Typography>
              </Stack>

              <Divider sx={{ opacity: 0.2 }} />

              {/* CONTENT LIST */}
              <Stack gap={3}>
                <InfoRow label="Paid Amount" value="$14.00" />
                <InfoRow label="Subscription" value="Monthly Plan" />
                <InfoRow label="Purchase Date" value="Oct 24 2025" />
                <InfoRow label="Purchase Time" value="09:42 AM" />
                <InfoRow label="License Plate" value="MNQ-0000" />
                <CopyRow label="Transaction ID" value="241220230942" />
                <CopyRow label="Reference ID" value="J2D8ZOX4" />
              </Stack>
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
            <Button size="large" variant="outlined" fullWidth>
              Download Invoice
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default page;

function CopyRow({ label, value }: { label: string; value: any }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="body2" color="#cfd8dc">
        {label}
      </Typography>

      <Stack direction="row" alignItems="center" gap={0.1}>
        <Typography variant="body2" color="white" fontWeight={500}>
          {value}
        </Typography>

        <IconButton size="small">
          <ContentCopy sx={{ fontSize: 16, color: "#40f2c4" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
}

function InfoRow({ label, value }: { label: string; value: any }) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="body2" color="#fff" fontWeight={400}>
        {label}
      </Typography>
      <Typography variant="body2" color="white" fontWeight={400}>
        {value}
      </Typography>
    </Stack>
  );
}
