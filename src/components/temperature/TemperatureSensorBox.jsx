import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";

const TemperatureSensorBox = ({ title, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [sensor_1, setSensor_1] = useState("Sensor 1");
  const [sensorValue_1, setSensorValue_1] = useState(0);
  const [sensor_2, setSensor_2] = useState("Sensor 2");
  const [sensorValue_2, setSensorValue_2] = useState(0);
  const [sensor_3, setSensor_3] = useState("Sensor 3");
  const [sensorValue_3, setSensorValue_3] = useState(0);

  const getData = () => {
    fetch("/temperature.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setSensor_1(myJson[0].id);
        setSensorValue_1(myJson[0].value);
        setSensor_2(myJson[1].id);
        setSensorValue_2(myJson[1].value);
        setSensor_3(myJson[2].id);
        setSensorValue_3(myJson[2].value);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
          {sensorValue_1}°C
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
          {sensorValue_2}°C
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
          {sensorValue_3}°C
        </Typography>
      </Box>
    </Box>
  );
};

export default TemperatureSensorBox;
