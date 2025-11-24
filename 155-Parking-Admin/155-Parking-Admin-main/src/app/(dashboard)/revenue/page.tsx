"use client";

import { Header, TableContainer } from "@/components";
import { Visibility } from "@mui/icons-material";
import { Button, Container, IconButton, Stack, Tooltip } from "@mui/material";
import Link from "next/link";
import { RevenueChart } from "./RevenueChart";

const page = () => {
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
      key: "paymentDate",
      label: "Payment Date & Time",
    },
    {
      key: "planBought",
      label: "Plan Bought",
    },
    {
      key: "paidAmount",
      label: "Paid Amount",
      render: (row: any) => (
        <span style={{ color: "#2DC98A", fontWeight: 600 }}>
          ${row.paidAmount}
        </span>
      ),
    },
    {
      key: "action",
      label: "Actions",
      render: () => (
        <Tooltip title="View Details" placement="top">
          <IconButton
            component={Link}
            href="/"
            sx={{
              border: "1px solid #2DC98A",
              borderRadius: 2,
              padding: "4px",
            }}
          >
            <Visibility sx={{ color: "#2DC98A", fontSize: 20 }} />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  return (
    <>
      <Stack>
        <Header heading="Revenue" desc="View revenue" />

        <Container maxWidth="xl" sx={{ pb: 3 }}>
          <Stack flexDirection="column" gap={2}>
            <RevenueChart data={revenueData} />
            <TableContainer
              isLoading={false}
              columns={columns}
              data={dummyData}
              page={1}
              totalPages={1}
              heading="Payment Details"
              desc="customer payments list"
              icon={Visibility}
            />
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default page;

const revenueData = [
  { month: "Jun", value: 40000 },
  { month: "Jul", value: 120000 },
  { month: "Aug", value: 80000 },
  { month: "Sep", value: 150000 },
  { month: "Oct", value: 130000 },
];

const dummyData = [
  {
    vehicleNumber: "AAA–0012",
    customerName: "Devon Lane",
    paymentDate: "25/10/2025 - 04:42PM",
    planBought: "Hourly Plan",
    paidAmount: "223.50",
  },
  {
    vehicleNumber: "AAA–0012",
    customerName: "Jenny Wilson",
    paymentDate: "25/10/2025 - 04:42PM",
    planBought: "Hourly Plan",
    paidAmount: "223.50",
  },
  {
    vehicleNumber: "AAA–0012",
    customerName: "Albert Flores",
    paymentDate: "25/10/2025 - 04:42PM",
    planBought: "Hourly Plan",
    paidAmount: "223.50",
  },
  {
    vehicleNumber: "AAA–0012",
    customerName: "Annette Black",
    paymentDate: "25/10/2025 - 04:42PM",
    planBought: "Hourly Plan",
    paidAmount: "223.50",
  },
  {
    vehicleNumber: "AAA–0012",
    customerName: "Eleanor Pena",
    paymentDate: "25/10/2025 - 04:42PM",
    planBought: "Hourly Plan",
    paidAmount: "223.50",
  },
  {
    vehicleNumber: "AAA–0012",
    customerName: "Savannah Nguyen",
    paymentDate: "25/10/2025 - 04:42PM",
    planBought: "Hourly Plan",
    paidAmount: "223.50",
  },
];
