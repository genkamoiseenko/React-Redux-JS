import React, { Component } from 'react'
import {selectLanguage} from "../../actions/languageSelection";
import {connect} from "react-redux";

import './ButtonBlock.scss'

class ButtonBlock extends Component {


    render() {
        const {checkAnswer, selectLanguage}=this.props

        return (
            <div className="ButtonBlock">
             <button className="accept" onClick={() => checkAnswer()}>OK</button>
            <button className="exit" onClick={() => selectLanguage()}>EXIT</button>
        </div>
        )
    }
}

const mapDispatchToProps = {
    selectLanguage
}

export default connect(null, mapDispatchToProps)(ButtonBlock)
