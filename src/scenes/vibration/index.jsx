import { Box } from "@mui/material";
import Header from "../../components/Header";
import VibrationLineChart from "../../components/VibrationLineChart";
import Input from "@mui/material/Input";
import React from "react";

const Vibration = () => {
  return (
    <React.Fragment>
      <Box m="20px">
        <Header
          title="Vibration FFT"
          subtitle="Fast Fourier Transform of vibrations"
        />
        <Box height="50vh">
          <VibrationLineChart />
        </Box>
      </Box>
      <Box m="20px">
        <Header title="Latest Data" subtitle="Log of most recent data" />
        <Box height="25vh">
          <Input></Input>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Vibration;
