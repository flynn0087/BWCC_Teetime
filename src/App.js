/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OAuth from "./pages/OAuth";
import Home from "./pages/Home";
import AvailWash from "./pages/AvailWash";
import Calendar from "./pages/Calendar";
import SuccessQR from "./pages/SuccessQR";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route path="/" component={Home} />
            {/* <Route path="/oauth" component={OAuth} />
            <Route path="/home" component={Home} />
            <Route path="/availwash" component={AvailWash} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/successqr" component={SuccessQR} /> */}
          </Switch>
        </Wrapper>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
