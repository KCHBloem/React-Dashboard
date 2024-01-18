import { Typography, Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FetchData from "../../components/FetchData";

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  return (
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
  );
};
export default Topbar;
