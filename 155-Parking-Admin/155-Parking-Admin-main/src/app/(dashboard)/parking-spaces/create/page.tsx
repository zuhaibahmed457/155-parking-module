"use client";

import { InputField, TableContainer } from "@/components";
import {
  BorderColorOutlined,
  ChevronLeft,
  FilterAltOutlined,
  Visibility,
} from "@mui/icons-material";
import {
  IconButton,
  Tooltip,
  Chip,
  Stack,
  Paper,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useForm } from "react-hook-form";
import ParkingLots from "../parking-alot";

const page = () => {
  const { control } = useForm();

  const columns = [
    {
      key: "vehicleNumber",
      label: "Manager ID",
    },
    {
      key: "customerName",
      label: "Manager Name",
    },
    {
      key: "inDate",
      label: "Assigned Parking Space",
    },
    {
      key: "duration",
      label: "Date Added",
    },
    {
      key: "paidAmount",
      label: "Generated Tokens",
    },
    {
      key: "planExpiry",
      label: "Plan Expiry",
    },
    {
      key: "status",
      label: "Status",
      render: (row: any) => {
        const statusColor =
          row.status === "Active"
            ? "success"
            : row.status === "Expiring Soon"
            ? "warning"
            : "error";

        return (
          <Chip
            label={row.status}
            color={statusColor}
            size="small"
            sx={{ color: "white", fontWeight: 600 }}
          />
        );
      },
    },
    {
      key: "action",
      label: "Actions",
      render: () => (
        <Stack flexDirection="row" gap={1}>
          <Tooltip title="View Details" placement="top">
            <IconButton
              component={Link}
              href="/"
              sx={{ border: "1px solid #2DC98A  ", borderRadius: 2 }}
            >
              <Visibility sx={{ color: "primary.main" }} fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="View Details" placement="top">
            <IconButton
              component={Link}
              href="/"
              sx={{ border: "1px solid #2DC98A  ", borderRadius: 2 }}
            >
              <BorderColorOutlined
                sx={{ color: "primary.main" }}
                fontSize="small"
              />
            </IconButton>
          </Tooltip>
        </Stack>
      ),
    },
  ];

  return (
    <>
      <Button startIcon={<ChevronLeft />} variant="contained">
        Go Back
      </Button>
      <Paper
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: 2.2,
          border: "1px solid #E2E2E2",
          bgcolor: "#fff",
          my: 2,
          p: 2,
        }}
      >
        <Stack flexDirection="column" justifyContent="center" mb={1} gap={0.5}>
          <Typography variant="h6" fontWeight={600}>
            Add New Parking Space
          </Typography>
          <Typography variant="body1" color="textDisabled">
            add a new parking space with basic information.
          </Typography>
        </Stack>
        <Grid mt={2} container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <InputField
              label={"Parking Name"}
              name="name"
              control={control}
              placeholder="Search By name or ID"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <InputField
              label={"Address"}
              name="reports"
              control={control}
              placeholder="50 Reports Found"
            />
          </Grid>
        </Grid>
      </Paper>
      <ParkingLots />{" "}
    </>
  );
};

export default page;
