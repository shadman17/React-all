import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import images from "../../images/1.jpg";

const styles = {
  aboutcontainer: {
    paddingTop: "30px",
    fontWight: "bold",
    display: "flex",
    justifyContent: "start",
    paddingBottom: "30px",
  },
  gridabout: {
    padding: "10px",
  },
  gridimage: {
    padding: "10px",
    border: "5 px solid black",
    backgroundImage: `url(${images})`,
    height: "50vh",
    backgroundSize: "100% 100%",
  },
  gridtext: {
    paddingLeft: "10px",
  },
};

const About = () => {
  return (
    <div className="about">
      <Container maxWidth="lg" style={styles.aboutcontainer}>
        <Grid container item xs={24} sm={12} md={12}>
          <Typography variant="h4" color="#000">
            About
            <hr></hr>
          </Typography>
          <Grid style={styles.gridabout} item xs={24} sm={12} md={12}>
            <Typography variant="p" color="#000">
              Hi, I am Shadman Wasif. I have completed my Bachelors degree in
              Computer Science and Engineering from Military Institute of
              Science and Technology, Dhaka, Bangladesh. I like to build things.
            </Typography>
          </Grid>
          <Grid style={styles.gridimage} item xs={24} sm={12} md={4}></Grid>
          <Grid container style={styles.gridtext} item xs={24} sm={12} md={8}>
            <Typography variant="h5" color="#000">
              JS & Python Developer
              <hr></hr>
            </Typography>
            <Typography align="justify" variant="p" color="#000">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, nulla accusamus porro magnam aut rerum aperiam
              perferendis nisi quia doloribus, nesciunt consequuntur. Neque
              ipsa, laudantium omnis, error praesentium dolor, reiciendis ex
              culpa odit libero ipsum? Necessitatibus rerum nulla corporis eaque
              omnis, natus consequatur fugiat beatae quo, quia laborum facere
              optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, nulla accusamus porro magnam aut rerum aperiam
              perferendis nisi quia doloribus, nesciunt consequuntur. Neque
              ipsa, laudantium omnis, error praesentium dolor, reiciendis ex
              culpa odit libero ipsum? Necessitatibus rerum nulla corporis eaque
              omnis, natus consequatur fugiat beatae quo, quia laborum facere
              optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, nulla accusamus porro magnam aut rerum aperiam
              perferendis nisi quia doloribus, nesciunt consequuntur. Neque
              ipsa, laudantium omnis, error praesentium dolor, reiciendis ex
              culpa odit libero ipsum? Necessitatibus rerum nulla corporis eaque
              omnis, natus consequatur fugiat beatae quo, quia laborum facere
              optio. Necessitatibus rerum nulla corporis eaque
              omnis, natus consequatur fugiat beatae quo, quia laborum facere
              optio.
            </Typography>
            <Typography variant="h6" color="#000">Skills : Html, CSS, Javascript, React  </Typography>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
