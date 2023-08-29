import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { CheckBoxOutlined } from "@mui/icons-material";

import {
  HOME_SECTION_2,
  HOME_SECTION_4,
  HOME_SECTION_5,
  HOME_SECTION_6,
  HOME_SUBTITLE,
  HOME_SUBTITLE_3,
  HOME_SUBTITLE_4,
  HOME_SUBTITLE_5,
  HOME_SUBTITLE_7,
  HOME_TITLE,
  HOME_TITLE_2,
  HOME_TITLE_3,
  HOME_TITLE_4,
  HOME_TITLE_5,
  HOME_TITLE_6,
  HOME_TITLE_7,
} from "@/components/home";
import { theme } from "@/styles";
import Page from "@/page";
import Image from "next/image";

const Home: Page = () => {
  return (
    <>
      <Grid
        container
        textAlign="center"
        justifyContent="center"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url("/images/home_banner_background.png")`,
        }}
      >
        <Grid item xs={11} mt={5}>
          <Typography mt={5} variant="h1">
            {HOME_TITLE}
          </Typography>
          <Typography my={2} variant="body1">
            {HOME_SUBTITLE}
          </Typography>
        </Grid>
        <Grid item xs={11}>
          <Button
            size="large"
            color="primary"
            variant="contained"
            sx={{ mt: 5 }}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={11} mb={3}>
          <Image alt="about" src="/images/about.png" height={406} width={406} />
        </Grid>
      </Grid>
      <Grid container textAlign="center" justifyContent="center">
        <Grid item xs={11}>
          <Typography mb={5} variant="h2">
            {HOME_TITLE_2}
          </Typography>
        </Grid>
        {HOME_SECTION_2.map((item, index) => (
          <Grid key={index} item p={1} xs={11} md={3}>
            <Typography variant="h2" fontWeight={500}>
              {item.title}
            </Typography>
            <Typography mt={3} variant="body1">
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid
        id="about_section"
        mb={5}
        container
        textAlign="center"
        justifyContent="center"
      >
        <Grid item xs={11} mt={5}>
          <Typography mt={5} variant="h1">
            {HOME_TITLE_3}
          </Typography>
          <Typography my={2} variant="body1">
            {HOME_SUBTITLE_3}
          </Typography>
        </Grid>
      </Grid>
      <Grid px={5} container textAlign="center" justifyContent="center">
        <Grid item xs={11}>
          <Typography mt={5} variant="h1">
            {HOME_TITLE_4}
          </Typography>
          <Typography my={2} variant="body1">
            {HOME_SUBTITLE_4}
          </Typography>
        </Grid>
        {HOME_SECTION_4.map((item, index) => (
          <Grid key={index} item p={3} xs={12} md={3}>
            <Card elevation={0}>
              <CardActionArea>
                <CardMedia component="img" image={item.src} alt={item.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.position}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid
        id="pricing_section"
        pt={5}
        container
        justifyContent="center"
        textAlign="center"
      >
        <Grid item xs={6} md={2}>
          <Typography mt={5} variant="h1">
            {HOME_TITLE_5}
          </Typography>
          <Typography my={2} variant="body1">
            {HOME_SUBTITLE_5}
          </Typography>
        </Grid>
      </Grid>
      <Grid pt={5} px={{ xs: 3, md: 5 }} container justifyContent="center">
        {HOME_SECTION_5.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={4}
            lg={3}
            sx={{
              py: { xs: 0, md: item.isMain ? 0 : 3 },
              px: { xs: item.isMain ? 0 : 3, md: 0 },
            }}
          >
            <Card
              elevation={0}
              variant={!item.isMain ? "elevation" : "outlined"}
              sx={{
                display: "flex",
                minWidth: "100%",
                minHeight: "100%",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundImage: !item.isMain
                  ? `linear-gradient(to right, ${theme.colors.blue_200} , ${theme.colors.blue_100})`
                  : "",
              }}
            >
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  {item.isMain && (
                    <Chip size="small" label={item.tag} variant="outlined" />
                  )}
                </Grid>
                <Typography my={3} variant="h1">
                  $ {item.price}
                  <Typography component="span">/month</Typography>
                </Typography>
                <Typography variant="body2">{item.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  sx={{ mx: 3, my: 5 }}
                  variant={"contained"}
                  color={item.isMain ? "primary" : "secondary"}
                >
                  Get Started with {item.name}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid mb={2} mt={5} px={5} container justifyContent="center">
        <Grid item xs={12} lg={9}>
          <Typography variant="h2">{HOME_TITLE_6}</Typography>
        </Grid>
      </Grid>
      <Grid mb={5} px={5} container justifyContent="center">
        {HOME_SECTION_6.map((item, index) => (
          <Grid key={index} item xs={12} md={4} lg={3}>
            <Typography p={3} variant="h2" fontWeight={500}>
              {item.name}
            </Typography>
            <Divider />
            <List>
              {item.feature.map((feat, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckBoxOutlined color="primary" />
                  </ListItemIcon>
                  <ListItemText>{feat}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
      <Grid id="contact_section" p={5} mb={5} container justifyContent="center">
        <Grid
          item
          xs={12}
          lg={10}
          container
          justifyContent="center"
          sx={{
            borderRadius: 4,
            backgroundImage: `linear-gradient(to right, ${theme.colors.blue_200} , ${theme.colors.blue_100})`,
          }}
        >
          <Grid item py={5} px={3} xs={12} lg={4}>
            <Typography variant="h1">{HOME_TITLE_7}</Typography>
            <Typography my={3} variant="body1">
              {HOME_SUBTITLE_7}
            </Typography>
            <Button size="large" variant="contained" color="secondary">
              Sign up now
            </Button>
          </Grid>
          <Grid item xs={12} lg={6} textAlign="center">
            <Image
              alt="pricing"
              src="/images/pricing.png"
              height={306}
              width={306}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

Home.title = "Home";

export default Home;
