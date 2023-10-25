import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const SensorBox = ({
  title,
  icon,
  sensor_1,
  value_1,
  sensor_2 = "-",
  value_2 = "-",
  sensor_3 = "-",
  value_3 = "-",
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {title}
        </Typography>
        {icon}
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {sensor_1}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[300] }}
        >
          {value_1}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {sensor_2}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[300] }}
        >
          {value_2}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {sensor_3}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[300] }}
        >
          {value_3}
        </Typography>
      </Box>
    </Box>
  );
};

export default SensorBox;
