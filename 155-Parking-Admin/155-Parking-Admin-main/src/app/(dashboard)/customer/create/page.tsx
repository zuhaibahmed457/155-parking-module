"use client";

import { Header, InputField } from "@/components";
import { Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const page = () => {
  const { control } = useForm();

  return (
    <>
      <Header heading="Customer Details" desc="Home • Dashboard" showBackBtn />
      <Container maxWidth="xl" sx={{ my: 2 }}>
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
            <Typography variant="h6">Wade Warren</Typography>
            <Chip label="Expired" color="error" size="small" />
            <Chip label="2 Tokens" color="error" size="small" />
          </Stack>
          <Stack flexDirection="row" mb={1}>
            <Typography variant="body2" color="textDisabled">
              view details of the customer
            </Typography>
          </Stack>
          <Grid mt={2} container spacing={2}>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <InputField
                label={"Vehicle Number Plate"}
                name="name"
                control={control}
                placeholder="Search By name or ID"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <InputField
                label={"Customer Name"}
                name="reports"
                control={control}
                placeholder="Statuses"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <InputField
                label={"Duration"}
                name="reports"
                control={control}
                placeholder="50 Reports Found"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <InputField
                label={"Paid Amount"}
                name="reports"
                control={control}
                placeholder="50 Reports Found"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <InputField
                label={"Reporting Manager"}
                name="reports"
                control={control}
                placeholder="50 Reports Found"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <InputField
                label={"Token Settellment"}
                name="reports"
                control={control}
                placeholder="Not Paid"
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default page;
