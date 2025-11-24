"use client";

import { Header, TableContainer } from "@/components";
import { Visibility } from "@mui/icons-material";
import {
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { ParkingOccupancy } from "./ParkingOccupancy";
import { RevenueChart } from "./RevenueChart";
import { StatCard } from "./StatCard";

export default function DashboardPage() {
  const columns = [
    {
      key: "vehicleNumber",
      label: "Vehicle Number Plate",
    },
    {
      key: "customerName",
      label: "Customer Name",
    },
    {
      key: "inDate",
      label: "In Date & Time",
    },
    {
      key: "duration",
      label: "Duration",
    },
    {
      key: "paidAmount",
      label: "Paid Amount",
      render: (row: any) =>
        row.paidAmount ? (
          <span style={{ color: "green", fontWeight: 600 }}>
            ${row.paidAmount}
          </span>
        ) : (
          "-"
        ),
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
        <Tooltip title="View Details" placement="top">
          <IconButton
            component={Link}
            href="/customer/create"
            sx={{ border: "1px solid #2DC98A  ", borderRadius: 2 }}
          >
            <Visibility sx={{ color: "primary.main" }} fontSize="small" />
          </IconButton>
        </Tooltip>
      ),
    },
  ];
  return (
    <Stack>
      <Header
        heading="Welcome Back, David!"
        desc="Home • Dashboard"
        // action={<Button variant="contained">Add New</Button>}
      />
      <Container maxWidth="xl" sx={{ pb: 3 }}>
        <Stack my={3}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <StatCard title="Total Parking Lots" value="70" />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <StatCard title="Parking Lots Occupied" value="24/70" />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <StatCard title="New Customers Today" value="3" />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <StatCard title="Monthly Revenue" value="$124,580" />
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <RevenueChart data={revenueData} />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <ParkingOccupancy rows={parkingRows} />
            </Grid>
          </Grid>
        </Stack>
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
      </Container>
    </Stack>
  );
}

const revenueData = [
  { month: "Jun", value: 40000 },
  { month: "Jul", value: 120000 },
  { month: "Aug", value: 80000 },
  { month: "Sep", value: 150000 },
  { month: "Oct", value: 130000 },
];

const parkingRows = [
  [true, false, false, true, false, false, true, false, false, false],
  [false, false, true, false, true, false, false, true, false, false],
  [true, true, false, false, false, true, false, false, true, false],
  [false, false, false, true, false, true, false, false, false, true],
];

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
    status: "Expiring Soon",
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
    status: "2 Tokens",
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
