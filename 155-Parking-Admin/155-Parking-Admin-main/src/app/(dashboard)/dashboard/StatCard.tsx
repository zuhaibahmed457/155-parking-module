import { Card, CardContent, Typography } from "@mui/material";

export const StatCard = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <Card
    sx={{
      borderRadius: 2,
      height: 1,
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    }}
  >
    <CardContent>
      <Typography variant="h6" fontWeight={600} color="black">
        {title}
      </Typography>
      <Typography color="primary" fontWeight={700} variant="h4" mt={2}>
        {value}
      </Typography>
    </CardContent>
  </Card>
);
