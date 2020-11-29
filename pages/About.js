import { Typography } from '@material-ui/core'
import Layout from '../components/layout'
import css from '../styles/about.module.css'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import Profile from '../components/cards/profileCard'

export default function About(){
    return(
        <Layout>
            <main className={css.main}>
                <div className={css.gridcontainer}> 
                
                     <Grid container spacing={4}>
                    <Grid item sm={12} xs={12} md={8} className={css.firstgrid}>
                      <div>
                          <Typography variant='h6'>About</Typography>
                        <Typography variant='body1'> Stacks node blog is developed by chisom prince to teach and explan
                                        some coding challenges and to provide solution to these challenges.
                        </Typography>
                        <Typography>Articles posted on Stacksnode home are all researched and originally authored by chisom prince
                                        through reveiw of related literature, blogs, Articles, repositories, etc.
                                        Articles posted on the how to section are articles from dev.to rest api. these are
                                         inspiring aricles to brighten your day and make your hacking easier.
                                                                            
                                        stacks node will continue to provide upto date article on web development and
                                         other technology related stacks


                                       
                        </Typography>
                        <Typography>
                             Stacks Jobs allows Employers and job seekers find each other, its provide upto date 
                             employment opportunities in the development world                  
                        </Typography>

                        <Typography>
                            To contribute, advertise, sell or publish articles on  to stacks node contact chisom prince 
                            via Email or Twitter
                        </Typography>
                            <Typography>  read and enjoy top articles on stacks you love,'just some codes'.</Typography>
                        <Typography>
                            Happy hacking
                        </Typography>
                            <Typography>
                                ...chisom
                        </Typography>
                      </div>
                    </Grid>
                        <Grid item sm={12} xs={12} md={4}>
<Profile/>
                       
                       
                            
            </Grid>
                        
                       
              </Grid>
                </div>
                
            </main>
      

                 
        
            
   </Layout>
      
    )
}