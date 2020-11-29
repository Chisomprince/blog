
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Height } from '@material-ui/icons';
const styles = theme => ({
    card: {
        maxWidth: 322,
        Height:400
    },
    media: {
        width: 322,
        height: 322
    },
    content:{
        margin:10

    }
});
const Jobcard = withStyles(styles)(({ classes }) => (
    <Card className={classes.card}>
        <CardHeader title="JOBS" />
        
        <CardContent className={classes.content}>
          
            <Typography>front end developer at amazon</Typography>
            <Typography>front end developer at microsoft</Typography>
            <Typography>front end developer at amazon</Typography>
            <Typography>front end developer at amazon</Typography>
            <Typography>front end developer at amazon</Typography>
            <Typography>front end developer at amazon</Typography>

            <Typography>learn more →</Typography>
        </CardContent>
    </Card>
));
export default Jobcard;
