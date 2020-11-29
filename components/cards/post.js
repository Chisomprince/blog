import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles'
import Link from 'next/link'
import Cssstyle from '../../styles/post.module.css'
import Grid from '@material-ui/core/Grid'

const styles = {
    card:{
      display:'flex',
      maxHeight:150,
      margin:20,
      boxShadow: 'none',
     padding:0
          
    
    },
    media:{
        waxWidth: 200,
        backgroundSize: 'cover',
        padding:0
    },
    content:{
        flexGrow:1,
        padding: 0
    }
}
function Post(props){
    const {classes,description}= props
    return(
        <div>
            <Card className={classes.card}>         
               <Grid container>
                   <Grid item xs={8} sm={8} md={8}>
                        <CardContent className={classes.content}>
                    <Link href={props.href}>
                        <a>
                            <CardHeader title={props.title} subheader={props.date} className={classes.CardHeader}/>
                        </a>

                    </Link>
                  

                </CardContent>
                   </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                     <img src='/crush.jpg' className={Cssstyle.img} />   
                    </Grid>
               </Grid>
               
                
                
            <CardMedia image='connetbitcoin.jpg' className={classes.media} />     
            </Card>

           
        </div>
    )
}
export default withStyles(styles)(Post) 