import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const PosterCard = (props) => {
  const classes = useStyles();
  const { title, image, year, imdbID } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: `/movie/${imdbID}`,
    });
  };

  return (
    <Card className={classes.root} onClick={handleClick} key={imdbID}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Poster"
          height="300"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Year : {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default PosterCard;
