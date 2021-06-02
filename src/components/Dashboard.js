import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { GraphBar, GraphLine, GraphPie } from "../graph";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    flexGrow: 1,
  },
  containerCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  bodyCard: {
    height: 200,
    marginTop: 30,
  },
}));

export function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={4}>
          <Card className={classes.containerCard}>
            <CardHeader title="État général" className={classes.title} />
            <CardContent className={classes.bodyCard}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardHeader title="Annonce" className={classes.title} />
            <CardContent className={classes.bodyCard}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="Santé de l'application"
              className={classes.title}
            />

            <CardContent className={classes.bodyCard}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <Title title="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Line Chart
              </Typography>
            </CardContent>
            <GraphLine />
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <Title title="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Pie Chart
              </Typography>
              <GraphPie />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Title title="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Bar Chart
              </Typography>

              <GraphBar />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
