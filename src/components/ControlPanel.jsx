import { Typography, Box, useTheme, IconButton, Button } from "@mui/material";
import { tokens } from "../theme";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import React from "react";
import FetchData from "./FetchData";
import axios from "axios";

const ControlPanel = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [Motorclicked, setMotorClicked] = React.useState(true);
  const [notsafe, setNotSafe] = React.useState(false);

  const [radialForce, setRadialForce] = React.useState(0);
  const [PerpForce, setPerpForce] = React.useState(0);
  const [RPM, setRPM] = React.useState(0);

  const onMotorButtonClick = async () => {
    try {
      // Update local state
      setMotorClicked((prev) => !prev);

      // Send a request to update the server
      await axios.post("http://localhost:3001/send-data", {
        eventType: "update-motor",
        motorState: Motorclicked,
      });
      console.log("Updated Motor State");
    } catch (error) {
      console.error("Error updating motor state:", error);
    }
  };

  const onAxleRPMUpdate = async (newRPM) => {
    try {
      setRPM(newRPM);

      await axios.post("http://localhost:3001/send-data", {
        eventType: "update-motor-speed",
        RPM: newRPM,
      });
      console.log("Updated Motor Speed");
    } catch (error) {
      console.error("Error updating motor speed:", error);
    }
  };

  const onRadialUpdate = async (newRadial) => {
    try {
      setRadialForce(newRadial);

      await axios.post("http://localhost:3001/send-data", {
        eventType: "update-radial-force",
        Force: newRadial,
      });
      console.log("Updated Radial Force");
    } catch (error) {
      console.error("Error updating radial force:", error);
    }
  };

  const onPerpenUpdate = async (newPerpen) => {
    try {
      setPerpForce(newPerpen);

      await axios.post("http://localhost:3001/send-data", {
        eventType: "update-perp-force",
        Force: newPerpen,
      });
      console.log("Updated Perpendicular Force");
    } catch (error) {
      console.error("Error updating perpendicular force:", error);
    }
  };

  return (
    <Box>
      <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between">
        <Box>
          <Typography variant="h2" fontWeight="600" color={colors.grey[100]}>
            Control Panel
          </Typography>
        </Box>
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
      </Box>
      <Box display="flex">
        <Box border="2px solid grey" padding="10px" borderRadius="10px" m="10px">
          <Box display="flex" justifyContent="center">
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Axle RPM
            </Typography>
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="column">
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => RPM <= 1900 && onAxleRPMUpdate(RPM + 100)}
              >
                + 100 RPM
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => RPM <= 1990 && onAxleRPMUpdate(RPM + 10)}
              >
                + 10 RPM
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => RPM <= 1999 && onAxleRPMUpdate(RPM + 1)}
              >
                + 1 RPM
              </Button>
              <Button
                disabled={1}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&.Mui-disabled": {
                    backgroundColor: colors.grey[200],
                  },
                }}
              >
                <Typography variant="h5" fontWeight="600" color={colors.grey[700]}>
                  {RPM} RPM
                </Typography>
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => RPM >= 1 && onAxleRPMUpdate(RPM - 1)}
              >
                - 1 RPM
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => RPM >= 10 && onAxleRPMUpdate(RPM - 10)}
              >
                - 10 RPM
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => RPM >= 100 && onAxleRPMUpdate(RPM - 100)}
              >
                - 100 RPM
              </Button>
            </Box>
            <Box></Box>
          </Box>
        </Box>

        <Box border="2px solid grey" padding="10px" borderRadius="10px" m="10px">
          <Box display="flex" justifyContent="center">
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Radial Force
            </Typography>
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="column">
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => radialForce <= 1900 && onRadialUpdate(radialForce + 100)}
              >
                + 100 N
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => radialForce <= 1990 && onRadialUpdate(radialForce + 10)}
              >
                + 10 N
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => radialForce <= 1999 && onRadialUpdate(radialForce + 1)}
              >
                + 1 N
              </Button>
              <Button
                disabled={1}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&.Mui-disabled": {
                    backgroundColor: colors.grey[200],
                  },
                }}
              >
                <Typography variant="h5" fontWeight="600" color={colors.grey[700]}>
                  {radialForce} N
                </Typography>
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => radialForce >= 1 && onRadialUpdate(radialForce - 1)}
              >
                - 1 N
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => radialForce >= 10 && onRadialUpdate(radialForce - 10)}
              >
                - 10 N
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => radialForce >= 100 && onRadialUpdate(radialForce - 100)}
              >
                - 100 N
              </Button>
            </Box>
            <Box></Box>
          </Box>
        </Box>

        <Box border="2px solid grey" padding="10px" borderRadius="10px" m="10px">
          <Box display="flex" justifyContent="center">
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Perpe. Force
            </Typography>
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="column">
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => PerpForce <= 1900 && onPerpenUpdate(PerpForce + 100)}
              >
                + 100 N
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => PerpForce <= 1990 && onPerpenUpdate(PerpForce + 10)}
              >
                + 10 N
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => PerpForce <= 1999 && onPerpenUpdate(PerpForce + 1)}
              >
                + 1 N
              </Button>
              <Button
                disabled={1}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&.Mui-disabled": {
                    backgroundColor: colors.grey[200],
                  },
                }}
              >
                <Typography variant="h5" fontWeight="600" color={colors.grey[700]}>
                  {PerpForce} N
                </Typography>
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => PerpForce >= 1 && onPerpenUpdate(PerpForce - 1)}
              >
                - 1 N
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => PerpForce >= 10 && onPerpenUpdate(PerpForce - 10)}
              >
                - 10 N
              </Button>
              <Button
                disabled={notsafe}
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => PerpForce >= 100 && onPerpenUpdate(PerpForce - 100)}
              >
                - 100 N
              </Button>
            </Box>
            <Box></Box>
          </Box>
        </Box>

        <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
          <IconButton
            disabled={notsafe}
            onClick={onMotorButtonClick}
            sx={{
              transform: "scale(1.8)",
              color: colors.grey[100],
              "&:hover": {
                color: colors.grey[100],
                backgroundColor: Motorclicked ? colors.redAccent[600] : colors.greenColor[600],
              },
              backgroundColor: Motorclicked ? colors.redAccent[500] : colors.greenColor[500],
            }}
          >
            <PowerSettingsNewIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ControlPanel;
