import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

//icon

import Avatar from "@material-ui/core/Avatar";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";


const styles = {
    card: {
        maxWidth: 322
    },
    media: {
        width: 322,
        height: 322
},
    header: {
        textAlign: 'center'
 },
 action:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center'
 }
};
function Profile ({ classes }){
    return(
        <Card className={classes.card}>
        <CardMedia
            className={classes.media}
            image="profile.jpg"
            title="chisom prince"
        />
        <CardHeader
            className={classes.header}
            title=" chisom prince"
                subheader="fullstack developer"
        />

            <Link href="mailto:chisomprince17@gmail.com" >
                <a rel='noreferrer' target='_blank'>
                   <Typography align='center'>chisomprince.netlify.app</Typography> 
                </a>
            </Link>
<CardActions className={classes.action}>
                <Link href="mailto:chisomprince17@gmail.com" >
                    <a rel='noreferrer' target='_blank'>
                        <MailIcon />
                    </a>
                </Link>

                <Link href="https://twitter.com/Chisomprince10" >
                    <a rel='noreferrer' target='_blank'>
                        <TwitterIcon className={classes.text} />
                    </a>
                </Link>
                <Link href="https://linkedin.com/in/chisom-moses-3a9b7315b" >
                    <a rel='noreferrer' target='_blank'>
                        <LinkedInIcon className={classes.text} />
                    </a>
                </Link>
</CardActions>

    </Card>
    )
}
   
export default withStyles(styles)(Profile);