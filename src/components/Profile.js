import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 360,
  },
});

export default function Profile(props) {
    const classes = useStyles();

    return (
      <>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.img}
              title="profile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mohamed Idris M
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Web Developer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className="icons">
              <a href="mailto:irmhdeveloper@gmail.com">
                <MailIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/irmh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </CardActions>
        </Card>
      </>
    );
}
