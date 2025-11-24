"use client";

import { Header, InputField, TableContainer } from "@/components";
import {
  BorderColorOutlined,
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
  Container,
} from "@mui/material";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";

const page = () => {
  const { control } = useForm();
  const [openManagerModal, setOpenManagerModal] = useState(false);

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
      <Stack>
        <Header
          heading="Staff Management"
          desc="View, Edit, Assign and Add new managers on your parking spaces"
          action={
            <Button
              variant="contained"
              onClick={() => setOpenManagerModal(true)}
            >
              Add New Manager
            </Button>
          }
        />

        <Container maxWidth="xl" sx={{ mt: 2, pb: 3 }}>
          <Paper
            sx={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              borderRadius: 2.2,
              border: "1px solid #E2E2E2",
              bgcolor: "#fff",
              mb: 2,
              p: 2,
            }}
          >
            <Stack flexDirection="row" alignItems="center" gap={1}>
              <FilterAltOutlined />
              <Typography variant="h6">Filters</Typography>
            </Stack>
            <Grid mt={2} container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <InputField
                  label={"Vehicle Number"}
                  name="name"
                  control={control}
                  placeholder="Search By name or ID"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <InputField
                  label={"Reports"}
                  name="reports"
                  control={control}
                  placeholder="50 Reports Found"
                />
              </Grid>
            </Grid>
          </Paper>
          <TableContainer
            isLoading={false}
            columns={columns}
            data={dummyData}
            page={1}
            totalPages={1}
            heading="Current Parking Lot Allotment"
            desc="All occupied parking lots"
            icon={Visibility}
          />
          {/* <AddManagerModal
            open={openManagerModal}
            setOpen={setOpenManagerModal}
          /> */}
        </Container>
      </Stack>
    </>
  );
};

export default page;

const dummyData = [
  {
    vehicleNumber: "AAA–0012",
    customerName: "Wade Warren",
    inDate: "25/10/2025 - 04:42PM",
    duration: "Hourly Plan",
    paidAmount: "223.50",
    planExpiry: "25/11/2025 - 04:42PM",
    status: "Active",
  },
  {
    vehicleNumber: "AAA–0012",
    customerName: "Albert Flores",
    inDate: "25/10/2025 - 04:42PM",
    duration: "Hourly Plan",
    paidAmount: "",
    planExpiry: "25/11/2025 - 04:42PM",
    status: "Inactive",
  },
  {
    vehicleNumber: "AAA–0012",
    customerName: "Devon Lane",
    inDate: "25/10/2025 - 04:42PM",
    duration: "Hourly Plan",
    paidAmount: "223.50",
    planExpiry: "25/11/2025 - 04:42PM",
    status: "Active",
  },
  {
    vehicleNumber: "AAA–0012",
    customerName: "Jenny Wilson",
    inDate: "25/10/2025 - 04:42PM",
    duration: "Hourly Plan",
    paidAmount: "",
    planExpiry: "25/11/2025 - 04:42PM",
    status: "Active",
  },
  {
    vehicleNumber: "AAA–0012",
    customerName: "Arlene McCoy",
    inDate: "25/10/2025 - 04:42PM",
    duration: "Hourly Plan",
    paidAmount: "223.50",
    planExpiry: "25/11/2025 - 04:42PM",
    status: "Active",
  },
  {
    vehicleNumber: "AAA–0012",
    customerName: "Cody Fisher",
    inDate: "25/10/2025 - 04:42PM",
    duration: "Hourly Plan",
    paidAmount: "",
    planExpiry: "25/11/2025 - 04:42PM",
    status: "Active",
  },
];
