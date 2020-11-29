export const styles = {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    paddingLeft: '4vmin',
    paddingRight: '5vmin',
    display: 'flex',
    flexDirection: 'center',
    justifyContent: 'center',
    width: 'auto',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'left',
    zIndex: 400,
    marginTop: '56px',
  },

  leftNavLink: {
    paddingTop: 15,
    paddingBottom: 5,
    fontWeight: '300',
    '&:hover': {
      fontWeight: '500',
    },
    
  },
  navLi: {
            textDecoration: 'none',
      listStyle: 'none'
    },
};