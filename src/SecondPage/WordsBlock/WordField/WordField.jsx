import React, { Component } from 'react'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import './WordField.scss'

export default class WordField extends Component {

    onChange = (event) => {
        this.props.onChange(event.target.value);
    }

    onKeyDown = (e) => {
        e.preventDefault();
        this.props.handleCheckAnswer(e);
    }

    render() {
        const {title, showHint, word, disabled, inputWord }=this.props;

        return (
             <form className="WordField" onSubmit={this.onKeyDown}>
                <TextField
                    label={title}
                    variant="outlined"
                    type = "text"
                    disabled={disabled}
                    value={disabled ? word : inputWord}
                    onChange={this.onChange}
                    error={showHint}
                />
                <div className="WordField__message">{!disabled && showHint && (inputWord !== word) && word}</div>      
            </form>
        )
    }
}

WordField.propTypes = {
    word: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    showHint: PropTypes.bool,
    onChange: PropTypes.func,
    inputWord: PropTypes.string,
    handleCheckAnswer: PropTypes.func,
}




