import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import aux from '../../../hoc/Auxillary'

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }


    return (
        <aux>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%"></Logo>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </aux>
    );
}

export default SideDrawer;