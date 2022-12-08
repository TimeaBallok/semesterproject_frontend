import React, {useState} from 'react';
import apiFacade from "../apiFacade.js";
import {Link} from "react-router-dom";

function Bookmark({bookmarkList, fetchSingleRecipe, setErrorMessage}) {

    const [recipe, setRecipe] = useState({})
    const recipeArray = []

    function getRecipe (id) {
        apiFacade.fetchData("recipe/singleRecipe/" + id, (data) => {
            console.log(data);
            return data
            // console.log(singleRecipe.title);
        }, "")
    }

// const getRecipe = (id) => {
//     apiFacade.fetchData("recipe/singleRecipe/" + id, (data) => {
//          console.log(data);
//         setRecipe(data)
//         // console.log(singleRecipe.title);
//     }, "")
// }

    return (
        <div className="column middle">
            <h2>Test bookmark</h2>
            <div className="container">
                {bookmarkList.map((bookmark) =>
                    recipeArray.push(getRecipe(bookmark.recipeId)))
                }
                {recipeArray.map((recipe) => (
                    <Link to={"/singleRecipe"} key={recipe.id}>

                        <div onClick={fetchSingleRecipe} id={recipe.id} className="row">
                            <div className="col">
                                <img src={recipe.image}/>
                            </div>
                            <div className="col-6">
                                <p>{recipe.title}</p>
                            </div>
                            <div className="col">
                                3 out of 5 stars... kekw
                            </div>
                        </div>
                        <br/>
                    </Link>


                ))}
            </div>




            {/*{bookmarkList.map((bookmark) =>*/}
            {/*    bookmark.userName)}*/}


        </div>
    );
}

export default Bookmark;