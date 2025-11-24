"use client";

import { Bg, BgSmall, PaymentIcon, Plate } from "@/src/assets";
import { Header, InputField } from "@/src/components";
import { ReceiptLong } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Stack minHeight={"100vh"} flexDirection="column">
        <Header
          title="Checkout"
          duration={[1, 1, 1, 0]}
          showBackBtn
          showDuration
        />
        <Container>
          <Stack gap={2} mb={3}>
            <Stack
              p={2}
              sx={{
                borderRadius: "10px",
                backgroundImage: `url(${Bg.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              bgcolor="#1d272f"
              gap={3}
            >
              <Box display="flex" justifyContent="center" mt={2} mb={1}>
                {/* <ReceiptLong sx={{ fontSize: 40, color: "#40f2c4" }} /> */}
                <Image src={PaymentIcon} alt="" />
              </Box>

              {/* Amount */}
              <Stack alignItems="center" gap={0.8}>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  color="white"
                  mb={0.3}
                >
                  $14.00
                </Typography>
                <Typography variant="subtitle2" color="#cfd8dc">
                  Paying via Mastercard
                </Typography>
                <Typography
                  variant="body2"
                  color="#90a4ae"
                  fontFamily="sans-serif"
                >
                  Mastercard • **** 4435
                </Typography>
              </Stack>

              {/* <Divider sx={{ opacity: 0.2 }} /> */}

              {/* Info Rows */}
              <Stack gap={3} my={1.5}>
                <InfoRow label="To Pay" value="$14.00" />
                <InfoRow label="Subscription" value="Monthly Plan" />
                <InfoRow label="Date" value="Oct 24 • 09:42 AM" />
                <InfoRow label="License Plate" value="MNQ-0000" />
                <InfoRow label="User Name" value="William O’Conner" />
                <InfoRow label="Phone" value="+1 000 0000 0000" />
                <InfoRow label="Email" value="willywilliam03@example.com" />
              </Stack>
            </Stack>
            <Button
              size="large"
              sx={{ mt: "auto" }}
              variant="contained"
              fullWidth
              LinkComponent={Link}
              href="/invoice"
            >
              Generate Invoice
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default page;

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
