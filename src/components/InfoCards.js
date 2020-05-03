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
    const classes = useStyles();
    // if (searchInput === "Global")
    //     return null
    if (!data)
        return null
    if (data.TotalConfirmed === undefined)
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
                            {data.TotalConfirmed}
                        </Typography>

                    </CardContent>
                </Grid>

                <Grid className={'cards'} xs={12} md={3} item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography>
                            {data.TotalDeaths}
                        </Typography>
                        <Typography>
                            {data.TotalConfirmed === 0 ? 0 : (data.TotalDeaths / data.TotalConfirmed * 100).toFixed(2)}%
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid className={'cards'} xs={12} md={3} item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography >
                            {data.TotalRecovered}
                        </Typography>
                        <Typography>
                            {data.TotalConfirmed === 0 ? 0 : (data.TotalRecovered / data.TotalConfirmed * 100).toFixed(2)}%
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default InfoCards;
