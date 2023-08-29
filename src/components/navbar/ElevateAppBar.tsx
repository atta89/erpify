import { MouseEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Zoom,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import { Logo } from "../svg";
import { MENU } from "./constants";
import { ElevationScroll } from "../navbar";

const ElevateAppBar = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (router.pathname === "/") setId("home_section");
  }, [router.pathname]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMenu = (to: string) => {
    handleClickScroll(to);
  };

  const handleClickScroll = (id: string) => {
    router.push("/").then(() => {
      setId(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  const handleClickLogin = () => {
    setId("");
    router.push("/login");
  };

  return (
    <>
      <ElevationScroll>
        <AppBar color="inherit">
          <Toolbar color="white">
            <Logo />
            <Box flexGrow={1} />
            <Box display={{ xs: "none", md: "flex" }} gap={4}>
              {MENU.map((item) => (
                <Box key={item.id}>
                  <Button
                    variant="text"
                    onClick={() => handleClickScroll(item.to)}
                    sx={(theme) => ({
                      fontWeight:
                        id === item.to
                          ? theme.typography.fontWeightMedium
                          : theme.typography.fontWeightLight,
                    })}
                  >
                    {item.label}
                  </Button>
                  <Zoom timeout={600} in={id === item.to}>
                    <Divider
                      sx={(theme) => ({
                        borderBottom: `2px solid ${theme.colors.blue_400}`,
                      })}
                    />
                  </Zoom>
                </Box>
              ))}
              <Button variant="outlined" onClick={handleClickLogin}>
                Login
              </Button>
            </Box>
            <Box display={{ xs: "block", md: "none" }}>
              <IconButton onClick={handleClick}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Menu
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              PaperProps={{ sx: { width: "180px" } }}
              MenuListProps={{ disablePadding: true }}
            >
              {MENU.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={() => handleClickMenu(item.to)}
                  selected={id === item.to}
                  divider={id === item.to}
                  sx={(theme) => ({
                    color: theme.colors.blue_400,
                    fontWeight:
                      id === item.to
                        ? theme.typography.fontWeightMedium
                        : theme.typography.fontWeightLight,
                  })}
                >
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem>
                <Button fullWidth variant="outlined" onClick={handleClickLogin}>
                  Login
                </Button>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};

export default ElevateAppBar;
