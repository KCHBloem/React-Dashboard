import { Box } from "@mui/material";
import Header from "../../components/Header";
import TempLineChart from "../../components/TempLineChart";
import Input from "@mui/material/Input";
import React from "react";

const Temp = () => {
  return (
    <React.Fragment>
      <Box m="20px">
        <Header
          title="Temperature Graph"
          subtitle="Temperature plotted over time"
        />
        <Box height="50vh">
          <TempLineChart />
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

export default Temp;
