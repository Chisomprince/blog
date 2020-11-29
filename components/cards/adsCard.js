import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
    card: {
        maxWidth: 322,
        marginTop:10
    },
    media: {
        width: 322,
        height: 322
    }
});
const Adscard = withStyles(styles)(({ classes }) => (
    <Card className={classes.card}>
        
        <CardMedia
            className={classes.media}
            image="crush.jpg"
            title="Grapefruit"
        />
        <CardHeader title="intro to html and css" subheader="jon docket    $45" />
        {/* <CardContent>
            <Typography>Mmmm. Grapefruit.</Typography>
        </CardContent> */}
    </Card>
));
export default Adscard;