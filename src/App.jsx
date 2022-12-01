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
import RecipeList from "./components/RecipeList.jsx";
import SingleRecipe from "./components/SingleRecipe.jsx";

function App() {
    //usestates her
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('It just works! ~Todd Howard');
    const [dataFromServer, setDataFromServer] = useState({"results": []})
    const [singleRecipe, setSingleRecipe] = useState({"extendedIngredients": [
        {
            "id": 18371,
            "nameClean": "low sodium baking powder",
            "amount": 1.0,
            "unit": "teaspoon"
        }]})

    const fetchSingleRecipe = (e) => {
        console.log(e.currentTarget.id);
        apiFacade.fetchData("recipe/singleRecipe/" + e.currentTarget.id, (data) => {
            console.log(data);
            setSingleRecipe(data)
            console.log(singleRecipe.title);
        }, "")
    }


    return (
        <BrowserRouter>

            <div className="row">
                <Navbarcomp/>
                <Side />

            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="search" element={<SearchRecipe dataFromServer={dataFromServer} setDataFromServer={setDataFromServer}/>}>
                    <Route index element={<RecipeList fetchSingleRecipe={fetchSingleRecipe} dataFromServer={dataFromServer}/>}/>
                </Route>
                <Route path="singleRecipe" element={<SingleRecipe singleRecipe={singleRecipe}/>}/>
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