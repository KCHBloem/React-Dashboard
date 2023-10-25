import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MicIcon from "@mui/icons-material/Mic";
import WaterIcon from "@mui/icons-material/Water";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CompressIcon from "@mui/icons-material/Compress";
import LeakAddIcon from "@mui/icons-material/LeakAdd";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import CallToActionIcon from "@mui/icons-material/CallToAction";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Lager Testbank
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Wentelteefjes
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Console"
              to="/console"
              icon={<CallToActionIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/settings"
              icon={<DisplaySettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Sensors
            </Typography>
            <Item
              title="Temperature"
              to="/temp"
              icon={<DeviceThermostatIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Vibration"
              to="/vibration"
              icon={<WaterIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="RPM"
              to="/rpm"
              icon={<ChangeCircleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sound"
              to="/sound"
              icon={<MicIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pressure"
              to="/pressure"
              icon={<LeakAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Force"
              to="/force"
              icon={<CompressIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Power"
              to="/power"
              icon={<ElectricMeterIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
