import React from 'react'
import BuildControls from '../BuildControls';
import classes from './BuildControl.css'

const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <div className={classes.Less}>Less</div>
            <div className={classes.More}>More</div>
        </div>
    );
}

export default BuildControl;