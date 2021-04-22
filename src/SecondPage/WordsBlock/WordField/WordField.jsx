import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import './WordField.scss'

class WordField extends Component {
    
    onChange = (event) => {
        this.props.onChange(event.target.value);
    }

    onKeyDown = (e) => {
        e.preventDefault();
        this.props.checkAnswer()
    }

    render() {
        const {title, showHint, word, disabled, inputWord, isValidWords }=this.props;

        return (
            <form className="WordField" onSubmit={this.onKeyDown}>
                <div className="WordField__title">{title}</div>
                {disabled && <input className = "input--disabled" type = "text" disabled value={word} onChange={this.onChange}></input>}
                {!disabled && isValidWords &&  <input type = "text" onChange={this.onChange} value={inputWord}></input>}
                {!disabled && !isValidWords && showHint && (inputWord !== word) && <input className = "input--error" type = "text" onChange={this.onChange} value={inputWord}></input>}
                {!disabled && !isValidWords && (inputWord === word) && <input className = "input--accept" type = "text" onChange={this.onChange} value={inputWord}></input>}
                <div className="WordField__message">{!disabled && showHint && (inputWord !== word) && word}</div>      
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        isValidWords: state.secondPageReducers.isValidWords,
    }
}


export default connect(mapStateToProps) (WordField);

WordField.propTypes = {
    word: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    showHint: PropTypes.bool,
    onChange: PropTypes.func,
    inputWord: PropTypes.string,
    result: PropTypes.bool,
    checkAnswer: PropTypes.func,
}

