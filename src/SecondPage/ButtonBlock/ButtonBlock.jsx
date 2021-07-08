import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {selectLanguage} from "../../actions/languageSelection";
import {resetCounters} from "../../actions/resetCounters";
import {setIsValidWords} from "../../actions/resetIsValidWords";
import Dialog from '@material-ui/core/Dialog';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import logo from './logo.png'

import './ButtonBlock.scss';

class ButtonBlock extends Component {

    state = {
        open: false,
        messageIsOpen: false,
    }

    handleExitButton = () => {
        this.props.selectLanguage(null);
        this.props.resetCounters();
        this.props.setIsValidWords();
        this.props.history.push('/');
    }
    // //
    checkAnswerWithMassage = () => {
        const {checkAnswer} = this.props
        const {isValidWords} = this.props
        const {messageIsOpen} = this.state
        checkAnswer();

        if(isValidWords) {
            this.setState({
                open: true,
                messageIsOpen: true,
            })
        } else {
            if(messageIsOpen)
            this.setState({
                messageIsOpen: false,
            })
        }
        setTimeout (() => {
                this.handleCloseMessage()
            }, 1500 )
    }
        //

        //
        handleCloseMessage = () => {
            this.setState({
                open: false,
                messageIsOpen: false,
            })


        };

        render()
        {
            const {isValidWords} = this.props
            const {open, messageIsOpen} = this.state

            return (
                <div className="ButtonBlock">
                    <Button className="exit" variant="contained" size="medium" onClick={this.handleExitButton}>
                        EXIT
                    </Button>
                    <Button className="accept" variant="contained" size="medium" color="primary"
                            onClick={this.checkAnswerWithMassage}>
                        OK
                    </Button>
                    {isValidWords && messageIsOpen  && <Dialog
                        open={open}
                        onClose={this.handleCloseMessage}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <ThumbUpAltOutlinedIcon />
                        <p>Great!</p>
                    </Dialog>}



                </div>
            )
        }
    }


function mapStateToProps(state) {

    return {
        isValidWords: state.secondPageReducers.isValidWords,
    }
}

const mapDispatchToProps = {
    selectLanguage,
    resetCounters,
    setIsValidWords,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ButtonBlock))

