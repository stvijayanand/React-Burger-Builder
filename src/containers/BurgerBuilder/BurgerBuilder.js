import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger';
import Aux from "../../hoc/Auxillary"

class BurgerBuilder extends Component{
    render() {
        return(
            <Aux>
                <Burger></Burger>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;