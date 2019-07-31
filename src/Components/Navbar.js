import React from 'react'
import classes from '../Styles/mainStyle'
import  clsx  from 'clsx'
import  AppBar from '@material-ui/core/AppBar'
import  Toolbar from '@material-ui/core/Toolbar'
import  IconButton  from '@material-ui/core/IconButton'
import CssBaseline from '@material-ui/core/CssBaseline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/'  
import  Typography  from '@material-ui/core/Typography'

export default props  => {
console.log( " setDrawerOpen : " + props.setDrawerOpen)
console.log( " drawerOpen : " + props.drawerOpen)
    return <React.Fragment>
        <CssBaseline/>
        <AppBar 
            position="fixed"
            className={
                clsx(classes.appBar, {
                    [classes.appBarShift]: props.drawerOpen,
                })
            }>
            <Toolbar>
                <IconButton 
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.handleDrawerOpen}
                    className={clsx(classes.menuButton, props.drawerOpen && classes.hide)}>
                        <FontAwesomeIcon icon={faBars}/>
                </IconButton>
                <Typography variant="h5" noWrap>
                    Budgetapp
                 </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>
}