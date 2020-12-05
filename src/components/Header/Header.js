import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) =>
    createStyles({
        heading:{
           padding: theme.spacing(4),
           textAlign: 'center',
           color: theme.palette.text.secondary,
           background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
           border: 0,
           borderRadius: 3,
           boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
           color: 'white'
        }
    }),
);

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Paper className={classes.heading}>
                        <Typography variant="h4" component="h2">
                                Social Buddy 
                        </Typography>
                    </Paper>
                </Grid>                
            </Grid>
        </div>
    );
};

export default Header;