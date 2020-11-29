import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import RowCard from '../components/cards/rowCard'
import axios from 'axios'

import Post from '../components/cards/post'
import Grid from '@material-ui/core/Grid'
import matter from 'gray-matter'
import Link from 'next/link'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Jobcard from '../components/cards/jobCard'
import Adscard from '../components/cards/adsCard'
import post from '../components/cards/post'

export default function Home({data,title,description}) {

  return (
    
    <Layout>
    <div className={styles.container}>
      <Head>
  <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to stacks node
        </h1>

        <p className={styles.description}>
          read top articles on stacks you love
          <code className={styles.code}>just some codes</code>
        </p>
       <div className={styles.gridcontainer}>
<Grid container spacing={4} justify='center'>
              <Grid item>

              </Grid>
              <Grid item >
                <Card style={{maxWidth:700}}>
                   {data.map((blog, i) => (
                 
                    <Link href={`/posts/${blog.title}`}>
                    <Post key={i} title={blog.title}  date={blog.date} href={`/posts/${blog.title}`}/>
                    </Link>
                   
                  
                ))}
                </Card>
               
                
              </Grid>
              <Grid item align='flex-start' >
<Jobcard/>
<Adscard/>
              </Grid>

</Grid>
            
      
        </div>
      </main>

     
    </div>
    

    
    </Layout>
  )
}



export async function getStaticProps({prams}){
const siteData = await import('../config.json')
   const res = await axios.get('http://localhost:1337/blogs'
   )
  const data = res.data.map((post) => ({title:post.title, date:post.date})) 
    console.log('data',data)
  return{
    
    props:{
      data,
      title: siteData.default.title,
      description: siteData.default.description,
     
    
    }
    
  }
}