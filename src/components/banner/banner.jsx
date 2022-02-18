import Box from "@mui/material/Box";
import images from "../../images/3.JPG";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const styles = {
  backContainer: {
    backgroundImage: `url(${images})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundSize: "80% 100%",
  },
};

const Banner = () => {
  return (
    <div className="banner">
      <Box className="banner-in" style={styles.backContainer}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Typography variant="h3" color="#000" component="div">
              Hi,
            </Typography>
            <Typography variant="h2" color="#000" component="div">
              I'm Shadman Wasif
            </Typography>
            <Typography variant="h2" color="#000" component="div">
              Javascript Developer
            </Typography>
            </Grid>
        </Grid>

      </Box>
    </div>
  );
};

export default Banner;
