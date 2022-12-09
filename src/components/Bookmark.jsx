import React, {useState} from 'react';
import apiFacade from "../apiFacade.js";
import {Link} from "react-router-dom";

function Bookmark({bookmarkList, fetchSingleRecipe}) {

    const [recipe, setRecipe] = useState({})
    const recipeArray = []

    function getRecipe (id) {
        apiFacade.fetchData("recipe/" + id, (data) => {
            console.log("Data" + data);
             setRecipe(data)
             console.log("Efter set: " + recipe);
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

            {bookmarkList.map((bookmark) => (
                //getRecipe(bookmark.recipeId)
                <div>
                <h5>{getRecipe(bookmark.recipeId)}
                    {bookmark.recipeId}</h5>
                <h5>{bookmark.userName}</h5>
                </div>
            ))
            }
            {/*<div className="container">*/}
            {/*    {bookmarkList.map((bookmark) => (*/}
            {/*        getRecipe(bookmark.recipeId)))*/}
            {/*    }*/}
            {/*    {recipeArray.map((data) => (*/}
            {/*        <Link to={"/singleRecipe"} key={recipe.id}>*/}

            {/*            <div onClick={fetchSingleRecipe} id={recipe.id} className="row">*/}
            {/*                <div className="col">*/}
            {/*                    <img src={data.image}/>*/}
            {/*                </div>*/}
            {/*                <div className="col-6">*/}
            {/*                    <p>{recipe.title}</p>*/}
            {/*                </div>*/}
            {/*                <div className="col">*/}
            {/*                    3 out of 5 stars... kekw*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <br/>*/}
            {/*        </Link>*/}
            {/*    ))}*/}
            {/*</div>*/}




            {/*{bookmarkList.map((bookmark) =>*/}
            {/*    bookmark.userName)}*/}


        </div>
    );
}

export default Bookmark;