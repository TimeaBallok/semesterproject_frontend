import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbarcomp from "./src/components/NavbarComp.jsx";
import WelcomePage from "./src/components/WelcomePage.jsx";
import About from "./src/components/About.jsx";
import LogIn from "./src/components/LogIn.jsx";
import GetJoke from "./src/components/GetJoke.jsx";
import {Alert} from "react-bootstrap";
import facade from "./src/apiFacade.js";
import Footer from "./src/components/Footer.jsx";
import Side from "./src/components/Side.jsx";
import SearchRecipe from "./src/components/SearchRecipe.jsx";
import Bookmark from "./src/components/Bookmark.jsx";
import MealPlan from "./src/components/MealPlan.jsx";
import BMI from "./src/components/BMI";

function App() {
    //usestates her
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('It just works! ~Todd Howard');


    return (
        <BrowserRouter>

            <div className="row">
                <Navbarcomp/>
                <Side />

            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="search" element={<SearchRecipe/>}/>
                <Route path="bookmark" element={<Bookmark/>}/>
                <Route path="mealplan" element={<MealPlan/>}/>
                <Route path="bmi" element={<BMI/>}/>
                <Route path="about" element={<SearchRecipe/>}/>
                <Route path="login" element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage}/>}/>
                <Route path="joke" element={facade.hasUserAccess('user', loggedIn) ? <GetJoke setErrorMessage={setErrorMessage} /> : <h4>Get back to work you lazy dog!</h4>}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>}/>
            </Routes>
            </div>
                <Footer />

            {/*<Alert className="mt-4" >Status: {errorMessage}</Alert>*/}
        </BrowserRouter>
    );
}

export default App;