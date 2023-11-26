import { Box, useTheme, Typography, Checkbox } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [gpioValues, setGpioValues] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/gpio.json");
        const data = response.data;
        setGpioValues(data || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const gpioPins = [
    { name: "5V", label: "", pinnumber: 1, color: colors.redAccent[500] },
    { name: "5V", label: "", pinnumber: 2, color: colors.redAccent[500] },
    { name: "GND", label: "", pinnumber: 3, color: colors.grey[600] },
    { name: "GPIO14", label: "14", pinnumber: 4, color: colors.grey[100] },
    { name: "GPIO15", label: "15", pinnumber: 5, color: colors.grey[100] },
    { name: "GPIO18", label: "18", pinnumber: 6, color: colors.grey[100] },
    { name: "GND", label: "", pinnumber: 7, color: colors.grey[600] },
    { name: "GPIO23", label: "23", pinnumber: 8, color: colors.grey[100] },
    { name: "GPIO24", label: "24", pinnumber: 9, color: colors.grey[100] },
    { name: "GND", label: "", pinnumber: 10, color: colors.grey[600] },
    { name: "GPIO25", label: "25", pinnumber: 11, color: colors.grey[100] },
    { name: "SPI", label: "", pinnumber: 12, color: colors.blueAccent[500] },
    { name: "GPIO7", label: "7", pinnumber: 13, color: colors.grey[100] },
    { name: "GPIO1", label: "1", pinnumber: 14, color: colors.grey[100] },
    { name: "GND", label: "", pinnumber: 15, color: colors.grey[600] },
    { name: "3V3", label: "", pinnumber: 16, color: colors.redAccent[500] },
    { name: "GPIO2", label: "2", pinnumber: 17, color: colors.grey[100] },
    { name: "GPIO3", label: "3", pinnumber: 18, color: colors.grey[100] },
    { name: "GPIO4", label: "4", pinnumber: 19, color: colors.grey[100] },
    { name: "GND", label: "", pinnumber: 20, color: colors.grey[600] },
    { name: "GPIO17", label: "17", pinnumber: 21, color: colors.grey[100] },
    { name: "GPIO27", label: "27", pinnumber: 22, color: colors.grey[100] },
    { name: "GPIO22", label: "22", pinnumber: 23, color: colors.grey[100] },
    { name: "3V3", label: "", pinnumber: 24, color: colors.redAccent[500] },
    { name: "SPI", label: "", pinnumber: 25, color: colors.blueAccent[500] },
    { name: "SPI", label: "", pinnumber: 26, color: colors.blueAccent[500] },
    { name: "SPI", label: "", pinnumber: 27, color: colors.blueAccent[500] },
    { name: "GND", label: "", pinnumber: 28, color: colors.grey[600] },
    { name: "GPIO0", label: "0", pinnumber: 29, color: colors.grey[100] },
    { name: "GPIO5", label: "5", pinnumber: 30, color: colors.grey[100] },
    { name: "GPIO6", label: "6", pinnumber: 31, color: colors.grey[100] },
    { name: "GPIO13", label: "13", pinnumber: 32, color: colors.grey[100] },
    { name: "GPIO19", label: "19", pinnumber: 33, color: colors.grey[100] },
    { name: "GPIO26", label: "26", pinnumber: 34, color: colors.grey[100] },
    { name: "GND", label: "", pinnumber: 35, color: colors.grey[600] },
    { name: "GPIO12", label: "12", pinnumber: 36, color: colors.grey[100] },
    { name: "GND", label: "", pinnumber: 37, color: colors.grey[600] },
    { name: "GPIO16", label: "16", pinnumber: 38, color: colors.grey[100] },
    { name: "GPIO20", label: "20", pinnumber: 39, color: colors.grey[100] },
    { name: "GPIO21", label: "21", pinnumber: 40, color: colors.grey[100] },
    // Add more GPIO pins as needed
  ];

  const handleSetGpioValue = async (gpioName, newValue) => {
    try {
      // Update local state
      setGpioValues((prevValues) => ({
        ...prevValues,
        [gpioName]: newValue,
      }));

      // Send a request to update the server
      await axios.post("http://localhost:3001/update-gpio", {
        gpioName,
        value: newValue,
      });
      console.log("Updated GPIO Value");
    } catch (error) {
      console.error("Error updating GPIO value:", error);
    }
  };

  return (
    <React.Fragment>
      <Box m="20px">
        <Header title="Settings" subtitle="Lager Testbank Settings" />
      </Box>
      <Box display="flex" backgroundColor={colors.primary[400]} justifyContent="center" m="20px" p="20px">
        <Header title="GPIO" subtitle="Enable/Disable GPIO Pins here (Development Only)" />
        <Box
          display="grid"
          gridAutoColumns="20px"
          gridAutoRows="20px"
          rowGap="10px"
          columnGap="10px"
          m="20px"
          p="10px"
          borderRadius={2}
          backgroundColor={colors.greenColor[400]}
        >
          {/* Iterate over GPIO pins and create corresponding boxes */}
          {gpioPins.map((pin) =>
            pin.label !== "" ? (
              <React.Fragment key={pin.name}>
                {/* GPIO label */}
                <Box gridColumn={pin.pinnumber} gridRow="1" borderRadius={2} backgroundColor={pin.color} display="flex" justifyContent="center">
                  <Typography sx={{ color: colors.grey[900] }}>{pin.label}</Typography>
                </Box>
                {/* GPIO checkbox */}
                <Box gridColumn={pin.pinnumber} gridRow="2" borderRadius={2} display="flex" alignItems="center" justifyContent="center">
                  <Checkbox
                    checked={gpioValues[pin.name] || false}
                    onChange={() => handleSetGpioValue(pin.name, !gpioValues[pin.name])}
                    sx={{
                      color: colors.grey[900],
                      "&.Mui-checked": {
                        color: colors.grey[900],
                      },
                    }}
                  ></Checkbox>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment key={pin.name}>
                {/* GPIO label */}
                <Box gridColumn={pin.pinnumber} gridRow="1" borderRadius={2} backgroundColor={pin.color} display="flex" justifyContent="center">
                  <Typography sx={{ color: colors.grey[900] }}>{pin.label}</Typography>
                </Box>
                {pin.name}
              </React.Fragment>
            )
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Settings;
