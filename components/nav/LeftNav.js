import  Link  from 'next/link';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { Divider } from '@material-ui/core';
import { styles } from './LeftNavStyles';
import Search from './SearchBar'

function LeftNav(props) {
  const { classes } = props;
  return (
    <div>
      
    
    <Hidden only={['md', 'lg', 'xl']}>
      <aside className={classes.root}>
        <ul className={classes.leftNavList}>
          {['Home','Home to', 'Jobs', 'About',].map((text) => (
            <li key={text} className={classes.navLi}>
              
            <Link href='/'>
                <Typography className={classes.leftNavLink} variant="h6" color="inherit" noWrap>{text}</Typography>
                
              </Link> <Divider className={classes.divider} light />
            </li>
          ))}
          <Search/>
        </ul>
        
      </aside>
    </Hidden> 
    </div>
  );
}


export default withStyles(styles)(LeftNav);