import {
  Button,
  FormControl,
  Grid,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

import Page from "@/page";

const Login: Page = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 130px)"
    >
      <Grid xs={12} md={8} item container justifyContent="space-evenly">
        <Grid item xs={6} md={5}>
          <Image
            alt="login"
            src="/images/login.png"
            height={sm ? 206 : 406}
            width={sm ? 206 : 406}
          />
        </Grid>
        <Grid item p={{ xs: 3, md: 0 }} xs={12} md={4}>
          <Typography variant="h1">Welcome to ERPify</Typography>
          <Typography mt={2} mb={3} variant="body1">
            Streamline your business with ERPify
          </Typography>
          <FormControl fullWidth margin="normal">
            <TextField fullWidth size="small" type="email" label="Email" />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              fullWidth
              size="small"
              type="password"
              label="Password"
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Button variant="contained">Login</Button>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

Login.title = "Login";

export default Login;
