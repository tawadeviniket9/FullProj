import * as React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";
import TopMenuBar from './TopMenuBar';
import { useHistory } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	navbar: {
		backgroundColor: theme.palette.primary.main,
		"& > div": {
			minHeight: 60,
		},
		"& .MuiToolbar-gutters": {
			paddingLeft: 30,
			paddingRight: 30,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		height: 35,
		width: 35,
		borderRadius: 10,
		transition: "0.3s",
		backgroundColor: "transparent",
	},
	menuButtonClose: {
		marginRight: theme.spacing(2),
		height: 35,
		width: 35,
		borderRadius: 10,
		transition: "0.5s",
		backgroundColor: "#FFFFFF",
		transform: "rotate(90deg)",

		"&.MuiIconButton-root:hover": {
			// backgroundColor: "#FFFFFF",
            
		},

		"& img": {
			transform: "rotate(-45deg)",
		},
	},
	title: {
		display: "none",
		marginRight: 50,
		marginLeft: 5,
		font: "normal normal bold 21px/28px Nunito",
		color: "#FFFFFF",
		[theme.breakpoints.up("sm")]: {
			cursor: "pointer",
			display: "block",
		},
	},
	profileText: {
		...theme.typography.fontFamily,
		fontSize: "14px",
		paddingLeft: 10,
		// font: 'normal normal normal 14px/24px Nunito',
		color: "#FFFFFF",
		cursor: "pointer",
		opacity: 1,
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
			alignItems: "center",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	menuPaper: {
		width: "245px",
		height: "auto",
		marginTop: 33,
		borderRadius: 0,
		"& .MuiList-padding": {
			padding: 0,
		},
		boxShadow: "0px 3px 6px #00000029",
		border: "1px solid #BEBEBE",
		opacity: 1,
		backgroundColor: "#fff",
	},
	menuItem: {
		height: "3.7rem",
		color: theme.palette.common.black,
		opacity: 1,
		"&:hover": {
			opacity: 0.9,
		},
	},
	menuSpecial: {
		height: "4.5rem",
	},
	imgBox: {
		width: 47,
		height: 47,
		border: "1px solid #E3E3E3",
		background: "#f2f2f2 0% 0% no-repeat padding-box",
	},
	titleMenu: {
		...theme.typography.fontFamily,
		fontSize: "14px",
		fontWeight: "normal",
		color: theme.palette.common.black,
		opacity: 1,
	},
	email: {
		...theme.typography.fontFamily,
		fontSize: "12px",
		color: theme.palette.common.lightBlack,
		opacity: 1,
	},
	options: {
		...theme.typography.fontFamily,
		fontSize: "14px",
	},
	imgTop: {
		display: "flex",
		width: 30,
		height: 30,
	},
	avatar: {
		width: theme.spacing(3.2),
		height: theme.spacing(3.2),
	},
	notificationIcon: {
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
		},
	},
	iconOutlined: {
		height: 17,
		marginBottom: 2,
		color: "#fff",
	},
	large: {
		width: theme.spacing(6),
		height: theme.spacing(6),
	},
	logoImg: {
		// height:'1.6rem',
		height: "1.53rem",
		marginRight: 40,
		marginLeft: 5,
		cursor: "pointer",
	},
}));

export default function Header() {
    const classes = useStyles();
	// const history=useNavigate();
	const history = useHistory();
    const [showMenu,setShowMenu]=React.useState();
const handleToggle=()=>{
    setShowMenu(!showMenu)
}

const handleClick=()=>{

}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          
        {showMenu ? (
								<IconButton
									edge="start"
									className={classes.menuButtonClose}
									color="inherit"
									aria-label="close drawer"
									onMouseEnter={() => setShowMenu(false)}
								>
									{/* <img src="/images/close.svg" alt="toggler" /> */}
                                    <CloseIcon />
                                   
								</IconButton>
							) : (
								<IconButton
									edge="start"
									className={classes.menuButton}
									color="inherit"
									aria-label="open drawer"
									onMouseEnter={() => setShowMenu(true)}
									>
									{/* <img src="/images/toggler.svg" alt="toggler" /> */}
                                    <MenuIcon />
								</IconButton>
							)}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Home
          </Typography>
          <Button color="inherit" onClick={handleClick}>Login</Button>
        </Toolbar>
      </AppBar>
      {showMenu && <TopMenuBar showMenu={showMenu} />}
      
    </Box>
  );
}
