import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade.js";
import {Link} from "react-router-dom";

function Bookmark({bookmarkList, fetchSingleRecipe}) {

    const [recipe, setRecipe] = useState([])
    const recipeArray = []
    const [myBool, setMyBool] = useState(false);

    // function getRecipe (id) {
    //     apiFacade.fetchData("recipe/" + id, (data) => {
    //         console.log("Data" + data);
    //          setRecipe(data)
    //          console.log("Efter set: " + recipe);
    //     }, "")
    // }


    useEffect(() => {
        setRecipe([]);
        bookmarkList.map(async (bookmark) => {
            console.log(bookmark.recipeId)
            await apiFacade.fetchData("recipe/" + bookmark.recipeId, (data) => {
                console.log(data);
                setRecipe(recipe => [...recipe, data])
                console.log("efter set")
                console.log(data)
            }, "")
        })
        console.log(recipe)
    }, [bookmarkList])

    // useEffect( () => {
    //     console.log(recipe)
    // }, [myBool])


    return (
        <div className="column middle">
            <h2>Bookmark</h2>
            {/*<button onClick={() => setMyBool(!myBool)}>yo work plz</button>*/}

            {recipe.map((re, ci) => (
                <Link to={"/singleRecipe"} key={re.id}>

                    <div onClick={fetchSingleRecipe} id={re.id} className="row">
                        <div className="col">
                            <img src={re.image}/>
                        </div>
                        <div className="col-6">
                            <p>{re.title}</p>
                        </div>
                        <div className="col">
                            3 out of 5 stars... kekw
                        </div>
                    </div>
                    <br/>
                </Link>
            ))}


            {/*{recipe.map((recioe) => (*/}
            {/*    //getRecipe(bookmark.recipeId)*/}
            {/*    <div>*/}
            {/*    <h5>{getRecipe(bookmark.recipeId)}*/}
            {/*        {bookmark.recipeId}</h5>*/}
            {/*    <h5>{bookmark.userName}</h5>*/}
            {/*    </div>*/}
            {/*))*/}
            {/*}*/}
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