import { DirectionsBusFilledOutlined } from "@mui/icons-material";
import { Card, CardContent, Typography, Box, Stack, Chip } from "@mui/material";

export const ParkingOccupancy = ({ rows }: { rows: boolean[][] }) => (
  <Card>
    <CardContent>
      <Typography color="black" variant="h6" fontWeight={600}>
        Parking Occupancy
      </Typography>

      <Stack mt={2} gap={1}>
        {rows.map((row, rowIndex) => (
          <Stack
            key={rowIndex}
            direction="column"
            spacing={1}
            // alignItems="center"
            gap={1}
          >
            <Chip
              label={`Row ${rowIndex + 1}`}
              sx={{
                width: 80,
                bgcolor: "#E4F2FC",
                color: "primary.main",
              }}
              size="small"
            />

            <Stack direction="row" spacing={1}>
              {row.map((occupied, i) => (
                <DirectionsBusFilledOutlined
                  sx={{
                    width: 25,
                    height: 25,
                    borderRadius: 6,
                    color: occupied ? "primary.main" : "grey.400",
                  }}
                />
                // <Box
                //   key={i}
                //   sx={{
                //     width: 22,
                //     height: 22,
                //     borderRadius: 6,
                //     backgroundColor: occupied ? "primary.main" : "grey.400",
                //   }}
                // />
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </CardContent>
  </Card>
);
