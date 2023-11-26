import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import SelectGraph from "../../components/SelectGraph";
import WaterIcon from "@mui/icons-material/Water";
import SensorBox from "../../components/SensorBox";
import ControlPanel from "../../components/ControlPanel";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CompressIcon from "@mui/icons-material/Compress";
import LeakAddIcon from "@mui/icons-material/LeakAdd";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import FetchData from "../../components/FetchData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* GRID & CHARTS */}
      <Box display="grid" gridTemplateColumns="repeat(14, 1fr)" gridAutoRows="100px" gap="20px">
        {/* ROW 1 */}
        <Box gridColumn="span 2" gridRow="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <SensorBox
            title="Safety"
            suffix=""
            sensor_1="E-Stop:"
            sensor_2="Enclosure:"
            value_1={<FetchData datatype="safetydata" sensornumber="SENSOR1" />}
            value_2={<FetchData datatype="safetydata" sensornumber="SENSOR2" />}
            icon={<WaterIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 2" gridRow="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <SensorBox
            title="Temperature"
            suffix="°C"
            sensor_1="Ambient:"
            sensor_2="Enclosure:"
            sensor_3="Bearing:"
            sensor_4="Blue Bearing 1:"
            sensor_5="Blue Bearing 2:"
            sensor_6="Other:"
            value_1={<FetchData datatype="temperaturedata" sensornumber="SENSOR1" />}
            value_2={<FetchData datatype="temperaturedata" sensornumber="SENSOR2" />}
            value_3={<FetchData datatype="temperaturedata" sensornumber="SENSOR3" />}
            value_4={<FetchData datatype="temperaturedata" sensornumber="SENSOR4" />}
            value_5={<FetchData datatype="temperaturedata" sensornumber="SENSOR5" />}
            value_6={<FetchData datatype="temperaturedata" sensornumber="SENSOR6" />}
            icon={<DeviceThermostatIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 2" gridRow="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <SensorBox
            title="Vibration"
            suffix="Hz"
            sensor_1="X-Axis:"
            sensor_2="Y-Axis:"
            sensor_3="Z-Axis:"
            value_1={<FetchData datatype="VibrationData" sensornumber="SENSOR1" />}
            value_2={<FetchData datatype="VibrationData" sensornumber="SENSOR2" />}
            value_3={<FetchData datatype="VibrationData" sensornumber="SENSOR3" />}
            icon={<WaterIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 2" gridRow="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <SensorBox
            title="RPM"
            sensor_1="Axle:"
            value_1={<FetchData datatype="RPMData" sensornumber="SENSOR1" />}
            icon={<ChangeCircleIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>

        <Box gridColumn="span 2" gridRow="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <SensorBox
            title="Pressure"
            suffix=" Bar"
            sensor_1="Location A:"
            value_1={<FetchData datatype="PressureData" sensornumber="SENSOR1" />}
            sensor_2="Location B:"
            value_2={<FetchData datatype="PressureData" sensornumber="SENSOR2" />}
            sensor_3="Location C:"
            value_3={<FetchData datatype="PressureData" sensornumber="SENSOR3" />}
            icon={<LeakAddIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>

        <Box gridColumn="span 2" gridRow="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <SensorBox
            title="Force"
            suffix=" N"
            sensor_1="Radial"
            value_1={<FetchData datatype="ForceData" sensornumber="SENSOR1" />}
            sensor_2="Perpendicular"
            value_2={<FetchData datatype="ForceData" sensornumber="SENSOR2" />}
            icon={<CompressIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>

        <Box gridColumn="span 2" gridRow="span 2" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <SensorBox
            title="Power"
            suffix=" W"
            sensor_1="Freq. Conv:"
            value_1={<FetchData datatype="PowerData" sensornumber="SENSOR1" />}
            icon={<ElectricMeterIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]}>
          <ControlPanel />
        </Box>

        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]}>
          <SelectGraph selected="temperature" />
        </Box>
        {/* ROW 3 */}
        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]}>
          <SelectGraph selected="force" />
        </Box>
        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]}>
          <SelectGraph selected="vibration" />
        </Box>
        {/* ROW 4 */}
        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]}>
          <SelectGraph selected="sound" />
        </Box>
        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]}>
          <SelectGraph selected="pressure" />
        </Box>
        {/* ROW 5 */}
        <Box gridColumn="span 7" gridRow="span 3" backgroundColor={colors.primary[400]}>
          <SelectGraph selected="pressure" />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
