import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory  } from "react-router-dom";
const topMenuStyle =makeStyles(theme => ({

  container: {
    width: "100%",
    background: '#F2F2F2 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 20px #1717171A',
    height: '650px',
    position: "fixed",
    top: "3.7rem",
    padding: '0 30px',
    zIndex: 1001,
  },
  sideBarMenuContent: {
    borderRight: '2.5px solid rgba(0, 40, 85, .3)',
    height: '500px',
    borderRadius: 1.5,
    marginTop:"30px"
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    height: "30px",
    borderWidth: "1px",
    borderColor: "blue",
    backgroundColor: "gray",
    marginTop: "4rem",
    width: "8rem",

  },
  menuItemLabel: {
    marginLeft: "3rem",
    height: "2.5rem",
    color: theme.palette.primary.secondary,
    font: "normal normal bold 15px/20px Nunito",
    position: "relative",
    paddingTop: '1rem',
    cursor:"pointer",
    "&::after": {
      content: "'' ",
      height: 2,
      width: " 30%",
      backgroundColor: theme.palette.primary.main,
      position: "absolute",
      top: "40px",
      left: 0
    }
  },
  menuItemdisableLabel1:{
    marginTop: 10,
    marginLeft: "3rem",
    // height: "0.5rem",
    // cursor: 'pointer',
    // color: theme.palette.secondary.light,
    color:"#ADADAD",
    opacity:1,
    marginBottom: 0,
    font: " normal normal normal 12px/16px Nunito",
    cursor:"context-menu",
    // cursor: "pointer",
  },
  menuItemMediumLengthLabels: {
    marginLeft: "3rem",
    height: "2.5rem",
    color: theme.palette.primary.main,
    font: " normal normal bold 15px/20px Nunito",
    position: "relative",
    paddingTop: '1rem',
    cursor:"context-menu",
    "&::after": {
      content: " ''",
      height: 2,
      width: " 60%",
      backgroundColor: theme.palette.primary.main,
      // backgroundColor: theme.palette.background.default,
      position: "absolute",
      top: "40px",
      left: 0
    }
  },
  menuItemLongLengthLabels: {
    marginLeft: "3rem",
    height: "2.5rem",
    color: theme.palette.primary.main,
    font: " normal normal bold 15px/20px Nunito",
    position: "relative",
    paddingTop: '1rem',
    cursor:"context-menu",
    "&::after": {
      content: " ''",
      height: 2,
      width: " 70%",
      backgroundColor: theme.palette.primary.main,
      // backgroundColor: theme.palette.background.default,
      position: "absolute",
      top: "40px",
      left: 0
    }
  },

  menuItemLabel1: {
    marginTop: 10,
    marginLeft: "3rem",
    // height: "0.5rem",
    cursor: 'pointer',
    // color: theme.palette.secondary.light,
    color:"#161616",
    opacity:1,
    marginBottom: 0,
    font: " normal normal normal 12px/16px Nunito",
  },
  contTable: {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    flexWrap: "wrap",
    width: "400px"
  },
  perContWrapper: {
    display: "flex",
    alignItems: "center",
  },
  perCont: {
    marginRight: "90px",
  },
  

  hrBorders: {
    borderRight: "2.5px solid #002855",
    opacity: 0.3,
    borderRadius: 5,
    height: "69%",
    marginTop: 20
  },

  hrBorderZeroIndex:{
    borderRight: "2.5px solid #002855",
    opacity: 0.3,
    borderRadius: 5,
    height: "100%",
    marginTop: 68
  },
  hrBorderFirstIndex:{
    borderRight: "2.5px solid #002855",
    opacity: 0.3,
    borderRadius: 5,
    height: "90%",
    marginTop: 20,
  },
  hrBorderSecondIndex:{
    borderRight: "2.5px solid #002855",
    opacity: 0.3,
    borderRadius: 5,
    height: "87%",
    marginTop: 20
  },
  secondrowDivider:{
    borderRight: "2.5px solid #FFFF",
    opacity: 0.3,
    borderRadius: 5,
    height: "105%",
    marginTop: 89
  }

}));

function TopMenuBar(props) {
  const styles = topMenuStyle();
  const history = useHistory ();
  return (
    <div
    className={styles.container}
    onMouseLeave={() => props.showMenu && props.setShowMenu(false)}
  >
    <Grid container >
        <Grid item>
        <p className={styles.menuItemLabel} onClick={()=>history.push('/component1')}>
               
                </p>
            <p className={styles.menuItemLabel} onClick={()=>history.push('/component2')}>
            Component 2
            </p>
            <p className={styles.menuItemLabel} onClick={()=>history.push('/')}>
            Menu item 1
            </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>

        </Grid>
        <Divider className={ styles.secondrowDivider } />
        <Grid item>
        <p className={styles.menuItemLabel}  >
             Menu item 1   
                </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>

        </Grid>
        <Divider />
        <Grid item>
        <p className={styles.menuItemLabel}>
             Menu item 1   
                </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            
        </Grid>
        <Divider />
        <Grid item>
        <p className={styles.menuItemLabel}>
             Menu item 1   
                </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            <p className={styles.menuItemLabel}>
            Menu item 1
            </p>
            
        </Grid>

    </Grid>
    </div>
  )
}

export default TopMenuBar