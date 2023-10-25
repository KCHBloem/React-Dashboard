import {
  FormControl,
  Select,
  InputLabel,
  useTheme,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { tokens } from "../theme";
import React from "react";
import TempLineChart from "./TempLineChart";
import ForceLineChart from "./ForceLineChart";
import VibrationLineChart from "./VibrationLineChart";
import RpmLineChart from "./RpmLineChart";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography variant="h3" fontWeight="600" color={colors.grey[100]}>
        {title}
      </Typography>
      <Typography
        variant="h5"
        fontWeight="bold"
        color={colors.greenAccent[500]}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

const SelectGraph = ({ selected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedGraph, selectGraph] = React.useState(selected);

  const handleChange = (event) => {
    selectGraph(event.target.value);
  };
  return (
    <Box>
      <Box
        mt="25px"
        p="0 30px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        {selectedGraph === "temperature" && (
          <Header
            title="Temperature Graph"
            subtitle="Temperature plotted over time"
          />
        )}
        {selectedGraph === "force" && (
          <Header
            title="Force Graph"
            subtitle="Applied force plotted over time"
          />
        )}
        {selectedGraph === "vibration" && (
          <Header
            title="Vibration FFT"
            subtitle="Fast Fourier Transform of the vibrations"
          />
        )}
        {selectedGraph === "rpm" && (
          <Header
            title="RPM Graph"
            subtitle="Rotational Speed of the axle in RPM"
          />
        )}

        <Box>
          <FormControl
            fullWidth
            sx={{
              minWidth: 150,
            }}
          >
            <InputLabel
              id="graphLabel"
              sx={{
                "&.MuiInputLabel-root": {
                  color: colors.grey[100],
                },
              }}
            >
              Select Graph
            </InputLabel>
            <Select
              sx={{
                "&.MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.grey[400],
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.greenAccent[400],
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.greenAccent[400],
                },
              }}
              labelId="graphLabel"
              id="demo-simple-select"
              value={selectedGraph}
              label="Select Graph"
              onChange={handleChange}
            >
              <MenuItem value="temperature">Temperature</MenuItem>
              <MenuItem value="vibration">Vibration</MenuItem>
              <MenuItem value="rpm">RPM</MenuItem>
              <MenuItem value="sound">Sound</MenuItem>
              <MenuItem value="pressure">Pressure</MenuItem>
              <MenuItem value="force">Force</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box height="250px" m="-20px 0 0 0">
        {selectedGraph === "temperature" && <TempLineChart />}
        {selectedGraph === "force" && <ForceLineChart />}
        {selectedGraph === "vibration" && <VibrationLineChart />}
        {selectedGraph === "rpm" && <RpmLineChart />}
      </Box>
    </Box>
  );
};

export default SelectGraph;
