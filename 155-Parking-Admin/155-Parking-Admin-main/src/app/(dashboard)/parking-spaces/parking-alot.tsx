"use client";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { Parking } from "@/assets";

interface ParkingLot {
  id: number;
  name: string;
  totalLots: number;
  address: string;
  imageUrl: any;
}

const parkingLots: ParkingLot[] = [
  {
    id: 1,
    name: "Mega Mall Parking",
    totalLots: 70,
    address: "2118 Thornridge Cir, Syracuse, Connecticut 3...",
    imageUrl: Parking,
  },
  {
    id: 2,
    name: "Super Mart Parking",
    totalLots: 70,
    address: "2118 Thornridge Cir, Syracuse, Connecticut 3...",
    imageUrl: Parking,
  },
  {
    id: 3,
    name: "Mega Mall Parking",
    totalLots: 70,
    address: "2118 Thornridge Cir, Syracuse, Connecticut 3...",
    imageUrl: Parking,
  },
];

export default function ParkingLots() {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: "#0f1a1f",
        color: "white",
        border: "1px solid #1b2c33",
      }}
    >
      {/* Header Section */}
      <Box mb={3}>
        <Typography variant="h6" fontWeight={600}>
          Manage Your Parking Spaces
        </Typography>
        <Typography variant="body2" color="#b0bec5">
          All occupied parking lots
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Grid container spacing={3}>
        {parkingLots.map((item) => (
          <Grid size={{ xs: 12, md: 4 }} key={item.id}>
            <Card
              sx={{
                background: "#132229",
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid #1e2f36",
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight={600} color="white">
                    {item.name}
                  </Typography>

                  <Stack direction="row" gap={1}>
                    <IconButton sx={{ bgcolor: "#1c8c6c", p: 0.5 }}>
                      <EditIcon sx={{ fontSize: 18, color: "white" }} />
                    </IconButton>
                    <IconButton sx={{ bgcolor: "#c0392b", p: 0.5 }}>
                      <DeleteIcon sx={{ fontSize: 18, color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>

                <Grid container mt={2}>
                  <Grid size={{ xs: 6 }}>
                    <Typography fontSize={13} color="#90a4ae">
                      Total Parking Lots
                    </Typography>
                    <Typography fontWeight={600} color="white">
                      {item.totalLots}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 6 }}>
                    <Typography fontSize={13} color="#90a4ae">
                      Address
                    </Typography>
                    <Typography fontSize={13} color="white">
                      {item.address}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>

              {/* Parking Image */}
              <Box position="relative" height={150}>
                <Image
                  src={item.imageUrl}
                  alt="Parking Image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
