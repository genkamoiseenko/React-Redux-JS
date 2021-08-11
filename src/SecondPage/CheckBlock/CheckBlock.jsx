import React, { Component } from 'react'
import {connect} from "react-redux";
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import './CheckBlock.scss';

class CheckBlock extends Component {

    render() {

        const {failedCounter, passedCounter} = this.props;

        return (
            <div className = "CheckBlock">
                <div className = "CheckBlock__item CheckBlock__item--passed">
                    <CheckCircleIcon />
                    <div className = "CheckBlock__counter">{passedCounter}</div>
                </div>

                <div className = "CheckBlock__item">
                    <CancelRoundedIcon
                        className={"CheckBlock__failedIcon"}
                    />
                    <div className = "CheckBlock__counter">{failedCounter}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        passedCounter: state.secondPageReducers.passedCounter,
        failedCounter: state.secondPageReducers.failedCounter,
    }
}

export default connect(mapStateToProps) (CheckBlock);


// {/*<div className = "CheckBlock__name">Passed:</div>*/}
// {/*<div className = "CheckBlock__name">Failed:</div>*/}