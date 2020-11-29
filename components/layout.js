import React from 'react'

import Footer from './footer'
import styles from '../styles/Home.module.css'
import Nav from './nav/NavContainer'

function Layout(props){
    return(
        <div>
            <Nav/>  
            <div style={{marginTop:100}}>
               {props.children} 
            </div>
               
                
<Footer/>
            
        </div>
    )
}

export default Layout