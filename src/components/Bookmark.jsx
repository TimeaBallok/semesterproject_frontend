import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade.js";
import {Link} from "react-router-dom";
import logIn from "./LogIn.jsx";

function Bookmark({bookmarkedRecipeList, setBookmarkedRecipeList, fetchSingleRecipe}) {

    const currentUser = apiFacade.getUserName();
    const [toggle, setToggle] = useState(false)



    useEffect( () => {
        if (currentUser !== "")
             apiFacade.fetchData("recipe/bookmark/" + currentUser, (data) => {
                console.log("Greetings from FetchBookmarks:");
                console.log(data);
                setBookmarkedRecipeList(data)
                console.log("efter set liste")
                console.log(data)
            }, "")
    }, [toggle])

    const deleteBookmark = async (e) => {
        await apiFacade.deleteData("recipe/bookmark/" + currentUser + "/" + e.target.value, () => console.log("book was deleted"), () => {
        })
        setToggle(!toggle)
    }

    return (
        <div className="column middle">
            <h2>Bookmark</h2>
            <br/>
            {bookmarkedRecipeList.map((re, ci) => (
                <>
                    <div className="card">
                        <Link to={"/singleRecipe"} key={re.id}>

                            <div onClick={fetchSingleRecipe} id={re.id} className="row">
                                <div className="col">
                                    <img className="imgList2" src={re.image}/>
                                </div>
                                <div className="col-6">
                                    <p>{re.title}</p>
                                </div>
                                <div className="col">
                                    ⭐⭐⭐
                                </div>
                            </div>
                        </Link>
                        <div className="column">
                            <button onClick={deleteBookmark} value={re.id}>BEGONE</button>
                        </div>
                    </div>
                    <br/>
                </>
            ))}
        </div>
    );
}

export default Bookmark;