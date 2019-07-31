import React from 'react'

import classes from '../Styles/mainStyle'

import  Drawer  from '@material-ui/core/Drawer'
import  List  from '@material-ui/core/List'
import  ListItem  from '@material-ui/core/ListItem'
import  ListItemText  from '@material-ui/core/ListItemText'
import  Divider  from '@material-ui/core/Divider'
import { ListItemIcon, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons' 
import  {useTheme}  from '@material-ui/core/styles'


export default props  => {
    const theme = useTheme();
    return <Drawer 
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.drawerOpen}
        classes={{paper: classes.drawerPaper}}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.handleDrawerOpen}>
                    { theme.direction === 'ltr' ? <FontAwesomeIcon icon={faArrowAltCircleLeft} /> : <FontAwesomeIcon icons={faArrowAltCircleRight} />}
                </IconButton>
            </div>
        <Divider />
        <List>
            {
                ["Oversikt  ", "Inntekter", "Utgifter", "Budsjett", "Regnskap" ].map( (tag, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faChartBar} />
                        </ListItemIcon>
                        <ListItemText primary={tag}/>
                    </ListItem>
                 ) )
            }
        </List>
        <Divider />
        <List>
            {
                [ "Bolig", "Kjøretøy" ].map( (tag, index) => (
                    <ListItem button key={tag}>
                        <ListItemText primary={tag}/>
                    </ListItem>
                 ) )
            }
        </List>
        <Divider />

    </Drawer>
}