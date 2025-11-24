"use client";

import { Bg, BgSmall } from "@/src/assets";
import { Header, InputField } from "@/src/components";
import { InfoOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [plan, setPlan] = useState("hourly");
  const [duration, setDuration] = useState("4-hour");
  return (
    <>
      <Stack minHeight={"100vh"} flexDirection="column">
        <Header
          title="Enter Manually"
          showBackBtn
          showDuration
          duration={[1, 1, 0, 0]}
        />
        <Container>
          <Stack height={"calc(100vh - 150px)"}>
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
              <Typography variant="h5" fontWeight={600} color="white" my={1}>
                Select Duration:
              </Typography>

              {/* HOURLY / MONTHLY SWITCH */}
              {/* <ToggleButtonGroup
                value={plan}
                exclusive
                onChange={(e, val) => setPlan(e.target?.value)}
                sx={{ width: "100%" }}
              >
                <ToggleButton
                  value="hourly"
                  sx={{
                    flex: 1,
                    color: "#000",
                    borderRadius: "25px !important",
                    border: "none",
                    textTransform: "none",
                    fontWeight: 600,
                    "&.MuiToggleButton-root": {
                      bgcolor: plan === "hourly" ? "primary.main" : "#626A75",
                    },
                  }}
                >
                  Hourly
                </ToggleButton>

                <ToggleButton
                  value="monthly"
                  sx={{
                    flex: 1,
                    color: "#000",
                    borderRadius: "25px !important",
                    border: "none",
                    textTransform: "none",
                    fontWeight: 600,
                    "&.MuiToggleButton-root": {
                      bgcolor: plan === "monthly" ? "primary.main" : "#626A75",
                    },
                  }}
                >
                  Monthly
                </ToggleButton>
              </ToggleButtonGroup> */}

              <Stack direction="row" spacing={1} width="100%">
                {/* HOURLY */}
                <Button
                  onClick={() => setPlan("hourly")}
                  sx={{
                    flex: 1,
                    backgroundColor: plan === "hourly" ? "#00E69A" : "#6B6B6B",
                    color: plan === "hourly" ? "#fff" : "#CECECE",
                    fontWeight: 600,
                    borderRadius: "25px",
                    "&:hover": {
                      backgroundColor:
                        plan === "hourly" ? "#00E69A" : "#4f565f",
                    },
                  }}
                >
                  Hourly
                </Button>

                {/* MONTHLY */}
                <Button
                  onClick={() => setPlan("monthly")}
                  sx={{
                    flex: 1,
                    backgroundColor: plan === "monthly" ? "#00E69A" : "#6B6B6B",
                    color: plan === "monthly" ? "#fff" : "#CECECE",
                    fontWeight: 600,
                    borderRadius: "25px",
                    "&:hover": {
                      backgroundColor:
                        plan === "monthly" ? "#00E69A" : "#4f565f",
                    },
                  }}
                >
                  Monthly
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                width="100%"
                bgcolor="primary.main"
                p={2}
                borderRadius={2}
              >
                <Button
                  onClick={() => setDuration("2hour")}
                  sx={{
                    flex: 1,
                    bgcolor: duration === "2hour" ? "#0E3F2B" : "#6B6B6B",
                    color: duration === "2hour" ? "#fff" : "#CECECE",
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: duration === "2hour" ? "#0E3F2B" : "#4f565f",
                    },
                  }}
                >
                  2-Hour
                </Button>

                <Button
                  onClick={() => setDuration("4Hour")}
                  sx={{
                    flex: 1,
                    bgcolor: duration === "4Hour" ? "#0E3F2B" : "#6B6B6B",
                    color: duration === "4Hour" ? "#fff" : "#CECECE",
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: duration === "4Hour" ? "#0E3F2B" : "#4f565f",
                    },
                  }}
                >
                  4-Hour{" "}
                </Button>
              </Stack>
              {/* <ToggleButtonGroup
                value={duration}
                exclusive
                onChange={(e, val) => val && setDuration(val)}
                sx={{ width: "100%" }}
              >
                <ToggleButton
                  value="2-hour"
                  // disabled
                  sx={{
                    flex: 1,
                    backgroundColor: "#7D8792",
                    color: "#D6D6D6",
                    borderRadius: "20px !important",
                    border: "none",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  2-hour
                </ToggleButton>

                <ToggleButton
                  value="4-hour"
                  sx={{
                    flex: 1,
                    backgroundColor:
                      duration === "4-hour" ? "#007A4A" : "#626A75",
                    color: "#fff",
                    borderRadius: "20px !important",
                    border: "none",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  4-hour
                </ToggleButton>
              </ToggleButtonGroup> */}

              {/* Charges Box */}
              <Stack
                sx={{
                  borderRadius: 2,
                  p: 2,
                  bgcolor: "primary.main",
                }}
                justifyContent="space-between"
                flexDirection="row"
              >
                <Stack
                  sx={{
                    borderRadius: 2,
                    px: 1.5,
                    py: 1,
                    bgcolor: "white",
                  }}
                  justifyContent="space-between"
                  alignItems={"center"}
                  flexDirection="row"
                  width={1}
                >
                  <Typography color="primary.100" fontWeight={400}>
                    Total Charges:
                  </Typography>
                  <Typography
                    fontWeight={700}
                    color="primary.100"
                    fontSize={20}
                  >
                    $14.00
                  </Typography>
                </Stack>
              </Stack>

              {/* INFO SECTION */}
              <Box sx={{ display: "flex", color: "white" }}>
                <InfoOutlined sx={{ fontSize: 20, mr: 0.5 }} />
                <Typography variant="body2">
                  Valid parking hours: <b>6 AM to 6 PM</b>
                </Typography>
              </Box>

              <Box sx={{ mb: 1, display: "flex", color: "white" }}>
                <InfoOutlined sx={{ fontSize: 20, mr: 0.5 }} />
                <Typography variant="body2">
                  Flat rate evening parking: <b>6 PM to 6 AM</b>
                </Typography>
              </Box>

              {/* SUBMIT BUTTON */}
              <Button
                variant="contained"
                fullWidth
                size="large"
                LinkComponent={Link}
                href="/payment"
              >
                Proceed To Payment
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default page;
