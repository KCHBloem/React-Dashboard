import { Typography, Box, useTheme, IconButton, Button } from "@mui/material";
import { tokens } from "../theme";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CompressIcon from "@mui/icons-material/Compress";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import FetchData from "./FetchData";
import React from "react";
import axios from "axios";

const ControlPanel = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [Motorclicked, setMotorClicked] = React.useState(true);

  const [radialForce, setRadialForce] = React.useState(0);
  const [PerpForce, setPerpForce] = React.useState(0);
  const [RPM, setRPM] = React.useState(0);

  const [valve_1, setValve_1] = React.useState(0);
  const [valve_2, setValve_2] = React.useState(0);
  const [valve_3, setValve_3] = React.useState(0);
  const [valve_4, setValve_4] = React.useState(0);

  const [valveMotorClicked, setValveMotorClicked] = React.useState(0);

  const onButtonClick = async (button, value) => {
    try {
      switch (button) {
        case "motor":
          setMotorClicked(value);
          console.log("Updated Motor State");
          await axios.post("http://localhost:3001/send-data", {
            eventType: "update-motor",
            motorState: Motorclicked,
          });
          break;
        case "RPM":
          setRPM(value);
          console.log("Updated Motor Speed");
          await axios.post("http://localhost:3001/send-data", {
            eventType: "update-motor-speed",
            RPM: value,
          });
          break;
        case "Radial":
          setRadialForce(value);
          console.log("Updated Radial Force");
          await axios.post("http://localhost:3001/send-data", {
            eventType: "update-radial-force",
            Force: value,
          });
          break;
        case "Perp":
          setPerpForce(value);
          console.log("Updated Perpendicular Force");
          await axios.post("http://localhost:3001/send-data", {
            eventType: "update-perp-force",
            Force: value,
          });
          break;
        case "Valve1":
          setValve_1(value);
          if (value && valve_2) {
            try {
              setValve_2(0);

              await axios.post("http://localhost:3001/send-data", {
                eventType: "update-valve_2_state",
                State: 0,
              });
              console.log("Updated Valve 2 State");
            } catch (error) {
              console.error("Error updating valve 2 state:", error);
            }
          }

          await axios.post("http://localhost:3001/send-data", {
            eventType: "update-valve_1_state",
            State: value,
          });
          console.log("Updated Valve 1 State");
          break;

        case "Valve2":
          setValve_2(value);
          if (value && valve_1) {
            try {
              setValve_1(0);

              await axios.post("http://localhost:3001/send-data", {
                eventType: "update-valve_1_state",
                State: 0,
              });
              console.log("Updated Valve 1 State");
            } catch (error) {
              console.error("Error updating valve 1 state:", error);
            }
          }

          await axios.post("http://localhost:3001/send-data", {
            eventType: "update-valve_2_state",
            State: value,
          });
          console.log("Updated Valve 2 State");
          break;
        case "Valve3":
          setValve_3(value);
          if (value && valve_4) {
            try {
              setValve_4(0);

              await axios.post("http://localhost:3001/send-data", {
                eventType: "update-valve_4_state",
                State: 0,
              });
              console.log("Updated Valve 4 State");
            } catch (error) {
              console.error("Error updating valve 4 state:", error);
            }
          }

          await axios.post("http://localhost:3001/send-data", {
            eventType: "update-valve_3_state",
            State: value,
          });
          console.log("Updated Valve 3 State");
          break;
        case "Valve4":
          setValve_4(value);
          if (value && valve_3) {
            try {
              setValve_3(0);

              await axios.post("http://localhost:3001/send-data", {
                eventType: "update-valve_3_state",
                State: 0,
              });
              console.log("Updated Valve 3 State");
            } catch (error) {
              console.error("Error updating valve 3 state:", error);
            }
          }

          await axios.post("http://localhost:3001/send-data", {
            eventType: "update-valve_4_state",
            State: value,
          });
          console.log("Updated Valve 4 State");
          break;
        case "valvemotor":
          setValveMotorClicked(value);
          console.log("Updated Valve Motor state");
          await axios.post("http://localhost:3001/send-data", {
            eventType: "update-valve_motor",
            State: value,
          });
          break;
        default:
          console.log("Unknown button");
      }
    } catch (error) {
      console.error("Error updating button state:", error);
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
      </Box>
      <Box display="flex">
        <Box display="flex" flexDirection="column" border="2px solid grey" padding="10px" borderRadius="10px" m="10px" alignItems="center">
          <Box display="flex" justifyContent="center">
            <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
              Axle RPM
            </Typography>
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="column">
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => RPM <= 1900 && onButtonClick("RPM", RPM + 100)}
              >
                + 100 RPM
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => RPM <= 1990 && onButtonClick("RPM", RPM + 10)}
              >
                + 10 RPM
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => RPM <= 1999 && onButtonClick("RPM", RPM + 1)}
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
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => RPM >= 1 && onButtonClick("RPM", RPM - 1)}
              >
                - 1 RPM
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => RPM >= 10 && onButtonClick("RPM", RPM - 10)}
              >
                - 10 RPM
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => RPM >= 100 && onButtonClick("RPM", RPM - 100)}
              >
                - 100 RPM
              </Button>
            </Box>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" border="2px solid grey" padding="10px" borderRadius="10px" m="10px" alignItems="center">
          <Box display="flex" justifyContent="center">
            <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
              Radial Force
            </Typography>
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="column">
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => radialForce <= 1900 && onButtonClick("Radial", radialForce + 100)}
              >
                + 100 N
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => radialForce <= 1990 && onButtonClick("Radial", radialForce + 10)}
              >
                + 10 N
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => radialForce <= 1999 && onButtonClick("Radial", radialForce + 1)}
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
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => radialForce >= 1 && onButtonClick("Radial", radialForce - 1)}
              >
                - 1 N
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => radialForce >= 10 && onButtonClick("Radial", radialForce - 10)}
              >
                - 10 N
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => radialForce >= 100 && onButtonClick("Radial", radialForce - 100)}
              >
                - 100 N
              </Button>
            </Box>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" border="2px solid grey" padding="10px" borderRadius="10px" m="10px" alignItems="center">
          <Box display="flex" justifyContent="center">
            <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
              Axial Force
            </Typography>
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="column">
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => PerpForce <= 1900 && onButtonClick("Perp", PerpForce + 100)}
              >
                + 100 N
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => PerpForce <= 1990 && onButtonClick("Perp", PerpForce + 10)}
              >
                + 10 N
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.greenColor[600],
                  },
                  backgroundColor: colors.greenColor[500],
                }}
                onClick={() => PerpForce <= 1999 && onButtonClick("Perp", PerpForce + 1)}
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
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => PerpForce >= 1 && onButtonClick("Perp", PerpForce - 1)}
              >
                - 1 N
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => PerpForce >= 10 && onButtonClick("Perp", PerpForce - 10)}
              >
                - 10 N
              </Button>
              <Button
                variant="contained"
                sx={{
                  margin: "3px",
                  "&:hover": {
                    backgroundColor: colors.redAccent[600],
                  },
                  backgroundColor: colors.redAccent[500],
                }}
                onClick={() => PerpForce >= 100 && onButtonClick("Perp", PerpForce - 100)}
              >
                - 100 N
              </Button>
            </Box>
          </Box>
        </Box>

        <Box display="flex" marginLeft="25px" flexDirection="column" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" justifyContent="space-between" border="2px solid grey" padding="10px" borderRadius="10px" m="10px">
            <Box display="flex" flexDirection="column">
              <IconButton
                onClick={() => onButtonClick("Valve1", !valve_1)}
                sx={{
                  width: "60px",
                  height: "60px",
                  margin: "0 50px 10px 0",
                  color: colors.grey[100],
                  "&:hover": {
                    color: colors.grey[100],
                    backgroundColor: valve_1 ? colors.greenColor[600] : colors.redAccent[600],
                  },
                  backgroundColor: valve_1 ? colors.greenColor[500] : colors.redAccent[500],
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: "50px" }} />
              </IconButton>
              <IconButton
                onClick={() => onButtonClick("Valve2", !valve_2)}
                sx={{
                  width: "60px",
                  height: "60px",
                  margin: "10px 50px 0 0",
                  color: colors.grey[100],
                  "&:hover": {
                    color: colors.grey[100],
                    backgroundColor: valve_2 ? colors.greenColor[600] : colors.redAccent[600],
                  },
                  backgroundColor: valve_2 ? colors.greenColor[500] : colors.redAccent[500],
                }}
              >
                <ArrowBackIcon sx={{ fontSize: "50px" }} />
              </IconButton>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
              <IconButton
                onClick={() => onButtonClick("valvemotor", !valveMotorClicked)}
                sx={{
                  transform: "scale(1.8)",
                  margin: "0 0 20px 0",
                  color: colors.grey[100],
                  "&:hover": {
                    color: colors.grey[100],
                    backgroundColor: valveMotorClicked ? colors.greenColor[600] : colors.redAccent[600],
                  },
                  backgroundColor: valveMotorClicked ? colors.greenColor[500] : colors.redAccent[500],
                }}
              >
                <CompressIcon />
              </IconButton>
            </Box>

            <Box display="flex" flexDirection="column">
              <IconButton
                onClick={() => onButtonClick("Valve3", !valve_3)}
                sx={{
                  width: "60px",
                  height: "60px",
                  margin: "0 0 10px 50px",
                  color: colors.grey[100],
                  "&:hover": {
                    color: colors.grey[100],
                    backgroundColor: valve_3 ? colors.greenColor[600] : colors.redAccent[600],
                  },
                  backgroundColor: valve_3 ? colors.greenColor[500] : colors.redAccent[500],
                }}
              >
                <ArrowUpwardIcon sx={{ fontSize: "50px" }} />
              </IconButton>
              <IconButton
                onClick={() => onButtonClick("Valve4", !valve_4)}
                sx={{
                  width: "60px",
                  height: "60px",
                  margin: "10px 0 0 50px",
                  color: colors.grey[100],
                  "&:hover": {
                    color: colors.grey[100],
                    backgroundColor: valve_4 ? colors.greenColor[600] : colors.redAccent[600],
                  },
                  backgroundColor: valve_4 ? colors.greenColor[500] : colors.redAccent[500],
                }}
              >
                <ArrowDownwardIcon sx={{ fontSize: "50px" }} />
              </IconButton>
            </Box>
          </Box>
          <Box display="flex " justifyContent="space-between" alignItems="center" border="2px solid grey" padding="42px" borderRadius="10px" m="10px">
            <IconButton
              onClick={() => onButtonClick("motor", !Motorclicked)}
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
            <Box display="flex" flexDirection="row" paddingLeft="30px">
              <Typography variant="h3" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                {<FetchData datatype="rpmdata" sensornumber="SENSOR1" />} RPM
              </Typography>
              <ChangeCircleIcon sx={{ color: colors.grey[100], fontSize: "26px" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ControlPanel;
