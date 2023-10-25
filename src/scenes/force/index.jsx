import { Box } from "@mui/material";
import Header from "../../components/Header";
import ForceLineChart from "../../components/ForceLineChart";
import Input from "@mui/material/Input";
import React from "react";

const Force = () => {
  return (
    <React.Fragment>
      <Box m="20px">
        <Header
          title="Force Graph"
          subtitle="Applied force plotted over time"
        />
        <Box height="50vh">
          <ForceLineChart />
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

export default Force;
