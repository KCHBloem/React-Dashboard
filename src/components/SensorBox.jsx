import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const SensorBox = ({
  title,
  icon,
  suffix,
  sensor_1,
  value_1,
  sensor_2 = "-",
  value_2 = "-",
  sensor_3 = "-",
  value_3 = "-",
  sensor_4 = "-",
  value_4 = "-",
  sensor_5 = "-",
  value_5 = "-",
  sensor_6 = "-",
  value_6 = "-",
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="20px">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" fontWeight="bold" sx={{ color: colors.grey[100] }}>
          {title}
        </Typography>
        {icon}
      </Box>
      {renderSensorValue(sensor_1, value_1, suffix, colors)}
      {renderSensorValue(sensor_2, value_2, suffix, colors)}
      {renderSensorValue(sensor_3, value_3, suffix, colors)}
      {renderSensorValue(sensor_4, value_4, suffix, colors)}
      {renderSensorValue(sensor_5, value_5, suffix, colors)}
      {renderSensorValue(sensor_6, value_6, suffix, colors)}
    </Box>
  );
};

const renderSensorValue = (sensor, value, suffix, colors) => {
  if (sensor !== "-" && value !== "-") {
    return (
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
          {sensor}
        </Typography>
        <Typography variant="h4" fontStyle="italic" sx={{ color: colors.greenAccent[300] }}>
          {value}
          {suffix}
        </Typography>
      </Box>
    );
  } else {
    return null;
  }
};

export default SensorBox;
