import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade.js";
import {Link} from "react-router-dom";

function Bookmark({bookmarkedRecipeList, fetchSingleRecipe}) {


    return (
        <div className="column middle">
            <h2>Bookmark</h2>

            {bookmarkedRecipeList.map((re, ci) => (
                <Link to={"/singleRecipe"} key={re.id}>

                    <div onClick={fetchSingleRecipe} id={re.id} className="row">
                        <div className="col">
                            <img className="imgList2" src={re.image}/>
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
        </div>
    );
}

export default Bookmark;