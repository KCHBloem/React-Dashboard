import { Box, useTheme, Typography, IconButton } from "@mui/material";
import { tokens, ColorModeContext } from "../../theme";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import SelectGraph from "../../components/SelectGraph";
import WaterIcon from "@mui/icons-material/Water";
import SensorBox from "../../components/SensorBox";
import ControlPanel from "../../components/ControlPanel";
import CompressIcon from "@mui/icons-material/Compress";
import LeakAddIcon from "@mui/icons-material/LeakAdd";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import FetchData from "../../components/FetchData";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box m="20px">
      {/* GRID & CHARTS */}
      <Box display="grid" gridTemplateColumns="repeat(14, 1fr)" gridAutoRows="100px" gap="20px">
        {/* ROW 1 */}
        <Box gridColumn="span 8" gridRow="span 1" backgroundColor={colors.primary[400]} borderRadius="10px">
          <Box display="flex" justifyContent="left" p={2}>
            {/* Icons */}
            <Box display="flex">
              <Box display="flex" border="2px solid red" padding="10px" borderRadius="10px">
                <Box mr="10px">
                  <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                    Emergency Stop:
                  </Typography>
                  <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                    Enclosure State:
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight="600" color={colors.redAccent[400]}>
                    {<FetchData datatype="safetydata" sensornumber="SENSOR1" />}
                  </Typography>
                  <Typography variant="h5" fontWeight="600" color={colors.redAccent[400]}>
                    {<FetchData datatype="safetydata" sensornumber="SENSOR2" />}
                  </Typography>
                </Box>
              </Box>

              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Box gridColumn="span 3" gridRow="span 1" backgroundColor={colors.primary[400]} display="flex" justifyContent="center" borderRadius="10px">
          <SensorBox
            title="RPM"
            suffix=" RPM"
            sensor_1="3-Fase Motor:"
            value_1={<FetchData datatype="rpmdata" sensornumber="SENSOR1" />}
            icon={<ElectricMeterIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 3" gridRow="span 1" backgroundColor={colors.primary[400]} display="flex" justifyContent="center" borderRadius="10px">
          <SensorBox
            title="Power"
            suffix=" W"
            sensor_1="3-Fase Motor:"
            value_1={<FetchData datatype="powerdata" sensornumber="SENSOR1" />}
            icon={<ElectricMeterIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 8" gridRow="span 4" backgroundColor={colors.primary[400]} borderRadius="10px">
          <ControlPanel />
        </Box>

        <Box gridColumn="span 3" gridRow="span 2" backgroundColor={colors.primary[400]} display="flex" justifyContent="center" borderRadius="10px">
          <SensorBox
            title="Temperature"
            suffix="°C"
            sensor_1="Ambient:"
            sensor_2="Enclosure:"
            sensor_3="Bearing:"
            sensor_4="Blue Bearing 1:"
            sensor_5="Blue Bearing 2:"
            sensor_6="Motor:"
            value_1={<FetchData datatype="temperaturedata" sensornumber="SENSOR1" />}
            value_2={<FetchData datatype="temperaturedata" sensornumber="SENSOR2" />}
            value_3={<FetchData datatype="temperaturedata" sensornumber="SENSOR3" />}
            value_4={<FetchData datatype="temperaturedata" sensornumber="SENSOR4" />}
            value_5={<FetchData datatype="temperaturedata" sensornumber="SENSOR5" />}
            value_6={<FetchData datatype="temperaturedata" sensornumber="SENSOR6" />}
            icon={<DeviceThermostatIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 3" gridRow="span 2" backgroundColor={colors.primary[400]} display="flex" justifyContent="center" borderRadius="10px">
          <SensorBox
            title="Vibration"
            suffix="Hz"
            sensor_1="X-Axis:"
            sensor_2="Y-Axis:"
            sensor_3="Z-Axis:"
            value_1={<FetchData datatype="vibrationdata" sensornumber="SENSOR1" />}
            value_2={<FetchData datatype="vibrationdata" sensornumber="SENSOR2" />}
            value_3={<FetchData datatype="vibrationdata" sensornumber="SENSOR3" />}
            icon={<WaterIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>

        <Box gridColumn="span 3" gridRow="span 2" backgroundColor={colors.primary[400]} display="flex" justifyContent="center" borderRadius="10px">
          <SensorBox
            title="Pressure"
            suffix=" Bar"
            sensor_1="Pump:"
            value_1={<FetchData datatype="pressuredata" sensornumber="SENSOR1" />}
            sensor_2="Radial Piston:"
            value_2={<FetchData datatype="pressuredata" sensornumber="SENSOR2" />}
            sensor_3="Axial Piston:"
            value_3={<FetchData datatype="pressuredata" sensornumber="SENSOR3" />}
            icon={<LeakAddIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>

        <Box gridColumn="span 3" gridRow="span 2" backgroundColor={colors.primary[400]} display="flex" justifyContent="center" borderRadius="10px">
          <SensorBox
            title="Force"
            suffix=" N"
            sensor_1="Radial"
            value_1={<FetchData datatype="forcedata" sensornumber="SENSOR1" />}
            sensor_2="Axial"
            value_2={<FetchData datatype="forcedata" sensornumber="SENSOR2" />}
            icon={<CompressIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>

        {/* ROW 2 */}

        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]} borderRadius="10px">
          <SelectGraph selected="temperature" />
        </Box>
        {/* ROW 3 */}
        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]} borderRadius="10px">
          <SelectGraph selected="force" />
        </Box>
        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]} borderRadius="10px">
          <SelectGraph selected="vibration" />
        </Box>
        {/* ROW 4 */}
        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]} borderRadius="10px">
          <SelectGraph selected="sound" />
        </Box>
        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]} borderRadius="10px">
          <SelectGraph selected="pressure" />
        </Box>
        {/* ROW 5 */}
        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]} borderRadius="10px">
          <SelectGraph selected="pressure" />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
