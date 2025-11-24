"use client";

import { BgSmall, Logo, Plate, Stroke } from "@/src/assets";
import { Header, InputField } from "@/src/components";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <>
      <Stack
        bgcolor="background.paper"
        minHeight={"100svh"}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          backgroundImage: `url(${Stroke.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="sm">
          <Stack justifyContent="center" gap={3}>
            <Image style={{ margin: "0px auto" }} src={Logo} alt="logo" />
            <Typography
              width={1}
              mt={3}
              color="white"
              variant="h4"
              fontWeight={700}
            >
              Welcome Manager
            </Typography>

            <Stack
              p={0}
              borderRadius="10px"
              sx={{
                background:
                  "linear-gradient(105.72deg, #101921 0%, #49D69D 100%)",
                padding: "1.5px", // border thickness
              }}
            >
              <Stack
                p={2}
                bgcolor="rgba(29, 39, 47, 0.99)"
                borderRadius="inherit"
                justifyContent="center"
                alignItems="center"
                gap={3}
              >
                <Typography variant="h6" fontWeight={500} color="white">
                  Enter your information and login your account
                </Typography>

                <InputField
                  name="Email"
                  label="Email"
                  startIcon={<EmailOutlinedIcon sx={{ color: "#d7d7d7" }} />}
                  placeholder="Enter Email"
                />
                <InputField
                  name="Password"
                  placeholder="Enter Password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  startIcon={<LockOutlinedIcon sx={{ color: "#d7d7d7" }} />}
                  icon={
                    showPassword ? (
                      <VisibilityOffOutlinedIcon
                        onClick={togglePassword}
                        sx={{ cursor: "pointer", color: "#d7d7d7" }}
                      />
                    ) : (
                      <VisibilityOutlinedIcon
                        onClick={togglePassword}
                        sx={{ cursor: "pointer", color: "#d7d7d7" }}
                      />
                    )
                  }
                />

                <Typography
                  variant="body2"
                  alignSelf="flex-start"
                  fontWeight={500}
                  color="primary.main"
                >
                  Forget password?
                </Typography>
              </Stack>
            </Stack>

            <Button
              variant="contained"
              size="large"
              fullWidth
              LinkComponent={Link}
              href="/"
              sx={{
                mt: 3,
              }}
            >
              Login
            </Button>
            <Stack
              flexDirection={"row"}
              color={"white"}
              mx="auto"
              gap={1}
              mt={5}
              alignItems="center"
            >
              <Typography fontFamily="sans-serif">
                Terms & Conditions
              </Typography>
              <Typography fontFamily="sans-serif" color="primary">
                |
              </Typography>
              <Typography fontFamily="sans-serif">Privacy Policy</Typography>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default page;
