import React from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
function InfoCards({ data }) {
    console.log(data.confirmed)
    if (!data.confirmed)
        return "Loading..."

    return (

        <div >
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography>
                            {data.confirmed.value}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography>
                            {data.recovered.value}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography>
                            {data.deaths.value}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default InfoCards;
