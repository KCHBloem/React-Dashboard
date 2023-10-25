import { Typography, Box, useTheme, IconButton } from "@mui/material";
import { tokens } from "../theme";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import React from "react";

const ControlPanel = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [clicked, setClicked] = React.useState(true);

  const onButtonClick = () => {
    setClicked(!clicked);
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
        <Box>
          <Typography variant="h3" fontWeight="600" color={colors.grey[100]}>
            Control Panel
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            color={colors.greenAccent[500]}
          >
            Change forces applied to the bearing
          </Typography>
        </Box>
      </Box>
      <Box
        mt="25px"
        p="0 30px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton
          onClick={onButtonClick}
          sx={{
            transform: "scale(1.8)",
            color: colors.grey[100],
            "&:hover": {
              color: colors.grey[100],
              backgroundColor: clicked
                ? colors.redAccent[600]
                : colors.greenColor[600],
            },
            backgroundColor: clicked
              ? colors.redAccent[500]
              : colors.greenColor[500],
          }}
        >
          <PowerSettingsNewIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ControlPanel;
