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
import SideBar from "./components/SideBar.jsx";
import SearchRecipe from "./components/SearchRecipe.jsx";
import Bookmark from "./components/Bookmark.jsx";
import MealPlan from "./components/MealPlan.jsx";
import BMI from "./components/BMI.jsx";
import apiFacade from "./apiFacade.js";
import RecipeList from "./components/RecipeList.jsx";
import SingleRecipe from "./components/SingleRecipe.jsx";
import {Link} from "react-router-dom";
import AccessDenied from "./components/AccessDenied.jsx";

function App() {
    //usestates her
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('It just works! ~Todd Howard');
    const [dataFromServer, setDataFromServer] = useState({"results": []})
    const [singleRecipe, setSingleRecipe] = useState({})
    const [bookmarkedRecipeList, setBookmarkedRecipeList] = useState([{}])

    const fetchSingleRecipe = (e) => {
        // console.log(e.currentTarget.id);
        apiFacade.fetchData("recipe/singleRecipe/" + e.currentTarget.id, (data) => {
            // console.log(data);
            setSingleRecipe(data)
            // console.log(singleRecipe.title);
        }, "")
    }

    const fetchBookmarkedRecipeList = async (e) => {
        const currentUser = apiFacade.getUserName();
        if (currentUser != "")
            await apiFacade.fetchData("recipe/bookmark/" + currentUser, (data) => {
                console.log("Greetings from FetchBookmarks:");
                console.log(data);
                setBookmarkedRecipeList(data)
                console.log("efter set liste")
                console.log(data)
                // console.log(singleRecipe.title);
            }, "")
    }


    return (
        <BrowserRouter>

            <div className="row">
                <Navbarcomp loggedIn={loggedIn}/>
                <SideBar loggedIn={loggedIn} fetchBookmarks={fetchBookmarkedRecipeList}/>

                <Routes>
                    <Route path="/" element={<WelcomePage/>}/>
                    <Route path="search" element={facade.hasUserAccess('user', loggedIn) ?
                        <SearchRecipe dataFromServer={dataFromServer} setDataFromServer={setDataFromServer}/> : <AccessDenied/>}>
                        <Route index element={<RecipeList fetchSingleRecipe={fetchSingleRecipe}
                                                          dataFromServer={dataFromServer}/>}/>
                    </Route>
                    <Route path="singleRecipe" element={facade.hasUserAccess('user', loggedIn) ?
                        <SingleRecipe singleRecipe={singleRecipe}/> : <AccessDenied/>}/>
                    <Route path="bookmark"
                           element={facade.hasUserAccess('user', loggedIn) ? <Bookmark fetchSingleRecipe={fetchSingleRecipe} setErrorMessage={setErrorMessage}
                                                                                       bookmarkedRecipeList={bookmarkedRecipeList}/> : <AccessDenied/> }/>
                    <Route path="mealplan" element={facade.hasUserAccess('user', loggedIn) ? <MealPlan/> : <AccessDenied/>}/>
                    <Route path="bmi" element={<BMI/>}/>
                    <Route path="login" element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn}
                                                        setErrorMessage={setErrorMessage}/>}/>
                    <Route
                        path="*"
                        element={
                            <main style={{padding: "1rem"}}>
                                <p>There's nothing here!</p>
                            </main>}/>
                </Routes>
            </div>
            <Footer/>

            {/*<Alert className="mt-4" >Status: {errorMessage}</Alert>*/}
        </BrowserRouter>
    );
}

export default App;