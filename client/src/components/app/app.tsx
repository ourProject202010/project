import React from "react";
import LoginPage from "../../pages/login-page";
import ErrorHandler from "../errorHandler/errorHandler";
import Preloader from "../preloader/preloader";

const App = () => {
    return (
        <ErrorHandler>
            <LoginPage />
        </ErrorHandler>
    )
}

export default App;