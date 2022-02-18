import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const styles = {
  portfoliocontainer: {
    paddingTop: "30px",
    fontWight: "bold",
    display: "flex",
    justifyContent: "start",
    paddingBottom: "30px",
  },
};

const Portfolio = () => {
  return (
    <div className="about">
      <Container maxWidth="lg" style={styles.portfoliocontainer}>
        <Grid container item xs={24} sm={12} md={12}>
          <Typography variant="h4" color="#000">
            Portfolio
            <hr></hr>
          </Typography>
          
        </Grid>
      </Container>
    </div>
  );
};

export default Portfolio;
