import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);
const myStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
    myblock:{
        backgroundColor:theme.palette.secondary,
        padding:"20px",
        border:"2px",
      
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
		transition: "3s",
		backgroundColor: "transparent",
	},
	menuButtonClose: {
		marginRight: theme.spacing(2),
		height: 35,
		width: 35,
		borderRadius: 10,
		transition: "3s",
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
function Component1() {

    // layout is an array of objects, see the demo for more complete usage
    const layouts = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
      ];
  return (
    
     <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div key="1" className={myStyles.myblock}>1</div>
        <div key="2" className={myStyles.myblock}>2</div>
        <div key="3" className={myStyles.myblock}>3</div>
      </ ResponsiveGridLayout>

   
  )
}

export default Component1