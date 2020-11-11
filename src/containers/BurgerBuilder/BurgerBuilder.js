import React, {Component} from 'react'
import BuildControls from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Aux from "../../hoc/Auxillary"

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls></BuildControls>
            </Aux>
        )
    }
}

export default BurgerBuilder;