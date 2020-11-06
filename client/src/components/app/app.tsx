import React from "react";
import { Switch, Route } from "react-router-dom";
import Preloader from "../preloader/preloader";
import SignIn from "../forms/form";
import HomePage from "../../pages/home-page";
import Header from "../header/header";

const App = () => {
    return (
        <>
        <Header/>
        <Switch>
            <Route exact path='/:where?' render={({match}) => {
                const {where} = match.params;
                return <HomePage path={where}/>
            }}/>
        </Switch>
            </>
    )
}

export default App;
