import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Comment from '../Comment/Comment';
import fakeImage from '../../fakeImage/fakeImage';

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            //  margin: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        card: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 5,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            textAlign: 'center',
        },


    }),
);

const SinglePost = () => {
    const classes = useStyles();
    const { key } = useParams();
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${key}`)
            .then(res => res.json())
            .then(data => setPost(data))

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${key}`)
            .then(res => res.json())
            .then(data => {
                data.map((data,i)=>data.image = fakeImage[i])
                setComment(data)
            })
    }, [])       

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h2">
                                        Post No.  {post.id}
                                    </Typography>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary"  variant="h6" component="p">
                                        {post.body}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                <Card className={classes.card}>
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        User Comments
                                    </Typography>
                                </CardContent>
                        </Card>
                </Grid>
               {comment.map(singleComment=><Comment key={singleComment.id} singleComment={singleComment}></Comment>)} 
            </Grid>
        </div>
    );
};

export default SinglePost;