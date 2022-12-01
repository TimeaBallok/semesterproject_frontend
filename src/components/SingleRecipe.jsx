import React from 'react';

function SingleRecipe({singleRecipe}) {
    // let myIng;
    // console.log(singleRecipe.extendedIngredients)
    //
    // const click1 = () => {
    //     myIng = singleRecipe.extendedIngredients
    //     console.log(myIng)
    //     myIng.map((ing) =>{
    //         console.log(ing.nameClean)
    //     })
    // }
    return (
        <div className='column middle'>
            {/*<button onClick={click1}>click</button>*/}
            <h3>{singleRecipe.title}</h3>
            <p>{singleRecipe.readyInMinutes}</p>
            <img src={singleRecipe.image}/>



        </div>
    );
}

export default SingleRecipe;