import './App.css';
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from './routes';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Header from './components/Header/Header';
function App() {

  const theme = createTheme ({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "div[role=presentation] .MuiPopover-paper.MuiPaper-elevation8 ul .MuiCheckbox-root":
            {
              // color: `${userInfo.color ? userInfo.color : "#002855"}`,
              color: `${"#002855"}`,
            },
        },
      },
    },
    palette: {
      common: {
        lightBlack: "#707070",
        // <--- New pallette begins here --->
        red: "#DB2828",
        orange: "#F2711C",
        yellow: "#FBBD08",
        olive: "#B5CC18",
        green: "#21BA45",
        teal: "#00B5AD",
        blue: "#2185D0",
        violet: "#6435C9",
        purple: "#A333C8",
        pink: "#E03997",
        brown: "#A5673F",
        grey: "#767676",
        black: "#1B1C1D",
      },
      primary: {
        // main: `${userInfo.color ? userInfo.color : "#002855"}`,
        main: `${localStorage.getItem("primaryColor") ? localStorage.getItem("primaryColor") : "#002855"}`,

      },
      secondary: {
        light: "#707070",
        main: "#d32f2f",
        dark: "#d32f2f",
        contrastText: "#ffffff",
      },
      background: {
        default: "#fafafa",
      },
    },
    typography: {
      useNextVariants: true,
      fontFamily: ["Nunito"],
      tab: {
        fontSize: "0.86rem",
        color: "#1B1C1D",
        textTransform: "none",
        minWidth: 16,
        marginRight: 36,
        opacity: 0.6,
        lineHeight: 0,
      },
      // <--- New typography variants --->
      heading: {
        font: "normal normal bold 21px/28px Nunito",
      },
      subHeading: {
        font: "normal normal 600 16px/22px Nunito",
      },
      body: {
        font: "normal normal normal 14px/19px Nunito",
      },
      information: {
        font: "normal normal normal 12px/16px Nunito",
      },
      links: {
        font: "normal normal 300 14px/16px Nunito",
      },
    },
  });

  console.log("svisinvnisd",routes?.map((item,index)=>
    item.element
  ))
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
              <CssBaseline />

              {/* <ScrollToTop />
              <Header /> */}
              <Header />
              <Switch>
            
                {/* <Route path="/" element={<App />} /> */}
                <Route path="/component1" component={Component1} />
                <Route path="/component2" component={Component2} />
                    
                
              </Switch>
            </PersistGate>
            
    </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
