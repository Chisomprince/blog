import Link from 'next/link'
import Layout from '../../components/layout'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styles from '../../styles/post.module.css'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Jobs from '../../components/cards/adsCard'
import axios from 'axios'
function Post({post}) {
    
    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.gridcontainer}>
                     <Grid container spacing={4}>
                    <Grid item sm={12} xs={12} md={8} className={styles.firstgrid}>
                       <h1>{post.title}</h1>
                        <p>{post.description}</p> 
                            <ReactMarkdown escapeHtml source={post.body} /* transformImageUri={uri => uri.startsWith('http') ? uri : `${process.evn.REACT_IMAGE_BASE_URL}${uri}`} *//>
                    </Grid>
                        <Grid item sm={12} xs={12} md={4}>
                        <Jobs/>
                    </Grid>
              </Grid>
                </div>
                
            </main>
      

                 
        
            
   </Layout>
    )
}

export const getStaticPaths = async()=>{
    const articles = await axios.get(process.env.NODE_ENV === 'development' ? `${process.env.HOST}/blogs` : `https://stacksnodeblog.herokuapp.com/blogs`)

    return{
        paths: articles.data.map((posts)=>({
            params: {
                slug: posts.title,
            }
            })),
            fallback:false,
    }
}


export const getStaticProps = async ({params})=>{
    const {slug}=params
    const data = await axios.get(process.env.NODE_ENV === 'development' ? `${process.env.HOST}/blogs?title=${slug}` : `https://stacksnodeblog.herokuapp.com/blogs?title=${slug}`)
const post= data.data[0] 
console.log('data',post)


return{
  props:{
      post
  },  
  revalidate:1,
}

}


export default Post