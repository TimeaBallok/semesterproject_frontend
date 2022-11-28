import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbarcomp from "./components/NavbarComp.jsx";
import WelcomePage from "./components/WelcomePage.jsx";
import About from "./components/About.jsx";
import LogIn from "./components/LogIn.jsx";
import GetJoke from "./components/GetJoke.jsx";
import {Alert} from "react-bootstrap";
import facade from "./apiFacade.js";
import Footer from "./components/Footer.jsx";
import Side from "./components/Side.jsx";
import SearchRecipe from "./components/SearchRecipe.jsx";
import Bookmark from "./components/Bookmark.jsx";
import MealPlan from "./components/MealPlan.jsx";
import BMI from "./components/BMI.jsx";
import apiFacade from "./apiFacade.js";

function App() {
    //usestates her
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('It just works! ~Todd Howard');
    const [searchInput, setSearchInput] = useState("")

    const basicComplexSearchClick = (e) => {
        console.log(searchInput);
        apiFacade.fetchData("recipe/search/" + searchInput, (data) => console.log(data), "")
    }

    const changeHandler = (e) => {
        setSearchInput(e.target.value);
        console.log(e.target.value);
    }

    return (
        <BrowserRouter>

            <div className="row">
                <Navbarcomp/>
                <Side />

            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="search" element={<SearchRecipe onClick={basicComplexSearchClick} changeHandler={changeHandler}/>}/>
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