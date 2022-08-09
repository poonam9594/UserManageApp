import React from 'react';
import {AppBar} from '@material-ui/core';
import { Typography,Toolbar,Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <React.Fragment>
        <AppBar>
          <Toolbar>
            <Typography>
            <Button variant="contained" style={{color:"#fff",margin:"10px"}}>
              <Link to="/detail">
        Show Data
        </Link>
      </Button>
      <Button variant="contained" style={{color:"#fff"}} >
        <Link to="/contact">
        Contact Form
        </Link>
      </Button>
            </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar
