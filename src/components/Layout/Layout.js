import React from 'react'
import Aux from '../../hoc/Auxillary'
import classes from './Layout.css'

const Layout = (props) => {
    return (<Aux>
                <div>Toolbar, Side drawer, Backdrop</div>
                <main className={classes.Content}>{props.children}</main>
            </Aux>
        );
}


export default Layout; 