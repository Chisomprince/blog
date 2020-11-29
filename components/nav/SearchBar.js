import React from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden';
import { styles } from './SearchBarStyles';

function SearchBar(props) {
  const { classes } = props;
  return (
    <Hidden only={[ 'md', 'lg', 'xl']}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="search Stacks node"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    </Hidden>
  );
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { theme: true })(SearchBar);