import React from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: `75%`,
        margin: 'auto',
        marginTop: '5%'
    },
});


function InfoCards({ data }) {
    // console.log(data.confirmed)
    const classes = useStyles();
    if (!data.confirmed)
        return "Loading..."

    return (

        <div className={classes.root}>
            <Grid container spacing={3} justify="center">
                <Grid className={'cards'} xs={12} md={3} item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Confirmed Cases
                        </Typography>
                        <Typography>
                            {data.confirmed.value}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid className={'cards'} xs={12} md={3} item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography>
                            {data.deaths.value}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid className={'cards'} xs={12} md={3} item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography>
                            {data.recovered.value}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default InfoCards;
