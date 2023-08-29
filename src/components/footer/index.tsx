import { Box, Divider, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Divider />
      <Toolbar>
        <Box flexGrow={1} textAlign="center">
          <Typography
            variant="caption"
            color={(theme) => theme.colors.blue_400}
          >
            2023 &#169; ERPify. All Rigth Reserved.
          </Typography>
        </Box>
      </Toolbar>
    </>
  );
};

export default Footer;
