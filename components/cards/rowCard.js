import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const styles = {
    card: {
        maxWidth: 322,
        margin:20
    },
    media: {
        width: 322,
        height: 180
    }
};
function RowCard(props) {
    const {classes}= props
    return(
        <Card className={classes.card}>
            <CardMedia image='connetbitcoin.jpg' className={classes.media} />
       
       
        <CardContent>
<Typography>{props.description}</Typography>
        </CardContent>
    </Card>
    )
}
export default withStyles(styles)(RowCard);