import React, { Component } from 'react'
import Aux from '../../hoc/Auxillary'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css'

class Layout extends Component{
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }


    render() {
        return (<Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
            <SideDrawer 
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}></SideDrawer>
            <main className={classes.Content}>{this.props.children}</main>
        </Aux>
    );
    }
}


export default Layout; 