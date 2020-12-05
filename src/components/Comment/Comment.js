import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            margin: 'auto',
            maxWidth: 700,
        },
        image: {
            width: 150,
            height: 150,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }),
);


const Comment = (props) => {
    const {name, email, body, image} = props.singleComment
    console.log(image)
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={image} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {name}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {email}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {body}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </Paper>
        </Grid>
    );
};

export default Comment;