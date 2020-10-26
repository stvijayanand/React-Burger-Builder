import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
                        .map(igKey => {
                         return [...Array(props.ingredients[igKey])].map((_, i) => 
                            <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
                        );
                    });



    return (<div className={classes.Burger}>
        <BurgerIngredient type="bread-top"></BurgerIngredient>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>);
}


export default Burger;