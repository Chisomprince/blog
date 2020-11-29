import React, { PureComponent } from 'react';
import Nav from './Nav';
import LeftNav from './LeftNav';
import SearchBar from './SearchBar';

class NavContainer extends PureComponent {
  state = {
    openLeftNav: false,
  }

  handleClickBurger = () => {
    this.setState({
      openLeftNav: !this.state.openLeftNav,
    });
  }

  render() {
    return (
      <nav>
        <Nav onClick={this.handleClickBurger} />
        <SearchBar />
        {this.state.openLeftNav ? <LeftNav /> : null}
      </nav>
    );
  }
}

export default NavContainer;