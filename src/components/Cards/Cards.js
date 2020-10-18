import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import './Cards.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className='cards-container'>
            <Grid container spacing={4} justify="center">
                <Grid item xs={12} md={3} component={Card} className='cards-card cards-infected'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={confirmed.value} duration={2.75} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of active cases of COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className='cards-card cards-recovered'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={recovered.value} duration={2.75} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of recoveries from COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className='cards-card cards-deaths'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={deaths.value} duration={2.75} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of deaths caused by COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};
export default Cards;