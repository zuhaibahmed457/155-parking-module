import { Box, Card, CardContent, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const RevenueChart = ({ data }: { data: any[] }) => (
  <Card
    sx={{
      height: 1,
      mt: 2,
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      borderRadius: 2.2,
      border: "1px solid #E2E2E2",
      bgcolor: "#fff",
    }}
  >
    <CardContent>
      <Typography fontWeight={600} color="black" variant="h6">
        Monthly Revenue
      </Typography>
      <Typography variant="body2" color="black">
        Revenue growth over the last 5 months
      </Typography>

      <Box mt={3} height={250}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" style={{ fontSize: 14 }} />
            <YAxis style={{ fontSize: 14 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              // stroke="var(--mui-palette-primary-main)"
              stroke="#2DC98A"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </CardContent>
  </Card>
);
