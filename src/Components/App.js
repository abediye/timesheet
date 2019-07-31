import React from 'react'

import  Drawer  from '@material-ui/core/Drawer'
import classes from '../Styles/mainStyle'
import CustomeDrawer from './Drawer'
import Navbar from './Navbar'
import { useTheme } from '@material-ui/core';
import  Hidden  from '@material-ui/core/Hidden'

export default props  => {
  const theme = useTheme()
  const { container } = props
  const [drawerOpen, setDrawerOpen ] = React.useState(false)


  const handleDrawerOpen = () => {
     setDrawerOpen(!drawerOpen)
  }

  return <div className="classes.root">
    <Navbar drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen}/>
    <CustomeDrawer drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen}/>
      
    
  </div>
}
