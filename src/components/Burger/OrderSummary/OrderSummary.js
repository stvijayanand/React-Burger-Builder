import React from 'react'
import Aux from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    let ingredientSummary = Object.keys(props.ingredients)
                        .map(igKey => {
                        return <li key={igKey}>
                            <span style={{textTransform: "capitalize"}}>{igKey}</span> : {props.ingredients[igKey]}
                            </li>
                        });


    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to check out?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
};

export default OrderSummary;