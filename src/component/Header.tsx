import { Typography, Box } from "@mui/material";

export const Header = () => (
  <Box mb={2}>
    <Typography variant="h3">63,179.71 USD</Typography>
    <Typography variant="subtitle1" sx={{ color: "green" }}>
      +2,161.42 (3.54%)
    </Typography>
  </Box>
);
